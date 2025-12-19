
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, ArrowDown } from 'lucide-react';

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const yRange = useTransform(scrollY, [0, 400], [0, -100]);
  const opacityRange = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div className="relative min-h-[150vh] px-8 md:px-24">
      {/* Hero Section */}
      <section className="h-[80vh] flex flex-col justify-center items-end text-right">
        <motion.div style={{ y: yRange, opacity: opacityRange }} className="w-full">
          <h1 className="text-8xl md:text-[12rem] outline-text font-serif leading-none tracking-tighter mb-8">
            欢迎
          </h1>
          <p className="text-lg md:text-2xl font-light text-gray-500 tracking-[0.2em] italic">
            会者定离 &middot; 一期一祈
          </p>
        </motion.div>
      </section>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="fixed bottom-12 left-1/2 -translate-x-1/2 text-gray-300 z-10"
      >
        <ArrowDown size={24} strokeWidth={1} />
      </motion.div>

      {/* Subcontent revealed on scroll */}
      <section className="min-h-screen flex items-center justify-start mt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif mb-8 text-gray-800">随缘小记</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-12 font-light">
              一时兴起，一时记录
              我也不知道会有多少，亦不知未来是否会再更新
              想到之时，那便记些
              诸法因缘生，诸法因缘灭，因缘生灭法，当作如是观
            </p>
            
            <div className="h-[1px] w-24 bg-[#4a6fa5] mb-12" />

            <div className="flex items-center space-x-4 text-gray-400 hover:text-gray-800 transition-colors cursor-pointer group">
              <Mail size={20} strokeWidth={1} />
              <span className="text-sm tracking-widest uppercase">jinzhipeng2001@qq.com</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
