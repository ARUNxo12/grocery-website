import { useState, useEffect } from 'react';
import { adminApi } from '../../services/adminApi';

const ManageCategories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showAddForm, setShowAddForm] = useState(false);
    const [editingCategory, setEditingCategory] = useState(null);
    const [newCategory, setNewCategory] = useState({ name: '', description: '', image: '' });

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            setLoading(true);
            const res = await adminApi.getCategories();
            setCategories(res.data.data || res.data);
            setError(null);
        } catch (err) {
            setError(err.response?.data?.message || err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleAddCategory = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            if (editingCategory) {
                await adminApi.updateCategory(editingCategory._id || editingCategory.id, newCategory);
                alert('Category updated successfully!');
            } else {
                await adminApi.createCategory(newCategory);
                alert('Category added successfully!');
            }
            setShowAddForm(false);
            setEditingCategory(null);
            setNewCategory({ name: '', description: '', image: '' });
            fetchCategories();
        } catch (err) {
            alert(err.response?.data?.message || err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (category) => {
        setEditingCategory(category);
        setNewCategory({
            name: category.name,
            description: category.description || '',
            image: category.image || ''
        });
        setShowAddForm(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this category?')) {
            try {
                setLoading(true);
                await adminApi.deleteCategory(id);
                alert('Category deleted successfully!');
                fetchCategories();
            } catch (err) {
                alert(err.response?.data?.message || err.message);
            } finally {
                setLoading(false);
            }
        }
    };

    const handleCancel = () => {
        setShowAddForm(false);
        setEditingCategory(null);
        setNewCategory({ name: '', description: '', image: '' });
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Manage Categories</h1>
                <button
                    onClick={() => showAddForm ? handleCancel() : setShowAddForm(true)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
                >
                    {showAddForm ? 'Cancel' : 'Add New Category'}
                </button>
            </div>

            {error && <div className="bg-red-50 text-red-600 p-3 rounded-md">{error}</div>}

            {showAddForm && (
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
                    <h2 className="text-lg font-semibold mb-4">{editingCategory ? 'Edit Category' : 'Add a Category'}</h2>
                    <form onSubmit={handleAddCategory} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input required type="text" value={newCategory.name} onChange={e => setNewCategory({ ...newCategory, name: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                            <input type="text" value={newCategory.image} onChange={e => setNewCategory({ ...newCategory, image: e.target.value })} placeholder="https://example.com/image.png" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                            <textarea value={newCategory.description} onChange={e => setNewCategory({ ...newCategory, description: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-md" rows="3"></textarea>
                        </div>
                        <div className="md:col-span-2 flex justify-end mt-2">
                            <button type="submit" disabled={loading} className="bg-gray-900 text-white px-6 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors disabled:opacity-50">
                                {loading ? 'Saving...' : 'Save Category'}
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
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {loading && categories.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="px-6 py-4 text-center text-sm text-gray-500">Loading categories...</td>
                            </tr>
                        ) : categories.map(category => (
                            <tr key={category._id || category.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <img src={category.image || 'https://via.placeholder.com/40'} alt={category.name} className="h-10 w-10 object-cover rounded" />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{category.name}</td>
                                <td className="px-6 py-4 text-sm text-gray-500">{category.description || 'N/A'}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-3">
                                    <button onClick={() => handleEdit(category)} className="text-emerald-600 hover:text-emerald-900 font-medium">Edit</button>
                                    <button onClick={() => handleDelete(category._id || category.id)} className="text-red-600 hover:text-red-900 font-medium">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {!loading && categories.length === 0 && (
                    <div className="p-12 text-center text-gray-500">No categories found. Add one above.</div>
                )}
            </div>
        </div>
    );
};

export default ManageCategories;
