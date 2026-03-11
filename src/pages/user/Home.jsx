import { useState, useEffect } from 'react';
import { ArrowRight, ShoppingBag, Truck, ShieldCheck, Clock, ShoppingCart, Star, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import api from '../../services/api';

const topUsers = [
    { name: 'Sarah Jenkins', comment: 'Best grocery delivery service ever!', rating: 5 },
    { name: 'Michael Chen', comment: 'Always fresh and on time. Highly recommended.', rating: 5 },
    { name: 'Emily Davis', comment: 'Great selection of organic local produce.', rating: 4 },
    { name: 'David Smith', comment: 'The app is so easy to use and delivery is fast.', rating: 5 },
];

const specialOffers = [
    { title: 'Get 20% Off Fruits', code: 'FRUIT20', color: 'bg-rose-100', text: 'text-rose-600' },
    { title: 'Free Milk on ₹500+', code: 'FREEMILK', color: 'bg-blue-100', text: 'text-blue-600' }
];

const Home = () => {
    const { addToCart } = useCart();

    const [bestSellers, setBestSellers] = useState([]);
    const [featuredProducts, setFeaturedProducts] = useState([]);

    // Countdown Timer Logic
    const [timeLeft, setTimeLeft] = useState({
        days: 2,
        hours: 14,
        minutes: 45,
        seconds: 10
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                const newTime = { ...prevTime };

                if (newTime.seconds > 0) {
                    newTime.seconds--;
                } else {
                    newTime.seconds = 59;
                    if (newTime.minutes > 0) {
                        newTime.minutes--;
                    } else {
                        newTime.minutes = 59;
                        if (newTime.hours > 0) {
                            newTime.hours--;
                        } else {
                            newTime.hours = 23;
                            if (newTime.days > 0) {
                                newTime.days--;
                            }
                        }
                    }
                }
                return newTime;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const fetchHomeData = async () => {
            try {
                const res = await api.get('/products');
                const p = res.data.data || res.data;
                // Just as a placeholder to simulate "best sellers" and "featured", slice them randomly
                setBestSellers(p.slice(0, 4));
                setFeaturedProducts(p.slice(Math.max(0, p.length - 4), p.length));
            } catch (err) {
                console.error("Failed to load products", err);
            }
        };
        fetchHomeData();
    }, []);

    // Helper to format time with leading zero
    const formatTime = (time) => time.toString().padStart(2, '0');

    return (
        <div className="flex flex-col gap-16 pb-12">

            {/* Hero Section */}
            <section className="relative bg-emerald-900 py-16 sm:py-24 overflow-hidden rounded-b-[4rem]">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80"
                        alt="Fresh groceries background"
                        className="w-full h-full object-cover opacity-20 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 via-emerald-800/90 to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="max-w-2xl text-white">
                            <h1 className="text-5xl sm:text-7xl font-black mb-6 leading-tight drop-shadow-md">
                                Freshness <br />
                                Delivered <span className="text-amber-400">Daily.</span>
                            </h1>
                            <p className="text-lg text-emerald-50 mb-8 max-w-lg font-medium">
                                Shop premium quality groceries, farm-fresh produce, and daily essentials, all delivered right to your doorstep.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/products"
                                    className="inline-flex justify-center items-center px-8 py-4 border-2 border-transparent text-lg font-bold rounded-2xl shadow-xl text-emerald-900 bg-amber-400 hover:bg-amber-300 transform hover:-translate-y-1 transition-all duration-300"
                                >
                                    Start Exploring
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </div>
                        </div>

                        {/* Image Grid */}
                        <div className="hidden lg:grid grid-cols-2 gap-4">
                            <div className="space-y-4 pt-12">
                                <div className="h-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 group">
                                    <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80" alt="Produce" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="h-48 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 group">
                                    <img src="https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80" alt="Dairy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-48 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 group">
                                    <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80" alt="Bakery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="h-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 group">
                                    <img src="https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&q=80" alt="Meat" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                            <Truck size={24} />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Delivery</h3>
                        <p className="text-sm text-gray-500">Free delivery on all orders over ₹4000</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                            <Clock size={24} />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Same Day Delivery</h3>
                        <p className="text-sm text-gray-500">Order before 2 PM for same-day delivery</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                            <ShieldCheck size={24} />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">100% Secure</h3>
                        <p className="text-sm text-gray-500">Your payments are safe and secure with us</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                            <ShoppingBag size={24} />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Best Quality</h3>
                        <p className="text-sm text-gray-500">Fresh products sourced from local farms</p>
                    </div>
                </div>
            </section>

            {/* Featured Categories */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Explore Categories</h2>
                    <p className="text-gray-500">Discover fresh products across different sections</p>
                    <div className="w-20 h-1.5 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {[
                        { name: 'Fresh Fruits', param: 'fruits', image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=400&q=80' },
                        { name: 'Vegetables', param: 'vegetables', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=400&q=80' },
                        { name: 'Dairy & Eggs', param: 'dairy', image: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?auto=format&fit=crop&w=400&q=80' },
                        { name: 'Meat & Seafood', param: 'meat', image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=400&q=80' },
                        { name: 'Bakery', param: 'bakery', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80' },
                        { name: 'Pantry', param: 'pantry', image: 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&w=400&q=80' },
                    ].map((cat, i) => (
                        <Link to={`/products?category=${cat.param}`} key={i} className="group flex flex-col items-center">
                            <div className="relative w-full aspect-square overflow-hidden bg-white rounded-2xl shadow-sm border border-gray-100 group-hover:shadow-xl group-hover:border-emerald-200 transition-all duration-300 transform group-hover:-translate-y-2">
                                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
                            </div>
                            <span className="mt-4 font-bold text-gray-800 group-hover:text-emerald-600 transition-colors">{cat.name}</span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Best Sellers */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Our Special Menu</h2>
                    <p className="text-gray-500">Discover our most loved dishes, carefully prepared with fresh ingredients</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {bestSellers.map((product) => (
                        <div key={product._id || product.id} className="bg-white rounded-3xl shadow-md border border-gray-50 overflow-hidden hover:shadow-2xl transition-all duration-300 group flex flex-col p-4">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-50 mb-4">
                                <img src={product.image || 'https://via.placeholder.com/400'} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute top-2 left-2 bg-emerald-500 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">{product.category}</div>
                            </div>
                            <div className="flex flex-col flex-1 px-2">
                                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors line-clamp-1">{product.name}</h3>
                                <p className="text-xs text-gray-500 mb-4 line-clamp-2">Authentic {product.category} sourced directly from local farmers.</p>
                                <div className="mt-auto flex items-center justify-between">
                                    <span className="text-2xl font-black text-gray-900">₹{product.price?.toFixed(2)}</span>
                                    <button onClick={() => addToCart(product)} className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-2xl shadow-lg shadow-orange-200 transition-all hover:scale-110 active:scale-95" aria-label="Add to cart">
                                        <ShoppingCart size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-12">
                    <Link to="/products" className="bg-orange-500 text-white px-10 py-3 rounded-full font-bold shadow-lg shadow-orange-200 hover:bg-orange-600 transition-all hover:scale-105 active:scale-95">
                        View More
                    </Link>
                </div>
            </section>

            {/* Special Offers / Banner */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 rounded-[2.5rem] p-6 sm:p-10 overflow-hidden shadow-xl shadow-orange-200">
                    <div className="flex flex-col lg:flex-row items-center justify-between relative z-10 gap-8">
                        <div className="text-white max-w-lg text-center lg:text-left">
                            <h2 className="text-3xl sm:text-4xl font-black mb-3 tracking-tighter">30% Off</h2>
                            <h3 className="text-lg sm:text-xl font-bold mb-3">Healthy Fitness Meals</h3>
                            <p className="text-orange-50 mb-6 text-sm">Power-packed meals crafted for your daily fitness routine. Fresh, balanced, and ready to fuel your day.</p>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                                <div className="bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-xl border border-white/30 text-lg font-black tracking-widest">FIT30</div>
                            </div>
                        </div>
                        <div className="relative w-full max-w-[260px] aspect-square">
                            <div className="absolute inset-0 bg-white/10 rounded-full animate-ping"></div>
                            <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80" alt="Special Offer" className="relative z-10 w-full h-full object-cover rounded-full border-6 border-white/20 shadow-xl" />
                        </div>
                    </div>
                    {/* Decorative background shapes */}
                    <div className="absolute -top-20 -right-20 w-56 h-56 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-black/10 rounded-full blur-3xl"></div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
                        <p className="text-gray-500 mt-1">Handpicked fresh items just for you</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredProducts.map((product) => (
                        <div key={product._id || product.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group flex flex-col">
                            <div className="relative aspect-square overflow-hidden bg-gray-100">
                                <img src={product.image || 'https://via.placeholder.com/400'} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-semibold text-emerald-700 capitalize">{product.category}</div>
                            </div>
                            <div className="p-4 flex flex-col flex-1">
                                <div className="flex items-center text-amber-500 mb-2">
                                    <Star size={14} className="fill-current" />
                                    <span className="text-xs text-gray-600 ml-1 font-medium">{product.rating || 4.5}</span>
                                </div>
                                <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">{product.name}</h3>
                                <div className="mt-auto pt-4 flex items-center justify-between">
                                    <span className="text-lg font-bold text-gray-900">₹{product.price?.toFixed(2)}</span>
                                    <button onClick={() => addToCart(product)} className="bg-emerald-50 hover:bg-emerald-600 text-emerald-600 hover:text-white p-2 rounded-lg transition-colors" aria-label="Add to cart">
                                        <ShoppingCart size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Flash Deal / Countdown */}
            <section className="w-full px-0">
                <div className="bg-gray-900 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row mx-4 sm:mx-6 lg:mx-8">
                    <div className="lg:w-[55%] p-8 sm:p-16 flex flex-col justify-center text-white relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl"></div>
                        <div className="relative z-10">
                            <span className="text-emerald-400 font-bold tracking-widest uppercase mb-4 inline-block text-sm">Limited Time Flash Deal</span>
                            <h2 className="text-3xl sm:text-5xl font-black mb-6 leading-tight">Fresh Organics, <br /> Half the Price.</h2>
                            <p className="text-gray-400 mb-10 text-lg max-w-lg">Grab your weekly organic essentials at an unbeatable 50% discount. Hurry, offer ends soon!</p>

                            <div className="flex gap-4 sm:gap-8">
                                {[
                                    { value: formatTime(timeLeft.days), label: 'Days' },
                                    { value: formatTime(timeLeft.hours), label: 'Hours' },
                                    { value: formatTime(timeLeft.minutes), label: 'Mins' },
                                    { value: formatTime(timeLeft.seconds), label: 'Secs' }
                                ].map((time, i) => (
                                    <div key={i} className="flex flex-col items-center">
                                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 text-white w-16 h-16 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center text-3xl sm:text-5xl font-light mb-2">
                                            {time.value}
                                        </div>
                                        <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-gray-500">{time.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[45%] relative min-h-[350px] lg:min-h-full">
                        <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80" alt="Flash Deal Products" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent lg:w-1/3"></div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-2">What Our Customers Say</h2>
                    <p className="text-gray-500">Join thousands of happy customers who shop with us</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {topUsers.map((user, i) => (
                        <div key={i} className="bg-white rounded-[2rem] p-8 shadow-lg shadow-gray-100 border border-gray-50 flex flex-col items-center text-center group hover:shadow-2xl hover:border-emerald-100 transition-all duration-300">
                            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform">
                                <User size={32} />
                            </div>
                            <div className="flex text-amber-400 mb-4">
                                {[...Array(user.rating)].map((_, j) => (
                                    <Star key={j} size={16} className="fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-600 text-sm mb-6 italic leading-relaxed">"{user.comment}"</p>
                            <h4 className="text-base font-black text-gray-900 mt-auto">{user.name}</h4>
                            <span className="text-[10px] uppercase tracking-widest text-emerald-600 font-bold mt-1">Verified Customer</span>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default Home;
