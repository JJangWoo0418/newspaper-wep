// src/components/LoginForm.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./LoginForm.module.css";
import { signIn } from "next-auth/react";


export default function LoginForm() {
    const [remember, setRemember] = useState(false);

    return (
        <div className={styles.card}>
            <h1 className={styles.title}>Login</h1>

            {/* ID */}
            <input
                type="text"
                placeholder="Id"
                className={styles.input}
            />

            {/* Password */}
            <input
                type="password"
                placeholder="Password"
                className={styles.input}
            />

            {/* Remember Me */}
            <label className={styles.rememberRow}>
                <input
                    type="checkbox"
                    checked={remember}
                    onChange={() => setRemember(!remember)}
                    className={styles.checkbox}
                />
                <span className={styles.rememberText}>Remember Me</span>
            </label>

            {/* Login Button */}
            <button className={styles.loginButton}>로그인</button>

            {/* Divider */}
            <div className={styles.dividerRow}>
                <div className={styles.dividerLine} />
                <span className={styles.dividerText}>또는</span>
                <div className={styles.dividerLine} />
            </div>

            {/* Kakao Login */}
            <button
                className={`${styles.socialButton} ${styles.kakaoButton}`}
                onClick={() => signIn("kakao", { callbackUrl: "/main" })}
            >
                <Image
                    src="/images/KakaoLogin-Button.png"
                    alt="kakao"
                    width={260}
                    height={20}
                />
            </button>

            {/* Google Login */}
            <button
                className={`${styles.socialButton} ${styles.googleButton}`}
                onClick={() => signIn("google", { callbackUrl: "/main" })}
            >
                <Image
                    src="/images/GoogleLogin-Button.png"
                    alt="google"
                    width={260}
                    height={20}
                />
            </button>

            {/* Bottom Menu */}
            <div className={styles.bottomRow}>
                <button className={styles.bottomLink}>회원가입</button>
                <span className={styles.bottomDivider}>|</span>
                <button className={styles.bottomLink}>계정 찾기</button>
            </div>
        </div>
    );
}
