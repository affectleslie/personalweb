
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin } from 'lucide-react';
import { OBSERVATIONS } from '../data.ts';
import { Observation } from '../types.ts';

const ObservationItem: React.FC<{ observation: Observation; onClick: () => void }> = ({ observation, onClick }) => {
  return (
    <motion.div
      layout
      whileHover={{ scale: 0.98 }}
      className="relative cursor-pointer overflow-hidden group mb-12"
      onClick={onClick}
    >
      <div className="aspect-[3/4] overflow-hidden bg-gray-100">
        <motion.img
          src={observation.imageUrl}
          alt={observation.caption}
          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
        />
      </div>
      
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8">
        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
          <span className="text-[10px] text-white/60 tracking-[0.2em] uppercase mb-1 block">
            {observation.category}
          </span>
          <h3 className="text-white text-xl font-serif mb-2">{observation.caption}</h3>
          <div className="flex items-center text-white/60 space-x-2">
            <MapPin size={12} />
            <span className="text-[10px] tracking-widest">{observation.location}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Lightbox: React.FC<{ observation: Observation | null; onClose: () => void }> = ({ observation, onClose }) => {
  return (
    <AnimatePresence>
      {observation && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-black/95" onClick={onClose} />
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row bg-white/5"
          >
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="flex-1 overflow-hidden flex items-center justify-center">
              <img
                src={observation.imageUrl}
                alt={observation.caption}
                className="max-h-[80vh] object-contain"
              />
            </div>
            
            <div className="w-full md:w-80 p-8 md:p-12 text-white flex flex-col justify-center">
              <span className="text-[10px] text-white/40 tracking-[0.3em] uppercase mb-4">{observation.location}</span>
              <h2 className="text-3xl font-serif mb-6">{observation.caption}</h2>
              <p className="text-sm font-light text-white/60 leading-relaxed mb-8">
                {observation.details}
              </p>
              <div className="w-8 h-[1px] bg-[#4a6fa5]" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Observations: React.FC = () => {
  const [selected, setSelected] = useState<Observation | null>(null);

  return (
    <div className="px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24">
          <h2 className="text-6xl font-serif text-gray-900 mb-4">见闻</h2>
          <p className="text-gray-400 tracking-widest uppercase text-xs">WHAT I SEE &middot; 被捕获的瞬间</p>
        </header>

        <div className="columns-1 md:columns-2 lg:columns-2 gap-12 space-y-12">
          {OBSERVATIONS.map((obs) => (
            <ObservationItem
              key={obs.id}
              observation={obs}
              onClick={() => setSelected(obs)}
            />
          ))}
        </div>
      </div>
      <Lightbox observation={selected} onClose={() => setSelected(null)} />
    </div>
  );
};

export default Observations;
