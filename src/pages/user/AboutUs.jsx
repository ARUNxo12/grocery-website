import React from 'react';

const AboutUs = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-8 text-center">
                About FreshCart
            </h1>
            <div className="bg-white rounded-xl shadow-lg p-8 space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                    Welcome to FreshCart, your premier destination for the freshest groceries and daily essentials.
                    We are committed to providing you with the highest quality products, exceptional customer service,
                    and a seamless shopping experience.
                </p>
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    <div className="text-center p-6 bg-emerald-50 rounded-lg">
                        <h3 className="text-xl font-bold text-emerald-800 mb-4">Our Mission</h3>
                        <p>To deliver fresh, high-quality groceries right to your doorstep, making healthy living accessible and convenient for everyone.</p>
                    </div>
                    <div className="text-center p-6 bg-teal-50 rounded-lg">
                        <h3 className="text-xl font-bold text-teal-800 mb-4">Quality First</h3>
                        <p>We partner directly with local farmers and trusted suppliers to ensure every item meets our strict freshness and quality standards.</p>
                    </div>
                    <div className="text-center p-6 bg-cyan-50 rounded-lg">
                        <h3 className="text-xl font-bold text-cyan-800 mb-4">Customer Support</h3>
                        <p>Our dedicated support team is available 24/7 to ensure your complete satisfaction with every order.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
