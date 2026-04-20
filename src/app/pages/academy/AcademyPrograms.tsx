import { motion } from "motion/react";
import { Link } from "react-router";
import {
  Users,
  ArrowRight,
  Landmark,
  Briefcase,
} from "lucide-react";

export function AcademyPrograms() {
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

          <div className="flex justify-center">
            {/* BIG FEATURE CARD - Investment Banking */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden group min-h-[440px] sm:min-h-[400px] md:min-h-[480px] w-full max-w-4xl"
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

        </div>
      </section>

      {/* Featured Single Program Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8">
              {/* DIGITAL RISK FUNDAMENTALS CARD */}
              <div className="bg-white rounded-[24px] border border-orange-200/80 shadow-[0_8px_30px_rgb(234,88,12,0.08)] flex flex-col overflow-hidden pb-8 transition-transform hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(234,88,12,0.12)]">
                {/* Image */}
                <div className="w-full">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800"
                    alt="Dashboard"
                    className="w-full h-[220px] object-cover"
                  />
                </div>
                {/* Content */}
                <div className="px-8 mt-8 flex flex-col flex-grow">

                  <h3 className="text-[26px] font-bold mb-5 text-black">Digital Risk Fundamentals</h3>
                  <p className="text-slate-500 text-[16px] mb-6 flex-grow leading-relaxed">
                    Essential foundation for understanding digital risk landscape. Covers threat identification, risk assessment methodologies, and compliance frameworks for modern enterprises.
                  </p>
                  <p className="text-slate-900 font-medium text-[15px] mb-8">
                    New Professionals, Risk Managers, Board Members
                  </p>
                  <Link
                    to="/programs/digital-risk-fundamentals"
                    className="block w-full py-4 bg-[#cd5c30] hover:bg-[#b04d27] text-white rounded-full font-semibold transition-colors text-center text-lg shadow-lg shadow-[#cd5c30]/20 active:scale-[0.98]"
                  >
                    View Course
                  </Link>
                </div>
              </div>

              {/* CYBER RESILIENCE PRACTITIONER CARD */}
              <div className="bg-white rounded-[24px] border border-orange-200/80 shadow-[0_8px_30px_rgb(234,88,12,0.08)] flex flex-col overflow-hidden pb-8 transition-transform hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(234,88,12,0.12)]">
                {/* Image */}
                <div className="w-full">
                  <img
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800"
                    alt="Cyber SOC"
                    className="w-full h-[220px] object-cover"
                  />
                </div>
                {/* Content */}
                <div className="px-8 mt-8 flex flex-col flex-grow">

                  <h3 className="text-[26px] font-bold mb-5 text-black">Cyber Resilience Practitioner</h3>
                  <p className="text-slate-500 text-[16px] mb-6 flex-grow leading-relaxed">
                    Master operational cybersecurity through live-fire training with enterprise-grade toolsets. Graduate Day 1 ready for Security Analyst and SOC leadership roles.
                  </p>
                  <p className="text-slate-900 font-medium text-[15px] mb-8">
                    High-potential Graduates, Career Switchers
                  </p>
                  <Link
                    to="/programs/cyber-resilience-practitioner"
                    className="block w-full py-4 bg-[#cd5c30] hover:bg-[#b04d27] text-white rounded-full font-semibold transition-colors text-center text-lg shadow-lg shadow-[#cd5c30]/20 active:scale-[0.98]"
                  >
                    View Course
                  </Link>
                </div>
              </div>

              {/* AI RISK GOVERNANCE CARD */}
              <div className="bg-white rounded-[24px] border border-orange-200/80 shadow-[0_8px_30px_rgb(234,88,12,0.08)] flex flex-col overflow-hidden pb-8 transition-transform hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(234,88,12,0.12)]">
                {/* Image */}
                <div className="w-full">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800"
                    alt="AI Governance Boardroom"
                    className="w-full h-[220px] object-cover"
                  />
                </div>
                {/* Content */}
                <div className="px-8 mt-8 flex flex-col flex-grow">

                  <h3 className="text-[26px] font-bold mb-5 text-black">AI Risk Governance</h3>
                  <p className="text-slate-500 text-[16px] mb-6 flex-grow leading-relaxed">
                    Strategic AI deployment and governance frameworks for executive decision-makers navigating regulatory compliance and risk management.
                  </p>
                  <p className="text-slate-900 font-medium text-[15px] mb-8">
                    C-Suite, Board Members, Risk Leaders
                  </p>
                  <Link
                    to="/programs/ai-risk-governance"
                    className="block w-full py-4 bg-[#cd5c30] hover:bg-[#b04d27] text-white rounded-full font-semibold transition-colors text-center text-lg shadow-lg shadow-[#cd5c30]/20 active:scale-[0.98]"
                  >
                    View Course
                  </Link>
                </div>
              </div>
              {/* EXECUTIVE LEADERSHIP PROGRAMME CARD */}
              <div className="bg-white rounded-[24px] border border-orange-200/80 shadow-[0_8px_30px_rgb(234,88,12,0.08)] flex flex-col overflow-hidden pb-8 transition-transform hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(234,88,12,0.12)]">
                {/* Image */}
                <div className="w-full">
                  <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800"
                    alt="Executive Leadership Boardroom"
                    className="w-full h-[220px] object-cover"
                  />
                </div>
                {/* Content */}
                <div className="px-8 mt-8 flex flex-col flex-grow">

                  <h3 className="text-[26px] font-bold mb-5 text-black">Executive Leadership Programme</h3>
                  <p className="text-slate-500 text-[16px] mb-6 flex-grow leading-relaxed">
                    CISO-in-a-Box training covering crisis management, board communication, and legal defensibility for cyber leadership roles.
                  </p>
                  <p className="text-slate-900 font-medium text-[15px] mb-8">
                    Mid-to-Senior Professionals, Finance Leaders
                  </p>
                  <Link
                    to="/programs/executive-leadership"
                    className="block w-full py-4 bg-[#cd5c30] hover:bg-[#b04d27] text-white rounded-full font-semibold transition-colors text-center text-lg shadow-lg shadow-[#cd5c30]/20 active:scale-[0.98]"
                  >
                    View Course
                  </Link>
                </div>
              </div>

              {/* DATA RISK FOR MODERN ENTERPRISE CARD */}
              <div className="bg-white rounded-[24px] border border-orange-200/80 shadow-[0_8px_30px_rgb(234,88,12,0.08)] flex flex-col overflow-hidden pb-8 transition-transform hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(234,88,12,0.12)]">
                {/* Image */}
                <div className="w-full">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800"
                    alt="Data Risk Dashboard"
                    className="w-full h-[220px] object-cover"
                  />
                </div>
                {/* Content */}
                <div className="px-8 mt-8 flex flex-col flex-grow">
                  <h3 className="text-[26px] font-bold mb-5 text-black">Data Risk for Modern Enterprise</h3>
                  <p className="text-slate-500 text-[16px] mb-6 flex-grow leading-relaxed">
                    Comprehensive data governance, privacy protection, and regulatory compliance framework for enterprises managing complex data ecosystems.
                  </p>
                  <p className="text-slate-900 font-medium text-[15px] mb-8">
                    Data Officers, Compliance Teams, IT Directors
                  </p>
                  <button
                    type="button"
                    onClick={(e) => e.preventDefault()}
                    className="block w-full py-4 bg-[#cd5c30] hover:bg-[#b04d27] text-white rounded-full font-semibold transition-colors text-center text-lg shadow-lg shadow-[#cd5c30]/20 active:scale-[0.98]"
                  >
                    View Course
                  </button>
                </div>
              </div>

              {/* CORPORATE BESPOKE TRAINING CARD */}
              <div className="bg-white rounded-[24px] border border-orange-200/80 shadow-[0_8px_30px_rgb(234,88,12,0.08)] flex flex-col overflow-hidden pb-8 transition-transform hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(234,88,12,0.12)]">
                {/* Image */}
                <div className="w-full">
                  <img
                    src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=800"
                    alt="Corporate Bespoke Training"
                    className="w-full h-[220px] object-cover"
                  />
                </div>
                {/* Content */}
                <div className="px-8 mt-8 flex flex-col flex-grow">

                  <h3 className="text-[26px] font-bold mb-5 text-black">Corporate Bespoke Training</h3>
                  <p className="text-slate-500 text-[16px] mb-6 flex-grow leading-relaxed">
                    Tailored training programmes designed to address specific organizational needs, technology stacks, and risk profiles for enterprise teams.
                  </p>
                  <p className="text-slate-900 font-medium text-[15px] mb-8">
                    Corporate Teams, Department Heads
                  </p>
                  <button
                    type="button"
                    onClick={(e) => e.preventDefault()}
                    className="block w-full py-4 bg-[#cd5c30] hover:bg-[#b04d27] text-white rounded-full font-semibold transition-colors text-center text-lg shadow-lg shadow-[#cd5c30]/20 active:scale-[0.98]"
                  >
                    View Course
                  </button>
                </div>
              </div>

              {/* CNISCC CARD */}
              <div className="bg-white rounded-[24px] border border-orange-200/80 shadow-[0_8px_30px_rgb(234,88,12,0.08)] flex flex-col overflow-hidden pb-8 transition-transform hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(234,88,12,0.12)]">
                {/* Image */}
                <div className="w-full">
                  <img
                    src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800"
                    alt="CNISCC Training"
                    className="w-full h-[220px] object-cover"
                  />
                </div>
                {/* Content */}
                <div className="px-8 mt-8 flex flex-col flex-grow">

                  <h3 className="text-[26px] font-bold mb-5 text-black">CNISCC</h3>
                  <p className="text-slate-500 text-[16px] mb-6 flex-grow leading-relaxed">
                    Certified Network Infrastructure Security Coordination Centre qualification for critical national infrastructure protection and incident response coordination.
                  </p>
                  <p className="text-slate-900 font-medium text-[15px] mb-8">
                    Government Professionals, CNI Operators
                  </p>
                  <Link
                    to="/programs/cniscc"
                    className="block w-full py-4 bg-[#cd5c30] hover:bg-[#b04d27] text-white rounded-full font-semibold transition-colors text-center text-lg shadow-lg shadow-[#cd5c30]/20 active:scale-[0.98]"
                  >
                    View Course
                  </Link>
                </div>
              </div>

            </div>
          </div>
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
