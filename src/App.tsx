/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { LandingPage } from './pages/LandingPage';
import { MenuPage } from './pages/MenuPage';
import { OrderPage } from './pages/OrderPage';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence>
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>
      
      <CustomCursor />
      <ScrollToTop />
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<PageWrapper><LandingPage /></PageWrapper>} />
              <Route path="/menu" element={<PageWrapper><MenuPage /></PageWrapper>} />
              <Route path="/order" element={<PageWrapper><OrderPage /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}
