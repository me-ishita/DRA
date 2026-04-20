"use client";
import { useScroll, useTransform, motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { useRef } from "react";
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
  Landmark,
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


/*function StoryVisionImpactSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const story = academyStorySlides[index % academyStorySlides.length];
  const vision = academyVisionSlides[index % academyVisionSlides.length];
  const impact = academyImpactSlides[index % academyImpactSlides.length];

  const cards = [
    { title: "Our Story", data: story, icon: BookOpen },
    { title: "Our Vision", data: vision, icon: Target },
    { title: "Social Impact", data: impact, icon: Users },
  ];

  return (
    <section className="py-28 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10"
        >
          {cards.map((card, i) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 150, rotateY: 90 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-[420px] perspective"
              >
                <motion.div
                  key={index}
                  initial={{ rotateY: 90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-xl"
                >
                  <img
                    src={card.data.image}
                    className="w-full h-40 object-cover"
                  />

                  <div className="p-6">
                    <Icon className="w-8 h-8 mb-3 text-white/80" />

                    <h3 className="text-lg font-semibold mb-2">
                      {card.title}
                    </h3>

                    <h4 className="text-sm text-white/60 mb-2">
                      {card.data.heading}
                    </h4>

                    <p className="text-sm text-white/70">
                      {card.data.body}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}*/


export default function InvestmentBankingCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -6 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative z-10 w-full max-w-6xl mx-auto rounded-[32px] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.25)] border border-white/10 min-h-[420px] md:min-h-[500px]"    >

      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0">
        <video
          src="/Investment Banking.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-110 contrast-110"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 p-8 md:p-14 text-white flex flex-col gap-8">

        {/* Title */}
        <h2 className="leading-tight text-center md:text-left">
          <span className="block logo-shine text-4xl md:text-6xl font-extrabold tracking-wide uppercase text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]">
            Investment Banking Programme
          </span>
        </h2>

        {/* Highlights */}
        <div className="grid md:grid-cols-1 gap-y-3 sm:gap-y-4 gap-x-6">

          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-orange-400 shrink-0" />
            <span className="text-base md:text-lg font-semibold text-slate-100">
              For students & early-career professionals
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Landmark className="w-5 h-5 text-orange-400 shrink-0" />
            <span className="text-base md:text-lg font-semibold text-slate-100">
              Real-world banking scenarios
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Briefcase className="w-5 h-5 text-orange-400 shrink-0" />
            <span className="text-base md:text-lg font-semibold text-slate-100">
              Career guidance & mentorship
            </span>
          </div>

        </div>
        {/* Pricing + CTA */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-4">

          {/* Price */}
          <div className="flex items-center gap-4">
            <span className="text-white/40 line-through text-xl">
              ₹50,000
            </span>
            <span className="text-3xl md:text-4xl font-bold text-orange-400">
              ₹38,750
            </span>
            <span className="text-sm text-orange-300 bg-orange-500/20 px-3 py-1 rounded-full border border-orange-400/30">
              Early Access
            </span>
          </div>

          {/* CTA */}
          <Link
            to="/academy/programs/investment-banking"
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-300"
          >
            Apply Now →
          </Link>

        </div>
      </div>

    </motion.div>
  );
}

