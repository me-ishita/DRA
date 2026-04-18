import { motion } from "motion/react";
import { Link } from "react-router";
import {
  GraduationCap,
  Clock,
  Users,
  Award,
  ArrowRight,
  Filter,
  Video,
  Landmark,
  FileText,
  Layers,
  Briefcase,
  Search,
} from "lucide-react";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const programs = [
  {
    id: "intro-digital-risk",
    category: "Foundations",
    title: "Introduction to Digital Risk",
    audience: "Beginners",
    duration: "4 weeks",
    mode: "Self-paced",
    level: "Foundation",
    description: "Build foundational understanding of digital risk concepts, frameworks, and practices.",
  },
  {
    id: "cyber-risk-fundamentals",
    category: "Foundations",
    title: "Cyber Risk Fundamentals",
    audience: "Beginners",
    duration: "6 weeks",
    mode: "Live + Self-paced",
    level: "Foundation",
    description: "Master core cyber risk principles, threat landscape, and risk mitigation strategies.",
  },
  {
    id: "digital-trust-basics",
    category: "Foundations",
    title: "Digital Trust Basics",
    audience: "All Levels",
    duration: "4 weeks",
    mode: "Self-paced",
    level: "Foundation",
    description: "Understand digital trust principles, privacy fundamentals, and accountability frameworks.",
  },
  {
    id: "grc-analyst-pathway",
    category: "Professional Tracks",
    title: "GRC Analyst Pathway",
    audience: "Career Changers",
    duration: "12 weeks",
    mode: "Live Cohort",
    level: "Professional",
    description: "Comprehensive training for aspiring GRC analysts with practical projects and certification prep.",
  },
  {
    id: "cyber-risk-analyst",
    category: "Professional Tracks",
    title: "Cyber Risk Analyst Pathway",
    audience: "Professionals",
    duration: "12 weeks",
    mode: "Live Cohort",
    level: "Professional",
    description: "Develop specialized cyber risk analysis skills with hands-on assessments and real-world scenarios.",
  },
  {
    id: "privacy-trust-pathway",
    category: "Professional Tracks",
    title: "Privacy & Trust Pathway",
    audience: "Professionals",
    duration: "10 weeks",
    mode: "Hybrid",
    level: "Professional",
    description: "Master privacy frameworks, data protection, and digital trust implementation.",
  },
  {
    id: "ai-risk-associate",
    category: "Professional Tracks",
    title: "AI Risk Associate Pathway",
    audience: "Tech Professionals",
    duration: "10 weeks",
    mode: "Live Cohort",
    level: "Advanced",
    description: "Navigate AI governance, responsible AI practices, and emerging technology risk.",
  },
  {
    id: "risk-for-managers",
    category: "Leadership Tracks",
    title: "Risk for Managers",
    audience: "Managers",
    duration: "3 days",
    mode: "Intensive Workshop",
    level: "Executive",
    description: "Strategic risk management essentials for team leaders and middle management.",
  },
  {
    id: "ai-governance-leaders",
    category: "Leadership Tracks",
    title: "AI Governance for Leaders",
    audience: "Executives",
    duration: "2 days",
    mode: "Executive Workshop",
    level: "Executive",
    description: "Board-level AI governance, oversight frameworks, and responsible innovation strategies.",
  }
]

