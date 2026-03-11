import React from 'react';

const Returns = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Returns & Refunds</h1>
            <div className="bg-white rounded-xl shadow-lg p-8 text-gray-700">
                <p className="text-lg mb-8 text-center text-gray-600">Your satisfaction is our top priority. We stand behind the quality of our products with a straightforward return policy.</p>

                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-semibold text-emerald-700 mb-3">Freshness Guarantee</h2>
                        <p>If you receive any fresh produce, dairy, or meat items that do not meet your expectations, please notify us within 24 hours of delivery. We will promptly issue a full refund or replacement. No need to return the item to us.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-emerald-700 mb-3">Non-Perishable Items</h2>
                        <p>Pantry staples and non-perishable goods can be returned within 7 days of delivery, provided they are unopened and in their original packaging.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-emerald-700 mb-3">How to Initiate a Return</h2>
                        <ol className="list-decimal pl-6 space-y-2 mt-4">
                            <li>Log into your account and navigate to "Order History".</li>
                            <li>Select the order containing the item(s) you wish to return.</li>
                            <li>Click on "Report an Issue" and select the reason.</li>
                            <li>Our support team will review your request and process the refund within 1-2 business days.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Returns;