export function AcademyHome() {
  const [showFirstHeroDetails, setShowFirstHeroDetails] = useState(false);
  const [showSecondHeroLine, setShowSecondHeroLine] = useState(false);

  useEffect(() => {
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
  }, []);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // animation controls
  const y = useTransform(scrollYProgress, [0, 0.4], [200, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.4], [40, 0]);

  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => prev + 1);
    }, 3000); // flip speed

    return () => clearInterval(interval);
  }, []);

  const story = academyStorySlides[slideIndex % academyStorySlides.length];
  const vision = academyVisionSlides[slideIndex % academyVisionSlides.length];
  const impact = academyImpactSlides[slideIndex % academyImpactSlides.length];

  return (
    <div className="pt-0 mt-0">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[120vh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 z-0 w-full h-full object-cover scale-105 brightness-[0.8]"
        >
          <source src="/academy-hero.mp4" type="video/mp4" />
        </video>

        {/* Strong overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-black/40 to-black/60"></div>
        <motion.div
          style={{ y, opacity }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full max-w-6xl px-6 z-[999]"
        >
          <div className="absolute inset-0 bg-black/30 backdrop-blur-md rounded-2xl -z-10"></div>
          <div className="grid md:grid-cols-3 gap-6">

            {/* STORY CARD */}
            <motion.div
              style={{ rotateY: rotate }}
              className="relative h-[320px] bg-slate-900 border border-white/20 shadow-2xl overflow-hidden z-[1000]"  >
              <motion.div
                key={slideIndex}
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <div className="absolute inset-0 bg-black/40 mix-blend-multiply pointer-events-none"></div>

                <img src={story.image} className="w-full h-32 object-cover brightness-90" />
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-1">Our Story</h3>
                  <h4 className="text-white/90 text-sm mb-1">{story.heading}</h4>
                  <p className="text-white/80 text-xs">{story.body}</p>
                </div>
              </motion.div>
            </motion.div>

            {/* VISION CARD */}
            <motion.div
              style={{ rotateY: rotate }}
              className="relative h-[320px] bg-slate-900/95 border border-white/20 shadow-2xl overflow-hidden hover:shadow-white/20 hover:shadow-2xl transition-all duration-300"
            >
              <motion.div
                key={slideIndex}
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <img src={vision.image} className="w-full h-32 object-cover" />
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-1">Our Vision</h3>
                  <h4 className="text-white/90 text-sm mb-1">{vision.heading}</h4>
                  <p className="text-white/80 text-xs">{vision.body}</p>
                </div>
              </motion.div>
            </motion.div>

            {/* IMPACT CARD */}
            <motion.div
              style={{ rotateY: rotate }}
              className="relative h-[320px] bg-black/70 backdrop-blur-xl rounded-2xl border border-white/30 overflow-hidden hover:shadow-white/20 hover:shadow-2xl transition-all duration-300"
            >
              <motion.div
                key={slideIndex}
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <img src={impact.image} className="w-full h-32 object-cover" />
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-1">Impact</h3>
                  <h4 className="text-white/90 text-sm mb-1">{impact.heading}</h4>
                  <p className="text-white/80 text-xs">{impact.body}</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </motion.div>

        {/* Hero Section message*/}
        <div className="w-full h-screen flex items-center justify-center px-6 relative z-30">
          <div className="w-full max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }} >
              <motion.h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight flex flex-col items-center text-center gap-y-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }} >
                <WordRevealLine text="Leadership is not taught." className="block" />
                <AnimatePresence>
                  {showSecondHeroLine && (<motion.div key="forged-line" className="w-full min-h-[1.25em] flex justify-center"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 18 }}
                    transition={{ duration: 0.45, ease: "easeOut" }} >
                    <WordRevealLine text="It is forged in live decisions." className="block" wordClassName="logo-shine" />
                  </motion.div>)}
                </AnimatePresence>
              </motion.h1>
              <AnimatePresence>
                {showFirstHeroDetails && (
                  <motion.div initial={{
                    opacity: 0, y: 20
                  }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.55 }} >
                    <motion.p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45 }} > Digital Risk Academy operates as a not-for-profit - driven by impact, not commercial gain.
                    </motion.p> <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.05 }} >
                      <Link to="/academy/programs"
                        className="w-auto group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 flex items-center justify-center space-x-2" >
                        <span>Browse Programmes</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link to="/contact" className="w-auto group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2" >
                        <span>Talk to an Adviser</span>
                      </Link>
                    </motion.div>
                  </motion.div>)}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INVESTMENT BANKING SECTION */}

      <section className="py-10 bg-white text-slate-900 relative overflow-hidden">

        {/* Heading */}
        <div className="max-w-6xl mx-auto px-6 text-center mb-16 relative z-10">

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-orange-500 font-semibold">
              New Launch:
            </span>{" "}
            June 2026 Elite Programme
          </h2>

          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A 4-week live, high-intensity programme led by professionals working in top UK investment banks across digital risk, cyber risk, and financial services.
          </p>

        </div>

        {/* ✅ Centered Card */}
        <div className="relative z-10 flex justify-center px-4 md:px-10">
          <InvestmentBankingCard />
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
              title="For Early Career Professionals"
              description="Advance your career with specialized risk expertise"
              link="/academy/programs"
              color="blue"
              image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=55&w=720&auto=format&fit=crop"
            />
            <AudienceCard
              icon={<Building2 className="w-10 h-10" />}
              title="For Experienced Professionals"
              description="Build team capability through corporate training"
              link="/academy/programs"
              color="orange"
              image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=55&w=720&auto=format&fit=crop"
            />
            <AudienceCard
              icon={<School className="w-10 h-10" />}
              title="For Organisations"
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
