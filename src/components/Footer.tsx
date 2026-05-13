import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
          <span>© {new Date().getFullYear()} NexiServe. All Rights Reserved.</span>
          <span className="hidden md:block opacity-30">|</span>
          <a 
            href="https://nurturesol.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-brand transition-colors"
          >
            NurtureSol LLC
          </a>
        </p>
      </div>
    </footer>
  );
}
