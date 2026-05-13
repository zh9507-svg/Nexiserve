import React from 'react';
import { ArrowRight, Zap, Target, Shield, Rocket } from 'lucide-react';

interface CTASectionProps {
  onAction: () => void;
  onTestAction: () => void;
}

export default function CTASection({ onAction, onTestAction }: CTASectionProps) {
  return (
    <section id="contact" className="py-20 md:py-32 px-6 bg-white relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 left-0 w-full h-full">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-slate-50 blur-[180px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="glass-card rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-24 text-center overflow-hidden relative group border-slate-200 bg-white/50">
          <div className="absolute inset-0 bg-linear-to-br from-slate-50 to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-slate-100 border border-slate-200 mb-8 md:mb-12">
               <Rocket className="w-5 h-5 text-slate-900" />
               <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">Final Protocol</span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-[8rem] font-black text-slate-900 leading-[0.75] tracking-tighter mb-8 md:mb-12">
              Ready to <br />
              <span className="text-gradient">Scale?</span>
            </h2>

            <p className="max-w-3xl mx-auto text-lg md:text-2xl text-slate-500 font-medium mb-12 md:mb-20 leading-relaxed">
              NexiServe only partners with <span className="text-slate-900 font-bold">3 agencies per quarter</span> to ensure absolute engineering focus. Secure your infrastructure audit today.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-20">
              {[
                { label: 'Automate Intake', icon: Zap },
                { label: 'Fix Data Leaks', icon: Shield },
                { label: 'Scale Output', icon: Rocket },
                { label: 'Maximize R.O.I', icon: Target },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-3 md:gap-4 group/item">
                   <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-200 group-hover/item:bg-slate-900 group-hover/item:text-white transition-all duration-500 shadow-sm">
                      <item.icon className="w-6 h-6 md:w-8 md:h-8" />
                   </div>
                   <span className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover/item:text-slate-900 transition-colors text-center">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mx-auto">
              <button 
                onClick={onAction}
                className="w-full sm:w-auto bg-slate-900 text-white px-8 py-5 md:px-12 md:py-8 rounded-[1.5rem] md:rounded-[2.5rem] font-black text-lg md:text-2xl hover:bg-brand transition-all shadow-2xl shadow-slate-900/10 flex items-center justify-center gap-3 md:gap-4 group"
              >
                Start System Audit
                <ArrowRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-2 transition-transform" />
              </button>
              <button 
                onClick={onTestAction}
                className="w-full sm:w-auto bg-white border-2 border-slate-900 text-slate-900 px-8 py-5 md:px-12 md:py-8 rounded-[1.5rem] md:rounded-[2.5rem] font-black text-lg md:text-2xl hover:bg-slate-50 transition-all flex items-center justify-center gap-3 md:gap-4"
              >
                Test AI voice agent
                <Zap className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </div>
            
            <div className="mt-12 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
               Limited Availability: 2/3 Slots Remaining for Q2
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
