"use client";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Users,
  Building2,
  School,
  ArrowRight,
  Award,
  Target,
  Briefcase,
  BookOpen,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

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

const ACADEMY_SLIDE_DURATION = 4000;
const HERO_WORD_DURATION_MS = 720;
const HERO_WORD_STAGGER_MS = 130;
const HERO_FIRST_LINE_TOTAL_MS = HERO_WORD_DURATION_MS + (4 - 1) * HERO_WORD_STAGGER_MS;
const HERO_SECOND_LINE_REVEAL_DELAY_MS = HERO_FIRST_LINE_TOTAL_MS + 220;
const HERO_SECOND_LINE_TOTAL_MS = HERO_WORD_DURATION_MS + (6 - 1) * HERO_WORD_STAGGER_MS;
const HERO_DETAILS_REVEAL_DELAY_MS = HERO_SECOND_LINE_REVEAL_DELAY_MS + HERO_SECOND_LINE_TOTAL_MS + 200;

function WordRevealLine({
  text,
  className,
  wordClassName,
  delayMs = 0,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delayMs?: number;
}) {
  return (
    <span className={`${className ?? ""} inline-flex flex-wrap justify-center gap-x-4 gap-y-2 whitespace-normal`}>
      {text.split(" ").map((word, index, words) => (
        <motion.span
          key={`${word}-${index}`}
          className={`inline-block will-change-transform whitespace-nowrap ${wordClassName ?? ""}`}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: HERO_WORD_DURATION_MS / 1000,
            delay: (delayMs + index * HERO_WORD_STAGGER_MS) / 1000,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
          {index < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </span>
  );
}

const academyStorySlides = [
  {
    heading: "Where It Began",
    body: "Digital Risk Academy was founded on a simple conviction: that world-class digital risk education should be accessible, practical, and built for the realities of today's threat landscape — not yesterday's textbooks.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=55&w=720&auto=format&fit=crop",
  },
  {
    heading: "The Gap We Saw",
    body: "Organisations were hiring talent with credentials but not capability. Professionals had theoretical knowledge but struggled with real-world application. We built the Academy to bridge that gap — from classroom to boardroom.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=55&w=720&auto=format&fit=crop",
  },
  {
    heading: "Built for Practitioners",
    body: "Every programme is designed by practitioners who have led risk functions, responded to incidents, and advised boards. This is education with real-world DNA — built to produce professionals who are ready from day one.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=55&w=720&auto=format&fit=crop",
  },
];

const academyVisionSlides = [
  {
    heading: "Our Global Vision",
    body: "To become the leading global academy for digital risk capability — equipping the next generation of cyber, AI risk, and governance professionals to lead with clarity, confidence, and integrity.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=55&w=720&auto=format&fit=crop",
  },
  {
    heading: "Future We're Building",
    body: "We envision a world where digital risk is understood at every level of an organisation — where security awareness is cultural, governance is embedded, and emerging technologies are adopted with wisdom. That starts with education.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=55&w=720&auto=format&fit=crop",
  },
];
const academyImpactSlides = [
  {
    image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGludmVzdG1lbnR8ZW58MHx8MHx8fDA%3D",
    heading: "Scholarship & Support",
    body: "We provide opportunities through scholarships and inclusive programs, ensuring that motivated learners can access high-quality digital risk education regardless of their background."
  },
  {
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGludmVzdG1lbnR8ZW58MHx8MHx8fDA%3D",
    heading: "Accessible Learning",
    body: "Beyond learning, we support your journey with practical exposure, mentorship, and industry-aligned training to help you confidently step into high-impact roles."
  },
];

const validatedOutcomes = [
  {
    title: "Career Progression",
    value: "92%",
    detail: "of graduates achieve career advancement within 12 months",
  },
  {
    title: "Salary Increase",
    value: "35%",
    detail: "average salary uplift for programme completers",
  },
  {
    title: "Incident Reduction",
    value: "40%",
    detail: "decrease in security incidents for corporate partners",
  },
  {
    title: "Satisfaction Rate",
    value: "95%",
    detail: "would recommend Academy programmes to colleagues",
  },
];

const leaderQuotes = [
  {
    quote:
      "Employers can no longer remain passive recruiters; they must help build the skills ecosystem they will depend on.",
    author: "Subhapratha Rajagopal",
    role: "India Head of Payments, JPMorgan Chase",
  },
  {
    quote:
      "Current curriculum cannot stay frozen while technology changes rapidly; students must become lifelong learners who keep reskilling throughout their careers.",
    author: "Anil Sahasrabudhe",
    role: "Chairman, National Assessment and Accreditation Council",
  },
  {
    quote:
      "Students are not looking for courses; they are looking for progress, income and a pathway to a better life.",
    author: "Priya Agrawal",
    role: "Founder-Director, Antarang Foundation",
  },
  {
    quote:
      "The goal is to accelerate solutions that have already shown they can transform a young person's future through employability-focused learning.",
    author: "Education & Employability Coalition",
    role: "Industry Working Group",
  },
];

export function AcademyHome() {
  const [showSecondVideo, setShowSecondVideo] = useState(false);
  const [showFirstHeroDetails, setShowFirstHeroDetails] = useState(false);
  const [showSecondHeroLine, setShowSecondHeroLine] = useState(false);
  const [showIBLine2, setShowIBLine2] = useState(false);
  const [showIBDesc, setShowIBDesc] = useState(false);
  const [showIBPoints, setShowIBPoints] = useState(false);
  const [showIBCTA, setShowIBCTA] = useState(false);

  useEffect(() => {
    if (showSecondVideo) {
      setShowIBLine2(false);
      setShowIBDesc(false);
      setShowIBPoints(false);
      setShowIBCTA(false);

      const t1 = setTimeout(() => setShowIBLine2(true), 800);
      const t2 = setTimeout(() => setShowIBDesc(true), 1800);
      const t3 = setTimeout(() => setShowIBPoints(true), 3000);
      const t4 = setTimeout(() => setShowIBCTA(true), 4200);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
      };
    }
  }, [showSecondVideo]);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowSecondVideo((prev) => !prev);
    }, 10000); // 10 seconds

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (showSecondVideo) {
      setShowFirstHeroDetails(false);
      setShowSecondHeroLine(false);
      return;
    }

    setShowFirstHeroDetails(false);
    setShowSecondHeroLine(false);
    const revealTimer = setTimeout(() => {
      setShowFirstHeroDetails(true);
    }, HERO_DETAILS_REVEAL_DELAY_MS);

    const secondLineTimer = setTimeout(() => {
      setShowSecondHeroLine(true);
    }, HERO_SECOND_LINE_REVEAL_DELAY_MS);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(secondLineTimer);
    };
  }, [showSecondVideo]);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/75 via-orange-950/15 to-slate-900/70" />
        <div className="absolute inset-0 opacity-55">

          {/* First Video */}
          <video
            autoPlay
            muted
            loop
            className={`absolute z-10 w-full h-full object-cover transition-opacity duration-1000 ${showSecondVideo ? "opacity-0" : "opacity-100"
              }`}
          >
            <source src="/academy-hero.mp4" type="video/mp4" />
          </video>

          {/* Second Video */}
          <video
            autoPlay
            muted
            loop
            preload="auto"
            className={`absolute z-20 w-full h-full object-cover transition-opacity duration-1000 ${showSecondVideo ? "opacity-100" : "opacity-0"
              }`}
          >
            <source src="/Investment Banking.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Hero Section message*/}



        <div className="w-full h-screen flex items-center justify-center px-6 relative z-30">
          <div className="w-full max-w-5xl text-center">

            {!showSecondVideo ? (

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h1
                  className="text-5xl md:text-6xl font-bold mb-6 leading-tight flex flex-col items-center text-center gap-y-3"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <WordRevealLine text="Leadership is not taught." className="block" />
                  <AnimatePresence>
                    {showSecondHeroLine && (
                      <motion.div
                        key="forged-line"
                        className="w-full min-h-[1.25em] flex justify-center"
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 18 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                      >
                        <WordRevealLine text="It is forged in live decisions." className="block" wordClassName="logo-shine" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.h1>

                <AnimatePresence>
                  {showFirstHeroDetails && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.55 }}
                    >
                      <motion.p
                        className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45 }}
                      >
                        Digital Risk Academy operates as a not-for-profit - driven by impact, not commercial gain.
                      </motion.p>

                      <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.05 }}
                      >
                        <Link
                          to="/academy/programs"
                          className="w-auto group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 flex items-center justify-center space-x-2"
                        >
                          <span>Browse Programs</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                          to="/contact"
                          className="w-auto group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
                        >
                          <span>Talk to an Advisor</span>
                        </Link>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              /*INVESTMENT BANKING SLIDE*/    

            ) : (
              
              <motion.div
                key="second-slide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-8 text-center"
              >

                {/* Tagline */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}

                  className="inline-block px-6 py-2 rounded-full bg-orange-500/15 border border-orange-400/40 backdrop-blur-sm"
                >
                  <span className="text-orange-400 text-sm md:text-lg tracking-[0.2em] uppercase font-bold">
                    New Launch • Digital Risk Academy
                  </span>
                </motion.div>

                {/* Heading */}
                <motion.h1 className="text-4xl md:text-6xl font-bold leading-tight flex flex-col items-center gap-y-3 text-white">

                  <span className="text-slate-300 text-xl md:text-2xl">
                    Presenting
                  </span>

                  <AnimatePresence>
                    {showIBLine2 && (
                      <motion.div
                        key="ib-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}

                      >
                        <span className="logo-shine inline-block text-4xl md:text-5xl font-black tracking-wide uppercase">
                          Investment Banking Programme
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.h1>

                {/* Description */}
                <AnimatePresence>
                  {showIBDesc && (
                    <motion.p
                      key="ib-desc"
                      className="text-lg md:text-2xl font-semibold text-white max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}

                    >
                      A 4-week live, high-intensity experience led by professionals from top UK investment banks.
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Points */}
                <AnimatePresence>
                  {showIBPoints && (
                    <motion.div
                      key="ib-points"
                      className="text-slate-300 text-base md:text-lg space-y-2 max-w-2xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}

                    >
                      <p>Real-world decision environments — not simulations.</p>
                      <p>Cyber incidents. System outages. High-stakes decisions.</p>
                      <p>Operate and think like investment banking professionals.</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* CTA */}
                <AnimatePresence>
                  {showIBCTA && (
                    <motion.div
                      key="ib-cta"
                      className="flex justify-center pt-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}

                    >
                      <Link
                        to="/academy/programs"
                        className="px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-300"
                      >
                        Enroll Now →
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            )}

          </div>
        </div>

        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
      </section>

      {/* Subheadline Section */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="container mx-auto px-6">
          <motion.p
            className="text-center text-lg text-slate-700 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Digital Risk Academy helps individuals and institutions build practical, industry-relevant capability in cyber risk, governance, digital trust, compliance, and emerging technology risk.
          </motion.p>
        </div>
      </section>

      {/* Our Story & Vision */}
      <section className="py-24 bg-white text-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Story, Vision & Impact</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We believe education should go beyond textbooks and help learners build confidence, clarity, and career direction.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto" initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AcademyStoryPanel
              slides={academyStorySlides}
              label="Our Story"
              accent="text-orange-400 border-orange-500/40 bg-orange-500/10"
            />
            <AcademyStoryPanel
              slides={academyVisionSlides}
              label="Our Vision"
              accent="text-blue-400 border-blue-500/40 bg-blue-500/10"
            />
            <AcademyStoryPanel
              slides={academyImpactSlides}
              label="Social Impact"
              accent="text-orange-400 border-orange-500/40 bg-orange-500/10"
            />
          </motion.div>
        </div>
      </section>

      {/* Audience Routing */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Who We Serve</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Tailored learning pathways for every stage of your journey
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <AudienceCard
              icon={<Users className="w-10 h-10" />}
              title="For Students"
              description="Launch your digital risk career with industry-ready skills"
              link="/academy/programs"
              color="orange"
              image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=55&w=720&auto=format&fit=crop"
            />
            <AudienceCard
              icon={<Briefcase className="w-10 h-10" />}
              title="For Professionals"
              description="Advance your career with specialized risk expertise"
              link="/academy/programs"
              color="blue"
              image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=55&w=720&auto=format&fit=crop"
            />
            <AudienceCard
              icon={<Building2 className="w-10 h-10" />}
              title="For Organizations"
              description="Build team capability through corporate training"
              link="/academy/programs"
              color="orange"
              image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=55&w=720&auto=format&fit=crop"
            />
            <AudienceCard
              icon={<School className="w-10 h-10" />}
              title="For Institutions"
              description="Partner with us to enhance academic programs"
              link="/contact"
              color="blue"
              image="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=55&w=720&auto=format&fit=crop"
            />
          </motion.div>
        </div>
      </section>

      {/* What Makes Academy Unique */}
      <section className="py-24 bg-white text-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Makes Academy Unique</h2>
            <p className="text-base md:text-lg font-extrabold uppercase tracking-[0.07em] text-orange-400 max-w-5xl mx-auto">
              DIGITAL RISK ACADEMY OPERATES AS A NOT-FOR-PROFIT - DRIVEN BY IMPACT, NOT COMMERCIAL GAIN.
            </p>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mt-4">
              Students are not looking for courses. They are looking for progress.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <BenefitCard
              icon={<Target className="w-8 h-8" />}
              title="Learn From Active C-Suite Leaders"
              description="Programmes are delivered by active CISOs, AI leaders, and technology executives securing complex global digital ecosystems."
              image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=55&w=720&auto=format&fit=crop"
            />
            <BenefitCard
              icon={<BookOpen className="w-8 h-8" />}
              title="Rigorous Academic Partnerships"
              description="Strategic collaboration with UK universities combines industry agility with the credibility and depth of world-class academia."
              image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=55&w=720&auto=format&fit=crop"
            />
            <BenefitCard
              icon={<Briefcase className="w-8 h-8" />}
              title="Employment-Focused Design"
              description="Training alone does not create outcomes. Learners receive employability support to get and keep quality jobs."
              image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=55&w=720&auto=format&fit=crop"
            />
            <BenefitCard
              icon={<Users className="w-8 h-8" />}
              title="Apprenticeship Pathways"
              description="Apprenticeship routes bridge the gap between education and employment with practical, mentored experience."
              image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=55&w=720&auto=format&fit=crop"
            />
            <BenefitCard
              icon={<Award className="w-8 h-8" />}
              title="Career Progress Over Credentials"
              description="We focus on confidence, clarity, and career direction - not just course completion and certificates."
              image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=55&w=720&auto=format&fit=crop"
            />
            <BenefitCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="Lifelong Reskilling Mindset"
              description="Curriculum and coaching prepare learners to continuously reskill as technology and risk landscapes evolve."
              image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=55&w=720&auto=format&fit=crop"
            />
          </motion.div>
        </div>
      </section>

      {/* Future Learning Tracks */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Future Learning Tracks</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Structured pathways designed for real-world digital risk capability
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <TrackCard
              title="Cyber Risk Foundations"
              level="Beginner"
              duration="6 weeks"
              modules={["Risk fundamentals", "Threat landscape", "Controls & mitigation", "Incident response basics"]}
            />
            <TrackCard
              title="Governance, Risk & Compliance"
              level="Intermediate"
              duration="8 weeks"
              modules={["GRC frameworks", "Risk assessment", "Compliance management", "Policy development"]}
            />
            <TrackCard
              title="Digital Trust & Privacy"
              level="Intermediate"
              duration="8 weeks"
              modules={["Privacy frameworks", "Data protection", "Trust architecture", "Accountability"]}
            />
            <TrackCard
              title="AI Risk & Responsible AI"
              level="Advanced"
              duration="10 weeks"
              modules={["AI governance", "Ethical AI", "Risk assessment", "Responsible deployment"]}
            />
            <TrackCard
              title="Security Awareness & Human Risk"
              level="All Levels"
              duration="4 weeks"
              modules={["Human factors", "Awareness programs", "Behavior change", "Culture building"]}
            />
            <TrackCard
              title="Digital Risk for Business Leaders"
              level="Executive"
              duration="3 days"
              modules={["Strategic risk", "Board oversight", "Digital transformation", "Risk-informed decisions"]}
            />
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/academy/programs"
              className="inline-flex items-center space-x-2 text-orange-500 hover:text-orange-400 font-semibold group text-lg"
            >
              <span>View All Programs</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Validated Outcomes */}
      <section className="py-24 bg-white text-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Validated Outcomes</h2>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto">
              Our rigorous approach to capability development delivers measurable outcomes across learner and enterprise cohorts.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {validatedOutcomes.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="rounded-2xl border border-orange-200/70 shadow-md shadow-orange-100 p-6 text-center bg-white"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.1em] text-orange-500 mb-2">{item.value}</p>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quotes Slideshow */}
      <QuoteSlideshowSection />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-500 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
            <p className="text-xl mb-8 text-white/90">
              Explore programs, get personalized guidance, or connect with our academic team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/academy/programs"
                className="px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-300"
              >
                Browse All Programs
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Talk to an Advisor
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function AcademyStoryPanel({ slides, label, accent }: { slides: typeof academyStorySlides; label: string; accent: string }) {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  useEffect(() => {
    const slideId = setInterval(() => setCurrent((c: number) => (c + 1) % total), ACADEMY_SLIDE_DURATION);
    return () => { clearInterval(slideId); };
  }, [current, total]);

  const slide = slides[current];

  return (
    <div className="relative h-[420px] md:h-[500px] lg:h-[540px] overflow-hidden rounded-2xl">
      <AnimatePresence mode="sync">
        <motion.img
          key={current}
          src={slide.image}
          alt={slide.heading}
          className="absolute inset-0 w-full h-full object-cover brightness-110 contrast-110"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10" />

      <div className="absolute top-6 left-6 z-10">
        <span className={`text-xs font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full border ${accent}`}>
          {label}
        </span>
      </div>

      <div className="absolute bottom-[130px] left-6 right-6 z-10">
        <AnimatePresence mode="wait">
          <motion.h3
            key={current + "-h"}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="text-2xl md:text-3xl font-extrabold text-white leading-tight"
          >
            {slide.heading}
          </motion.h3>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-[44px] left-6 right-6 h-[80px] z-10 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={current + "-p"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-slate-200 text-sm leading-relaxed line-clamp-3"
          >
            {slide.body}
          </motion.p>
        </AnimatePresence>
      </div>

      <button onClick={() => setCurrent((current - 1 + total) % total)} className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center text-white/50 hover:text-white transition-colors" aria-label="Previous">
        <ChevronLeft className="w-5 h-5" strokeWidth={2} />
      </button>
      <button onClick={() => setCurrent((current + 1) % total)} className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center text-white/50 hover:text-white transition-colors" aria-label="Next">
        <ChevronRight className="w-5 h-5" strokeWidth={2} />
      </button>

      <div className="absolute bottom-4 left-0 right-0 z-20 flex flex-col items-center gap-1.5">
        <div className="flex gap-2">
          {slides.map((_: typeof slides[0], i: number) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "bg-orange-500 w-6" : "bg-white/30 w-2"}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function AudienceCard({ icon, title, description, link, color, image }: any) {
  return (
    <motion.div variants={fadeInUp}>
      <Link
        to={link}
        className="block group h-full bg-slate-900/70 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10"
      >
        <div className="relative h-40 overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover opacity-90 brightness-110 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/40 to-transparent" />
          <div className={`absolute left-5 bottom-4 inline-flex p-2.5 rounded-xl bg-slate-950/70 border ${color === 'orange' ? 'text-orange-400 border-orange-500/40' : 'text-blue-400 border-blue-500/40'}`}>
            {icon}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-slate-400 mb-4">{description}</p>
          <div className="flex items-center space-x-2 text-orange-500 font-semibold">
            <span>Explore</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function TrackCard({ title, level, duration, modules }: any) {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="px-3 py-1 bg-orange-500/10 text-orange-400 text-xs font-semibold rounded-full">
          {level}
        </span>
        <span className="text-slate-400 text-sm">{duration}</span>
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="space-y-2 mb-6">
        {modules.map((module: string, index: number) => (
          <li key={index} className="flex items-start space-x-2 text-sm text-slate-400">
            <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
            <span>{module}</span>
          </li>
        ))}
      </ul>
      <Link
        to="/academy/programs"
        className="text-orange-500 font-semibold inline-flex items-center space-x-1 group"
      >
        <span>View Program</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}

function QuoteSlideshowSection() {
  const [current, setCurrent] = useState(0);
  const total = leaderQuotes.length;

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 5000);

    return () => clearInterval(id);
  }, [total]);

  const quote = leaderQuotes[current];

  return (
    <section className="py-24 bg-slate-900/60">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Voices Shaping the Future</h2>
          <p className="text-xl text-slate-400">
            Perspectives from leaders across education, policy, and industry
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45 }}
            className="bg-slate-900/70 border border-slate-700 rounded-2xl p-8 md:p-10"
          >
            <p className="text-xl md:text-2xl text-slate-100 leading-relaxed italic mb-8">
              "{quote.quote}"
            </p>
            <div>
              <p className="text-orange-400 font-semibold text-lg">{quote.author}</p>
              <p className="text-slate-400 text-sm">{quote.role}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            onClick={() => setCurrent((current - 1 + total) % total)}
            className="w-10 h-10 rounded-full border border-slate-600 text-slate-300 hover:text-white hover:border-orange-400 transition-colors flex items-center justify-center"
            aria-label="Previous quote"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2 px-2">
            {leaderQuotes.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? "bg-orange-500 w-6" : "bg-slate-500 w-2"}`}
                aria-label={`Quote ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrent((current + 1) % total)}
            className="w-10 h-10 rounded-full border border-slate-600 text-slate-300 hover:text-white hover:border-orange-400 transition-colors flex items-center justify-center"
            aria-label="Next quote"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function BenefitCard({ icon, title, description, image }: any) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover brightness-110 contrast-105 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 to-transparent" />
        <div className="absolute left-4 bottom-4 inline-flex p-2 rounded-lg bg-white/90 text-orange-500 shadow-sm">
          {icon}
        </div>
      </div>
      <div className="p-6 text-left">
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </motion.div>
  );
}

function TestimonialCard({ quote, author, role, outcome }: any) {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8"
    >
      <div className="mb-6">
        <span className="inline-block px-3 py-1 bg-orange-500/10 text-orange-400 text-xs font-semibold rounded-full">
          {outcome}
        </span>
      </div>
      <p className="text-slate-300 mb-6 italic">"{quote}"</p>
      <div>
        <div className="font-semibold">{author}</div>
        <div className="text-sm text-slate-400">{role}</div>
      </div>
    </motion.div>
  );
}
