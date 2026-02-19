'use client';
import '../styles/globals.css';
import { useState } from 'react';
import SidebarItem from '../components/sidebar-item';
import Header from '../components/header'; 

export default function RootLayout({ children }) {
  const [isSidebarOpen, setIsisSidebarOpen] = useState(true);

  return (
    <html lang="en">
      <body className="bg-gray-50 flex h-screen overflow-hidden">
        {/* Sidebar */}
        <aside className={`${isSidebarOpen ? 'w-20' : 'w-64'} bg-slate-900 text-white flex flex-col transition-all duration-300 ease-in-out`}>
          
          {/* Header ของ Sidebar - ใช้ Flex เพื่อจัดตำแหน่งปุ่ม */}
          <div className={`h-16 flex items-center border-b border-slate-800 ${isSidebarOpen ? 'justify-center' : 'justify-between px-6'}`}>
            
            {/* แสดงชื่อเฉพาะตอนเปิดกว้าง */}
           <span 
            className={`text-xl font-bold whitespace-nowrap transition-all duration-500 ease-in-out 
              ${isSidebarOpen 
                ? 'opacity-0 -translate-x-10 pointer-events-none w-0' 
                : 'opacity-100 translate-x-0 w-auto'
              }`}
          >
            NEXT CRM
          </span>

            {/* ปุ่ม Hamburger */}
            <button
              className="text-gray-400 hover:text-white focus:outline-none transition-colors"
              onClick={() => setIsisSidebarOpen(!isSidebarOpen)}
              aria-label="Toggle Sidebar"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isSidebarOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                )}
              </svg>
            </button>
          </div>
          
          <nav className="flex-1 p-4 space-y-2 overflow-hidden">
            <SidebarItem href="/">{isSidebarOpen ? '🏠' : '🏠 Dashboard'}</SidebarItem>
            <SidebarItem href="/profile">{isSidebarOpen ? '👤' : '👤 Profile'}</SidebarItem>
            <SidebarItem href="/settings">{isSidebarOpen ? '⚙️' : '⚙️ Settings'}</SidebarItem>
          </nav>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          <Header />
          <main className="p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}