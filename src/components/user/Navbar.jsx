import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, User, Menu, Info, PhoneCall, LogIn } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';

const Navbar = () => {
    const { cartCount } = useCart();
    const { user, logout } = useAuth();
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

                    {/* Logo & Mobile Menu */}
                    <div className="flex items-center gap-4">
                        <button className="md:hidden p-2 text-gray-600 hover:text-emerald-600 transition-colors">
                            <Menu size={24} />
                        </button>
                        <Link to="/" className="flex items-center gap-2">
                            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                                FreshCart
                            </span>
                        </Link>
                    </div>

                    {/* Search Bar - Desktop */}
                    <div className="hidden md:flex flex-1 max-w-2xl mx-8">
                        <form onSubmit={handleSearch} className="relative w-full">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search for groceries, vegetables, meat..."
                                className="w-full pl-4 pr-10 py-2.5 rounded-full border border-gray-300 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all bg-gray-50 hover:bg-white"
                            />
                            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-600">
                                <Search size={20} />
                            </button>
                        </form>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex items-center gap-4 text-sm font-medium text-gray-700">
                            <div className="relative group py-4">
                                <Link to="/products" className="hover:text-emerald-600 transition-colors flex items-center gap-1 group">
                                    Categories
                                    <svg className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 transition-transform group-hover:-rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </Link>
                                {/* Dropdown Menu */}
                                <div className="absolute top-12 left-0 w-56 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-1 transition-all duration-200 z-50">
                                    <div className="p-2 space-y-1">
                                        <Link to="/products?category=fruits" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors font-medium">Fresh Fruits</Link>
                                        <Link to="/products?category=vegetables" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors font-medium">Vegetables</Link>
                                        <Link to="/products?category=dairy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors font-medium">Dairy & Eggs</Link>
                                        <Link to="/products?category=meat" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors font-medium">Meat & Seafood</Link>
                                        <Link to="/products?category=bakery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors font-medium">Bakery</Link>
                                        <div className="h-px bg-gray-100 my-2"></div>
                                        <Link to="/products" className="block px-4 py-2 text-sm text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors font-semibold">View All Categories</Link>
                                    </div>
                                </div>
                            </div>
                            <Link to="/deals" className="text-rose-500 hover:text-rose-600 transition-colors">Deals</Link>
                        </div>

                        <div className="flex items-center gap-4 sm:gap-6 border-l pl-4 sm:pl-6">
                            <Link to="/about" className="relative flex flex-col items-center justify-center w-12 h-12 text-gray-600 hover:text-emerald-600 transition-colors group">
                                <Info size={22} />
                                <span className="absolute top-full mt-1 px-2 py-1 bg-gray-900 text-white text-[10px] font-bold rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 whitespace-nowrap">About</span>
                            </Link>
                            <Link to="/contact" className="relative flex flex-col items-center justify-center w-12 h-12 text-gray-600 hover:text-emerald-600 transition-colors group">
                                <PhoneCall size={22} />
                                <span className="absolute top-full mt-1 px-2 py-1 bg-gray-900 text-white text-[10px] font-bold rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 whitespace-nowrap">Contact</span>
                            </Link>
                            {/* Profile/Auth */}
                            {user ? (
                                <div className="relative group py-2">
                                    <button className="relative flex flex-col items-center justify-center w-12 h-12 text-gray-600 hover:text-emerald-600 transition-colors group/btn">
                                        <User size={22} />
                                        <span className="absolute top-full mt-1 px-2 py-1 bg-gray-900 text-white text-[10px] font-bold rounded shadow-lg opacity-0 invisible group-hover/btn:opacity-100 group-hover/btn:visible transition-all duration-200 z-50 whitespace-nowrap">Profile</span>
                                    </button>
                                    {/* Dropdown Menu */}
                                    <div className="absolute top-12 right-0 w-48 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-1 transition-all duration-200 z-50">
                                        <div className="p-2 space-y-1">
                                            <div className="px-4 py-2 border-b border-gray-100 mb-2">
                                                <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
                                                <p className="text-xs text-gray-500 truncate">{user.email}</p>
                                            </div>

                                            {user.role === 'admin' && (
                                                <Link to="/admin/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors font-medium">
                                                    Admin Dashboard
                                                </Link>
                                            )}

                                            <button
                                                onClick={() => {
                                                    logout();
                                                    navigate('/');
                                                }}
                                                className="w-full text-left block px-4 py-2 text-sm text-rose-600 hover:bg-rose-50 rounded-lg transition-colors font-medium"
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Link to="/login" className="relative flex flex-col items-center justify-center w-12 h-12 text-gray-600 hover:text-emerald-600 transition-colors group">
                                    <LogIn size={22} />
                                    <span className="absolute top-full mt-1 px-2 py-1 bg-gray-900 text-white text-[10px] font-bold rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 whitespace-nowrap">Sign In</span>
                                </Link>
                            )}

                            {/* Cart */}
                            <Link to="/cart" className="relative flex flex-col items-center justify-center w-12 h-12 text-gray-600 hover:text-emerald-600 transition-colors group">
                                <div className="relative">
                                    <ShoppingCart size={22} />
                                    {cartCount > 0 && (
                                        <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center z-10">
                                            {cartCount}
                                        </span>
                                    )}
                                </div>
                                <span className="absolute top-full mt-1 px-2 py-1 bg-gray-900 text-white text-[10px] font-bold rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 whitespace-nowrap">Cart</span>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