export function AcademyPrograms() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Foundations", "Professional Tracks", "Leadership Tracks"];

  const filteredPrograms = selectedCategory === "All"
    ? programs
    : programs.filter(p => p.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-slate-100 relative">
        <div className="container mx-auto px-4 sm:px-6">

          {/* Section Heading */}
          <div className="mb-8 sm:mb-12 text-center">
            <h2 className="logo-shine inline-block text-3xl sm:text-4xl md:text-5xl font-black tracking-wide uppercase leading-tight">
              Elite Programme
            </h2>
            <p className="text-slate-800 text-base sm:text-lg mt-2">
              Newly launched flagship program from Digital Risk Academy
            </p>
          </div>

          {/* BIG FEATURE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden group min-h-[440px] sm:min-h-[400px] md:min-h-[480px]"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1630464373688-fb6a37ce89ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGludmVzdG1lbnQlMjBiYW5raW5nfGVufDB8fDB8fHww"
                alt="Investment Banking Program"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 sm:p-8 md:p-14 text-white">

              {/* Badge */}
              <span className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1 bg-orange-500/20 text-orange-400 text-[11px] sm:text-xs font-semibold rounded-full border border-orange-500/30">
                New Launch • Investment Banking
              </span>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
                Investment Banking Programme
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mb-5 sm:mb-6">
                A 4-week live, high-intensity programme led by professionals working in top UK investment banks across digital risk, cyber risk, and financial services.
              </p>



              {/* Highlights */}
                <div className="grid md:grid-cols-1 gap-y-3 sm:gap-y-4 gap-x-6">

                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-orange-400 shrink-0" />
                    <span className="text-sm md:text-base text-slate-100">
                      For students & early-career professionals
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Landmark className="w-5 h-5 text-orange-400 shrink-0" />
                    <span className="text-sm md:text-base text-slate-100">
                      Real-world banking scenarios
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Briefcase className="w-5 h-5 text-orange-400 shrink-0" />
                    <span className="text-sm md:text-base text-slate-100">
                      Career guidance & mentorship
                    </span>
                  </div>

                </div>

              {/* CTA */}
              <Link
                to="/programs/investment-banking"
                className="inline-flex items-center min-h-[48px] px-5 py-3 mt-5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/40 active:scale-[0.99] transition"
              >
                View Details →
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Filter Section */}
      <section className="py-4 sm:py-6 md:py-8 bg-slate-900/50 border-b border-slate-800 sticky top-16 sm:top-20 z-40 backdrop-blur-lg">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">
            <div className="flex items-center gap-2 shrink-0">
              <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
              <span className="text-sm sm:text-base text-slate-400">Filter by category:</span>
            </div>
            <div className="flex gap-2 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap scrollbar-none">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`shrink-0 min-h-[40px] px-4 py-2 rounded-lg text-sm font-medium transition-all active:scale-[0.98] ${selectedCategory === category
                    ? "bg-orange-500 text-white"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {filteredPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </motion.div>

          {filteredPrograms.length === 0 && (
            <div className="text-center py-12 sm:py-16">
              <p className="text-slate-400 text-base sm:text-lg">No programs found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center bg-gradient-to-r from-orange-500/10 to-blue-500/10 border border-orange-500/20 rounded-2xl p-6 sm:p-10 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Need Help Choosing?</h2>
            <p className="text-slate-300 text-sm sm:text-base mb-5 sm:mb-6">
              Our advisors can help you select the right program for your goals and experience level.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 min-h-[52px] px-6 sm:px-8 py-3.5 sm:py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 active:scale-[0.99] transition-all"
            >
              <span>Talk to an Advisor</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ProgramCard({ program }: any) {
  return (
    <motion.div variants={fadeInUp}>
      <Link
        to={`/programs/${program.id}`}
        className="block group h-full bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-0.5 active:scale-[0.99]"
      >
        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
            <span className="px-3 py-1 bg-orange-500/10 text-orange-400 text-[11px] sm:text-xs font-semibold rounded-full">
              {program.category}
            </span>
            <span className={`px-3 py-1 text-[11px] sm:text-xs font-semibold rounded-full ${program.level === 'Foundation' ? 'bg-green-500/10 text-green-400' :
              program.level === 'Professional' ? 'bg-blue-500/10 text-blue-400' :
                program.level === 'Advanced' ? 'bg-purple-500/10 text-purple-400' :
                  'bg-amber-500/10 text-amber-400'
              }`}>
              {program.level}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-orange-500 transition-colors">
            {program.title}
          </h3>

          <p className="text-slate-400 text-sm mb-4">{program.description}</p>

          <div className="space-y-2 mb-4 sm:mb-6">
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Users className="w-4 h-4 text-orange-500 shrink-0" />
              <span>{program.audience}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Clock className="w-4 h-4 text-orange-500 shrink-0" />
              <span>{program.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <GraduationCap className="w-4 h-4 text-orange-500 shrink-0" />
              <span>{program.mode}</span>
            </div>
          </div>

          {/* <div className="flex items-center space-x-2 text-orange-500 font-semibold">
            <span>View Program</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div> */}

        </div>
      </Link>
    </motion.div>
  );
}
