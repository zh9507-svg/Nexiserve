import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  const navLinks = [
    { name: 'Workflow', href: '#workflow' },
    { name: 'Results', href: '#results' },
    { name: 'ROI', href: '#roi' },
    { name: 'Audit', href: '#contact' },
  ];

  return (
    <footer className="bg-white border-t border-slate-100 pt-32 pb-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24 mb-32">
          {/* Brand Col */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-8">
              <img src="/logo.png" alt="NexiServe" className="h-10 w-auto" />
            </div>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-sm mb-12">
              Engineering the next generation of agency infrastructure. Built for scale, not for safety.
            </p>
            <div className="flex gap-6">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl border border-slate-100 flex items-center justify-center hover:bg-slate-50 hover:border-slate-200 transition-all text-slate-400 hover:text-slate-900">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.4em] mb-10">Navigation</h4>
            <ul className="space-y-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-lg font-medium text-slate-500 hover:text-slate-900 transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.4em] mb-10">Contact Protocol</h4>
            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-brand shrink-0" />
                <div>
                   <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Direct Comms</div>
                   <span className="text-slate-900 font-bold">ops@nexiserve.ai</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-brand shrink-0" />
                <div>
                   <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Engineering HQ</div>
                   <span className="text-slate-900 font-bold tracking-tight">London, United Kingdom</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-12 border-t border-slate-100">
           <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] flex flex-col md:flex-row items-center gap-10">
              <span>© 2025 NexiServe. ALL SYSTEMS OPERATIONAL.</span>
              <span className="hidden md:inline text-slate-200">|</span>
              <span className="hidden md:inline">SECURITY: GDPR COMPLIANT STACK</span>
              <span className="hidden md:inline text-slate-200">|</span>
              <span className="hidden md:inline">VERSION v4.12.0</span>
           </div>
           
           <div className="flex gap-10 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
              <a href="#" className="hover:text-slate-900">Privacy</a>
              <a href="#" className="hover:text-slate-900">Terms</a>
              <a href="#" className="hover:text-slate-900">Security</a>
           </div>
        </div>
      </div>
    </footer>
  );
}
