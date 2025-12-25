import React, { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import { supabase } from '../supabaseClient';

interface Plan {
  id: number;
  name: string;
  price: number;
  currency: string;
  features: string[];
  highlight: boolean;
}

const Pricing = () => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlans = async () => {
      const { data, error } = await supabase
        .from('plans')
        .select('*')
        .order('price', { ascending: true });

      if (error) {
        console.error('Error fetching plans:', error);
      } else if (data) {
        setPlans(data);
      }
      setLoading(false);
    };

    fetchPlans();
  }, []);

  return (
    <section id="pricing" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 -z-10" />
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Planes Simples y Transparentes</h2>
                <p className="text-gray-400">Sin costos ocultos. Cancela cuando quieras.</p>
            </div>

            {loading ? (
                <div className="flex justify-center text-cyan-400 animate-pulse">Cargando planes...</div>
            ) : (
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan) => (
                        <div 
                            key={plan.id} 
                            className={`relative p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 ${
                                plan.highlight 
                                ? 'bg-gradient-to-b from-slate-800 to-slate-900 border border-cyan-500/50 shadow-2xl shadow-cyan-500/10' 
                                : 'bg-slate-900 border border-white/5 hover:border-white/10'
                            }`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                    Más Popular
                                </div>
                            )}
                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <div className="flex items-baseline mb-6">
                                <span className="text-4xl font-bold">{plan.currency}{plan.price}</span>
                                <span className="text-gray-500 ml-2">/mes</span>
                            </div>
                            <p className="text-gray-400 text-sm mb-8 pb-8 border-b border-white/10">
                                Perfecto para proyectos personales y startups.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {plan.features && plan.features.map((feat, i) => (
                                    <li key={i} className="flex items-start">
                                        <Check className="w-5 h-5 text-cyan-400 mr-3 shrink-0" />
                                        <span className="text-gray-300 text-sm">{feat}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className={`w-full py-3 rounded-xl font-bold transition-colors ${
                                plan.highlight 
                                ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950' 
                                : 'bg-white/10 hover:bg-white/20 text-white'
                            }`}>
                                Seleccionar Plan
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    </section>
  );
};

export default Pricing;