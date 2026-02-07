import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, SlidersHorizontal, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const Products = () => {
    const brands = ['All', 'Apple', 'Samsung', 'Xiaomi', 'Realme', 'Vivo', 'Oppo', 'OnePlus', 'Motorola'];
    const categories = ['All', 'Smartphones', 'Accessories', 'Trending'];

    const allProducts = [
        { id: 1, name: "Apple iPhone 15 Pro", brand: "Apple", category: "Smartphones", price: "₹1,24,900", stockStatus: "In Stock", image: "/images/11.jpg", specs: { processor: "A17 Pro", camera: "48MP", battery: "24h+", display: "6.1\" OLED" } },
        { id: 2, name: "Samsung Galaxy S24 Ultra", brand: "Samsung", category: "Smartphones", price: "₹1,29,999", stockStatus: "In Stock", image: "/images/22.jpg", specs: { processor: "SD 8 Gen 3", camera: "200MP", battery: "5000mAh", display: "6.8\" AMOLED" } },
        { id: 3, name: "Xiaomi 14", brand: "Xiaomi", category: "Smartphones", price: "₹69,999", stockStatus: "In Stock", image: "/images/33.jpg", specs: { processor: "SD 8 Gen 3", camera: "50MP", battery: "4610mAh", display: "6.36\"" } },
        { id: 4, name: "Realme GT 6", brand: "Realme", category: "Smartphones", price: "₹40,999", stockStatus: "In Stock", image: "/images/11.jpg", specs: { processor: "SD 8s Gen 3", camera: "50MP", battery: "5500mAh", display: "6.78\"" } },
        { id: 5, name: "Vivo V30 Pro", brand: "Vivo", category: "Smartphones", price: "₹41,999", stockStatus: "In Stock", image: "/images/22.jpg", specs: { processor: "Dimensity 8200", camera: "50MP Aura", battery: "5000mAh", display: "6.78\"" } },
        { id: 6, name: "Oppo Reno 11 Pro", brand: "Oppo", category: "Smartphones", price: "₹37,999", stockStatus: "In Stock", image: "/images/33.jpg", specs: { processor: "Dimensity 8200", camera: "50MP", battery: "4600mAh", display: "6.7\"" } },
        { id: 7, name: "OnePlus 12R", brand: "OnePlus", category: "Smartphones", price: "₹39,999", stockStatus: "In Stock", image: "/images/11.jpg", specs: { processor: "SD 8 Gen 2", camera: "50MP", battery: "5500mAh", display: "6.78\"" } },
        { id: 8, name: "Motorola Edge 50 Fusion", brand: "Motorola", category: "Smartphones", price: "₹25,999", stockStatus: "In Stock", image: "/images/22.jpg", specs: { processor: "SD 7s Gen 2", camera: "50MP", battery: "5000mAh", display: "6.7\"" } },
        { id: 9, name: "Redmi Note 13 Pro+", brand: "Xiaomi", category: "Smartphones", price: "₹31,999", stockStatus: "Pre-Order", image: "/images/33.jpg", specs: { processor: "MediaTek 7200", camera: "200MP", battery: "5000mAh", display: "6.67\"" } },
        { id: 10, name: "iPhone 14", brand: "Apple", category: "Smartphones", price: "₹59,900", stockStatus: "In Stock", image: "/images/11.jpg", specs: { processor: "A15 Bionic", camera: "12MP", battery: "20h+", display: "6.1\"" } },
        { id: 11, name: "Galaxy A55", brand: "Samsung", category: "Smartphones", price: "₹39,999", stockStatus: "In Stock", image: "/images/22.jpg", specs: { processor: "Exynos 1480", camera: "50MP OIS", battery: "5000mAh", display: "6.6\"" } },
        { id: 12, name: "Vivo T3 5G", brand: "Vivo", category: "Smartphones", price: "₹19,999", stockStatus: "In Stock", image: "/images/33.jpg", specs: { processor: "Dimensity 7200", camera: "50MP", battery: "5000mAh", display: "6.67\"" } },
    ];

    const [activeBrand, setActiveBrand] = useState('All');
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProducts = allProducts.filter(p => {
        const matchesBrand = activeBrand === 'All' || p.brand === activeBrand;
        const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.brand.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesBrand && matchesCategory && matchesSearch;
    });

    return (
        <div className="bg-slate-50 min-h-screen py-12">
            <div className="container mx-auto px-4 md:px-8">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-dark mb-4">Our Products</h1>
                    <p className="text-light">Explore our wide range of latest smartphones and accessories.</p>
                </div>

                {/* Filters Bar */}
                <div className="bg-white p-6 rounded-card border border-slate-200 shadow-sm mb-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                        {/* Search */}
                        <div className="lg:col-span-4 relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={18} />
                            <input
                                type="text"
                                placeholder="Search models or brands..."
                                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-btn focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* Brand Filter */}
                        <div className="lg:col-span-6 flex items-center gap-4 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
                            <div className="shrink-0 flex items-center gap-2 text-dark font-bold text-sm bg-slate-100 px-4 py-2.5 rounded-btn">
                                <Filter size={14} /> Brands
                            </div>
                            <div className="flex gap-2">
                                {brands.map(brand => (
                                    <button
                                        key={brand}
                                        onClick={() => setActiveBrand(brand)}
                                        className={cn(
                                            "shrink-0 px-4 py-2 rounded-btn text-sm font-medium transition-all",
                                            activeBrand === brand ? "bg-primary text-white shadow-md shadow-primary/20" : "bg-white border border-slate-200 text-light hover:border-primary/50"
                                        )}
                                    >
                                        {brand}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Clear Filters */}
                        <div className="lg:col-span-2 flex justify-end">
                            <button
                                onClick={() => { setActiveBrand('All'); setActiveCategory('All'); setSearchQuery(''); }}
                                className="text-sm font-bold text-slate-400 hover:text-dark flex items-center gap-2"
                            >
                                <X size={16} /> Reset
                            </button>
                        </div>
                    </div>
                </div>

                {/* Products Grid */}
                <AnimatePresence mode='popLayout'>
                    <motion.div
                        layout
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                    >
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))
                        ) : (
                            <div className="col-span-full py-20 text-center">
                                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                                    <Search size={40} />
                                </div>
                                <h3 className="text-xl font-bold text-dark">No products found</h3>
                                <p className="text-light mt-2">Try adjusting your filters or search query.</p>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Categories Section */}
                <div className="mt-24">
                    <h2 className="text-2xl font-bold text-dark mb-8">Accessory Categories</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {['Cases & Covers', 'Fast Chargers', 'Audio & TWS', 'Protection'].map((cat, i) => (
                            <div key={i} className="bg-white p-8 rounded-card border border-slate-100 shadow-sm text-center hover:shadow-md transition-all cursor-pointer group">
                                <div className="w-16 h-16 bg-secondary/5 text-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary group-hover:text-white transition-all">
                                    <SlidersHorizontal size={32} />
                                </div>
                                <span className="font-bold text-dark">{cat}</span>
                            </div>
                        ))}
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

export default Products;
