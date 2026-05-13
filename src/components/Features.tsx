import React from 'react';
import { motion } from 'motion/react';
import { Phone, Database, Target, Layers, Zap, Clock } from 'lucide-react';

export default function Features() {
  return (
    <section id="workflow" className="py-32 px-6 bg-slate-50 relative">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/5 blur-[150px] rounded-full -mr-96 -mt-96" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="mb-24">
          <span className="text-[10px] font-black text-brand uppercase tracking-[0.4em] mb-6 block text-center md:text-left">The Infrastructure</span>
          <h2 className="text-6xl md:text-[8rem] font-black text-slate-900 leading-[0.75] tracking-tighter text-center md:text-left">
            Engineered Systems <br />
            <span className="text-slate-300">For Absolute Scale.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* AI Voice Callers - Highlight Card */}
          <div className="md:col-span-2 bento-card flex flex-col justify-between group overflow-hidden border-slate-200 shadow-sm hover:shadow-2xl bg-white hover:border-slate-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 blur-[100px] rounded-full -mr-32 -mt-32 group-hover:bg-brand/10 transition-all duration-700" />
            <div className="relative">
              <div className="w-16 h-16 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 shadow-sm">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">AI Voice Callers</h3>
              <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-xl mb-10">
                Enable sub-5-minute speed-to-lead and 24/7 availability. Human-sounding agents that handle outreach, inbound intake, and direct calendar booking without a human in the loop.
              </p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 mb-10 relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-brand animate-ping" />
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Diagnostic Query</span>
              </div>
              <p className="text-xl font-display font-bold text-slate-900 tracking-tight">What is your current lead volume and typical response time?</p>
            </div>

            <div className="flex flex-wrap gap-3">
              {['Emotionally Aware', 'CRM Bi-Directional', 'GDPR Secure', 'Objection Handling'].map(tag => (
                <span key={tag} className="px-4 py-2 bg-slate-100 border border-slate-200 rounded-xl text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] whitespace-nowrap">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CRM Architecture */}
          <div className="bento-card !bg-slate-900 text-white border-none flex flex-col justify-between group overflow-hidden shadow-2xl shadow-slate-900/40">
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand/20 blur-[80px] rounded-full group-hover:bg-brand/30 transition-all duration-700" />
            <div className="relative">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-10 border border-white/10 group-hover:bg-brand transition-colors duration-500">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-black mb-6 leading-tight tracking-tight text-white text-left">Smart CRM <br /> Architecture</h3>
              <p className="text-slate-400 text-lg font-medium leading-relaxed mb-16 text-left">
                Custom DLL & n8n pipelines engineered for absolute visibility. We fix the data leak before we turn on the ads.
              </p>
            </div>
            
            <div className="relative h-32 bg-white/5 rounded-3xl border border-white/10 p-6 overflow-hidden backdrop-blur-sm group-hover:border-white/20 transition-all">
               <div className="flex items-center gap-3 mb-4 text-white">
                  <Zap className="w-5 h-5" />
                  <span className="text-[10px] font-black tracking-widest uppercase opacity-80">Automation Yield</span>
               </div>
               <div className="w-full h-3 bg-white/10 rounded-full mt-6">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '92%' }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-linear-to-r from-brand to-brand-cyan rounded-full relative"
                  >
                    <div className="absolute -right-1.5 -top-1.5 w-6 h-6 bg-white rounded-full shadow-[0_0_20px_white]" />
                  </motion.div>
               </div>
            </div>
          </div>

          {/* Paid Media Mastery */}
          <div className="bento-card flex flex-col justify-between group border-slate-200 bg-white">
            <div>
              <div className="w-16 h-16 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-6">Paid Media Mastery</h3>
              <p className="text-slate-500 font-medium leading-relaxed mb-8">
                £500k+ in ad spend managed. We deploy Google, Meta, and TikTok campaigns built to feed the infrastructure.
              </p>
            </div>
            <div className="flex items-center justify-between pt-8 border-t border-slate-100">
               <div className="flex gap-4">
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-[1.5]">Google Ads Platform <br/> Meta Ads Network</div>
               </div>
               <div className="text-right">
                  <div className="text-[10px] font-black text-brand uppercase tracking-[0.2em] leading-tight">Certified <br /> Platform <br/> Expert</div>
               </div>
            </div>
          </div>

          {/* Database Reactivation */}
          <div className="md:col-span-2 bento-card bg-white border-slate-200 flex flex-col lg:flex-row gap-12 group">
            <div className="flex-1">
               <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 mb-8">
                  <Clock className="w-4 h-4 text-brand" />
                  <span className="text-[10px] font-black text-brand uppercase tracking-[0.2em]">Found Revenue Stream</span>
               </div>
               <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Database Reactivation</h3>
               <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10">
                  Stop letting old leads rot in your CRM. Our AI-driven omnichannel sequences revive "dead" opportunities and turn them into booked appointments.
               </p>
               <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-black text-lg hover:bg-brand transition-all shadow-xl shadow-slate-900/10">
                  Revive My Lead List
               </button>
            </div>
            <div className="flex-1 relative hidden lg:block rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-100">
               <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />
               <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Floating Data Layers */}
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ 
                          y: [0, -10, 0],
                          opacity: [0.4, 0.7, 0.4]
                        }}
                        transition={{ 
                          duration: 4, 
                          delay: i * 0.5, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                        className="absolute w-40 h-24 bg-white border border-slate-200 rounded-2xl shadow-xl backdrop-blur-sm"
                        style={{ 
                          transform: `translateY(${(i - 1) * 30}px) scale(${1 - i * 0.1})`,
                          zIndex: 10 - i 
                        }}
                      />
                    ))}
                    <div className="relative z-20 w-16 h-16 bg-brand rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                      <Zap className="w-8 h-8 text-white fill-white/20" />
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
