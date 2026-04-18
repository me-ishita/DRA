import { motion } from "motion/react";
import {
    Video,
    FileText,
    Users,
    Layers,
    Brain,
    Briefcase,
    CheckCircle
} from "lucide-react";

export default function InvestmentBankingProgram() {
    return (
        <div className="pt-20">

            {/* ================= HERO SECTION ================= */}
            <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-950 via-orange-950/20 to-slate-900 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <motion.img
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                        alt=""
                        className="w-full h-full object-cover opacity-30"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 12, repeat: Infinity }}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
                </div>
                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="max-w-4xl">

                        <span className="text-orange-400 text-xs sm:text-sm tracking-widest uppercase">
                            Digital Risk Academy • June Cohort
                        </span>

                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6 leading-tight">
                            Investment Banking &{" "}
                            <span className="bg-gradient-to-r from-orange-400 via-white to-blue-500 bg-clip-text text-transparent">
                                Digital Risk Programme
                            </span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 sm:mb-8">
                            A 4-week practitioner-led programme designed to bridge the gap between academic learning and real-world investment banking and risk roles.
                        </p>

                        {/* Pricing */}
                        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
                            <span className="text-lg sm:text-2xl text-slate-400 line-through">
                                ₹50,000
                            </span>
                            <span className="text-3xl sm:text-4xl font-bold text-orange-400">
                                ₹38,750
                            </span>
                            <span className="text-xs sm:text-sm bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full">
                                Early Access Offer
                            </span>
                        </div>

                        <button
                            type="button"
                            className="w-full sm:w-auto min-h-[52px] px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-orange-500/40 active:scale-[0.99] transition"
                        >
                            Enroll Now
                        </button>

                    </div>
                </div>
            </section>


            {/* ================= PREMIUM COMPACT PROGRAM INFO ================= */}
            <section className="py-12 sm:py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6">

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

                        {/* ===== CARD ===== */}
                        {[
                            {
                                title: "Programme Overview",
                                image:
                                    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
                                content:
                                    "A one-month, practitioner-led programme designed for students and early professionals, delivered by experts from UK investment banking and digital risk domains.",
                            },
                            {
                                title: "Programme Structure",
                                image:
                                    "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1200",
                                list: [
                                    "Live online classes",
                                    "Case studies & simulations",
                                    "Group projects",
                                    "Real-world scenarios",
                                    "Mentorship & guidance",
                                ],
                            },
                            {
                                title: "Key Learning Areas",
                                image:
                                    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200",
                                list: [
                                    "Investment Banking Fundamentals",
                                    "Mergers and Acquisitions & Valuation",
                                    "Governance, Risk & Compliance",
                                    "Digital & Cyber Risk",
                                    "AI in Financial Services",
                                ],
                            },
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{
                                    rotateX: 6,
                                    rotateY: -6,
                                    scale: 1.04,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 15,
                                    delay: i * 0.1,
                                }}
                                style={{ transformStyle: "preserve-3d" }}
                                className="relative group min-h-[320px] sm:min-h-[360px] rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-orange-500/20 transition"
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0">
                                    <img
                                        src={card.image}
                                        className="w-full h-full object-cover scale-105 group-hover:scale-110 transition duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/30" />
                                </div>

                                {/* Glow Effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-orange-500/10 via-transparent to-blue-500/10" />

                                {/* Content */}
                                <div className="relative z-10 p-5 sm:p-6 text-white h-full flex flex-col justify-end">

                                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
                                        {card.title}
                                    </h2>

                                    {card.content && (
                                        <p className="text-sm sm:text-base font-semibold text-white leading-relaxed">
                                            {card.content}
                                        </p>
                                    )}

                                    {card.list && (
                                        <ul className="mt-3 space-y-3 text-sm md:text-base font-semibold text-white leading-relaxed">
                                            {card.list.map((item, idx) => {
                                                const icons = [
                                                    Video,
                                                    FileText,
                                                    Users,
                                                    Layers,
                                                    Brain,
                                                    Briefcase,
                                                ];

                                                const Icon = icons[idx % icons.length];

                                                return (
                                                    <li key={idx} className="flex items-start gap-3">
                                                        <div className="p-1.5 rounded-md bg-orange-500/20 border border-orange-500/30">
                                                            <Icon className="w-4 h-4 text-orange-400" />
                                                        </div>
                                                        <span>{item}</span>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}
                                </div>
                            </motion.div>
                        ))}

                    </div>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="py-16 sm:py-20 bg-gradient-to-r from-orange-500 to-blue-600 text-center text-white">
                <div className="container mx-auto px-4 sm:px-6">

                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
                        Start Your Investment Banking Journey
                    </h2>

                    <p className="mb-6 sm:mb-8 text-base sm:text-lg">
                        Limited seats available for the June cohort
                    </p>

                    <button
                        type="button"
                        className="w-full sm:w-auto min-h-[52px] px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-slate-100 active:scale-[0.99] transition"
                    >
                        Enroll Now
                    </button>

                </div>
            </section>

        </div>
    );
}
