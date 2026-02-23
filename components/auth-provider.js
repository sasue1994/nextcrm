'use client'; // กำหนดให้ไฟล์นี้เป็น Client Component เพราะ SessionProvider ต้องใช้ React Context

import { SessionProvider } from "next-auth/react";

/**
 * AuthProvider เป็น Component ที่ทำหน้าที่เป็น "สะพาน" เชื่อมต่อข้อมูล Session 
 * เพื่อให้ Component ลูก (Children) ทั้งหมดในแอปสามารถเข้าถึงข้อมูล User ที่ล็อกอินได้ 
 * ผ่านทาง Hook เช่น useSession()
 */
const AuthProvider = ({ children }) => {
  return (
    /* SessionProvider จะเก็บข้อมูลการล็อกอินไว้ในระดับบนสุดของแอป 
       และคอยจัดการเรื่องการ Refresh Token หรือการตรวจสอบสถานะการเชื่อมต่อให้อัตโนมัติ
    */
    <SessionProvider>
      {children} 
    </SessionProvider>
  );
};

export default AuthProvider;