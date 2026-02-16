import '../styles/globals.css';
import SidebarItem from '../components/sidebar-item';
import Header from '../components/header'; 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 flex h-screen overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-slate-900 text-white flex flex-col">
          <div className="p-6 text-2xl font-bold border-b border-slate-800">
            NEXT CRM
          </div>
          
          <nav className="flex-1 p-4 space-y-2">
            <SidebarItem href="/">🏠 Dashboard</SidebarItem>
            <SidebarItem href="/profile">👤 Profile</SidebarItem>
            <SidebarItem href="/settings">⚙️ Settings</SidebarItem>
          </nav>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          {/* Header Component */}
          <Header />

          <main className="p-8">
            {children} {/* page conent */}
          </main>
        </div>
      </body>
    </html>
  );
}