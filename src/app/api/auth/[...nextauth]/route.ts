import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = NextAuth({
  providers: [
    // 🔹 Google OAuth
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    // 🔹 Kakao OAuth (원하면 email 없는 경우 거부됨)
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    // ✔ 소셜 로그인 성공 시 DB에 유저 저장
    async signIn({ user, account, profile }) {
      console.log("소셜 로그인 성공:", user);

      // 🔥 카카오는 이메일을 주지 않을 수 있음 → 로그인 거부
      if (!user.email) {
        console.log("❌ 이메일이 없어서 로그인 불가");
        return false;
      }

      // 이미 존재하는 유저인지 검사
      let existingUser = await prisma.users.findUnique({
        where: { email: user.email },
      });

      if (!existingUser) {
        // 새로운 유저 생성
        existingUser = await prisma.users.create({
          data: {
            email: user.email,
            password: "", // 소셜 로그인은 비번 불필요
            name: user.name ?? null,
            image: user.image ?? null, // 🔥 프로필 이미지 저장
          },
        });
      } else {
        // 기존 유저라면 프로필 이미지 업데이트 (선택 사항)
        await prisma.users.update({
          where: { id: existingUser.id },
          data: {
            image: user.image ?? existingUser.image,
            name: user.name ?? existingUser.name,
          },
        });
      }

      return true;
    },

    // ✔ Session에 필요한 정보 추가할 수 있음
    async session({ session }) {
      // 나중에 user_id도 넣을 수 있음
      return session;
    },
  },
});

export { handler as GET, handler as POST };
