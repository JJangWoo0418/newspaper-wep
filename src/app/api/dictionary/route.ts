// src/app/api/dictionary/route.ts
import { NextResponse } from "next/server";

const FREE_DICT_BASE = "https://api.dictionaryapi.dev/api/v2/entries/en";

const NAVER_CLIENT_ID = process.env.NAVER_CLIENT_ID;
const NAVER_CLIENT_SECRET = process.env.NAVER_CLIENT_SECRET;

// 파파고 번역 (영 → 한) 함수 (키 없으면 그냥 영어 그대로 반환)
async function translateToKo(text: string): Promise<string> {
    if (!NAVER_CLIENT_ID || !NAVER_CLIENT_SECRET) {
        // 파파고 키 없으면 그냥 영어 문장 그대로 반환
        return text;
    }

    const params = new URLSearchParams();
    params.append("source", "en");
    params.append("target", "ko");
    params.append("text", text);

    const res = await fetch("https://openapi.naver.com/v1/papago/n2mt", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Naver-Client-Id": NAVER_CLIENT_ID,
            "X-Naver-Client-Secret": NAVER_CLIENT_SECRET,
        },
        body: params.toString(),
    });

    if (!res.ok) {
        console.error("Papago error:", res.status, res.statusText);
        return text;
    }

    const data = await res.json();
    // 응답 구조: { message: { result: { translatedText: "..." } } }
    return data?.message?.result?.translatedText ?? text;
}

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const word = searchParams.get("word");

    if (!word) {
        return NextResponse.json(
            { error: "word query parameter is required" },
            { status: 400 }
        );
    }

    try {
        const dictRes = await fetch(`${FREE_DICT_BASE}/${encodeURIComponent(word)}`);
        if (!dictRes.ok) {
            return NextResponse.json(
                { error: "No definition found" },
                { status: 404 }
            );
        }

        const data = await dictRes.json();

        const first = data[0];
        const phonetic = first?.phonetics?.[0]?.text ?? "";
        const meanings = first?.meanings ?? [];

        // 영어 정의 여러 개 추출
        const flatDefinitions: string[] = [];
        const partsOfSpeech: string[] = [];

        meanings.forEach((m: any) => {
            if (m.partOfSpeech) partsOfSpeech.push(m.partOfSpeech);
            (m.definitions || []).forEach((d: any) => {
                if (d.definition) flatDefinitions.push(d.definition);
            });
        });

        // 너무 많으면 3개 정도만
        const topDefinitions = flatDefinitions.slice(0, 3);
        const joinedForTrans = topDefinitions.join("\n");

        // 한국어 번역 (또는 키 없으면 영어 그대로)
        const translatedKo = await translateToKo(joinedForTrans);

        // 번역 결과를 줄바꿈으로 다시 쪼개서 배열로
        const meaningsKo = translatedKo.split("\n").map((s) => s.trim()).filter(Boolean);

        return NextResponse.json({
            word: first?.word ?? word,
            phonetic,
            partsOfSpeech: Array.from(new Set(partsOfSpeech)),
            meaningsEn: topDefinitions,
            meaningsKo,
        });
    } catch (err) {
        console.error("❌ /api/dictionary error:", err);
        return NextResponse.json(
            { error: "Server error" },
            { status: 500 }
        );
    }
}
