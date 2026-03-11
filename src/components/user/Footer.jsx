import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4">
                            FreshCart
                        </h3>
                        <p className="text-sm text-gray-400">
                            Your one-stop destination for fresh groceries, delivered straight to your door.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Explore</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/products" className="hover:text-emerald-400 transition-colors">All Products</Link></li>
                            <li><Link to="/products?category=vegetables" className="hover:text-emerald-400 transition-colors">Fresh Vegetables</Link></li>
                            <li><Link to="/products?category=dairy" className="hover:text-emerald-400 transition-colors">Daily Dairy</Link></li>
                            <li><Link to="/products?category=meat" className="hover:text-emerald-400 transition-colors">Meats & Seafood</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Help</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact Us</Link></li>
                            <li><Link to="/faqs" className="hover:text-emerald-400 transition-colors">FAQs</Link></li>
                            <li><Link to="/shipping" className="hover:text-emerald-400 transition-colors">Shipping</Link></li>
                            <li><Link to="/returns" className="hover:text-emerald-400 transition-colors">Returns</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
                        <p className="text-sm mb-4">Subscribe to get special offers and updates.</p>
                        <div className="flex">
                            <input type="email" placeholder="Your email" className="px-4 py-2 w-full rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                            <button className="bg-emerald-600 hover:bg-emerald-500 px-4 py-2 rounded-r-md text-white transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} FreshCart. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
