"use client";

import { useMemo, useState, useEffect } from "react";
import styles from "./mainPage.module.css";
import MainHeader from "@/components/MainHeader";
import CategoryFilter from "@/components/CategoryFilter";
import NewsCard from "@/components/NewsCard";
import type { Article } from "@/types/article";

const CATEGORIES = ["전체", "세계", "정치", "경제", "건강", "연예", "스포츠", "문화"];

export default function MainPage() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [activeCategory, setActiveCategory] = useState<string>("전체");
    const [searchText, setSearchText] = useState<string>("");

    // ⭐ API에서 기사 불러오기
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/news", { cache: "no-store" });

                if (!res.ok) {
                    throw new Error("뉴스 데이터를 가져오지 못했습니다.");
                }

                const data = await res.json();
                setArticles(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // 🔍 필터 & 검색
    const filteredNews: Article[] = useMemo(() => {
        return articles.filter((n) => {
            const matchCategory =
                activeCategory === "전체" || n.category === activeCategory;

            const keyword = searchText.trim().toLowerCase();
            const matchSearch =
                keyword.length === 0 ||
                n.title.toLowerCase().includes(keyword) ||
                n.summary.toLowerCase().includes(keyword) ||
                (n.source?.toLowerCase().includes(keyword) ?? false);

            return matchCategory && matchSearch;
        });
    }, [articles, activeCategory, searchText]);

    if (loading) {
        return <div className={styles.loading}>뉴스 불러오는 중...</div>;
    }

    if (error) {
        return <div className={styles.error}>에러 발생: {error}</div>;
    }

    return (
        <div className={styles.wrapper}>
            <MainHeader />

            <main className={styles.content}>
                {/* 검색 영역 */}
                <div className={styles.searchRow}>
                    <div className={styles.searchBox}>
                        <span className={styles.searchIcon}>🔍</span>
                        <input
                            className={styles.searchInput}
                            placeholder="검색어를 입력하세요"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    </div>
                    <button className={styles.menuButton} aria-label="메뉴" />
                    <button className={styles.profileButton} aria-label="프로필" />
                </div>

                {/* 카테고리 필터 */}
                <CategoryFilter
                    categories={CATEGORIES}
                    active={activeCategory}
                    onSelect={setActiveCategory}
                />

                {/* 기사 목록 */}
                <section className={styles.grid}>
                    {filteredNews.map((article) => (
                        <NewsCard key={article.id} article={article} />
                    ))}

                    {filteredNews.length === 0 && (
                        <div className={styles.emptyText}>
                            해당 조건에 맞는 기사가 없습니다.
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}
