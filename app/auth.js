import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        storeId: { label: "Store ID", type: "text" },
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // ในอนาคตเปลี่ยนเป็น API call เพื่อตรวจสอบข้อมูล
        if (credentials.storeId === "1001" && credentials.username === "admin" && credentials.password === "1234") {
          // เพิ่มข้อมูลที่คุณต้องการใช้ในแอปเข้าไปใน Object นี้
          return { 
            id: "1", 
            name: "Saharat Not", 
            email: "not@example.com",
            role: "admin",
            storeId: credentials.storeId // เพิ่ม storeId เข้าไป
          }
        }
        return null
      },
    }),
  ],
  callbacks: {
    // 1. รับข้อมูลจาก authorize มาเก็บไว้ใน Token (ฝั่ง Server)
    async jwt({ token, user }) {
      if (user) {
        token.storeId = user.storeId;
        token.id = user.id;
      }
      return token;
    },
    // 2. ส่งข้อมูลจาก Token ไปยัง Session (ให้ Client มองเห็น)
    async session({ session, token }) {
      if (token) {
        session.user.storeId = token.storeId;
        session.user.id = token.id;
      }
      return session;
    }
  },
  pages: {
    signIn: "/login",
  },
})