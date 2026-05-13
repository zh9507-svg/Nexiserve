import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface AgentTestPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AgentTestPopup({ isOpen, onClose }: AgentTestPopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
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
            className="relative w-full max-w-2xl bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white sticky top-0 z-10">
              <div>
                <h3 className="text-xl md:text-2xl font-display font-black text-slate-900">Test AI voice agent</h3>
                <p className="text-[10px] md:text-sm text-slate-500 font-medium">Experience Jane, our high-performance AI agent.</p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 bg-slate-50 hover:bg-slate-100 rounded-xl flex items-center justify-center text-slate-900 transition-colors border border-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Iframe Wrapper */}
            <div className="flex-1 overflow-y-auto bg-slate-50 p-4">
              <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden relative" style={{ minHeight: '750px' }}>
                <iframe
                    src="https://api.leadconnectorhq.com/widget/form/viHDvrfraSpXvUnrWAiO"
                    style={{ width: '100%', height: '745px', border: 'none', borderRadius: '20px' }}
                    id="popup-viHDvrfraSpXvUnrWAiO" 
                    title="Jane Ads agent N8N - Live 2"
                />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
