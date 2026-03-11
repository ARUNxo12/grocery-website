import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, CheckCircle, X, MapPin, Phone } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import api from '../../services/api';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();

    const [orderPlaced, setOrderPlaced] = useState(false);
    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const [shippingAddress, setShippingAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [orderLoading, setOrderLoading] = useState(false);
    const [orderError, setOrderError] = useState('');

    const tax = cartTotal * 0.05; // 5% simulated tax
    const deliveryFee = cartTotal > 4000 ? 0 : 50; // Free delivery over ₹4000
    const finalTotal = cartTotal + tax + deliveryFee;

    const handleProceedToCheckout = () => {
        if (!user) {
            navigate('/login');
            // Or show error banner here
            // setOrderError('Please log in to checkout.');
            return;
        }
        setIsCheckingOut(true);
    };

    const submitOrder = async (e) => {
        e.preventDefault();
        setOrderError('');
        if (!shippingAddress.trim() || !phone.trim()) {
            setOrderError('Please provide both shipping address and phone number.');
            return;
        }

        setOrderLoading(true);
        try {
            const formattedProducts = cartItems.map(item => ({
                product: item.id || item._id,
                quantity: item.quantity
            }));

            await api.post('/orders', {
                products: formattedProducts,
                shippingAddress,
                phone
            });

            setOrderPlaced(true);
            clearCart();
        } catch (err) {
            console.error('Checkout error:', err);
            setOrderError(err.response?.data?.message || 'Failed to place order. Please try again.');
        } finally {
            setOrderLoading(false);
        }
    };

    if (orderPlaced) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                {/* Success Notification */}
                <div className="relative bg-white rounded-3xl shadow-2xl border border-emerald-100 p-8 sm:p-12 max-w-lg w-full text-center overflow-hidden">
                    {/* Decorative background */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-100 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-green-100 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                        <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-emerald-200 animate-bounce">
                            <CheckCircle size={40} />
                        </div>
                        <h2 className="text-3xl font-black text-gray-900 mb-3">Order Placed Successfully! 🎉</h2>
                        <p className="text-gray-500 mb-2 text-base">Thank you for your order!</p>
                        <p className="text-gray-400 text-sm mb-8">Your fresh groceries are being prepared and will be delivered to your doorstep soon. You'll receive a confirmation email shortly.</p>

                        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 mb-8">
                            <p className="text-emerald-700 text-sm font-medium">📦 Estimated Delivery: <span className="font-bold">Today, 4:00 PM – 6:00 PM</span></p>
                        </div>

                        <Link
                            to="/products"
                            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-2xl text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 hover:scale-105 active:scale-95"
                        >
                            Continue Shopping
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    if (cartItems.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-6">
                    <ShoppingBag size={48} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
                <p className="text-gray-500 mb-8 text-center max-w-md">Looks like you haven't added anything to your cart yet. Browse our categories and discover our fresh products.</p>
                <Link
                    to="/products"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm cursor-pointer"
                >
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

            <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">

                {/* Cart Items List */}
                <div className="lg:col-span-7 xl:col-span-8">
                    <div className="bg-white border text-gray-900 rounded-xl shadow-sm border-gray-100 overflow-hidden">
                        <ul className="divide-y divide-gray-100">
                            {cartItems.map((item) => (
                                <li key={item.id} className="flex py-6 px-4 sm:px-6 transition-colors hover:bg-gray-50">
                                    <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden bg-gray-50">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="ml-4 flex-1 flex flex-col justify-between">
                                        <div>
                                            <div className="flex justify-between">
                                                <h3 className="text-base font-medium text-gray-900 line-clamp-2">
                                                    <Link to={`/products/${item.id}`}>{item.name}</Link>
                                                </h3>
                                                <p className="ml-4 text-base font-bold text-gray-900 shrink-0">
                                                    ₹{item.price.toFixed(2)}
                                                </p>
                                            </div>
                                            <p className="mt-1 text-sm text-gray-500 capitalize">{item.category}</p>
                                        </div>
                                        <div className="flex items-center justify-between mt-4">
                                            <div className="flex items-center border border-gray-300 rounded-md bg-white">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="p-1 text-gray-600 hover:text-emerald-600 hover:bg-gray-50 rounded-l-md transition-colors"
                                                >
                                                    <Minus size={16} />
                                                </button>
                                                <span className="px-4 py-1 text-sm font-medium text-gray-900 border-x border-gray-300">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="p-1 text-gray-600 hover:text-emerald-600 hover:bg-gray-50 rounded-r-md transition-colors"
                                                >
                                                    <Plus size={16} />
                                                </button>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-sm font-medium text-rose-500 hover:text-rose-600 flex items-center gap-1 transition-colors"
                                            >
                                                <Trash2 size={16} /> <span className="hidden sm:inline">Remove</span>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="bg-gray-50 px-4 py-4 sm:px-6 flex justify-between items-center border-t border-gray-100">
                            <button
                                onClick={clearCart}
                                className="text-sm font-medium text-gray-500 hover:text-rose-600 transition-colors"
                            >
                                Clear Cart
                            </button>
                            <Link to="/products" className="text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors">
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-5 xl:col-span-4 mt-8 lg:mt-0">
                    <div className="bg-white border rounded-xl shadow-sm border-gray-100 p-6 sticky top-24">
                        <h2 className="text-lg font-medium text-gray-900 mb-6">Order Summary</h2>

                        <div className="space-y-4">
                            <div className="flex justify-between text-base text-gray-600">
                                <p>Subtotal</p>
                                <p className="font-medium text-gray-900">₹{cartTotal.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between text-base text-gray-600">
                                <p>Tax (5%)</p>
                                <p className="font-medium text-gray-900">₹{tax.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between border-b border-gray-100 pb-4 text-base text-gray-600">
                                <p>Delivery</p>
                                <p className="font-medium text-gray-900">
                                    {deliveryFee === 0 ? <span className="text-emerald-600">Free</span> : `₹${deliveryFee.toFixed(2)}`}
                                </p>
                            </div>
                            <div className="flex justify-between text-lg font-bold text-gray-900 pt-2">
                                <p>Total</p>
                                <p>₹{finalTotal.toFixed(2)}</p>
                            </div>
                        </div>

                        <div className="mt-8">
                            {!isCheckingOut ? (
                                <button
                                    type="button"
                                    onClick={handleProceedToCheckout}
                                    className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors"
                                >
                                    Proceed to Checkout
                                    <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
                                </button>
                            ) : (
                                <form onSubmit={submitOrder} className="mt-4 p-4 border border-gray-200 rounded-lg bg-gray-50 flex flex-col gap-4">
                                    <h3 className="font-semibold text-gray-900 border-b pb-2">Delivery Details</h3>
                                    {orderError && <p className="text-sm text-rose-500 bg-rose-50 p-2 rounded">{orderError}</p>}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Shipping Address</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <MapPin size={16} className="text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                required
                                                value={shippingAddress}
                                                onChange={(e) => setShippingAddress(e.target.value)}
                                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm bg-white"
                                                placeholder="123 Main St, City"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Phone size={16} className="text-gray-400" />
                                            </div>
                                            <input
                                                type="tel"
                                                required
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm bg-white"
                                                placeholder="+1 234 567 8900"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={orderLoading}
                                        className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 transition-colors"
                                    >
                                        {orderLoading ? 'Processing...' : 'Place Order'}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setIsCheckingOut(false)}
                                        className="w-full py-2 text-sm text-gray-500 hover:text-gray-700"
                                    >
                                        Cancel
                                    </button>
                                </form>
                            )}
                        </div>

                        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500">
                            <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                            Secure Checkout
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Cart;
