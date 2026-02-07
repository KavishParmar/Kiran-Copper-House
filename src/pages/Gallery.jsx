import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Users, Smartphone, Zap, Instagram, X, Maximize2 } from 'lucide-react';

const Gallery = () => {
    const tabs = ['All', 'Our Shop', 'New Arrivals', 'Customers', 'Repairs'];
    const [activeTab, setActiveTab] = useState('All');
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        { id: 1, category: 'Repairs', title: 'Expert Screen Fix', detail: 'Precision screen replacement', url: "/images/1.jpg" },
        { id: 2, category: 'New Arrivals', title: 'iPhone 15 Series', detail: 'Latest flagship unboxing', url: "/images/11.jpg" },
        { id: 3, category: 'Customers', title: 'Happy Client', detail: 'Customer receiving new device', url: "/images/7.jpg" },
        { id: 4, category: 'Repairs', title: 'Board Repair', detail: 'Advanced chip-level repair', url: "/images/2.jpg" },
        { id: 5, category: 'Our Shop', title: 'Kiran Copper House', detail: 'Our main storefront', url: "/images/logo.jpg" },
        { id: 6, category: 'New Arrivals', title: 'Premium Mobile', detail: 'Newly arrived smartphone', url: "/images/22.jpg" },
        { id: 7, category: 'Customers', title: 'Trusted Choice', detail: 'Community trust in Rajgarh', url: "/images/8.jpg" },
        { id: 8, category: 'Repairs', title: 'Battery Service', detail: 'Quick battery change', url: "/images/3.jpg" },
        { id: 9, category: 'Our Shop', title: 'Display Area', detail: 'Latest mobile showcase', url: "/images/5.jpg" },
        { id: 10, category: 'New Arrivals', title: 'Smart Accessories', detail: 'Latest tech arrivals', url: "/images/33.jpg" },
        { id: 11, category: 'Customers', title: 'Meet the Owner', detail: 'Lucky Jain - Tech Expert', url: "/images/owner.png" },
        { id: 12, category: 'Repairs', title: 'Charging Port Fix', detail: 'Quality replacement parts', url: "/images/4.jpg" },
        { id: 13, category: 'Our Shop', title: 'Collection', detail: 'Wide range of products', url: "/images/6.jpg" },
        { id: 14, category: 'New Arrivals', title: 'Flagship Edition', detail: 'Exclusive mobile launch', url: "/images/11.jpg" },
        { id: 15, category: 'Customers', title: 'Tech Community', detail: 'Serving happy customers', url: "/images/9.jpg" },
        { id: 16, category: 'Repairs', title: 'Diagnosis', detail: 'Thorough device checkup', url: "/images/1.jpg" },
    ];

    const filteredImages = activeTab === 'All' ? images : images.filter(img => img.category === activeTab);

    return (
        <div className="bg-slate-50 min-h-screen py-20 pb-40">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Moments at Kiran</h1>
                    <p className="text-light text-lg">A visual journey through our shop, our products, and our happy community.</p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={cn(
                                "px-6 py-2.5 rounded-full text-sm font-bold transition-all",
                                activeTab === tab ? "bg-primary text-white shadow-lg shadow-primary/20" : "bg-white text-light border border-slate-200 hover:border-primary/50"
                            )}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Masonry Grid (Simulated with columns) */}
                <motion.div
                    layout
                    className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredImages.map((img) => (
                            <motion.div
                                key={img.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="break-inside-avoid relative rounded-card overflow-hidden group cursor-pointer bg-slate-200"
                                onClick={() => setSelectedImage(img)}
                            >
                                {/* Image Placeholder */}
                                <div className={cn(
                                    "w-full h-full relative group-hover:scale-110 transition-transform duration-700",
                                    img.id % 3 === 0 ? "aspect-square" : img.id % 2 === 0 ? "aspect-[3/4]" : "aspect-[4/3]"
                                )}>
                                    <img
                                        src={img.url}
                                        alt={img.title}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Small icon overlay if image fails or for context */}
                                    <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md rounded-lg p-2 text-white">
                                        {img.category === 'Our Shop' && <ShoppingBag size={18} />}
                                        {img.category === 'Customers' && <Users size={18} />}
                                        {img.category === 'New Arrivals' && <Smartphone size={18} />}
                                        {img.category === 'Repairs' && <Zap size={18} />}
                                    </div>
                                </div>

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <Maximize2 size={24} className="text-white absolute top-6 right-6" />
                                    <h4 className="text-white font-bold text-lg">{img.title}</h4>
                                    <p className="text-white/70 text-sm">{img.detail}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Instagram CTA */}
                <div className="mt-32 text-center bg-white p-12 rounded-[2rem] shadow-sm border border-slate-100 max-w-4xl mx-auto">
                    <Instagram size={48} className="text-pink-600 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-dark mb-4">Follow Our Latest Updates</h3>
                    <p className="text-light mb-8 max-w-xl mx-auto">
                        Get daily updates on new phone launches, unboxing videos, and exclusive offers
                        direct from our Instagram feed.
                    </p>
                    <a href="https://instagram.com/kiran.copper.house" target="_blank" className="btn-primary inline-flex gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 border-none px-10">
                        @kiran.copper.house
                    </a>
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[2000] bg-black/95 flex items-center justify-center p-4 md:p-12"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button className="absolute top-8 right-8 text-white hover:text-primary transition-colors">
                            <X size={32} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-white rounded-card overflow-hidden max-w-5xl w-full flex flex-col md:flex-row"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="flex-1 overflow-hidden bg-slate-100 flex items-center justify-center">
                                <img
                                    src={selectedImage.url}
                                    alt={selectedImage.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-full md:w-80 p-8 flex flex-col">
                                <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-2">{selectedImage.category}</span>
                                <h4 className="text-2xl font-bold text-dark mb-4">{selectedImage.title}</h4>
                                <p className="text-light text-sm mb-8 leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.
                                    Aliquam erat volutpat. Donec placerat nisl magna, id faucibus arcu condimentum eget.
                                </p>
                                <div className="mt-auto pt-8 border-t border-slate-100 flex items-center justify-between">
                                    <span className="text-[10px] text-light uppercase font-bold">Kiran Copper House</span>
                                    <a href="https://instagram.com" target="_blank" className="text-primary hover:underline text-xs font-bold">View Post</a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// Helper
function cn(...inputs) {
    return inputs.filter(Boolean).join(' ');
}

export default Gallery;
