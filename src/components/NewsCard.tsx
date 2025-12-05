// src/components/NewsCard.tsx
import Image from "next/image";
import Link from "next/link";
import styles from "./NewsCard.module.css";
import type { Article } from "@/types/article";
import { useState } from "react";

export default function NewsCard({ article }: { article: Article }) {
    const safeImageUrl =
        article.imageUrl && article.imageUrl.length > 5
            ? article.imageUrl
            : "/images/default-news-image.png";

    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <Link href={`/article/${article.id}`} className={styles.link}>
            <article className={styles.card}>
                {/* 이미지 */}
                <div className={styles.imageWrapper}>
                    {!imageLoaded && (
                        <div className={styles.spinnerContainer}>
                            <div className={styles.spinner}></div>
                        </div>
                    )}

                    <Image
                        src={safeImageUrl}
                        alt={article.title}
                        fill
                        className={`${styles.image} ${imageLoaded ? styles.show : ""}`}
                        onLoadingComplete={() => setImageLoaded(true)}
                    />
                </div>

                {/* 아래 정보 박스 */}
                <div className={styles.bottomBox}>
                    <span className={styles.categoryTag}>{article.category}</span>

                    <h2 className={styles.title}>{article.title}</h2>

                    <div className={styles.metaRow}>
                        <span className={styles.reporter}>{article.reporter}</span>
                        <span className={styles.date}>{article.date}</span>
                    </div>
                </div>
            </article>
        </Link>
    );
}
