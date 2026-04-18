import { motion } from "motion/react";
import { Link } from "react-router";
import { BookOpen, FileText, Video, Headphones, Download, ArrowRight } from "lucide-react";

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

export function Resources() {
  return (
    <div className="pt-20">
      <section className="relative py-24 bg-gradient-to-br from-slate-950 via-orange-950/20 to-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Learning Resources</h1>
            <p className="text-xl text-slate-300">
              Free resources to support your digital risk learning journey
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <ResourceCard
              icon={<BookOpen className="w-10 h-10" />}
              type="Guide"
              title="Digital Risk Fundamentals"
              description="A comprehensive introduction to digital risk concepts and frameworks"
            />
            <ResourceCard
              icon={<FileText className="w-10 h-10" />}
              type="Whitepaper"
              title="GRC Best Practices 2026"
              description="Industry insights on governance, risk, and compliance excellence"
            />
            <ResourceCard
              icon={<Video className="w-10 h-10" />}
              type="Webinar"
              title="AI Risk Governance 101"
              description="Expert session on implementing AI governance frameworks"
            />
            <ResourceCard
              icon={<BookOpen className="w-10 h-10" />}
              type="eBook"
              title="Privacy & Trust Handbook"
              description="Practical guide to building digital trust and privacy programs"
            />
            <ResourceCard
              icon={<FileText className="w-10 h-10" />}
              type="Template"
              title="Risk Assessment Framework"
              description="Ready-to-use templates for conducting risk assessments"
            />
            <ResourceCard
              icon={<Headphones className="w-10 h-10" />}
              type="Podcast"
              title="Digital Risk Insights"
              description="Weekly conversations with industry practitioners and thought leaders"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Career Development Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                <FileText className="w-10 h-10 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Career Path Guide</h3>
                <p className="text-slate-400 mb-4">Navigate your digital risk career with our comprehensive pathway maps</p>
                <button className="text-blue-500 font-semibold inline-flex items-center space-x-1">
                  <Download className="w-4 h-4" />
                  <span>Download Guide</span>
                </button>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                <BookOpen className="w-10 h-10 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Skills Assessment</h3>
                <p className="text-slate-400 mb-4">Evaluate your current capabilities and identify growth opportunities</p>
                <button className="text-blue-500 font-semibold inline-flex items-center space-x-1">
                  <ArrowRight className="w-4 h-4" />
                  <span>Take Assessment</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-orange-500 to-blue-600">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Learn More?</h2>
            <p className="text-xl mb-8 text-white/90">
              Explore our full catalog of programs and resources.
            </p>
            <Link
              to="/programs"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-slate-100 transition-all"
            >
              <span>Browse Programs</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ResourceCard({ icon, type, title, description }: any) {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all"
    >
      <div className="text-blue-500 mb-4">{icon}</div>
      <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-semibold rounded-full mb-3">
        {type}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate-400 text-sm mb-4">{description}</p>
      <button className="text-blue-500 font-semibold inline-flex items-center space-x-1 group">
        <Download className="w-4 h-4" />
        <span>Download</span>
      </button>
    </motion.div>
  );
}
