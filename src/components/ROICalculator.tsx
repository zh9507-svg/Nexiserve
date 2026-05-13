import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, TrendingUp, Users, Clock, ArrowRight } from 'lucide-react';

interface ROICalculatorProps {
  onAction: () => void;
}

export default function ROICalculator({ onAction }: ROICalculatorProps) {
  const [leads, setLeads] = useState(100);
  const [closeRate, setCloseRate] = useState(5);
  const [dealValue, setDealValue] = useState(5000);

  const currentRevenue = (leads * (closeRate / 100) * dealValue);
  const aiRevenue = (leads * ((closeRate * 1.5) / 100) * dealValue);
  const uplift = aiRevenue - currentRevenue;

  return (
    <section id="roi" className="py-20 md:py-32 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-[10px] font-black text-brand uppercase tracking-[0.4em] mb-4 md:mb-6 block">Investment Framework</span>
          <h2 className="text-4xl sm:text-6xl md:text-[8rem] font-black text-slate-900 leading-[0.75] tracking-tighter">
            Predictable <span className="text-gradient">Yield.</span>
          </h2>
          <p className="mt-8 md:mt-12 text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Infrastructure scales better than headcount. See how much revenue your agency is leaving on the table.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* Controls */}
          <div className="bento-card bg-slate-50 border-slate-200 p-6 md:p-12">
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-2xl flex items-center justify-center text-brand border border-slate-200 shadow-sm">
                <Calculator className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Revenue Assumptions</h3>
            </div>

            <div className="space-y-8 md:space-y-12">
              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Monthly Leads</label>
                  <span className="font-display font-black text-slate-900 text-lg md:text-xl">{leads}</span>
                </div>
                <input 
                  type="range" 
                  min="50" 
                  max="1000" 
                  step="50"
                  value={leads}
                  onChange={(e) => setLeads(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand"
                />
              </div>

              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Current Close Rate (%)</label>
                  <span className="font-display font-black text-slate-900 text-lg md:text-xl">{closeRate}%</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="20" 
                  step="1"
                  value={closeRate}
                  onChange={(e) => setCloseRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand"
                />
              </div>

              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Avg Fee Value (£)</label>
                  <span className="font-display font-black text-slate-900 text-lg md:text-xl">£{dealValue.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="1000" 
                  max="20000" 
                  step="500"
                  value={dealValue}
                  onChange={(e) => setDealValue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand"
                />
              </div>
            </div>

            <div className="mt-8 md:mt-12 p-5 md:p-6 bg-brand/5 border border-brand/10 rounded-2xl flex items-center gap-4">
               <TrendingUp className="text-brand w-5 h-5 md:w-6 md:h-6" />
               <p className="text-xs md:text-sm text-slate-500 font-medium">
                 AI typically improves speed-to-lead by <span className="text-slate-900 font-bold">90%</span>, leading to a <span className="text-slate-900 font-bold">50% lift</span> in conversion.
               </p>
            </div>
          </div>

          {/* Results */}
          <div className="bento-card !bg-slate-900 text-white border-none p-8 md:p-12 flex flex-col justify-between relative overflow-hidden shadow-2xl shadow-slate-900/40">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand/20 blur-[100px] rounded-full -mr-32 -mt-32" />
            
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 mb-6 md:mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                <span className="text-[10px] font-black text-white/70 uppercase tracking-[0.2em] leading-none">Calculated Potential</span>
              </div>
              <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-4 text-white drop-shadow-2xl break-words">
                +£{uplift.toLocaleString()}
              </div>
              <p className="text-lg md:text-2xl font-display font-medium text-slate-400">Additional <span className="text-white">Monthly</span> Revenue</p>
            </div>

            <div className="grid grid-cols-2 gap-6 md:gap-8 relative mt-12 md:mt-16 pt-12 md:pt-16 border-t border-white/10">
              <div>
                <Clock className="w-6 h-6 md:w-8 md:h-8 mb-3 md:mb-4 opacity-40" />
                <div className="text-2xl md:text-3xl font-black mb-1 text-white">~40 hrs</div>
                <div className="text-[10px] font-black uppercase tracking-widest opacity-40">Admin Time Reclaimed</div>
              </div>
              <div>
                <Users className="w-6 h-6 md:w-8 md:h-8 mb-3 md:mb-4 opacity-40" />
                <div className="text-2xl md:text-3xl font-black mb-1 text-white">0 staff</div>
                <div className="text-[10px] font-black uppercase tracking-widest opacity-40">New Hires Required</div>
              </div>
            </div>

            <button 
              onClick={onAction}
              className="mt-10 md:mt-12 bg-white text-slate-900 w-full py-5 md:py-6 rounded-2xl font-black text-lg md:text-xl hover:bg-brand hover:text-white transition-all flex items-center justify-center gap-3 shadow-xl"
            >
              Scale My Revenue
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
