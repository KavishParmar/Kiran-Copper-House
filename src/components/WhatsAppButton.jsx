import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const WhatsAppButton = () => {
    return (
        <motion.a
            href="https://wa.me/91XXXXXXXXXX?text=Hi%20Kiran%20Copper%20House,%20I%20need%20assistance%20with"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-[1000] w-14 h-14 md:w-16 md:h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-emerald-600 transition-colors"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <Send size={28} className="rotate-45 -translate-y-0.5 -translate-x-0.5" />
            <span className="absolute -top-2 -left-2 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
            </span>
        </motion.a>
    );
};

export default WhatsAppButton;
