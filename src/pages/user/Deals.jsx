import { ShoppingCart, Star, Tag, Clock, Percent, Gift } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const DEALS_PRODUCTS = [
    {
        id: 9,
        name: 'Crisp Red Apples (1kg)',
        price: 180,
        originalPrice: 240,
        discount: 25,
        image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=400&q=80',
        category: 'fruits',
        rating: 4.7,
        endsIn: '24:00:00'
    },
    {
        id: 11,
        name: 'Fresh Broccoli',
        price: 90,
        originalPrice: 150,
        discount: 40,
        image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=400&q=80',
        category: 'vegetables',
        rating: 4.9,
        endsIn: '12:30:00'
    },
    {
        id: 15,
        name: 'Cheddar Cheese Block',
        price: 450,
        originalPrice: 600,
        discount: 25,
        image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=400&q=80',
        category: 'dairy',
        rating: 4.7,
        endsIn: '48:00:00'
    },
    {
        id: 19,
        name: 'Butter Croissants (4)',
        price: 180,
        originalPrice: 225,
        discount: 20,
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=400&q=80',
        category: 'bakery',
        rating: 4.9,
        endsIn: '05:45:00'
    },
];

const BUNDLE_DEALS = [
    {
        id: 'b1',
        title: 'Breakfast Essentials',
        description: 'Eggs, Milk, Bread & Butter — everything for a perfect morning.',
        items: ['Farm Fresh Eggs (12)', 'Whole Milk 1L', 'Sourdough Bread', 'Organic Butter'],
        bundlePrice: 320,
        originalPrice: 450,
        savings: 130,
        image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80',
        accent: 'from-amber-400 to-orange-500',
    },
    {
        id: 'b2',
        title: 'Salad Lovers Pack',
        description: 'Fresh greens, tomatoes, cucumbers & olive oil for healthy meals.',
        items: ['Mixed Greens', 'Cherry Tomatoes', 'Cucumber', 'Premium Olive Oil'],
        bundlePrice: 380,
        originalPrice: 560,
        savings: 180,
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
        accent: 'from-emerald-400 to-teal-500',
    },
    {
        id: 'b3',
        title: 'Fruit Fiesta Box',
        description: 'Seasonal mixed fruits — bananas, apples, strawberries & oranges.',
        items: ['Organic Bananas', 'Red Apples (1kg)', 'Fresh Strawberries', 'Juicy Oranges'],
        bundlePrice: 450,
        originalPrice: 680,
        savings: 230,
        image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=600&q=80',
        accent: 'from-rose-400 to-pink-500',
    },
];

const CLEARANCE_ITEMS = [
    {
        id: 'c1',
        name: 'Greek Yogurt (500g)',
        price: 99,
        originalPrice: 220,
        discount: 55,
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=400&q=80',
        category: 'dairy',
        rating: 4.3,
        stock: 8,
    },
    {
        id: 'c2',
        name: 'Whole Wheat Pasta',
        price: 65,
        originalPrice: 140,
        discount: 53,
        image: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?auto=format&fit=crop&w=400&q=80',
        category: 'pantry',
        rating: 4.1,
        stock: 12,
    },
    {
        id: 'c3',
        name: 'Jasmine Rice (2kg)',
        price: 120,
        originalPrice: 250,
        discount: 52,
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80',
        category: 'pantry',
        rating: 4.5,
        stock: 5,
    },
    {
        id: 'c4',
        name: 'Organic Honey (350ml)',
        price: 199,
        originalPrice: 420,
        discount: 53,
        image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=400&q=80',
        category: 'pantry',
        rating: 4.8,
        stock: 3,
    },
];

