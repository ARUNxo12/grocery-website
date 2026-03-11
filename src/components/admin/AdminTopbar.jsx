import { Menu, Bell, User } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const AdminTopbar = () => {
    const { user, logout } = useAuth();

    return (
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
                <button className="md:hidden p-2 text-gray-600 hover:text-emerald-600 transition-colors">
                    <Menu size={24} />
                </button>
            </div>

            <div className="flex items-center gap-4">
                <button className="p-2 text-gray-400 hover:text-emerald-600 relative">
                    <Bell size={20} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border border-white"></span>
                </button>

                <div className="h-8 w-px bg-gray-200 mx-2 hidden sm:block"></div>

                <div className="flex items-center gap-3">
                    <div className="hidden sm:block text-right">
                        <p className="text-sm font-medium text-gray-700">{user?.name || 'Admin User'}</p>
                        <p className="text-xs text-gray-500 capitalize">{user?.role || 'Administrator'}</p>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                        <User size={16} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default AdminTopbar;
