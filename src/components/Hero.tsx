import React from 'react';
import { ArrowRight, Globe, Shield, Zap, Server } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950"></div>

      {/* Animated Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob z-0"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000 z-0"></div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-cyan-300 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="font-medium tracking-wide">Nueva Región: Tokyo</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
            Tu Web, <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">A la Velocidad de la Luz</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-lg leading-relaxed">
            Despliega tu infraestructura en segundos. Servidores NVMe de alto rendimiento, protección DDoS global y escalabilidad instantánea.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-primary flex items-center justify-center space-x-2">
              <span>Ver Planes</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/5 transition-all font-semibold flex items-center justify-center text-white backdrop-blur-sm">
              Demo en Vivo
            </button>
          </div>

          <div className="pt-8 flex flex-wrap items-center gap-6 text-gray-400 text-sm">
            <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg border border-white/5">
              <Shield className="w-4 h-4 text-cyan-400" /> 
              <span>SSL Gratis</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg border border-white/5">
              <Zap className="w-4 h-4 text-cyan-400" /> 
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg border border-white/5">
              <Globe className="w-4 h-4 text-cyan-400" /> 
              <span>CDN Global</span>
            </div>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="relative w-full aspect-square animate-float">
            {/* Glassmorphism Card Display */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-800/40 to-slate-900/40 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl flex items-center justify-center overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-20">
                    <Server size={200} className="text-white" />
                 </div>
                 
                 <div className="grid grid-cols-2 gap-4 p-6 w-full h-full relative z-10">
                    <div className="bg-slate-950/80 rounded-xl border border-white/10 p-5 flex flex-col justify-between shadow-lg">
                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mb-2">
                          <Zap size={20}/>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-white">99.99%</div>
                          <span className="text-xs text-gray-400 uppercase tracking-wider">Uptime Garantizado</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden mt-3">
                            <div className="h-full bg-gradient-to-r from-green-500 to-green-400 w-[99%]"></div>
                        </div>
                    </div>

                    <div className="bg-slate-950/80 rounded-xl border border-white/10 p-5 flex flex-col justify-between shadow-lg">
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mb-2">
                          <Globe size={20}/>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-white">12ms</div>
                          <span className="text-xs text-gray-400 uppercase tracking-wider">Latencia Global</span>
                        </div>
                        <div className="flex -space-x-2 mt-2">
                           <div className="w-6 h-6 rounded-full bg-slate-700 border border-slate-900"></div>
                           <div className="w-6 h-6 rounded-full bg-slate-600 border border-slate-900"></div>
                           <div className="w-6 h-6 rounded-full bg-slate-500 border border-slate-900"></div>
                        </div>
                    </div>

                     <div className="col-span-2 bg-slate-950/90 rounded-xl border border-white/10 p-5 relative overflow-hidden shadow-lg">
                         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-shimmer"></div>
                         <div className="flex items-center gap-2 mb-3">
                             <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                             <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                             <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                             <span className="text-xs text-gray-500 ml-2 font-mono">deploy-log.txt</span>
                         </div>
                         <div className="space-y-1.5 font-mono text-xs text-gray-400">
                             <p>&gt; git push origin main</p>
                             <p>&gt; building image...</p>
                             <p>&gt; verifying cache...</p>
                             <p className="text-green-400 font-bold">&gt; deployment successful (0.4s)</p>
                         </div>
                     </div>
                 </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;