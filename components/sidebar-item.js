'use client'; 

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SidebarItem({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link 
      href={href} 
      className={`block p-3 rounded transition ${
        isActive 
          ? 'bg-blue-600 text-white shadow-md' // สไตล์ตอนเลือกอยู่
          : 'text-slate-300 hover:bg-slate-800 hover:text-white' // สไตล์ปกติ
      }`}
    >
      {children}
    </Link>
  );
}