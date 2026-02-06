import { motion } from 'framer-motion';
import { Target, Users, ShieldCheck, Zap, Star, Heart } from 'lucide-react';

const About = () => {
    const missionItems = [
        { title: "Genuine Products", text: "Provide 100% genuine mobile products at honest, competitive prices.", icon: ShieldCheck },
        { title: "Personalized Service", text: "Deliver exceptional, personalized customer service to every visitor.", icon: Users },
        { title: "Community Focus", text: "Build long-term relationships and support our Rajgarh community.", icon: Heart },
        { title: "Tech Innovation", text: "Stay updated with latest technology trends to guide you better.", icon: Zap },
    ];

    return (
        <div className="flex flex-col">
            {/* Header */}
            <section className="bg-slate-50 py-20 border-b border-slate-100">
                <div className="container mx-auto px-4 md:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">About Us</h1>
                    <p className="text-light text-lg max-w-2xl mx-auto">
                        Discover the story behind Rajgarh's most trusted mobile destination and the vision of Lucky Jain.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Our History</h2>
                        <h3 className="text-3xl font-bold text-dark mb-6">Kiran Copper House Mobile Shop</h3>
                        <div className="space-y-4 text-light leading-relaxed">
                            <p>
                                Kiran Copper House Mobile Shop has been Rajgarh's trusted destination for all mobile phone needs.
                                Located in the heart of Rajgarh, Dhar, we specialize in providing the latest smartphones,
                                genuine accessories, and reliable repair services to our valued customers.
                            </p>
                            <p>
                                What started as a vision to bring quality mobile technology to Rajgarh has grown into a community
                                hub for tech enthusiasts and everyday users alike. We pride ourselves on offering authentic
                                products at competitive prices, backed by personalized service that puts customers first.
                            </p>
                            <p>
                                Our commitment extends beyond just selling phones. We're here to guide you in choosing the right
                                device, protect your investment with quality accessories, and keep your technology running
                                smoothly with expert repair services.
                            </p>
                        </div>
                    </div>
                    <div className="rounded-card overflow-hidden aspect-[4/3] shadow-xl border border-slate-100">
                        <img
                            src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=1200"
                            alt="Kiran Copper House Storefront"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Owner Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative group overflow-hidden rounded-card">
                        <div className="absolute -inset-4 bg-primary/10 rounded-card scale-95 group-hover:scale-100 transition-transform duration-500 -z-10" />
                        <div className="bg-slate-200 aspect-[3/4] flex items-center justify-center">
                            <img
                                src="/images/owner.png"
                                alt="Lucky Jain - Owner of Kiran Copper House"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">The Visionary</h2>
                        <h3 className="text-3xl font-bold text-dark mb-6">Lucky Jain (Owner)</h3>
                        <div className="space-y-4 text-light leading-relaxed mb-8">
                            <p>
                                Lucky Jain is a passionate tech enthusiast and proud Rajgarh native dedicated to serving
                                his community through technology and innovation.
                            </p>
                            <p>
                                Beyond running the shop, Lucky is a well-known digital creator and community builder in Rajgarh.
                                Through his popular Instagram page <span className="text-primary font-bold">@rajgarh.the.city.of.pilgrim</span> with
                                over 37,000 followers, he showcases the beauty and vibrant business ecosystem of Rajgarh.
                            </p>
                            <p>
                                His dual expertise as both a mobile technology specialist and digital influencer makes him
                                uniquely qualified to guide customers in making smart tech choices. Whether you're a first-time
                                buyer or a tech enthusiast, Lucky ensures you receive honest recommendations.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-card shadow-sm border-l-4 border-primary italic text-dark">
                            "My philosophy is simple: treat every customer like family, provide honest advice over quick sales,
                            and build trust through consistent quality."
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Our Values</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-dark">Driven by Core Principles</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {missionItems.map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="p-8 rounded-card border border-slate-100 bg-white shadow-sm text-center"
                            >
                                <div className="w-14 h-14 bg-primary/5 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                    <item.icon size={28} />
                                </div>
                                <h4 className="font-bold text-dark mb-3">{item.title}</h4>
                                <p className="text-light text-sm leading-relaxed">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Community Section */}
            <section className="py-24 bg-primary text-white">
                <div className="container mx-auto px-4 md:px-8 flex flex-col items-center text-center">
                    <Target size={48} className="mb-6 opacity-30" />
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 max-w-3xl leading-tight">
                        "तीर्थों की नगरी राजगृही"
                    </h2>
                    <p className="text-white/80 text-lg max-w-2xl mb-12">
                        Luckys motto reflects his deep connection to his hometown and commitment to promoting
                        local businesses and culture. Every purchase at Kiran Copper House supports this vision.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://instagram.com/rajgarh.the.city.of.pilgrim" target="_blank" className="btn-secondary border-white text-white hover:bg-white/10 px-8 py-3">
                            Follow Our Community Page
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
