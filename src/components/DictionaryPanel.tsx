"use client";

import { useState } from "react";
import styles from "./DictionaryPanel.module.css";

export default function DictionaryPanel() {
    const [word, setWord] = useState("");
    const [meaning, setMeaning] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);

    const search = async () => {
        if (!word.trim()) return;

        setLoading(true);
        setMeaning([]);

        const res = await fetch("/api/dictionary", {
            method: "POST",
            body: JSON.stringify({ word }),
        });

        const data = await res.json();

        // meaning을 줄바꿈 기준 배열로 저장
        setMeaning(data.meaning.split("\n"));
        setBookmarked(false);
        setLoading(false);
    };

    return (
        <div className={styles.panel}>
            <h3 className={styles.title}>단어 사전</h3>

            <div className={styles.searchBox}>
                <input
                    value={word}
                    placeholder="단어 입력"
                    onChange={(e) => setWord(e.target.value)}
                />
                <button onClick={search}>검색</button>
            </div>

            {loading && <div className={styles.loading}>🔄 찾는 중...</div>}

            {/* 단어 카드 */}
            {meaning.length > 0 && (
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <span className={styles.word}>{word}</span>

                        {/* 북마크 버튼 */}
                        <button
                            className={styles.bookmarkIcon}
                            onClick={() => setBookmarked((prev) => !prev)}
                        >
                            {bookmarked ? "★" : "☆"}
                        </button>
                    </div>

                    <ol className={styles.meaningList}>
                        {meaning.map((m, i) => (
                            <li key={i}>{m}</li>
                        ))}
                    </ol>
                </div>
            )}
        </div>
    );
}
