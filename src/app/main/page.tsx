// src/app/main/page.tsx
import styles from "./mainPage.module.css";
import MainHeader from "../../components/MainHeader";
import CategoryFilter from "../../components/CategoryFilter";
import NewsCard from "../../components/NewsCard";
import Image from "next/image";

const CATEGORIES = [
    "전체",
    "세계",
    "정치",
    "경제",
    "건강",
    "연예",
    "스포츠",
    "과학",
];

const MOCK_NEWS = [
    {
        id: 1,
        category: "정치",
        title:
            "[송보] 홍대통령, 광주·무안 공항이전 갈등에 \"대통령실에 TF 구성\"",
        reporter: "정병일 기자 · 실시간전",
        date: "2025/07/03",
        imageUrl: "/images/news-sample-1.jpg", // 네가 나중에 교체
    },
    {
        id: 2,
        category: "스포츠",
        title:
            "이정후, 4경기 만의 멀티로 부진 탈출 신호탄…불넷도 1개 골라",
        reporter: "송고 기자 · 14시간 전",
        date: "2025/07/03",
        imageUrl: "/images/sample-news-image.png",
    },
    {
        id: 3,
        category: "정치",
        title:
            "[송보] 홍대통령, 광주·무안 공항이전 갈등에 \"대통령실에 TF 구성\"",
        reporter: "정병일 기자 · 실시간전",
        date: "2025/07/03",
        imageUrl: "/images/news-sample-1.jpg",
    },
    {
        id: 4,
        category: "정치",
        title:
            "[송보] 홍대통령, 광주·무안 공항이전 갈등에 \"대통령실에 TF 구성\"",
        reporter: "정병일 기자 · 실시간전",
        date: "2025/07/03",
        imageUrl: "/images/news-sample-1.jpg",
    },
];

export default function MainPage() {
    // 지금은 필터, 검색 로직 없이 UI만 – 나중에 상태/쿼리 붙이면 됨
    return (
        <div className={styles.wrapper}>
            <MainHeader />

            <main className={styles.content}>
                {/* 검색 영역 */}
                <div className={styles.searchRow}>
                    <div className={styles.searchBox}>
                        <Image
                            src="/images/search-icon.png"
                            alt="NewsPaper Logo"
                            width={20}
                            height={20}
                        />
                        <input
                            className={styles.searchInput}
                            placeholder="검색어를 입력하세요"
                        />
                    </div>
                    <button className={styles.menuButton}>
                        <Image
                            src="/images/Menu-button.png"
                            alt="NewsPaper Logo"
                            width={26}
                            height={26}
                            className={styles.buttonImage}
                        />
                    </button>
                    <button className={styles.profileButton}>
                        <Image
                            src="/images/default-user-icon.png"
                            alt="NewsPaper Logo"
                            width={27}
                            height={27}
                            className={styles.buttonImage}
                        />
                    </button>
                </div>

                {/* 카테고리 필터 */}
                <CategoryFilter categories={CATEGORIES} active="전체" />

                {/* 뉴스 카드 그리드 */}
                <section className={styles.grid}>
                    {MOCK_NEWS.map((item) => (
                        <NewsCard key={item.id} news={item} />
                    ))}
                </section>
            </main>
        </div>
    );
}
