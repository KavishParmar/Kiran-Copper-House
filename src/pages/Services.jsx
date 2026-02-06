import { motion } from 'framer-motion';
import { Smartphone, Zap, ShieldCheck, Camera, Battery, Settings, Database, Waves, Send, Phone, Star } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
    const repairServices = [
        { title: "Screen Replacement", description: "Cracked or non-responsive screen? We provide high-quality original and AAA quality screen replacements for all brands.", icon: Smartphone, price: "₹500" },
        { title: "Battery Replacement", description: "Is your phone dying too fast? Get a genuine battery replacement with warranty to restore your phone's health.", icon: Battery, price: "₹800" },
        { title: "Charging Port Repair", description: "Problems with charging? Type-C, Lightning, or Micro USB port repair and replacement available same-day.", icon: Zap, price: "₹400" },
        { title: "Camera Repair", description: "Fix blurry photos or broken camera lenses. We repair both front and rear camera modules professionally.", icon: Camera, price: "₹600" },
        { title: "Speaker & Mic", description: "Can't hear or be heard? We fix earpieces, loudspeakers, and microphones for crystal clear communication.", icon: Waves, price: "₹350" },
        { title: "Software Solutions", description: "OS updates, pattern/PIN unlock, virus removal, and app installation support to keep your phone running smooth.", icon: Settings, price: "₹200" },
        { title: "Water Damage", description: "Dropped your phone in water? Bring it in immediately for professional diagnosis and component cleaning.", icon: Waves, price: "₹800" },
        { title: "Data Recovery", description: "Recovery of lost photos, contacts, and documents from internal storage or damaged SD cards.", icon: Database, price: "₹500" },
    ];

    const features = [
        { title: "Same-Day Service", text: "Most repairs are completed within 2-4 hours while you wait." },
        { title: "30-Day Warranty", text: "We stand behind our work with a standard warranty on all parts." },
        { title: "Expert Technicians", text: "Trained professionals who handle your device with utmost care." },
        { title: "Fair Pricing", text: "Transparent pricing with no hidden charges or diagnostic fees." },
    ];

    return (
        <div className="flex flex-col bg-slate-50">
            {/* Header */}
            <section className="relative py-24 overflow-hidden bg-slate-900 text-white">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1597740985671-2a8a3b80ec0f?auto=format&fit=crop&q=80&w=2000"
                        alt="Mobile Shop Background"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                </div>
                <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
                    <h2 className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</h2>
                    <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Expert Repair Services</h1>
                    <p className="text-light text-lg max-w-2xl mx-auto">
                        From cracked screens to battery issues, we provide reliable and quick solutions
                        for all smartphone brands. Quality parts, expert hands.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {repairServices.map((service, idx) => (
                            <ServiceCard key={idx} service={service} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Buy-Sell-Exchange */}
            <section className="py-24 bg-dark text-white">
                <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Upgrade Your Life</h2>
                        <h3 className="text-3xl md:text-4xl font-bold mb-8">Buy, Sell & Exchange</h3>
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center shrink-0">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2">Sell Your Old Phone</h4>
                                    <p className="text-slate-400 text-sm">Get instant cash for your old device. Fair evaluation and best market prices guaranteed.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-full flex items-center justify-center shrink-0">
                                    <Smartphone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2">Exchange & Upgrade</h4>
                                    <p className="text-slate-400 text-sm">Exchange your current phone for a new one with attractive exchange bonuses and easy EMI options.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 flex flex-wrap gap-4">
                            <a href="https://wa.me/91XXXXXXXXXX" className="btn-whatsapp px-8">Check Exchange Value</a>
                        </div>
                    </div>
                    <div className="bg-slate-800 rounded-card p-12 text-center border border-slate-700">
                        <Star size={48} className="text-secondary mx-auto mb-6" />
                        <h4 className="text-2xl font-bold mb-4">Phone Evaluation</h4>
                        <p className="text-slate-400 mb-8">Bring your phone for a 100% free physical and software evaluation by our experts.</p>
                        <div className="bg-slate-900 p-6 rounded-btn border border-slate-700 inline-block">
                            <span className="text-sm font-bold uppercase tracking-widest text-secondary">Instant Payment Via</span>
                            <div className="flex justify-center gap-6 mt-4 text-white/50 text-xs font-bold">
                                <span>CASH</span>
                                <span>UPI</span>
                                <span>TRANSFER</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Us Features */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                        {features.map((feature, idx) => (
                            <div key={idx} className="flex flex-col">
                                <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                                    <ShieldCheck size={20} />
                                </div>
                                <h4 className="font-bold text-dark mb-3">{feature.title}</h4>
                                <p className="text-light text-sm leading-relaxed">{feature.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="bg-primary rounded-[2rem] p-12 md:p-20 text-white text-center relative overflow-hidden">
                        {/* Decorative element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />

                        <h3 className="text-3xl md:text-5xl font-bold mb-8 relative z-10">Need a Quick Repair?</h3>
                        <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto relative z-10">
                            Don't let a broken screen slow you down. Contact us now to book a service or get a free quote over WhatsApp.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 relative z-10">
                            <a href="https://wa.me/91XXXXXXXXXX" className="bg-white text-primary btn-primary px-10 py-4 hover:bg-slate-100">
                                <Send size={20} /> Book on WhatsApp
                            </a>
                            <a href="tel:+91XXXXXXXXXX" className="bg-secondary text-white btn-primary border-none px-10 py-4 hover:bg-orange-600">
                                <Phone size={20} /> Call Us Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
