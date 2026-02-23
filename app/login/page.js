'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    storeId: '',
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // เรียกใช้ signIn ของ NextAuth
      const result = await signIn('credentials', {
        storeId: formData.storeId,
        username: formData.username,
        password: formData.password,
        redirect: false, // จัดการ redirect เองเพื่อให้ UX ดีขึ้น
      });

      console.log('Login result:', result);

      if (result?.error) {
        setError('ข้อมูลไม่ถูกต้อง กรุณาตรวจสอบ รหัสร้านค้า, ชื่อผู้ใช้ หรือรหัสผ่าน');
        setLoading(false);
      } else {
        router.push('/'); // Login สำเร็จไปหน้า Dashboard
        router.refresh();
      }
    } catch (err) {
      setError('เกิดข้อผิดพลาดในการเข้าสู่ระบบ');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-slate-800 mb-6">เข้าสู่ระบบ NEXT CRM</h2>
        
        {error && (
          <div className="bg-red-50 text-red-500 p-3 rounded-lg mb-4 text-sm text-center border border-red-100">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">รหัสร้านค้า</label>
            <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="เช่น 1001" value={formData.storeId} onChange={(e) => setFormData({...formData, storeId: e.target.value})} />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">ชื่อผู้ใช้งาน</label>
            <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="เช่น admin" value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value})} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">รหัสผ่าน</label>
            <input type="password" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="••••••••" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition duration-200 mt-2 disabled:opacity-70"
          >
            {loading ? 'กำลังตรวจสอบ...' : 'เข้าสู่ระบบ'}
          </button>
        </form>
        
        <div className="mt-6 text-center text-xs text-gray-400">
          Mock Data: Store ID: 1001, User: admin, Pass: 1234
        </div>
      </div>
    </div>
  );
}