import React from 'react';
import { motion } from 'motion/react';
import { Quote, CircleCheck, Star } from 'lucide-react';

export default function Testimonial() {
  return (
    <section id="results" className="py-32 px-6 bg-slate-50 overflow-hidden relative">
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-0 w-full h-full">
         <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full -ml-64" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          {/* Left Side - Image/Profile */}
          <div className="lg:w-1/3 relative">
            <div className="relative z-10 w-full aspect-[4/5] rounded-[3rem] bg-white overflow-hidden shadow-2xl border border-slate-200 transform -rotate-3 hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                alt="Simon Shinerock" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent" />
              <div className="absolute bottom-12 left-10">
                <div className="bg-slate-900 text-white px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-[0.3em] mb-4 inline-block shadow-xl">
                  Verified Client
                </div>
                <h4 className="text-3xl font-black text-white mb-1 tracking-tight">Simon Shinerock</h4>
                <p className="text-white/70 font-black text-xs uppercase tracking-widest font-display">Chairman @ Choices Group</p>
              </div>
            </div>
            
            {/* Badge Overlay */}
            <div className="absolute -bottom-8 -right-8 md:-right-16 z-20 glass-card p-8 rounded-[2rem] shadow-2xl border border-slate-200 hidden md:block bg-white/80">
               <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-800 shadow-xl">
                    <CircleCheck className="text-white w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1.5">Entity Status</div>
                    <div className="font-black text-slate-900 text-xl tracking-tight">Verified Protocol</div>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Side - Quote */}
          <div className="lg:w-2/3">
             <div className="flex items-center gap-3 mb-8">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] flex items-center gap-3">
                   <div className="flex">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-brand text-brand" />)}
                   </div>
                   Validated Agent Performance
                </div>
             </div>
             
             <h2 className="text-5xl md:text-[6rem] font-black text-slate-900 leading-[0.8] tracking-tighter mb-16">
                Built by <br /><span className="text-gradient">Operators.</span>
             </h2>

             <div className="relative mb-16">
                <Quote className="absolute -top-12 -left-12 w-24 h-24 text-slate-100 -z-10" />
                <blockquote className="text-3xl md:text-4xl font-display font-medium text-slate-500 leading-tight">
                   "We've been able to manage <span className="text-slate-900 font-bold">more and better quality business</span> with less people. The AI infrastructure NexiServe built for us is an incredible asset for the future of our group."
                </blockquote>
             </div>

             <div className="flex items-center gap-6 border-t border-slate-200 pt-12">
                <div className="w-16 h-16 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center text-white font-black text-xl">
                   SS
                </div>
                <div>
                   <h5 className="font-black text-slate-900 text-xl tracking-tight">Simon Shinerock</h5>
                   <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Chairman @ Choices Estate Group</p>
                </div>
                
                <div className="ml-auto flex gap-4">
                   <div className="w-12 h-12 rounded-2xl border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white cursor-pointer text-slate-400 transition-all">←</div>
                   <div className="w-12 h-12 rounded-2xl border border-slate-900 flex items-center justify-center hover:bg-brand hover:border-brand cursor-pointer text-slate-900 hover:text-white transition-all">→</div>
                </div>
             </div>

             {/* Metric Footer */}
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 p-10 bg-white rounded-[3rem] border border-slate-200 shadow-sm">
                {[
                  { label: 'Client ROI', value: '4.8x' },
                  { label: 'Speed-to-Lead', value: '<1m' },
                  { label: 'Retention', value: '97%' },
                  { label: 'Managed Leads', value: '£5M+' },
                ].map(stat => (
                  <div key={stat.label}>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">{stat.label}</div>
                    <div className="text-3xl font-black text-slate-900 tracking-tight">{stat.value}</div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
