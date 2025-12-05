import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
    const { word } = await req.json();

    const prompt = `
다음 영어 단어를 한국어 학습자용 사전 형식으로 설명해줘.

단어: ${word}

출력 형식은 반드시 아래 형식을 따라라:

1. (품사) 한국어 뜻
2. (품사) 한국어 뜻
`;

    const response = await client.responses.create({
        model: "gpt-4.1-mini",
        input: prompt,
    });

    const meaning = response.output_text;

    return NextResponse.json({ meaning });
}
