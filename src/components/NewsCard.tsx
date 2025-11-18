// src/components/NewsCard.tsx
import Image from "next/image";
import styles from "./NewsCard.module.css";

export interface NewsItem {
    id: number;
    category: string;
    title: string;
    reporter: string;
    date: string;
    imageUrl: string;
}

export default function NewsCard({ news }: { news: NewsItem }) {
    return (
        <article className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={news.imageUrl}
                    alt={news.title}
                    fill
                    className={styles.image}
                />
            </div>

            <div className={styles.info}>
                <div className={styles.metaTop}>
                    <span className={styles.category}>{news.category}</span>
                </div>
                <h3 className={styles.title}>{news.title}</h3>
                <div className={styles.metaBottom}>
                    <span className={styles.reporter}>{news.reporter}</span>
                    <span className={styles.date}>{news.date}</span>
                </div>
            </div>
        </article>
    );
}
