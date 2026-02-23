// app/layout.js
import '../styles/globals.css';
import AuthProvider from '../components/auth-provider';
import MainLayout from '../components/main-layout'; // layout structure

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <AuthProvider>
          <MainLayout>{children}</MainLayout>
        </AuthProvider>
      </body>
    </html>
  );
}