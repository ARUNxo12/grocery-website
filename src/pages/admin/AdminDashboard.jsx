import { Users, ShoppingBag, IndianRupee, TrendingUp } from 'lucide-react';

const AdminDashboard = () => {
    const stats = [
        { name: 'Total Revenue', value: '₹3,545,231.89', icon: IndianRupee, change: '+20.1%', trend: 'up' },
        { name: 'Active Orders', value: '356', icon: ShoppingBag, change: '+12.5%', trend: 'up' },
        { name: 'Total Customers', value: '2,845', icon: Users, change: '+5.4%', trend: 'up' },
        { name: 'Conversion Rate', value: '3.2%', icon: TrendingUp, change: '-1.2%', trend: 'down' },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
                <p className="text-gray-500 mt-1">Welcome back. Here's what's happening with your store today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <div key={stat.name} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                                </div>
                                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
                                    <Icon size={24} />
                                </div>
                            </div>
                            <div className="mt-4 flex items-center text-sm">
                                <span className={`font-medium ${stat.trend === 'up' ? 'text-emerald-600' : 'text-rose-600'}`}>
                                    {stat.change}
                                </span>
                                <span className="text-gray-500 ml-2">from last month</span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Recent Activity / Charts Placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Revenue Overview</h2>
                    <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg border border-dashed border-gray-200">
                        <span className="text-gray-400">Chart Component Placeholder</span>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h2>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Order #{1000 + i}</p>
                                    <p className="text-xs text-gray-500">2 mins ago</p>
                                </div>
                                <span className="px-2.5 py-1 text-xs font-medium bg-emerald-100 text-emerald-800 rounded-full">
                                    Pending
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AdminDashboard;
