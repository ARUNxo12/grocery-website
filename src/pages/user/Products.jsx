import { useState, useEffect } from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useSearchParams } from 'react-router-dom';
import api from '../../services/api';

const categoryTitles = {
    fruits: 'Fresh Fruits',
    vegetables: 'Vegetables',
    dairy: 'Dairy & Eggs',
    meat: 'Meat & Seafood',
    bakery: 'Bakery',
    pantry: 'Pantry'
};

const Products = () => {
    const { addToCart } = useCart();
    const [searchParams] = useSearchParams();
    const categoryQuery = searchParams.get('category');
    const searchQuery = searchParams.get('search');

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                let url = '/products?limit=100';
                if (categoryQuery) {
                    url += `&category=${categoryQuery.toLowerCase()}`;
                }
                const res = await api.get(url);
                setProducts(res.data.data || res.data);
                setError(null);
            } catch (err) {
                setError(err.response?.data?.message || err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [categoryQuery]);

    // Filter products based on search query parameter
    let displayedProducts = products;

    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        displayedProducts = displayedProducts.filter(product =>
            product.name?.toLowerCase().includes(query) ||
            product.category?.toLowerCase().includes(query)
        );
    }

    let pageTitle = 'All Products';
    if (searchQuery) {
        pageTitle = `Search Results: "${searchQuery}"`;
    } else if (categoryQuery) {
        pageTitle = categoryTitles[categoryQuery.toLowerCase()] || 'Products';
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">{pageTitle}</h1>
                    <p className="text-gray-500 mt-2">Showing {displayedProducts.length} results</p>
                </div>
                {/* Simple Filter Placeholder */}
                <select className="border border-gray-300 rounded-lg py-2 px-4 bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                </select>
            </div>

            {error && <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6">{error}</div>}

            {loading ? (
                <div className="text-center py-20 bg-gray-50 rounded-xl border border-gray-100">
                    <p className="text-gray-500">Loading products...</p>
                </div>
            ) : displayedProducts.length === 0 ? (
                <div className="text-center py-20 bg-gray-50 rounded-xl border border-gray-100">
                    <p className="text-gray-500">No products found in this category.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {displayedProducts.map((product) => (
                        <div key={product._id || product.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group flex flex-col">
                            <div className="relative aspect-square overflow-hidden bg-gray-100">
                                <img
                                    src={product.image || 'https://via.placeholder.com/400'}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-semibold text-emerald-700 capitalize">
                                    {product.category}
                                </div>
                            </div>
                            <div className="p-4 flex flex-col flex-1">
                                <div className="flex items-center text-amber-500 mb-2">
                                    <Star size={14} className="fill-current" />
                                    <span className="text-xs text-gray-600 ml-1 font-medium">{product.rating || 4.5}</span>
                                </div>
                                <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">
                                    {product.name}
                                </h3>
                                <div className="mt-auto pt-4 flex items-center justify-between">
                                    <span className="text-lg font-bold text-gray-900">
                                        ₹{product.price?.toFixed(2)}
                                    </span>
                                    <button
                                        onClick={() => addToCart(product)}
                                        className="bg-emerald-50 hover:bg-emerald-600 text-emerald-600 hover:text-white p-2 rounded-lg transition-colors"
                                        aria-label="Add to cart"
                                    >
                                        <ShoppingCart size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Products;
