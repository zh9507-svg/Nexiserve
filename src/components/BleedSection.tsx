import React from 'react';
import { motion } from 'motion/react';
import { XCircle, CheckCircle2, AlertTriangle } from 'lucide-react';
import { cn } from '../lib/utils';

export default function BleedSection() {
  const painPoints = [
    {
      title: 'Manual Intake',
      desc: 'Humans are slow and need sleep. Leads don\'t wait.',
      icon: <XCircle className="text-rose-500 w-6 h-6 shadow-[0_0_15px_rgba(244,63,94,0.4)]" />,
    },
    {
      title: 'Inconsistent CRM',
      desc: 'Data is fragmented across sticky notes and spreadsheets.',
      icon: <XCircle className="text-rose-500 w-6 h-6 shadow-[0_0_15px_rgba(244,63,94,0.4)]" />,
    },
    {
      title: 'Missed Call Backs',
      desc: '70% of agencies fail to follow up more than once.',
      icon: <XCircle className="text-rose-500 w-6 h-6 shadow-[0_0_15px_rgba(244,63,94,0.4)]" />,
    },
  ];

  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden">
       {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-rose-500/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <span className="text-[10px] font-black text-rose-500 uppercase tracking-[0.4em] mb-6 block">The Inefficiency</span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] mb-8">
              Is Your Business <br />
              <span className="text-rose-500">Falling Behind?</span>
            </h2>
            <p className="text-xl text-slate-500 font-medium mb-12 leading-relaxed">
              Every business is using AI... But are you actually using it to save time, save money and drive revenue? 
              Most agencies have a <span className="text-slate-900 font-bold">"manual system"</span> problem, not a lead problem.
            </p>

            <div className="flex flex-col gap-6 mb-12">
              {painPoints.map((point) => (
                <div key={point.title} className="flex gap-6 p-8 rounded-[2rem] bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:border-rose-500/10">
                  <div className="shrink-0">{point.icon}</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">{point.title}</h4>
                    <p className="text-sm text-slate-500 font-medium">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-rose-500 text-white px-10 py-6 rounded-2xl font-black text-xl hover:bg-rose-600 transition-all flex items-center gap-3 group shadow-2xl shadow-rose-100">
              Revive My Systems
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity }}>
                →
              </motion.span>
            </button>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-200 shadow-2xl shadow-slate-200/50">
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-4">
                  <AlertTriangle className="text-rose-500 w-6 h-6" />
                  <span className="font-display font-black text-xl text-slate-900">Classic Agency Protocol</span>
                </div>
                <span className="text-[10px] bg-rose-50 text-rose-500 px-3 py-1.5 rounded-lg border border-rose-100 font-black uppercase tracking-widest">Revenue Leak</span>
              </div>

              <div className="space-y-10 relative">
                {/* Connector Line */}
                <div className="absolute left-7 top-10 bottom-10 w-0.5 bg-linear-to-b from-rose-200 to-transparent" />

                {[
                  { label: 'Lead Opt-In', time: '09:00 AM' },
                  { label: 'Agent Notification', time: '11:30 AM', delay: '2.5 Hours Lost' },
                  { label: 'First Dial Attempt', time: '03:15 PM', delay: '6.5 Hours Lost' },
                  { label: 'Lead Found Competitor', time: 'LOST', status: 'INSTRUCTION LOST', highlight: true },
                ].map((step, i) => (
                  <div key={step.label} className="flex items-start gap-12 relative z-10">
                    <div className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border border-slate-200 shadow-xl shadow-slate-200/40",
                      step.highlight ? "bg-rose-500 text-white shadow-rose-500/20" : "bg-white text-rose-500"
                    )}>
                      <span className="font-black text-xl">{i + 1}</span>
                    </div>
                    <div className="flex-1 pb-6">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-black text-slate-900 text-lg tracking-tight">{step.label}</span>
                        <span className="text-xs font-mono font-bold text-slate-400">{step.time}</span>
                      </div>
                      {step.delay && (
                        <div className="text-[10px] font-black text-rose-500 uppercase tracking-widest">{step.delay}</div>
                      )}
                      {step.status && (
                        <div className="inline-block mt-3 px-3 py-1.5 bg-rose-50 text-rose-500 text-[10px] font-black rounded-lg border border-rose-100 uppercase tracking-widest">
                          {step.status}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
