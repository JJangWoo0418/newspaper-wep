import Image from "next/image";
import LoginForm from "../../components/LoginForm";
import styles from "./loginPage.module.css";

export default function LoginPage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                {/* Left: Logo */}
                <div className={styles.left}>
                    <Image
                        src="/images/NewsPaper-Logo2.png"
                        alt="NewsPaper Logo"
                        width={450}
                        height={450}
                        className={styles.logo}
                    />
                </div>

                {/* Right: Login Box */}
                <div className={styles.right}>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}