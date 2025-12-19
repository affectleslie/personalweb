
import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './components/Home.tsx';
import Ideas from './components/Ideas.tsx';
import Observations from './components/Observations.tsx';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navItems = [
    { path: '/', label: '首页' },
    { path: '/ideas', label: '想法' },
    { path: '/observations', label: '见闻' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-40 px-8 py-10 flex justify-between items-center pointer-events-none">
      <div className="text-xl font-serif font-light tracking-widest pointer-events-auto">
        <Link to="/" className="hover:opacity-60 transition-opacity uppercase">JinZhipeng</Link>
      </div>
      <div className="flex space-x-12 pointer-events-auto">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`text-sm uppercase tracking-widest transition-all duration-500 relative ${
              location.pathname === item.path ? 'text-gray-900 font-semibold' : 'text-gray-400 hover:text-gray-900'
            }`}
          >
            {item.label}
            {location.pathname === item.path && (
              <motion.div
                layoutId="nav-underline"
                className="absolute -bottom-1 left-0 right-0 h-[1px] bg-[#4a6fa5]"
                initial={false}
              />
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
};

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="pt-32 pb-20"
    >
      {children}
    </motion.div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/ideas" element={<PageWrapper><Ideas /></PageWrapper>} />
            <Route path="/observations" element={<PageWrapper><Observations /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </div>
    </HashRouter>
  );
};

export default App;
