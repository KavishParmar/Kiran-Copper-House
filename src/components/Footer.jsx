import { Link } from 'react-router-dom';
import { Instagram, Facebook, Phone, Mail, MapPin, Send } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* About Section */}
                <div>
                    <Link to="/" className="flex items-center gap-3 mb-6">
                        <img
                            src="/images/logo.jpg"
                            alt="Kiran Copper House"
                            className="h-10 w-auto object-contain"
                        />
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-white leading-tight">
                                KIRAN COPPER HOUSE
                            </span>
                            <span className="text-[10px] text-secondary font-semibold tracking-widest uppercase">
                                Mobile Shop
                            </span>
                        </div>
                    </Link>
                    <p className="mb-6 text-sm leading-relaxed">
                        Your Trusted Mobile Partner in Rajgarh. Providing genuine smartphones,
                        expert repairs, and high-quality accessories since our inception.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://instagram.com/kiran.copper.house" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="hover:text-blue-500 transition-colors">
                            <Facebook size={20} />
                        </a>
                        <a href="https://wa.me/91XXXXXXXXXX" className="hover:text-emerald-500 transition-colors">
                            <Send size={20} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
                    <ul className="space-y-4 text-sm">
                        <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                        <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                        <li><Link to="/products" className="hover:text-primary transition-colors">Products</Link></li>
                        <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
                        <li><Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
                        <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
                    <ul className="space-y-4 text-sm">
                        <li className="flex gap-3">
                            <MapPin size={18} className="text-secondary shrink-0" />
                            <span>
                                Kiran Copper House Mobile Shop,<br />
                                Rajgarh, Dhar - 454116,<br />
                                Madhya Pradesh, India
                            </span>
                        </li>
                        <li className="flex gap-3">
                            <Phone size={18} className="text-secondary shrink-0" />
                            <a href="tel:+91XXXXXXXXXX" className="hover:text-white transition-colors">+91-XXXXXXXXXX</a>
                        </li>
                        <li className="flex gap-3">
                            <Mail size={18} className="text-secondary shrink-0" />
                            <a href="mailto:info@kirancopperhouse.com" className="hover:text-white transition-colors">info@kirancopperhouse.com</a>
                        </li>
                    </ul>
                </div>

                {/* Business Hours */}
                <div>
                    <h4 className="text-white font-bold text-lg mb-6">Business Hours</h4>
                    <ul className="space-y-4 text-sm">
                        <li className="flex justify-between">
                            <span>Monday - Sunday</span>
                            <span className="text-white">9:00 AM - 9:00 PM</span>
                        </li>
                        <li className="text-xs text-slate-500 mt-4 italic">
                            * Open all 7 days. Closed only on major festivals.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-slate-800 flex flex-col md:row justify-between items-center text-xs gap-4">
                <p>
                    © {currentYear} Kiran Copper House Mobile Shop | Owned by <span className="text-white font-medium">Lucky Jain</span>
                </p>
                <p className="text-slate-500">
                    Rajgarh, Dhar, Madhya Pradesh
                </p>
            </div>
        </footer>
    );
};

export default Footer;
