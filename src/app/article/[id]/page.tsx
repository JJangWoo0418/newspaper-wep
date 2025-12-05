"use client";

import Image from "next/image";
import { useState, use, useEffect, } from "react";
import styles from "./articleDetail.module.css";
import DictionaryPanel from "@/components/DictionaryPanel";
import type { Article } from "@/types/article";
import { useRouter } from "next/navigation";
import { title } from "process";

interface ArticlePageProps {
    params: Promise<{ id: string }>;
}

export default function ArticleDetailPage({ params }: ArticlePageProps) {

    const router = useRouter();

    const { id } = use(params);

    const [article, setArticle] = useState<Article | null>(null)


    // 언어 토글
    const [lang, setLang] = useState("ko"); // 기본: 한글

    const toggleLang = () => {
        setLang((prev) => (prev === "ko" ? "en" : "ko"));
    };

    const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);

    useEffect(() => {
        async function load() {
            const res = await fetch("/api/news");
            const list: Article[] = await res.json();
    
            // 현재 기사 찾기
            const found = list.find((a) => a.id === id);
            setArticle(found ?? null);
    
            if (found) {
                // 현재 기사 제외한 나머지 목록
                const others = list.filter((a) => a.id !== found.id);
    
                // 랜덤으로 섞기
                const shuffled = [...others].sort(() => Math.random() - 0.5);
    
                // 5개만 관련 기사로 저장
                setRelatedArticles(shuffled.slice(0, 5));
            }
        }
        load();
    }, [id]);

    if (!article) return <div>해당 기사를 찾을 수 없습니다</div>;

    return (
        <div className={styles.pageWrapper}>
            {/* 상단 로고 & 뒤로가기 & 언어 변경 */}
            <header className={styles.topBar}>
                <button
                    className={styles.backButton}
                    onClick={() => router.push("/main")}
                    aria-label="뒤로가기"
                >
                    ←
                </button>

                <div className={styles.logoArea}>
                    <Image
                        src="/images/NewsPaper-Logo2.png"
                        alt="NewsPaper Logo"
                        width={200}
                        height={50}
                    />
                </div>

                <div className={styles.topRightSpace} />

                <button
                    className={styles.langButton}
                    onClick={toggleLang}
                    aria-label="언어 변경"
                >
                    {lang === "ko" ? "한글" : "English"}
                </button>
            </header>

            {/* 메인 레이아웃 */}
            <main className={styles.mainGrid}>
                {/* 좌측 상단: 기사 이미지 & 메타 */}
                <section className={styles.articleCard}>
                    <div className={styles.articleImageWrapper}>
                        <Image
                            src={article.imageUrl ?? "/images/no-image.png"}
                            alt={article.title}
                            fill
                            className={styles.articleImage}
                        />
                    </div>

                    <div className={styles.articleMetaRow}>
                        <span className={styles.categoryTag}>{article.category}</span>
                    </div>

                    <h1 className={styles.articleTitle}>{article.title}</h1>

                    <div className={styles.articleInfoRow}>
                        <span className={styles.articleReporter}>{article.reporter}</span>
                        <span className={styles.articleDate}>{article.date}</span>
                    </div>
                </section>

                {/* 우측 상단: 다른 기사 목록 */}
                <section className={styles.relatedCard}>
                    <h2 className={styles.relatedTitle}>다른 기사</h2>

                    <ul className={styles.relatedList}>
                        {relatedArticles.map((a, idx) => (
                            <li
                                key={a.id}
                                className={styles.relatedItem}
                                onClick={() => router.push(`/article/${a.id}`)}
                            >
                                {a.title}

                                {idx < relatedArticles.length - 1 && (
                                    <div className={styles.relatedDivider} />
                                )}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* 좌측 하단: 기사 본문 */}
                <section className={styles.bodyCard}>
                    <p className={styles.bodyText}>
                        {article.content.split("\n").map((para, idx) => (
                            <span key={idx}>
                                {para}
                                <br />
                                <br />
                            </span>
                        ))}
                    </p>
                </section>

                {/* 우측 하단: 영어 사전 패널 */}
                <section className={styles.dictionaryCard}>
                    <DictionaryPanel />
                </section>
            </main>
        </div>
    );
}
