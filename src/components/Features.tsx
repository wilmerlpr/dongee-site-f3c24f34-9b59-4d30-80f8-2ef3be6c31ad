import React from 'react';
import { Cpu, Lock, Headphones, Cloud, Rocket, Database, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: <Rocket className="w-6 h-6 text-white" />,
    bg: "bg-cyan-500",
    title: "Rendimiento Extremo",
    description: "Servidores NVMe SSD de última generación para tiempos de carga instantáneos."
  },
  {
    icon: <Lock className="w-6 h-6 text-white" />,
    bg: "bg-purple-500",
    title: "Seguridad Blindada",
    description: "Protección DDoS avanzada y certificados SSL gratuitos para todos tus dominios."
  },
  {
    icon: <Cloud className="w-6 h-6 text-white" />,
    bg: "bg-blue-500",
    title: "Escalabilidad Total",
    description: "Aumenta recursos con un solo clic. Paga solo por lo que necesitas."
  },
  {
    icon: <Headphones className="w-6 h-6 text-white" />,
    bg: "bg-pink-500",
    title: "Soporte Experto 24/7",
    description: "Ingenieros reales disponibles en cualquier momento para ayudarte."
  },
  {
    icon: <Cpu className="w-6 h-6 text-white" />,
    bg: "bg-green-500",
    title: "Tecnología Container",
    description: "Entornos aislados Docker/Kubernetes para máxima estabilidad."
  },
  {
    icon: <Database className="w-6 h-6 text-white" />,
    bg: "bg-yellow-500",
    title: "Backups Automáticos",
    description: "Copias de seguridad diarias con restauración en un clic."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900">
            Infraestructura de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Clase Mundial</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Olvídate de la gestión de servidores. Nosotros nos encargamos de la infraestructura para que tú te enfoques en tu código.
          </p>
        </div>

        {/* Main Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Image / Split Section */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-12 space-y-8">
              <h3 className="text-3xl font-bold text-slate-900">Panel de Control Intuitivo</h3>
              <p className="text-slate-600 text-lg">
                Administra todos tus servicios desde un solo lugar. Gráficas en tiempo real, terminal web y gestión de archivos avanzada.
              </p>
              
              <ul className="space-y-4">
                {[ 
                  'Despliegues automáticos desde Git',
                  'Métricas de rendimiento en tiempo real',
                  'Gestión de bases de datos integrada',
                  'Logs en vivo y depuración'
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button className="bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors shadow-lg hover:shadow-slate-900/20">
                Explorar el Dashboard
              </button>
            </div>
            <div className="relative h-full min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                alt="Dashboard Analytics" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;