const Deals = () => {
    const { addToCart } = useCart();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-16">

            {/* Page Header */}
            <div className="bg-rose-50 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between border border-rose-100">
                <div className="mb-6 md:mb-0">
                    <div className="flex items-center gap-2 mb-2 text-rose-600">
                        <Tag className="w-6 h-6" />
                        <h1 className="text-3xl font-bold">Hot Deals Today</h1>
                    </div>
                    <p className="text-gray-600 max-w-xl">
                        Grab these amazing discounts before they expire! Up to 50% off on selected items across all categories.
                    </p>
                </div>
                <div className="hidden md:block">
                    <img
                        src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=300&q=80"
                        alt="Deals basket"
                        className="w-48 h-48 object-cover rounded-full border-4 border-white shadow-lg"
                    />
                </div>
            </div>

            {/* Deals Grid */}
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {DEALS_PRODUCTS.map((product) => (
                        <div key={product.id} className="bg-white rounded-xl shadow-sm border border-rose-100 overflow-hidden hover:shadow-md transition-shadow group flex flex-col relative">

                            {/* Discount Badge */}
                            <div className="absolute top-2 right-2 bg-rose-500 text-white font-bold px-3 py-1 rounded-full text-xs z-10 shadow-sm flex items-center gap-1">
                                -{product.discount}% OFF
                            </div>

                            <div className="relative aspect-square overflow-hidden bg-gray-100">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                                    <span className="text-white text-xs font-medium flex items-center gap-1">
                                        <Clock size={12} /> Ends in {product.endsIn}
                                    </span>
                                </div>
                            </div>

                            <div className="p-4 flex flex-col flex-1">
                                <div className="flex items-center text-amber-500 mb-2">
                                    <Star size={14} className="fill-current" />
                                    <span className="text-xs text-gray-600 ml-1 font-medium">{product.rating}</span>
                                    <span className="text-[10px] text-gray-400 capitalize ml-auto bg-gray-100 px-2 py-0.5 rounded-full">{product.category}</span>
                                </div>

                                <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">
                                    <Link to={`/products/${product.id}`} className="hover:text-emerald-600">
                                        {product.name}
                                    </Link>
                                </h3>

                                <div className="mt-auto pt-4 flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-400 line-through">
                                            ₹{product.originalPrice.toFixed(2)}
                                        </span>
                                        <span className="text-lg font-bold text-rose-600">
                                            ₹{product.price.toFixed(2)}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => addToCart(product)}
                                        className="bg-emerald-50 hover:bg-emerald-600 text-emerald-600 hover:text-white p-2 rounded-lg transition-colors shadow-sm"
                                        aria-label="Add to cart"
                                    >
                                        <ShoppingCart size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bundle Deals Section */}
            <section>
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600">
                        <Gift size={22} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Bundle Deals</h2>
                        <p className="text-gray-500 text-sm">Save more when you buy together</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {BUNDLE_DEALS.map((bundle) => (
                        <div key={bundle.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col">
                            <div className="relative h-48 overflow-hidden">
                                <img src={bundle.image} alt={bundle.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className={`absolute inset-0 bg-gradient-to-t ${bundle.accent} opacity-60`}></div>
                                <div className="absolute inset-0 flex flex-col justify-end p-5">
                                    <h3 className="text-xl font-bold text-white drop-shadow-md">{bundle.title}</h3>
                                    <p className="text-white/90 text-xs mt-1 drop-shadow-sm">{bundle.description}</p>
                                </div>
                                <div className="absolute top-3 right-3 bg-white text-emerald-600 font-bold px-3 py-1 rounded-full text-xs shadow-md">
                                    Save ₹{bundle.savings}
                                </div>
                            </div>
                            <div className="p-5 flex flex-col flex-1">
                                <div className="space-y-2 mb-5">
                                    {bundle.items.map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0"></div>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                                    <div>
                                        <span className="text-xs text-gray-400 line-through">₹{bundle.originalPrice}</span>
                                        <span className="text-xl font-bold text-gray-900 ml-2">₹{bundle.bundlePrice}</span>
                                    </div>
                                    <button
                                        onClick={() => addToCart({ id: bundle.id, name: bundle.title, price: bundle.bundlePrice, image: bundle.image })}
                                        className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors shadow-sm hover:shadow-md"
                                    >
                                        Add Bundle
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Clearance Sale Section */}
            <section>
                <div className="bg-gradient-to-r from-red-600 to-rose-500 rounded-2xl p-6 sm:p-8 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4 text-white">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                            <Percent size={24} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Clearance Sale</h2>
                            <p className="text-rose-100 text-sm">Up to 55% off — limited stock only!</p>
                        </div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 text-white text-sm font-semibold">
                        While Stocks Last
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {CLEARANCE_ITEMS.map((item) => (
                        <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group flex flex-col relative">
                            {/* Discount Badge */}
                            <div className="absolute top-2 right-2 bg-red-600 text-white font-bold px-3 py-1 rounded-full text-xs z-10 shadow-sm">
                                -{item.discount}%
                            </div>
                            {/* Low Stock Warning */}
                            {item.stock <= 5 && (
                                <div className="absolute top-2 left-2 bg-amber-100 text-amber-700 font-semibold px-2 py-0.5 rounded-full text-[10px] z-10">
                                    Only {item.stock} left!
                                </div>
                            )}
                            <div className="relative aspect-square overflow-hidden bg-gray-100">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="p-4 flex flex-col flex-1">
                                <div className="flex items-center text-amber-500 mb-2">
                                    <Star size={14} className="fill-current" />
                                    <span className="text-xs text-gray-600 ml-1 font-medium">{item.rating}</span>
                                    <span className="text-[10px] text-gray-400 capitalize ml-auto bg-gray-100 px-2 py-0.5 rounded-full">{item.category}</span>
                                </div>
                                <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.name}</h3>
                                {/* Stock Bar */}
                                <div className="mt-2 mb-3">
                                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                                        <div
                                            className="bg-red-500 h-1.5 rounded-full transition-all"
                                            style={{ width: `${Math.min(item.stock * 8, 100)}%` }}
                                        ></div>
                                    </div>
                                    <span className="text-[10px] text-gray-400 mt-1 inline-block">{item.stock} in stock</span>
                                </div>
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-400 line-through">₹{item.originalPrice.toFixed(2)}</span>
                                        <span className="text-lg font-bold text-red-600">₹{item.price.toFixed(2)}</span>
                                    </div>
                                    <button
                                        onClick={() => addToCart(item)}
                                        className="bg-red-50 hover:bg-red-600 text-red-600 hover:text-white p-2 rounded-lg transition-colors shadow-sm"
                                        aria-label="Add to cart"
                                    >
                                        <ShoppingCart size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="text-center">
                <Link to="/products" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors">
                    View All Regular Products
                </Link>
            </div>
        </div>
    );
};

export default Deals;
