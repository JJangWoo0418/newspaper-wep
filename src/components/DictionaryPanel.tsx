"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./DictionaryPanel.module.css";

type BookmarkItem = {
    word: string;
    meanings: string[];
};

export default function DictionaryPanel() {
    const [word, setWord] = useState("endeavor");
    const [meaning, setMeaning] = useState<string[]>([
        "..하려고 노력하다, 애쓰다",
        "노력, 시도",
    ]);

    const [bookmarks, setBookmarks] = useState<BookmarkItem[]>([]);

    // 처음 마운트 시 localStorage에서 북마크 불러오기
    useEffect(() => {
        if (typeof window === "undefined") return;
        const stored = window.localStorage.getItem("newsPaperBookmarks");
        if (stored) {
            try {
                const parsed = JSON.parse(stored) as BookmarkItem[];
                setBookmarks(parsed);
            } catch (e) {
                console.error(e);
            }
        }
    }, []);

    const normalizedWord = word.trim().toLowerCase();

    const isBookmarked = useMemo(
        () => !!normalizedWord && bookmarks.some((b) => b.word.toLowerCase() === normalizedWord),
        [bookmarks, normalizedWord]
    );

    const saveBookmarks = (next: BookmarkItem[]) => {
        setBookmarks(next);
        if (typeof window !== "undefined") {
            window.localStorage.setItem("newsPaperBookmarks", JSON.stringify(next));
        }
    };

    const handleBookmark = () => {
        const displayWord = word.trim();
        if (!displayWord) return;

        if (isBookmarked) {
            const next = bookmarks.filter(
                (b) => b.word.toLowerCase() !== normalizedWord
            );
            saveBookmarks(next);
        } else {
            const next: BookmarkItem[] = [
                ...bookmarks,
                { word: displayWord, meanings: meaning },
            ];
            saveBookmarks(next);
        }
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmed = word.trim();
        if (!trimmed) return;
        // TODO: 여기서 사전 API 호출 → setMeaning([...])
    };

    return (
        <div className={styles.wrapper}>
            {/* 검색창 */}
            <form className={styles.searchBox} onSubmit={handleSearch}>
                <span className={styles.searchIcon}>🔍</span>
                <input
                    className={styles.searchInput}
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                    placeholder="검색할 단어를 입력하세요"
                />
            </form>

            {/* 결과 박스 */}
            <div className={styles.resultCard}>
                <div className={styles.resultHeader}>
                    <div className={styles.word}>{word}</div>
                    <button
                        type="button"
                        className={`${styles.bookmarkButton} ${isBookmarked ? styles.bookmarkActive : ""
                            }`}
                        onClick={handleBookmark}
                        aria-label="단어 북마크"
                    >
                        {isBookmarked ? "★" : "☆"}
                    </button>
                </div>

                <ol className={styles.meaningList}>
                    {meaning.map((m, idx) => (
                        <li key={idx}>{m}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
