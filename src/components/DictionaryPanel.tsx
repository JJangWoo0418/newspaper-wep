"use client";

import { useEffect, useState } from "react";
import styles from "./DictionaryPanel.module.css";

type DictResult = {
    word: string;
    meaningsKo: string[];
};

export default function DictionaryPanel() {
    const [query, setQuery] = useState("");
    const [result, setResult] = useState<DictResult | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    // ⭐ 북마크 목록
    const [bookmarks, setBookmarks] = useState<string[]>([]);

    // ⭐ 북마크 추가/삭제
    const toggleBookmark = () => {
        if (!result) return;

        if (bookmarks.includes(result.word)) {
            setBookmarks(bookmarks.filter((w) => w !== result.word));
        } else {
            setBookmarks([...bookmarks, result.word]);
        }
    };

    const isBookmarked = result && bookmarks.includes(result.word);

    // 🔁 실시간 자동 검색 (0.4초 디바운스)
    useEffect(() => {
        const trimmed = query.trim();

        if (!trimmed) {
            setResult(null);
            setError(null);
            return;
        }

        const timer = setTimeout(async () => {
            try {
                setLoading(true);
                setError(null);

                const res = await fetch(
                    `/api/dictionary?word=${encodeURIComponent(trimmed)}`
                );

                if (!res.ok) {
                    const data = await res.json().catch(() => ({}));
                    setError(data.error || "뜻을 찾을 수 없습니다.");
                    setResult(null);
                    return;
                }

                const data = await res.json();

                const mapped: DictResult = {
                    word: data.word,
                    meaningsKo:
                        Array.isArray(data.meaningsKo) && data.meaningsKo.length > 0
                            ? data.meaningsKo
                            : ["뜻을 가져오지 못했습니다."],
                };

                setResult(mapped);
            } catch (err) {
                console.error(err);
                setError("사전을 불러오는 중 오류가 발생했습니다.");
                setResult(null);
            } finally {
                setLoading(false);
            }
        }, 400);

        return () => clearTimeout(timer);
    }, [query]);

    return (
        <div className={styles.wrapper}>
            {/* 검색창 */}
            <div className={styles.searchBox}>
                <span className={styles.searchIcon}>🔍</span>
                <input
                    className={styles.searchInput}
                    placeholder="영어 단어 입력 (예: endeavor)"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

            {error && <div className={styles.error}>{error}</div>}
            {loading && !error && <div className={styles.loading}>검색 중...</div>}

            {/* 결과 카드 */}
            {result && !error && (
                <div className={styles.resultCard}>
                    {/* 상단: 단어 + 북마크 버튼 */}
                    <div className={styles.cardHeader}>
                        <div className={styles.word}>{result.word}</div>

                        <button
                            className={styles.bookmarkButton}
                            onClick={toggleBookmark}
                            aria-label="북마크 추가"
                        >
                            {isBookmarked ? "⭐" : "☆"}
                        </button>
                    </div>

                    {/* 뜻 리스트 */}
                    <ol className={styles.meaningList}>
                        {result.meaningsKo.map((meaning, idx) => (
                            <li key={idx}>{meaning}</li>
                        ))}
                    </ol>
                </div>
            )}
        </div>
    );
}
