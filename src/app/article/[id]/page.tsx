"use client";

import Image from "next/image";
import { useMemo } from "react";
import styles from "./articleDetail.module.css";
import DictionaryPanel from "@/components/DictionaryPanel";
import { useState } from "react";

// 나중에 API로 바꿀 예정이므로, 지금은 더미 데이터
const MOCK_ARTICLES = [
    {
        id: "1",
        category: "경제",
        title: "Why crypto is melting down and stocks keep falling",
        reporter: "송고 기자 · 14시간 전",
        date: "2025/07/03",
        imageUrl: "/images/sample-news-image2.png",
        content: `Bitcoin late Monday had dipped below $90,000 for the first time in
seven months before paring some losses early Tuesday. Investors in recent
weeks have increasingly shunned risky assets like AI stocks and crypto. Not
helping: uncertainty about whether the Federal Reserve will cut interest rates
next month. The risk-off attitude is weighing on bitcoin, a highly speculative
and volatile investment.

In Wall Street terms, bitcoin is in a bear market — when a price falls
more than 20% from a recent peak. Bitcoin has shed more than
$600 billion in market value during its tumble, according to
CoinMarketCap data.

"Bitcoin’s pullback is part of a broader shift in risk sentiment," said
Haider Rafique, global managing partner at OKX, a crypto exchange.`,
        related: [
            "Why bitcoin is trending",
            "Billionaire Bill Ackman sparks controversy with dating advice",
            "Why GameStop is trending",
            "The last-ever penny was minted today in Philadelphia",
        ],
    },
];

type Article = (typeof MOCK_ARTICLES)[number];

interface ArticlePageProps {
    params: { id: string };
}

export default function ArticleDetailPage({ params }: ArticlePageProps) {
    const article: Article | undefined = useMemo(
        () => MOCK_ARTICLES.find((a) => a.id === params.id) ?? MOCK_ARTICLES[0],
        [params.id]
    );

    if (!article) {
        return (
            <div className={styles.notFound}>
                해당 기사를 찾을 수 없습니다.
            </div>
        );
    }

    const [lang, setLang] = useState("ko"); // 기본: 한글

    const toggleLang = () => {
        setLang((prev) => (prev === "ko" ? "en" : "ko"));
    };

    return (
        <div className={styles.pageWrapper}>
            {/* 상단 로고 & 뒤로가기 아이콘 영역 */}
            <header className={styles.topBar}>
                <button
                    className={styles.backButton}
                    onClick={() => history.back()}
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

            {/* 메인 그리드 레이아웃 */}
            <main className={styles.mainGrid}>
                {/* 좌측 상단: 기사 이미지 카드 */}
                <section className={styles.articleCard}>
                    <div className={styles.articleImageWrapper}>
                        <Image
                            src={article.imageUrl}
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

                <section className={styles.relatedCard}>
                    <h2 className={styles.relatedTitle}>다른 기사</h2>
                    <ul className={styles.relatedList}>
                        {article.related.map((title, idx) => (
                            <li key={idx} className={styles.relatedItem}>
                                {title}
                                {idx !== article.related.length - 1 && (
                                    <div className={styles.relatedDivider} />
                                )}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* 좌측 하단: 기사 본문 카드 */}
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

                <section className={styles.dictionaryCard}>
                    <DictionaryPanel />
                </section>
            </main>
        </div>
    );
}