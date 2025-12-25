import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { Send, Loader2, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    const { error } = await supabase
      .from('contacts')
      .insert([{ email, message }]);

    if (error) {
      console.error(error);
      setStatus('error');
    } else {
      setStatus('success');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">Contacta con Expertos</h2>
           <p className="text-slate-600">Estamos aquí para resolver tus dudas técnicas y comerciales.</p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-stretch">
          
          {/* Info Side */}
          <div className="flex-1 bg-white p-10 rounded-3xl shadow-xl border border-slate-100 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Información de Contacto</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                   <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 shrink-0">
                      <Mail size={24} />
                   </div>
                   <div>
                      <h4 className="font-bold text-slate-900">Email</h4>
                      <p className="text-slate-600">soporte@novahost.com</p>
                      <p className="text-slate-600">ventas@novahost.com</p>
                   </div>
                </div>
                <div className="flex items-start gap-4">
                   <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                      <Phone size={24} />
                   </div>
                   <div>
                      <h4 className="font-bold text-slate-900">Teléfono</h4>
                      <p className="text-slate-600">+34 900 123 456</p>
                      <p className="text-sm text-slate-500">Lun-Vie, 9am - 6pm CET</p>
                   </div>
                </div>
                <div className="flex items-start gap-4">
                   <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                      <MapPin size={24} />
                   </div>
                   <div>
                      <h4 className="font-bold text-slate-900">Oficinas</h4>
                      <p className="text-slate-600">Calle Tecnológica 123,<br/>Distrito Digital, Madrid</p>
                   </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-100">
               <p className="text-slate-500 text-sm">
                 "El soporte de NovaHost es increíble. Me ayudaron a migrar mi tienda online en menos de 2 horas."
               </p>
               <div className="mt-4 flex items-center gap-2">
                 <div className="w-8 h-8 rounded-full bg-slate-300"></div>
                 <span className="text-sm font-bold text-slate-900">Carlos M., CTO</span>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="flex-1 bg-slate-900 p-10 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[80px] opacity-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-[80px] opacity-10"></div>
            
            <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Envíanos un mensaje</h3>
            <p className="text-gray-400 mb-8 relative z-10">Te responderemos en menos de 24 horas.</p>

            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1.5">Email Corporativo</label>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-gray-600"
                  placeholder="nombre@empresa.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1.5">Mensaje</label>
                <textarea 
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-gray-600"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>
              <button 
                type="submit" 
                disabled={status === 'loading' || status === 'success'}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-cyan-500/20 ${
                    status === 'success' ? 'bg-green-500 text-white' : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500'
                }`}
              >
                {status === 'loading' ? <Loader2 className="animate-spin" /> : 
                 status === 'success' ? 'Mensaje Enviado' : 
                 <><Send size={18} /> Enviar Mensaje</>}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;