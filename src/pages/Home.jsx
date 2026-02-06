import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, ShieldCheck, Zap, Star, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import ServiceCard from '../components/ServiceCard';
import ReviewCard from '../components/ReviewCard';

const Home = () => {
    const featuredProducts = [
        { id: 1, name: "iPhone 15 Pro", brand: "Apple", price: "₹1,24,900", stockStatus: "In Stock", image: "https://images.unsplash.com/photo-1695048133142-1a20484d25fa?auto=format&fit=crop&q=80&w=800", specs: { processor: "A17 Pro", camera: "48MP", battery: "24h+", display: "6.1\" OLED" } },
        { id: 2, name: "Galaxy S24 Ultra", brand: "Samsung", price: "₹1,29,999", stockStatus: "In Stock", image: "https://images.unsplash.com/photo-1707153123306-381f2117565c?auto=format&fit=crop&q=80&w=800", specs: { processor: "SD 8 Gen 3", camera: "200MP", battery: "5000mAh", display: "6.8\" AMOLED" } },
        { id: 3, name: "Xiaomi 14", brand: "Xiaomi", price: "₹69,999", stockStatus: "In Stock", image: "https://images.unsplash.com/photo-1709664551100-3306236bb56e?auto=format&fit=crop&q=80&w=800", specs: { processor: "SD 8 Gen 3", camera: "Leica 50MP", battery: "4610mAh", display: "6.36\" LTPO" } },
        { id: 4, name: "OnePlus 12", brand: "OnePlus", price: "₹64,999", stockStatus: "In Stock", image: "https://images.unsplash.com/photo-1706175440798-23acc1bc2100?auto=format&fit=crop&q=80&w=800", specs: { processor: "SD 8 Gen 3", camera: "Hasselblad 50MP", battery: "5400mAh", display: "6.82\" 2K" } },
    ];

    const services = [
        { title: "Mobile Sales", description: "Latest smartphones from Apple, Samsung, Xiaomi, and more with genuine warranty.", icon: Smartphone },
        { title: "Expert Repairs", description: "Professional screen replacement, battery changes, and software fixes for all brands.", icon: Zap, price: "₹200" },
        { title: "Genuine Accessories", description: "High-quality cases, chargers, earphones, and tempered glass to protect your device.", icon: ShieldCheck },
    ];

    const testimonials = [
        { name: "Rahul S.", text: "Best mobile shop in Rajgarh! Got amazing deal on my new iPhone. Lucky bhai is very helpful and knowledgeable." },
        { name: "Priya M.", text: "Genuine products and quick service. My phone screen was replaced in 2 hours. Highly recommended!" },
        { name: "Amit K.", text: "Fixed my Samsung software issue same day. Great experience and fair pricing." },
    ];

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=2000"
                        alt="Mobile Shop Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
                </div>

                <div className="container mx-auto px-4 md:px-8 relative z-10 text-white">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary border border-secondary/30 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                            <Star size={14} fill="currentColor" /> Owned by Lucky Jain - Rajgarh's Trusted Choice
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            Rajgarh's Trusted <br />
                            <span className="text-primary italic">Mobile Destination</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
                            Experience the latest technology with genuine smartphones, premium accessories,
                            and professional repair services. Serving the Rajgarh community with trust and excellence.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/products" className="btn-primary px-10 py-4 text-lg">
                                Shop Now <ArrowRight size={20} />
                            </Link>
                            <Link to="/contact" className="btn-secondary text-white border-white hover:bg-white/10 px-10 py-4 text-lg">
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="py-12 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 md:px-8 flex flex-wrap justify-center md:justify-around gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
                    {['Authorized Dealer', 'Genuine Products', '1-Year Warranty', 'Easy EMI'].map((badge) => (
                        <div key={badge} className="flex items-center gap-2 font-bold text-dark uppercase tracking-widest text-xs">
                            <ShieldCheck size={20} className="text-primary" /> {badge}
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Latest Arrivals</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-dark">Featured Smartphones</h3>
                        </div>
                        <Link to="/products" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                            View All Products <ArrowRight size={18} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 order-2 lg:order-1">
                        <div className="bg-primary/5 p-8 rounded-card border border-primary/10">
                            <Star size={32} className="text-primary mb-6" />
                            <h4 className="font-bold text-lg mb-2">Authorized Dealer</h4>
                            <p className="text-sm text-light leading-relaxed">Only 100% genuine products with official brand warranty.</p>
                        </div>
                        <div className="bg-secondary/5 p-8 rounded-card border border-secondary/10">
                            <Zap size={32} className="text-secondary mb-6" />
                            <h4 className="font-bold text-lg mb-2">Best Prices</h4>
                            <p className="text-sm text-light leading-relaxed">Competitive rates and exclusive offers in Rajgarh Dhar.</p>
                        </div>
                        <div className="bg-accent/5 p-8 rounded-card border border-accent/10">
                            <Smartphone size={32} className="text-accent mb-6" />
                            <h4 className="font-bold text-lg mb-2">Expert Guidance</h4>
                            <p className="text-sm text-light leading-relaxed">Tech-savvy advice from Lucky Jain to choose your perfect device.</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-card border border-slate-200">
                            <ShieldCheck size={32} className="text-dark mb-6" />
                            <h4 className="font-bold text-lg mb-2">Community Trust</h4>
                            <p className="text-sm text-light leading-relaxed">Serving the Rajgarh community with honesty for years.</p>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">The Experience</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-dark mb-8 leading-tight">
                            Why Rajgarh Chooses <br />
                            <span className="text-primary">Kiran Copper House</span>
                        </h3>
                        <p className="text-light text-lg mb-10 leading-relaxed">
                            We're not just a shop; we're your technology partners. From the latest flagships
                            to reliable budget devices, we ensure you get the best value and support in the region.
                        </p>
                        <ul className="space-y-4">
                            {['Wide range of all top smartphone brands', 'Original accessories and parts', 'Quick and reliable repair shop', 'Flexible EMI and exchange offers'].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-dark font-medium">
                                    <div className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                                        <Zap size={10} strokeWidth={3} />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Our Expertise</h2>
                        <h3 className="text-3xl md:text-4xl font-bold mb-6">Professional Services</h3>
                        <p className="text-slate-400">From sales to repairs, we provide comprehensive mobile solutions tailored to your needs.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <ServiceCard key={idx} service={service} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Reviews</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-dark">What Our Customers Say</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((review, idx) => (
                            <ReviewCard key={idx} review={review} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section className="relative h-[600px] bg-slate-100">
                {/* Map Placeholder */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000"
                        alt="Map Background"
                        className="w-full h-full object-cover grayscale opacity-40"
                    />
                </div>

                <div className="container mx-auto px-4 md:px-8 relative h-full flex items-center">
                    <div className="bg-white p-10 rounded-card shadow-2xl max-w-md border border-slate-100 relative z-10">
                        <h4 className="text-2xl font-bold text-dark mb-6">Visit Our Store</h4>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <MapPin className="text-primary shrink-0" size={24} />
                                <p className="text-light">
                                    Kiran Copper House Mobile Shop,<br />
                                    Rajgarh, Dhar - 454116, Madhya Pradesh
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <ShieldCheck className="text-primary shrink-0" size={24} />
                                <p className="text-light">Open every day: 9:00 AM - 9:00 PM</p>
                            </div>
                        </div>
                        <div className="mt-10 flex flex-col gap-3">
                            <a href="https://maps.google.com" target="_blank" className="btn-primary w-full py-4">Get Directions</a>
                            <Link to="/contact" className="text-center font-bold text-primary hover:underline">Contact Details</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Simple Check icon for the list
const Check = ({ size = 20, strokeWidth = 2 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
);

export default Home;
