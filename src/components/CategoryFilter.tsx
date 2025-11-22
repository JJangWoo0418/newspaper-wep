// src/components/CategoryFilter.tsx
"use client";

import styles from "./CategoryFilter.module.css";

type Props = {
    categories: string[];
    active: string;
    onSelect: (category: string) => void;
};

export default function CategoryFilter({ categories, active, onSelect }: Props) {
    return (
        <div className={styles.container}>
            {categories.map((cat) => {
                const isActive = cat === active;
                return (
                    <button
                        key={cat}
                        className={
                            isActive
                                ? `${styles.chip} ${styles.chipActive}`
                                : styles.chip
                        }
                        onClick={() => onSelect(cat)}
                    >
                        {cat}
                    </button>
                );
            })}
        </div>
    );
}
