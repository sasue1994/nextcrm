
export default function DashboardPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-slate-800">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <p className="text-slate-500 text-sm">Total Customers</p>
          <p className="text-2xl font-bold text-blue-600">1,240</p>
        </div>
      </div>
    </div>
  );
}