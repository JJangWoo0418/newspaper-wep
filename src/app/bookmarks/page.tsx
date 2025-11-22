// src/app/bookmarks/page.tsx
"use client";

import { useEffect, useState } from "react";
import styles from "./bookmarksPage.module.css";

type BookmarkItem = {
    word: string;
    meanings: string[];
};

export default function BookmarksPage() {
    const [items, setItems] = useState<BookmarkItem[]>([]);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const stored = window.localStorage.getItem("newsPaperBookmarks");
        if (stored) {
            try {
                const parsed = JSON.parse(stored) as BookmarkItem[];
                setItems(parsed);
            } catch (e) {
                console.error(e);
            }
        }
    }, []);

    const handleBack = () => {
        history.back();
    };

    const goQuiz = () => {
        // TODO: 퀴즈 페이지로 이동하도록 나중에 라우팅 추가
        // 예: router.push("/quiz");
        alert("퀴즈 페이지는 나중에 연결할게!");
    };

    return (
        <div className={styles.pageWrapper}>
            {/* 상단 바 */}
            <header className={styles.header}>
                <button
                    className={styles.backButton}
                    onClick={handleBack}
                    aria-label="뒤로가기"
                >
                    ←
                </button>

                <h1 className={styles.title}>단어 북마크</h1>

                <button className={styles.quizButton} onClick={goQuiz}>
                    퀴즈
                </button>
            </header>

            <div className={styles.divider} />

            {items.length === 0 ? (
                <div className={styles.emptyText}>
                    아직 북마크한 단어가 없어요.
                    <br />
                    기사 페이지에서 단어 옆의 ★ 버튼을 눌러보세요!
                </div>
            ) : (
                <main className={styles.grid}>
                    {items.map((item) => (
                        <article key={item.word} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <span className={styles.cardWord}>{item.word}</span>
                                <span className={styles.cardStar}>★</span>
                            </div>

                            <ol className={styles.cardMeaningList}>
                                {item.meanings.map((m, idx) => (
                                    <li key={idx}>{m}</li>
                                ))}
                            </ol>
                        </article>
                    ))}
                </main>
            )}
        </div>
    );
}
