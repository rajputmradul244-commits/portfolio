"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Calendar } from "lucide-react";

import { certificatesData } from "@/lib/data";



export default function Certificates() {
  return (
    <section className="py-24 bg-[#121212] text-white relative z-10" id="certificates">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Licenses & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Certifications</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            A collection of my continuous learning journey and professional achievements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-[#1c1c21] rounded-2xl overflow-hidden border border-white/5 hover:border-purple-500/30 transition-colors shadow-lg hover:shadow-purple-500/10 flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full bg-black/40 overflow-hidden p-4 flex items-center justify-center">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1c1c21] opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                
                <div className="relative w-full h-full rounded-lg overflow-hidden border border-white/10 group-hover:border-purple-500/50 transition-colors bg-black/60">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>

              <div className="p-6 relative z-20 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-purple-300 transition-colors line-clamp-2">
                  {cert.title}
                </h3>
                
                <div className="mt-auto space-y-3 text-sm text-zinc-400">
                  <div className="flex items-center">
                    <Award className="w-4 h-4 mr-3 text-pink-500 shrink-0" />
                    <span className="truncate">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-3 text-purple-500 shrink-0" />
                    <span className="truncate">{cert.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
