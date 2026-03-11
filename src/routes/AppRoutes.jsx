import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

// Layouts
import UserLayout from '../layouts/UserLayout';
import AdminLayout from '../layouts/AdminLayout';

import Home from '../pages/user/Home';
import Products from '../pages/user/Products';
import Login from '../pages/user/Login';
import Cart from '../pages/user/Cart';
import Deals from '../pages/user/Deals';
import AboutUs from '../pages/user/AboutUs';
import ContactUs from '../pages/user/ContactUs';
import Faqs from '../pages/user/Faqs';
import Shipping from '../pages/user/Shipping';
import Returns from '../pages/user/Returns';

// Admin Pages
import AdminDashboard from '../pages/admin/AdminDashboard';
import ManageProducts from '../pages/admin/ManageProducts';
import ManageOrders from '../pages/admin/ManageOrders';
import ManageCategories from '../pages/admin/ManageCategories';
import ManageUsers from '../pages/admin/ManageUsers';
import AdminSettings from '../pages/admin/AdminSettings';

const AppRoutes = () => {
    return (
        <Routes>
            {/* Public Routes with User Layout */}
            <Route element={<UserLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/deals" element={<Deals />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/faqs" element={<Faqs />} />
                <Route path="/shipping" element={<Shipping />} />
                <Route path="/returns" element={<Returns />} />
                {/*
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          ... other user routes
        */}
            </Route>

            {/* Protected Admin Routes */}
            <Route element={<ProtectedRoute requiredRole="admin" />}>
                <Route element={<AdminLayout />}>
                    <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
                    <Route path="/admin/dashboard" element={<AdminDashboard />} />
                    <Route path="/admin/products" element={<ManageProducts />} />
                    <Route path="/admin/orders" element={<ManageOrders />} />
                    <Route path="/admin/categories" element={<ManageCategories />} />
                    <Route path="/admin/users" element={<ManageUsers />} />
                    <Route path="/admin/settings" element={<AdminSettings />} />

                </Route>
            </Route>

            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRoutes;
