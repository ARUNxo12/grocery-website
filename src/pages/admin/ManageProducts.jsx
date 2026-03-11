import { useState, useEffect } from 'react';
import { adminApi } from '../../services/adminApi';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showAddForm, setShowAddForm] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [newProduct, setNewProduct] = useState({ name: '', category: '', price: '', stock: '', image: '' });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const res = await adminApi.getProducts();
            setProducts(res.data.data || res.data);
            setError(null);
        } catch (err) {
            setError(err.response?.data?.message || err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleAddProduct = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const productData = {
                name: newProduct.name,
                category: newProduct.category,
                price: parseFloat(newProduct.price) || 0,
                stock: parseInt(newProduct.stock) || 0,
                image: newProduct.image || 'https://via.placeholder.com/100',
            };

            if (editingProduct) {
                await adminApi.updateProduct(editingProduct._id || editingProduct.id, productData);
                alert('Product updated successfully!');
            } else {
                await adminApi.createProduct(productData);
                alert('Product added successfully!');
            }

            setShowAddForm(false);
            setEditingProduct(null);
            setNewProduct({ name: '', category: '', price: '', stock: '', image: '' });
            fetchProducts();
        } catch (err) {
            alert(err.response?.data?.message || err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (product) => {
        setEditingProduct(product);
        setNewProduct({
            name: product.name,
            category: product.category,
            price: product.price,
            stock: product.stock,
            image: product.image || ''
        });
        setShowAddForm(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            try {
                setLoading(true);
                await adminApi.deleteProduct(id);
                alert('Product deleted successfully!');
                fetchProducts();
            } catch (err) {
                alert(err.response?.data?.message || err.message);
            } finally {
                setLoading(false);
            }
        }
    };

    const handleCancel = () => {
        setShowAddForm(false);
        setEditingProduct(null);
        setNewProduct({ name: '', category: '', price: '', stock: '', image: '' });
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Manage Products</h1>
                <button
                    onClick={() => showAddForm ? handleCancel() : setShowAddForm(true)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
                >
                    {showAddForm ? 'Cancel' : 'Add New Product'}
                </button>
            </div>

            {error && <div className="bg-red-50 text-red-600 p-3 rounded-md">{error}</div>}

            {showAddForm && (
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
                    <h2 className="text-lg font-semibold mb-4">{editingProduct ? 'Edit Product' : 'Add a Product'}</h2>
                    <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input required type="text" value={newProduct.name} onChange={e => setNewProduct({ ...newProduct, name: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                            <input required type="text" value={newProduct.category} onChange={e => setNewProduct({ ...newProduct, category: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
                            <input required type="number" step="0.01" value={newProduct.price} onChange={e => setNewProduct({ ...newProduct, price: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Stock</label>
                            <input required type="number" value={newProduct.stock} onChange={e => setNewProduct({ ...newProduct, stock: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                            <input type="text" value={newProduct.image} onChange={e => setNewProduct({ ...newProduct, image: e.target.value })} placeholder="https://example.com/image.png" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                        </div>
                        <div className="md:col-span-2 flex justify-end mt-2">
                            <button type="submit" disabled={loading} className="bg-gray-900 text-white px-6 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors disabled:opacity-50">
                                {loading ? 'Saving...' : 'Save Product'}
                            </button>
                        </div>
                    </form>
                </div>
            )}

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {loading && products.length === 0 ? (
                            <tr>
                                <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">Loading products...</td>
                            </tr>
                        ) : products.map(product => (
                            <tr key={product._id || product.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <img src={product.image || 'https://via.placeholder.com/40'} alt={product.name} className="h-10 w-10 object-cover rounded" />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.category}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${product.price?.toFixed(2)}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.stock}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-3">
                                    <button onClick={() => handleEdit(product)} className="text-blue-600 hover:text-blue-900 font-medium">Edit</button>
                                    <button onClick={() => handleDelete(product._id || product.id)} className="text-red-600 hover:text-red-900 font-medium">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {!loading && products.length === 0 && (
                    <div className="p-12 text-center text-gray-500">No products found. Add one above.</div>
                )}
            </div>
        </div>
    );
};

export default ManageProducts;
