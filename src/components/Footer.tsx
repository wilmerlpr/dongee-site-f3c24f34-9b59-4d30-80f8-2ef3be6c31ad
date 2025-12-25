import React from 'react';
import { Server, Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 text-2xl font-bold tracking-tighter mb-4">
              <Server className="w-6 h-6 text-cyan-400" />
              <span>Nova<span className="text-cyan-400">Host</span></span>
            </div>
            <p className="text-gray-500 text-sm">
              Hosting de alto rendimiento para la próxima generación de aplicaciones web.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-cyan-400">Web Hosting</a></li>
              <li><a href="#" className="hover:text-cyan-400">VPS Cloud</a></li>
              <li><a href="#" className="hover:text-cyan-400">Servidores Dedicados</a></li>
              <li><a href="#" className="hover:text-cyan-400">Dominios</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Compañía</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-cyan-400">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-cyan-400">Blog</a></li>
              <li><a href="#" className="hover:text-cyan-400">Carreras</a></li>
              <li><a href="#" className="hover:text-cyan-400">Legal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-500 hover:text-slate-950 transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-500 hover:text-slate-950 transition-all">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-500 hover:text-slate-950 transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} NovaHost Inc. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;