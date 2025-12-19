
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { IDEAS } from '../data.ts';
import { Idea } from '../types.ts';

const IdeaCard: React.FC<{ idea: Idea; onClick: () => void }> = ({ idea, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      onClick={onClick}
      className="relative cursor-pointer p-10 bg-white/30 backdrop-blur-md border border-white/40 shadow-sm transition-all duration-500 hover:shadow-xl group overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-1 h-0 bg-[#4a6fa5] group-hover:h-full transition-all duration-700" />
      <span className="text-[10px] text-gray-400 tracking-widest uppercase mb-4 block">{idea.date}</span>
      <h3 className="text-2xl font-serif mb-4 group-hover:text-[#4a6fa5] transition-colors">{idea.title}</h3>
      <p className="text-sm text-gray-500 font-light leading-relaxed line-clamp-2">
        {idea.summary}
      </p>
    </motion.div>
  );
};

const IdeaModal: React.FC<{ idea: Idea | null; onClose: () => void }> = ({ idea, onClose }) => {
  return (
    <AnimatePresence>
      {idea && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4 md:px-0"
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-white p-12 md:p-20 overflow-y-auto max-h-[90vh] shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-8 right-8 text-gray-400 hover:text-black transition-colors"
            >
              <X size={24} strokeWidth={1} />
            </button>
            <span className="text-xs text-[#4a6fa5] tracking-[0.3em] uppercase mb-4 block font-semibold">{idea.date}</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-12 text-gray-900 leading-tight">{idea.title}</h2>
            <div className="prose prose-lg text-gray-600 font-light leading-relaxed space-y-6">
              {idea.content.split('\n').map((para, i) => (para.trim() ? <p key={i}>{para}</p> : <br key={i} />))}
            </div>
            <div className="mt-20 flex justify-center">
              <div className="w-12 h-[1px] bg-gray-200" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Ideas: React.FC = () => {
  const [selectedIdea, setSelectedIdea] = useState<Idea | null>(null);

  return (
    <div className="px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 flex items-end justify-between">
          <div>
            <h2 className="text-6xl font-serif text-gray-900 mb-4">思想流</h2>
            <p className="text-gray-400 tracking-widest uppercase text-xs">WHAT I THINK &middot; 动态的碎念</p>
          </div>
          <div className="hidden md:block w-32 h-[1px] bg-gray-200" />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {IDEAS.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} onClick={() => setSelectedIdea(idea)} />
          ))}
        </div>
      </div>
      <IdeaModal idea={selectedIdea} onClose={() => setSelectedIdea(null)} />
    </div>
  );
};

export default Ideas;
