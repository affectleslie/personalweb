
import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center px-8 md:px-24 select-none">
      {/* 核心视觉：极简 Hero 区域 */}
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-2"
        >
          <div className="flex flex-col md:flex-row items-baseline gap-4">
            <h1 className="text-8xl md:text-[12rem] font-serif leading-none tracking-tighter text-gray-900">
              欢迎
            </h1>
            <span className="text-xl md:text-2xl font-light text-gray-300 italic font-serif tracking-widest uppercase">
              / JZP
            </span>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-8"
          >
            <h2 className="text-3xl md:text-5xl outline-text font-serif tracking-tight">
               会者定离 &middot; 一期一祈
            </h2>
            <p className="text-xs md:text-sm text-gray-400 tracking-[0.5em] uppercase mt-6 font-light">
              一时兴起，一时记录<br />
              我也不知道会有多少，亦不知未来是否会再更新<br />
              想到之时，那便记些<br />
              诸法因缘生，诸法因缘灭，因缘生灭法，当作如是观
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* 装饰性装饰：极简线条 */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.8, duration: 1.5, ease: "circOut" }}
        className="absolute bottom-20 left-8 md:left-24 right-8 md:right-24 h-[1px] bg-gray-100 origin-left"
      />
      
      <div className="absolute bottom-24 left-8 md:left-24">
        <p className="text-[10px] text-gray-300 tracking-[0.3em] uppercase font-light">
          BY JZP
        </p>
      </div>
    </div>
  );
};

export default Home;
