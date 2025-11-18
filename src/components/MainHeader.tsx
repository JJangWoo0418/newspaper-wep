// src/components/MainHeader.tsx
import Image from "next/image";
import styles from "./MainHeader.module.css";

export default function MainHeader() {
    return (
        <header className={styles.header}>
            <Image
                src="/images/NewsPaper-Logo2.png" // 로고 파일
                alt="NewsPaper Logo"
                width={220}
                height={60}
                className={styles.logo}
            />
        </header>
    );
}
