import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Clock, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [formState, setFormState] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormState('submitting');
        // Simulate Netlify form submission
        setTimeout(() => {
            setFormState('success');
        }, 1500);
    };

    const contactOptions = [
        { title: "Direct Call", value: "+91-XXXXXXXXXX", icon: Phone, color: "bg-blue-50 text-blue-600", link: "tel:+91XXXXXXXXXX" },
        { title: "WhatsApp Support", value: "+91-XXXXXXXXXX", icon: Send, color: "bg-emerald-50 text-emerald-600", link: "https://wa.me/91XXXXXXXXXX" },
        { title: "Business Email", value: "info@kirancopperhouse.com", icon: Mail, color: "bg-amber-50 text-amber-600", link: "mailto:info@kirancopperhouse.com" },
    ];

    return (
        <div className="bg-slate-50 min-h-screen py-12">
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Get in Touch</h1>
                    <p className="text-light text-lg">Have questions about a new phone or need a repair quote? We're here to help.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Information */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-2xl font-bold text-dark mb-8">Contact Information</h3>
                            <div className="space-y-6">
                                {contactOptions.map((opt, idx) => (
                                    <motion.a
                                        key={idx}
                                        href={opt.link}
                                        whileHover={{ x: 5 }}
                                        className="flex items-center gap-6 p-6 bg-white rounded-card border border-slate-100 shadow-sm"
                                    >
                                        <div className={cn("w-14 h-14 rounded-full flex items-center justify-center shrink-0", opt.color)}>
                                            <opt.icon size={26} />
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{opt.title}</h4>
                                            <p className="text-lg font-bold text-dark">{opt.value}</p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        <div className="bg-dark text-white p-10 rounded-card shadow-xl overflow-hidden relative">
                            <Clock className="absolute top-0 right-0 w-48 h-48 opacity-5 -translate-y-1/2 translate-x-1/2" />
                            <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                                <Clock size={24} className="text-secondary" /> Opening Hours
                            </h4>
                            <ul className="space-y-4 text-slate-300">
                                <li className="flex justify-between border-b border-slate-700 pb-2">
                                    <span>Monday - Sunday</span>
                                    <span className="text-secondary font-bold">9:00 AM - 9:00 PM</span>
                                </li>
                                <li className="text-sm italic text-slate-500 pt-2">
                                    * Open all 7 days for the convenience of Rajgarh community.
                                </li>
                            </ul>
                        </div>

                        <div className="flex gap-4">
                            {['Instagram', 'Facebook'].map(social => (
                                <button key={social} className="flex-1 bg-white p-4 rounded-btn border border-slate-200 font-bold text-dark hover:border-primary transition-all flex items-center justify-center gap-2">
                                    {social === 'Instagram' ? <Instagram size={18} /> : <Facebook size={18} />} {social}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 md:p-12 rounded-card shadow-lg border border-slate-100 h-full">
                        <h3 className="text-2xl font-bold text-dark mb-8">Send a Message</h3>

                        <AnimatePresence mode='wait'>
                            {formState === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center py-20 text-center"
                                >
                                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <h4 className="text-2xl font-bold text-dark mb-3">Message Sent!</h4>
                                    <p className="text-light mb-8">Thank you for reaching out. We'll get back to you within 2 hours.</p>
                                    <button
                                        onClick={() => setFormState('idle')}
                                        className="btn-primary"
                                    >
                                        Send Another Message
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="space-y-6"
                                    onSubmit={handleSubmit}
                                    data-netlify="true"
                                    name="contact"
                                >
                                    <input type="hidden" name="form-name" value="contact" />
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-xs font-bold text-dark uppercase tracking-widest">Full Name</label>
                                            <input
                                                required
                                                type="text"
                                                name="name"
                                                placeholder="Lucky Jain"
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-btn focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-xs font-bold text-dark uppercase tracking-widest">Phone Number</label>
                                            <input
                                                required
                                                type="tel"
                                                name="phone"
                                                placeholder="10 digit mobile number"
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-btn focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold text-dark uppercase tracking-widest">Interest</label>
                                        <select
                                            name="interest"
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-btn focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none cursor-pointer"
                                        >
                                            <option>General Enquiry</option>
                                            <option>New Phone Purchase</option>
                                            <option>Repair Service</option>
                                            <option>Accessories</option>
                                            <option>Trade-In / Exchange</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold text-dark uppercase tracking-widest">Message</label>
                                        <textarea
                                            required
                                            name="message"
                                            rows="4"
                                            placeholder="How can we help you?"
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-btn focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        disabled={formState === 'submitting'}
                                        type="submit"
                                        className="btn-primary w-full py-4 text-lg disabled:opacity-70"
                                    >
                                        {formState === 'submitting' ? (
                                            <span className="flex items-center gap-2">
                                                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                                                Sending...
                                            </span>
                                        ) : (
                                            <>Send Message <Send size={18} /></>
                                        )}
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mt-24">
                    <div className="w-full h-[500px] bg-slate-200 rounded-[2rem] overflow-hidden border border-slate-200 relative">
                        {/* Map Placeholder */}
                        <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                            <div className="text-center">
                                <MapPin size={64} className="mx-auto mb-4 opacity-30" />
                                <p className="font-bold uppercase tracking-widest">Shop Location Map Placeholder</p>
                                <a href="https://maps.google.com" target="_blank" className="text-primary hover:underline mt-4 inline-block">View on Google Maps</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Helper
function cn(...inputs) {
    return inputs.filter(Boolean).join(' ');
}

export default Contact;
