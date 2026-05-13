import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Simon Shinerock",
    company: "Chairman at Choices Estate Group",
    text: "We've been able to manage more and better quality business with less people.",
    avatar: "https://storage.googleapis.com/msgsndr/SNDu8PnbHK5mXYgWnUV0/media/68b8c5c5358ad76cac92efca.png",
    video: "https://storage.googleapis.com/msgsndr/SNDu8PnbHK5mXYgWnUV0/media/68b8b2edf0a54b9b0b49d62b.mp4"
  },
  {
    name: "Samuel Kenny",
    company: "Director at Get Green Leads Ltd.",
    text: "One of the best decisions we’ve made. It’s really helped our speed to lead and conversion rate.",
    avatar: "https://storage.googleapis.com/msgsndr/SNDu8PnbHK5mXYgWnUV0/media/68b8c5c5bd7b763b0bc20dc7.png",
    video: "https://storage.googleapis.com/msgsndr/SNDu8PnbHK5mXYgWnUV0/media/68b8b2ed3823bf560b63afc9.mp4"
  },
  {
    name: "Oliver Hunter",
    company: "Get My Money Back Limited",
    text: "Working with NexiServe has been one of the best business decisions we've made this year.",
    avatar: "https://storage.googleapis.com/msgsndr/SNDu8PnbHK5mXYgWnUV0/media/68b8c5c5358ad7937e92efcb.png",
    video: "https://storage.googleapis.com/msgsndr/SNDu8PnbHK5mXYgWnUV0/media/68b8b2edf0a54b3db049d62a.mp4"
  },
  {
    name: "Callum Sinclair",
    company: "Business Savings Guru",
    text: "Collaborating with NexiServe has been effortless from beginning to end. They developed a complete AI agent system for us covering data enrichment, outreach, calls, and scheduling. ",
    avatar: "https://storage.googleapis.com/msgsndr/SNDu8PnbHK5mXYgWnUV0/media/68dbe8598da17335ea4beb2c.jpeg",
    video: "https://storage.googleapis.com/msgsndr/SNDu8PnbHK5mXYgWnUV0/media/68dbf1de3f9300218da37b02.mp4"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 md:py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:text-center md:mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tighter mb-4">
            Validated Agent Performance
          </h2>
          <p className="text-slate-500 text-base md:text-lg font-medium">Real results from agencies scaling with NexiServe.</p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-[#021521] border border-white/10 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden p-6 md:p-12 shadow-2xl flex flex-col lg:flex-row gap-10 md:gap-12 items-center"
            >
              <div className="flex-1 text-left w-full">
                <img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-brand object-cover mb-4 md:mb-6"
                />
                <h3 className="text-xl md:text-3xl font-display font-black text-white mb-1 md:mb-2">
                  {testimonials[currentIndex].name}
                </h3>
                <div className="text-brand font-bold text-base md:text-lg mb-4 md:mb-6">
                  {testimonials[currentIndex].company}
                </div>
                <p className="text-slate-300 text-base md:text-xl leading-relaxed font-medium mb-6 md:mb-8">
                  "{testimonials[currentIndex].text}"
                </p>
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-current" />
                  ))}
                </div>
              </div>

              <div className="flex-1 w-full lg:w-auto">
                <div className="aspect-square w-full relative rounded-3xl overflow-hidden bg-slate-900">
                  <video
                    key={testimonials[currentIndex].video}
                    src={testimonials[currentIndex].video}
                    className="absolute inset-0 w-full h-full object-cover"
                    controls
                    playsInline
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prev}
              className="w-14 h-14 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center text-slate-900 hover:bg-brand hover:text-white transition-all shadow-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'bg-brand w-8' : 'bg-slate-200 hover:bg-slate-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-14 h-14 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center text-slate-900 hover:bg-brand hover:text-white transition-all shadow-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
