import React from 'react';

const Faqs = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">Frequently Asked Questions</h1>
            <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                    <h3 className="text-xl font-semibold text-emerald-800 mb-2">How fast is your delivery?</h3>
                    <p className="text-gray-600">We offer same-day delivery for all orders placed before 2 PM. Orders placed after 2 PM will be delivered the next morning.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                    <h3 className="text-xl font-semibold text-emerald-800 mb-2">Are your products really fresh?</h3>
                    <p className="text-gray-600">Yes! We restock daily from local farms and trusted suppliers. Our quality assurance team inspects all items before they are dispatched.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                    <h3 className="text-xl font-semibold text-emerald-800 mb-2">What payment methods do you accept?</h3>
                    <p className="text-gray-600">We accept major credit cards (Visa, MasterCard, Amex), PayPal, and Apple Pay/Google Pay via our secure checkout gateway.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                    <h3 className="text-xl font-semibold text-emerald-800 mb-2">Can I modify my order after placing it?</h3>
                    <p className="text-gray-600">Orders can be modified within 15 minutes of placing them. Please contact our support team immediately for assistance.</p>
                </div>
            </div>

            <div className="mt-16 bg-emerald-50 rounded-xl p-8 border border-emerald-100">
                <h2 className="text-2xl font-bold text-center text-emerald-900 mb-6">Still have a question?</h2>
                <form className="max-w-2xl mx-auto space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-emerald-800 mb-1">Name</label>
                            <input type="text" className="w-full px-4 py-2 border border-emerald-200 rounded-md focus:ring-emerald-500 focus:border-emerald-500 bg-white" placeholder="Your Name" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-emerald-800 mb-1">Email</label>
                            <input type="email" className="w-full px-4 py-2 border border-emerald-200 rounded-md focus:ring-emerald-500 focus:border-emerald-500 bg-white" placeholder="your@email.com" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-emerald-800 mb-1">Your Question</label>
                        <textarea rows="4" className="w-full px-4 py-2 border border-emerald-200 rounded-md focus:ring-emerald-500 focus:border-emerald-500 bg-white" placeholder="Type your question here..."></textarea>
                    </div>
                    <div className="text-center">
                        <button type="button" className="bg-emerald-600 text-white font-semibold py-2 px-8 rounded-md hover:bg-emerald-700 transition-colors">
                            Submit Question
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Faqs;
