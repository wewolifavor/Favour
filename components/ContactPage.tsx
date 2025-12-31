
import React, { useState, useEffect } from 'react';

interface ContactPageProps {
  onBack: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Opening your email client...');
    
    const { name, email, message } = formState;
    const recipient = 'wewolifavor@gmail.com';
    const subject = encodeURIComponent(`New Portfolio Message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `Message:\n${message}`
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setStatus('Message prepared in your email client!');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-4xl mx-auto space-y-12">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
        >
          <i className="fa-solid fa-arrow-left transition-transform group-hover:-translate-x-1"></i>
          Back to Portfolio
        </button>

        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <img 
              src="https://raw.githubusercontent.com/Llama-2-7b-chat-hf/placeholder/main/wf-logo.png" 
              alt="WF Brand" 
              className="h-24 w-auto filter invert brightness-[2] drop-shadow-[0_0_15px_rgba(59,130,246,0.3)] mb-4"
              onError={(e) => e.currentTarget.style.display = 'none'}
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase">
            Get In <span className="text-blue-500">Touch</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Ready to start a new project or just want to say hi? Send me a message and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 pt-8">
          {/* Quick Info */}
          <div className="md:col-span-1 space-y-4">
            <div className="glass p-6 rounded-3xl border border-white/5 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <h3 className="font-bold text-white uppercase text-xs tracking-widest">Email</h3>
                <p className="text-slate-400 text-sm">wewolifavor@gmail.com</p>
              </div>
            </div>
            <div className="glass p-6 rounded-3xl border border-white/5 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <h3 className="font-bold text-white uppercase text-xs tracking-widest">Location</h3>
                <p className="text-slate-400 text-sm">Accra, Ghana</p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/30 transition-all"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/30 transition-all"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/30 transition-all"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a 
                href="https://www.tiktok.com/@favourplays" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/30 transition-all"
              >
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="glass p-8 md:p-10 rounded-[2.5rem] border border-white/10 space-y-6 shadow-2xl">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 px-1">Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all text-white placeholder:text-slate-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 px-1">Email</label>
                  <input 
                    required
                    type="email" 
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all text-white placeholder:text-slate-600"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 px-1">Message</label>
                <textarea 
                  required
                  rows={5} 
                  placeholder="How can I help you?"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all text-white placeholder:text-slate-600 resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold uppercase tracking-widest transition-all shadow-xl shadow-blue-500/20 active:scale-95 flex items-center justify-center gap-3 group"
              >
                Send Message
                <i className="fa-solid fa-paper-plane text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
              </button>
              {status && <p className="text-center text-sm font-bold text-blue-400 animate-pulse mt-4 uppercase tracking-tighter">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
