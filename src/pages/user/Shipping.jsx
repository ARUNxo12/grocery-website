import React from 'react';

const Shipping = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Shipping Policy</h1>
            <div className="bg-white rounded-xl shadow-lg p-8 prose prose-emerald max-w-none text-gray-700">
                <h2 className="text-2xl font-semibold text-emerald-700 mb-4">Delivery Zones & Timings</h2>
                <p className="mb-6">We currently deliver to all metropolitan and suburban areas within a 50-mile radius of our fulfillment centers. Deliveries operate 7 days a week, from 8:00 AM to 9:00 PM.</p>

                <h2 className="text-2xl font-semibold text-emerald-700 mb-4">Shipping Charges</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li><strong>Orders over $50:</strong> Free Delivery</li>
                    <li><strong>Orders under $50:</strong> Flat rate of $5.99</li>
                    <li><strong>Express 1-hour delivery:</strong> $9.99 (Subject to availability)</li>
                </ul>

                <h2 className="text-2xl font-semibold text-emerald-700 mb-4">Order Tracking</h2>
                <p>Once your order is dispatched, you will receive an SMS and email with a live tracking link. Our professional delivery partners ensure your items are kept at appropriate temperatures during transit.</p>
            </div>
        </div>
    );
};

export default Shipping;
