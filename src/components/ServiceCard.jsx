import { motion } from 'framer-motion';

const ServiceCard = ({ service }) => {
    const Icon = service.icon;

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-card card-shadow border border-slate-100 flex flex-col items-center text-center group"
        >
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Icon size={32} />
            </div>
            <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
            <p className="text-light text-sm leading-relaxed mb-6">
                {service.description}
            </p>
            {service.price && (
                <span className="text-xs font-bold text-secondary uppercase tracking-widest mt-auto">
                    Starting from {service.price}
                </span>
            )}
        </motion.div>
    );
};

export default ServiceCard;
