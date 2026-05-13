import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, Zap } from 'lucide-react';

interface HeroProps {
  onPrimaryAction: () => void;
  onTestAction: () => void;
}

export default function Hero({ onPrimaryAction, onTestAction }: HeroProps) {
  const VIDEO_URL = "https://assets.cdn.filesafe.space/SNDu8PnbHK5mXYgWnUV0/media/68b824a49bcba95afdbb78b0.mov";

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden bg-white">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-slate-100 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand/5 blur-[150px] rounded-full animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 mb-8 md:mb-10 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-brand shadow-[0_0_10px_rgba(37,99,235,0.4)]" />
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] text-center">AI Automation Engine for UK Agencies</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-[10rem] font-black text-slate-900 leading-[0.8] tracking-tighter mb-8 md:mb-10">
            Established <br />
            <span className="text-gradient">Estate Agencies.</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-2xl text-slate-500 font-medium leading-relaxed mb-12 md:mb-16">
            Automate <span className="text-slate-900 font-bold">Call Handling and Admin</span> Without Hiring More Staff. 
            Custom AI workflows engineered for faster response and stronger margins.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-16">
            <button 
              onClick={onPrimaryAction}
              className="w-full sm:w-auto bg-slate-900 text-white px-8 py-5 md:px-10 md:py-6 rounded-2xl font-black text-lg md:text-xl flex items-center justify-center gap-2 hover:bg-brand transition-all shadow-2xl shadow-slate-900/10"
            >
              Apply To Automate
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button 
              onClick={onTestAction}
              className="w-full sm:w-auto bg-white border-2 border-slate-900 text-slate-900 px-8 py-5 md:px-10 md:py-6 rounded-2xl font-black text-lg md:text-xl flex items-center justify-center gap-2 hover:bg-slate-50 transition-all"
            >
              Test AI voice agent
              <Zap className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Video Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="max-w-5xl mx-auto rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-slate-200 shadow-2xl bg-white p-2 md:p-4"
          >
            <div className="rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-slate-900 relative aspect-video shadow-inner">
              <video 
                src={VIDEO_URL} 
                className="w-full h-full object-cover"
                controls
                playsInline
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-24 md:mt-40">
          {[
            { label: 'Highest ROI Delivered', value: '8.24x' },
            { label: 'Managed Leads Value', value: '£5M+' },
            { label: 'Client Retention', value: '97%' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 md:p-12 bg-slate-50 rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 group hover:bg-white hover:shadow-2xl hover:border-slate-200 transition-all duration-500"
            >
              <div className="text-4xl md:text-6xl font-black text-slate-900 mb-2 md:mb-3 group-hover:text-brand transition-colors">{stat.value}</div>
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
