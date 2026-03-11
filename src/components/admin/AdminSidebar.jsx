import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, ShoppingBag, Users, Settings, Tag, ShoppingCart } from 'lucide-react';

const AdminSidebar = () => {
    const location = useLocation();

    const navItems = [
        { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
        { name: 'Products', path: '/admin/products', icon: ShoppingBag },
        { name: 'Orders', path: '/admin/orders', icon: ShoppingCart }, // Note: Add ShoppingCart import later if used
        { name: 'Customers', path: '/admin/users', icon: Users },
        { name: 'Categories', path: '/admin/categories', icon: Tag },
        { name: 'Settings', path: '/admin/settings', icon: Settings },
    ];

    return (
        <aside className="w-64 bg-gray-900 text-white flex-shrink-0 hidden md:flex flex-col">
            <div className="h-16 flex items-center px-6 border-b border-gray-800">
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    FreshCart Admin
                </span>
            </div>

            <nav className="flex-1 overflow-y-auto py-4">
                <ul className="space-y-1">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;

                        return (
                            <li key={item.name}>
                                <Link
                                    to={item.path}
                                    className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${isActive
                                        ? 'bg-emerald-600 text-white border-l-4 border-emerald-400'
                                        : 'text-gray-400 hover:bg-gray-800 hover:text-white border-l-4 border-transparent'
                                        }`}
                                >
                                    <Icon className="w-5 h-5 mr-3" />
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <div className="p-4 border-t border-gray-800">
                <div className="text-xs text-center text-gray-500">
                    Admin Panel v1.0
                </div>
            </div>
        </aside>
    );
};

export default AdminSidebar;
