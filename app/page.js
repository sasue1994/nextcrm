import { auth, signOut } from "./auth";

export default async function Home() {
  const session = await auth();

  if (!session) return <p>กรุณาเข้าสู่ระบบ</p>;

  return (
    <div className="p-10">
      <h1 className="text-xl">ยินดีต้อนรับ, {session.user.name}</h1>
      <p>อีเมลของคุณคือ: {session.user.email}</p>
    </div>
  );
}