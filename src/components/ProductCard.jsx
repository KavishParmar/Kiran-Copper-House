import { motion } from 'framer-motion';
import { Send, Smartphone, Camera, Battery, Cpu } from 'lucide-react';

const ProductCard = ({ product }) => {
    const whatsappUrl = `https://wa.me/91XXXXXXXXXX?text=Hi,%20I%20want%20to%20know%20about%20${encodeURIComponent(product.name)}`;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-card overflow-hidden card-shadow flex flex-col h-full border border-slate-100 group"
        >
            {/* Badges */}
            <div className="relative group-hover:scale-105 transition-transform duration-500 aspect-square bg-slate-50 flex items-center justify-center p-6">
                {product.brand && (
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold px-2 py-1 rounded shadow-sm border border-slate-100">
                        {product.brand}
                    </span>
                )}
                {product.stockStatus && (
                    <span className={cn(
                        "absolute top-3 right-3 text-[10px] font-bold px-2 py-1 rounded shadow-sm",
                        product.stockStatus === 'In Stock' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                    )}>
                        {product.stockStatus}
                    </span>
                )}

                {/* Professional Product Image */}
                <div className="w-full h-full p-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                    <img
                        src={product.image || `https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800`}
                        alt={product.name}
                        className="max-h-full w-auto object-contain drop-shadow-xl"
                    />
                </div>
            </div>

            <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-dark mb-2 line-clamp-1">{product.name}</h3>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center gap-2 text-xs text-light">
                        <Cpu size={14} className="text-primary" />
                        <span>{product.specs.processor || 'Fast Chip'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-light">
                        <Camera size={14} className="text-primary" />
                        <span>{product.specs.camera || 'High Res'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-light">
                        <Battery size={14} className="text-primary" />
                        <span>{product.specs.battery || 'Long Life'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-light">
                        <Smartphone size={14} className="text-primary" />
                        <span>{product.specs.display || 'AMOLED'}</span>
                    </div>
                </div>

                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-light uppercase font-bold tracking-wider">Best Price</span>
                        <span className="text-xl font-bold text-dark">{product.price}</span>
                    </div>
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp text-sm py-2.5 px-4"
                    >
                        <Send size={16} /> Enquire
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

// Helper for class names
function cn(...inputs) {
    return inputs.filter(Boolean).join(' ');
}

export default ProductCard;
