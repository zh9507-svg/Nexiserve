import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface BookingPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingPopup({ isOpen, onClose }: BookingPopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
          />

          {/* Content Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl h-[90vh] bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 md:px-8 md:py-6 border-b border-slate-100 bg-white sticky top-0 z-10">
              <div>
                <h3 className="text-xl md:text-2xl font-display font-black text-slate-900">Schedule Your Audit</h3>
                <p className="text-[10px] md:text-sm text-slate-500 font-medium">Choose a time that works for your agency.</p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 bg-slate-50 hover:bg-slate-100 rounded-xl flex items-center justify-center text-slate-900 transition-colors border border-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Iframe Wrapper - Balanced height and matched background to widget */}
            <div className="flex-1 overflow-y-auto bg-slate-900 p-2 md:p-8">
              <div className="w-full bg-[#111827] rounded-2xl md:rounded-3xl border border-white/5 shadow-2xl overflow-hidden relative">
                <iframe 
                  src="https://api.leadconnectorhq.com/widget/booking/dGCudwVrtWlY2yrdzGkG" 
                  style={{ width: '100%', height: '1200px', border: 'none' }} 
                  id="XmAEGsDPaGHdAAFTRYM6_1778682654406"
                  title="Booking Widget"
                  scrolling="no"
                />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
