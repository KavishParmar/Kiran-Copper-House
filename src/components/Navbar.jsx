import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Instagram, Send } from 'lucide-react';

function cn(...inputs) {
    return inputs.filter(Boolean).join(' ');
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Products', path: '/products' },
        { name: 'Services', path: '/services' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 w-full z-50 transition-all duration-300 h-20 flex items-center',
                (isScrolled || isOpen) ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-md'
            )}
        >
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3">
                    <img
                        src="/images/logo.jpg"
                        alt="Kiran Copper House"
                        className="h-12 md:h-14 w-auto object-contain"
                    />
                    <div className="flex flex-col">
                        <span className="text-lg md:text-xl font-bold text-primary leading-tight">
                            KIRAN COPPER HOUSE
                        </span>
                        <span className="text-[10px] text-secondary font-semibold uppercase tracking-widest">
                            Mobile & Accessories
                        </span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={cn(
                                'text-sm font-medium transition-colors hover:text-primary',
                                location.pathname === link.path ? 'text-primary' : 'text-dark'
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="hidden lg:flex items-center gap-4">
                    <a
                        href="https://wa.me/91XXXXXXXXXX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-accent/10 text-accent rounded-full hover:bg-accent hover:text-white transition-all"
                        title="WhatsApp"
                    >
                        <Send size={20} />
                    </a>
                    <a
                        href="https://instagram.com/kiran.copper.house"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-pink-100 text-pink-600 rounded-full hover:bg-pink-600 hover:text-white transition-all"
                        title="Instagram"
                    >
                        <Instagram size={20} />
                    </a>
                    <a
                        href="tel:+91XXXXXXXXXX"
                        className="p-2 bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-white transition-all"
                        title="Call Us"
                    >
                        <Phone size={20} />
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden p-2 text-dark"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    'fixed inset-0 bg-white z-40 lg:hidden transition-transform duration-300 pt-24 px-6',
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                )}
            >
                <div className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={cn(
                                'text-2xl font-semibold',
                                location.pathname === link.path ? 'text-primary' : 'text-dark'
                            )}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex gap-4 mt-8">
                        <a
                            href="https://wa.me/91XXXXXXXXXX"
                            className="flex-1 btn-whatsapp py-4"
                        >
                            <Send size={20} /> WhatsApp
                        </a>
                        <a href="tel:+91XXXXXXXXXX" className="flex-1 btn-primary py-4">
                            <Phone size={20} /> Call Now
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
