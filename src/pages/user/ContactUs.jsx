import React, { useState } from 'react';
import { CheckCircle, Send, Phone, Mail, MapPin } from 'lucide-react';

const ContactUs = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.message) {
            setSubmitted(true);
        }
    };

    if (submitted) {
        return (
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-2xl shadow-xl border border-emerald-100 p-8 sm:p-12 text-center max-w-lg mx-auto relative overflow-hidden">
                    <div className="absolute -top-16 -right-16 w-32 h-32 bg-emerald-100 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-green-100 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                        <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-emerald-200">
                            <CheckCircle size={40} />
                        </div>
                        <h2 className="text-2xl font-black text-gray-900 mb-3">Message Sent Successfully! ✉️</h2>
                        <p className="text-gray-500 mb-2">Thank you for reaching out, <span className="font-semibold text-emerald-600">{formData.name}</span>!</p>
                        <p className="text-gray-400 text-sm mb-6">We've received your message and our support team will get back to you within 24 hours at <span className="font-medium text-gray-600">{formData.email}</span>.</p>

                        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6">
                            <p className="text-emerald-700 text-sm font-medium">💬 Our average response time is under 2 hours during business hours.</p>
                        </div>

                        <button
                            onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
                            className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold rounded-xl text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-md hover:scale-105 active:scale-95"
                        >
                            Send Another Message
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Contact Us</h1>
            <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-semibold text-emerald-700 mb-6">Get in Touch</h2>
                        <p className="text-gray-600 mb-8">We're here to help! If you have any questions or concerns, please don't hesitate to reach out to our professional support team.</p>
                        <div className="space-y-4">
                            <div className="flex items-center text-gray-700">
                                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mr-3 flex-shrink-0">
                                    <Phone size={20} />
                                </div>
                                <span>+1 (800) 123-4567</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mr-3 flex-shrink-0">
                                    <Mail size={20} />
                                </div>
                                <span>support@freshcart.com</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mr-3 flex-shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <span>123 Fresh Street, Market District</span>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                                placeholder="your@email.com"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea
                                rows="4"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                                placeholder="How can we help you?"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-emerald-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-emerald-700 transition-colors inline-flex items-center justify-center gap-2"
                        >
                            <Send size={16} />
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
