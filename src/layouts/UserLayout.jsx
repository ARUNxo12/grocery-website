import { Outlet } from 'react-router-dom';
import Navbar from '../components/user/Navbar';
import Footer from '../components/user/Footer';

const UserLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Top Banner (Optional) */}
            <div className="bg-emerald-600 text-white text-xs text-center py-1.5 font-medium tracking-wide">
                Free delivery on orders over ₹4000! Shop now ➔
            </div>

            {/* Navigation */}
            <Navbar />

            {/* Main Content Area */}
            <main className="flex-grow w-full">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default UserLayout;
