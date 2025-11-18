// src/components/CategoryFilter.tsx
import styles from "./CategoryFilter.module.css";

interface Props {
    categories: string[];
    active: string;
}

export default function CategoryFilter({ categories, active }: Props) {
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
                    >
                        {cat}
                    </button>
                );
            })}
        </div>
    );
}
