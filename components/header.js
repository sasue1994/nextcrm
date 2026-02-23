'use client';
import { useState, useRef, useEffect } from 'react';
import { signOut } from "next-auth/react";
import Link from 'next/link';

export default function Header({ session }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // ปิด Dropdown เมื่อคลิกพื้นที่ข้างนอก
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    signOut({ callbackUrl: '/login' });
  };


  return (
    <header className="bg-white shadow-sm px-8 py-3 flex justify-end items-center border-b sticky top-0 z-50">
      {session ? (
        <div className="relative" ref={dropdownRef}>
          {/* ปุ่ม Avatar ที่กดเพื่อเปิด/ปิด Dropdown */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-3 hover:bg-gray-50 p-1.5 rounded-full transition-all duration-200 focus:outline-none"
          >
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-slate-800 leading-none">
                {session.user?.name}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                {session.user?.storeId ? `Store ID: ${session.user.storeId}` : session.user?.email}
              </p>
            </div>
            
            {/* วงกลม Avatar */}
            <div className="h-10 w-10 rounded-full bg-linear-to-tr from-slate-700 to-slate-900 flex items-center justify-center text-white font-bold border-2 border-white shadow-sm transition-transform active:scale-95">
              {session.user?.name?.charAt(0).toUpperCase()}
            </div>
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in zoom-in duration-150">
              <div className="px-4 py-2 border-b border-slate-50 sm:hidden">
                <p className="text-sm font-bold truncate">{session.user?.name}</p>
                <p className="text-xs text-slate-500 truncate">{session.user?.email}</p>
              </div>
              
              {/* ตัวเลือกใน Dropdown */}
              <Link href="/profile" className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-2 transition-colors"
              >  👤 ข้อมูลบัญชี
              </Link>
              
              <div className="my-1 border-t border-slate-50"></div>
              
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 transition-colors font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                ออกจากระบบ
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-2 text-slate-400">
           <p className="text-sm italic font-light">ตรวจสอบสิทธิ์...</p>
        </div>
      )}
    </header>
  );
}