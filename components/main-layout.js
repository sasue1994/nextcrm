'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import SidebarItem from './sidebar-item';
import Header from './header';

export default function MainLayout({ children }) {
  const pathname = usePathname();
  const { data: session } = useSession(); // ดึง session ได้เลยเพราะอยู่ใต้ AuthProvider แล้ว
  const isLoginPage = pathname === '/login';
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar - แสดงเมื่อไม่ใช่หน้า Login */}
      {!isLoginPage && (
        <aside className={`${isSidebarOpen ? 'w-20' : 'w-64'} bg-slate-900 text-white flex flex-col transition-all duration-300 ease-in-out`}>
          <div className={`h-16 flex items-center border-b border-slate-800 ${isSidebarOpen ? 'justify-center' : 'justify-between px-6'}`}>
            {!isSidebarOpen && <span className="text-xl font-bold">NEXT CRM</span>}
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <nav className="flex-1 p-4 space-y-2">
            <SidebarItem href="/">{isSidebarOpen ? '🏠' : '🏠 Home'}</SidebarItem>
            <SidebarItem href="/profile">{isSidebarOpen ? '👤' : '👤 Profile'}</SidebarItem>
            <SidebarItem href="/settings">{isSidebarOpen ? '⚙️' : '⚙️ Settings'}</SidebarItem>
          </nav>
        </aside>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {!isLoginPage && <Header session={session} />}
        <main className={isLoginPage ? "h-full" : "p-8"}>
          {children}
        </main>
      </div>
    </div>
  );
}