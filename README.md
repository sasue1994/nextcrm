# 📱 LIFF CRM (Next.js 16 + Tailwind CSS v4)

พัฒนาด้วย **Next.js 16 (App Router) และ **Tailwind CSS v4**

## 🛠 เทคโนโลยีที่ใช้ (Tech Stack)
* **Frontend Framework**: [Next.js 16](https://nextjs.org/) (App Router)
* **Library**: [React 19](https://react.dev/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/), [PostCSS 8](https://postcss.org/)
* **Development Engine**: Turbopack (รันด้วย `--turbo`)

## 📁 โครงสร้างโปรเจกต์ (Project Structure)
โครงสร้างโปรเจกต์จัดวางตามมาตรฐาน Next.js App Router:
```text
NEXTCRM/
├── app/                # โฟลเดอร์หลักสำหรับจัดการ Routing และ Layout
│   ├── layout.js       # โครงสร้างหลักของเว็บ (Sidebar, Header, Global CSS)
│   ├── page.js         # หน้าแรก (Dashboard)
│   ├── profile/        # หน้าข้อมูลส่วนตัว (เชื่อมต่อกับ LIFF)
│   └── api/            # ส่วนจัดการ Backend API และ Route Handlers
├── components/         # UI Components ย่อยที่นำมาใช้ซ้ำ (Header, SidebarItem)
├── styles/             # เก็บไฟล์ Global CSS และการตั้งค่า Tailwind
└── public/             # เก็บไฟล์ Static เช่น รูปภาพและไอคอนต่าง ๆ

## 🚀 การเริ่มต้นใช้งาน (Getting Started)
ทำตามขั้นตอนด้านล่างนี้เพื่อตั้งค่าโปรเจกต์และเริ่มพัฒนาในเครื่องของคุณ:

### 1. การเตรียมความพร้อม (Prerequisites)
* ตรวจสอบว่าเครื่องของคุณติดตั้ง **Node.js** เวอร์ชัน 18.17.0 ขึ้นไป.

### 2. การติดตั้ง Dependencies
npm install

### 3. เริ่มรันโปรเจกต์ (Development)
รันโปรเจกต์ด้วยโหมด Turbopack เพื่อความรวดเร็วในการคอมไพล์:

Bash
npm run dev
จากนั้นเปิด Browser ไปที่ http://localhost:3000.


