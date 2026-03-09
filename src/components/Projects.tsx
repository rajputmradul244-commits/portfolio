"use client";

import { motion } from "framer-motion";
import { User, Briefcase, GraduationCap, Award, Zap, Mail, MapPin, Phone, Linkedin, Medal } from "lucide-react";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="profile" className="min-h-screen bg-[#0a0a0a] text-white py-32 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <h3 className="text-zinc-500 uppercase tracking-widest text-sm mb-4 font-semibold">Profile Overview</h3>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">About Me.</h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* About Section - Spans 2 cols */}
          <motion.div variants={itemVariants} className="md:col-span-2 group relative rounded-3xl overflow-hidden p-8 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors duration-500 flex flex-col justify-start">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Introduction</h3>
            </div>
            <p className="text-zinc-300 leading-relaxed text-lg">
              I am Mradul Rajput, a PGDM student at <strong>IMS Ghaziabad</strong> with a BBA in Marketing & Finance from <strong>IIMT University</strong>. I am deeply interested in marketing strategy, business analytics, and leveraging AI tools to help businesses make data-driven decisions that propel growth.
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={itemVariants} className="group relative rounded-3xl overflow-hidden p-8 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors duration-500 flex flex-col justify-start">
             <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Contact</h3>
            </div>
            <div className="flex flex-col gap-4 text-zinc-300">
              <a href="mailto:rajputmradul244@gmail.com" className="hover:text-white transition-colors flex items-center gap-3"><Mail className="w-4 h-4"/> rajputmradul244@gmail.com</a>
              <a href="tel:9870904975" className="hover:text-white transition-colors flex items-center gap-3"><Phone className="w-4 h-4"/> +91 9870904975</a>
              <p className="flex items-center gap-3"><MapPin className="w-4 h-4"/> Ghaziabad, India</p>
              <a href="https://linkedin.com/in/mradulrajput" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors flex items-center gap-3"><Linkedin className="w-4 h-4"/> LinkedIn Profile</a>
            </div>
          </motion.div>

          {/* Experience Section - Spans 2 cols */}
          <motion.div variants={itemVariants} className="md:col-span-2 group relative rounded-3xl overflow-hidden p-8 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors duration-500 flex flex-col justify-start">
             <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            <div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-semibold text-white">Product Promoter - Dabur</h4>
                <span className="text-sm text-zinc-400 border border-zinc-700 px-3 py-1 rounded-full bg-zinc-800/50">10-day Live Project</span>
              </div>
              <ul className="list-none space-y-2 mt-4 text-zinc-300">
                <li className="flex items-start gap-2"><span className="text-zinc-500 mt-1">▹</span> Promoted Dabur products effectively in retail store environments.</li>
                <li className="flex items-start gap-2"><span className="text-zinc-500 mt-1">▹</span> Explained key product benefits and value propositions to customers.</li>
                <li className="flex items-start gap-2"><span className="text-zinc-500 mt-1">▹</span> Observed and recorded patterns in consumer buying behaviour.</li>
                <li className="flex items-start gap-2"><span className="text-zinc-500 mt-1">▹</span> Collected and analyzed actionable customer feedback metrics.</li>
              </ul>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={itemVariants} className="group relative rounded-3xl overflow-hidden p-8 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors duration-500 flex flex-col justify-start">
             <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white">PGDM</h4>
                <p className="text-zinc-400">IMS Ghaziabad</p>
                <p className="text-sm text-zinc-500">2025 – 2027</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">BBA Marketing & Finance</h4>
                <p className="text-zinc-400">IIMT University</p>
                <p className="text-sm text-zinc-500">2022 – 2025</p>
              </div>
            </div>
          </motion.div>

           {/* Skills Section */}
           <motion.div variants={itemVariants} className="group relative rounded-3xl overflow-hidden p-8 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors duration-500 flex flex-col justify-start">
             <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Marketing Strategy", "Business Analytics", "Artificial Intelligence", "Power BI", "Data Interpretation", "Generative AI", "Prompt Engineering"].map(skill => (
                <span key={skill} className="px-3 py-1.5 text-sm font-medium bg-white/10 text-zinc-200 rounded-full border border-white/5">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div variants={itemVariants} className="group relative rounded-3xl overflow-hidden p-8 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors duration-500 flex flex-col justify-start">
             <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Achievements</h3>
            </div>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start gap-2"><Medal className="w-4 h-4 text-zinc-500 mt-1 flex-shrink-0"/> AIMA SMG 2026 participant (IMS Ghaziabad)</li>
              <li className="flex items-start gap-2"><Medal className="w-4 h-4 text-zinc-500 mt-1 flex-shrink-0"/> Coordinator – 100m race (Khelo IMS Fest)</li>
              <li className="flex items-start gap-2"><Medal className="w-4 h-4 text-zinc-500 mt-1 flex-shrink-0"/> Tug of War participant (Khelo IMS)</li>
              <li className="flex items-start gap-2"><Medal className="w-4 h-4 text-zinc-500 mt-1 flex-shrink-0"/> Event Executive – Event Udaan</li>
              <li className="flex items-start gap-2"><Medal className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0"/> Winner – TechFest 2023</li>
            </ul>
          </motion.div>

          {/* Certifications Section */}
          <motion.div variants={itemVariants} className="group relative rounded-3xl overflow-hidden p-8 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors duration-500 flex flex-col justify-start">
             <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>
            <ul className="space-y-4 text-zinc-300">
              <li className="border-l-2 border-white/20 pl-4 py-1">NPTEL – Marketing of Services</li>
              <li className="border-l-2 border-white/20 pl-4 py-1">NPTEL – Retail Management</li>
              <li className="border-l-2 border-white/20 pl-4 py-1">Fundamentals of Digital Marketing</li>
              <li className="border-l-2 border-white/20 pl-4 py-1">Generative AI Literacy</li>
            </ul>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
