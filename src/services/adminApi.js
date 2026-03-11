import api from './api';

export const adminApi = {
    // Products
    getProducts: () => api.get('/products'),
    getProduct: (id) => api.get(`/products/${id}`),
    createProduct: (data) => api.post('/products', data),
    updateProduct: (id, data) => api.put(`/products/${id}`, data),
    deleteProduct: (id) => api.delete(`/products/${id}`),

    // Orders
    getOrders: () => api.get('/orders'),
    updateOrderStatus: (id, status) => api.put(`/orders/${id}/status`, { status }),

    // Categories
    getCategories: () => api.get('/categories'),
    createCategory: (data) => api.post('/categories', data),
    updateCategory: (id, data) => api.put(`/categories/${id}`, data),
    deleteCategory: (id) => api.delete(`/categories/${id}`),

    // Users
    getUsers: () => api.get('/users'),
    deleteUser: (id) => api.delete(`/users/${id}`),

    // Dashboard Stats (Placeholder, since no stats route currently exists on the backend. Just map locally if needed, or we implement that backend route next.)
    getDashboardStats: () => api.get('/admin/stats'),
};
