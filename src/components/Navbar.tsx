import React, { useState, useEffect } from 'react';
import { Server, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2 text-2xl font-bold tracking-tighter">
          <Server className="w-8 h-8 text-cyan-400" />
          <span>Nova<span className="text-cyan-400">Host</span></span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">Características</a>
          <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Planes</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contacto</a>
          <button className="px-5 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-sm font-semibold">
            Login
          </button>
          <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-5 py-2 rounded-full text-sm font-bold transition-colors">
            Empezar
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-white/10 py-4 px-6 flex flex-col space-y-4 shadow-xl">
          <a href="#features" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-white">Características</a>
          <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-white">Planes</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-white">Contacto</a>
          <div className="flex flex-col space-y-2 pt-2 border-t border-white/10">
             <button className="w-full text-center py-2 text-gray-300">Login</button>
             <button className="w-full text-center py-2 bg-cyan-500 text-slate-950 font-bold rounded-lg">Empezar</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;