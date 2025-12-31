
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

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

    // Using mailto: to send directly to the email without a backend
    // This opens the user's default mail app with pre-filled content
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

    // Simulated success state after redirection attempt
    setTimeout(() => {
      setStatus('Message prepared in your email client!');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Get In <span className="text-blue-500">Touch</span></h2>
            <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
            <p className="text-slate-400 text-lg">
              Have a project in mind or just want to chat? Feel free to reach out. I'm always open to discussing new projects and creative ideas.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl glass border border-white/5 flex items-center justify-center text-blue-400">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <div className="font-semibold text-white">Email Me</div>
                <div className="text-slate-400">wewolifavor@gmail.com</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl glass border border-white/5 flex items-center justify-center text-blue-400">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <div className="font-semibold text-white">Location</div>
                <div className="text-slate-400">Accra, Ghana</div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl glass border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/30 transition-all"
            >
              <i className="fa-brands fa-github text-xl"></i>
            </a>
            <a 
              href="https://www.linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl glass border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/30 transition-all"
            >
              <i className="fa-brands fa-linkedin text-xl"></i>
            </a>
            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl glass border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/30 transition-all"
            >
              <i className="fa-brands fa-twitter text-xl"></i>
            </a>
            <a 
              href="https://www.tiktok.com/@favourplays" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl glass border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/30 transition-all"
            >
              <i className="fa-brands fa-tiktok text-xl"></i>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass p-8 rounded-3xl border border-white/5 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Name</label>
            <input 
              required
              type="text" 
              placeholder="John Doe"
              value={formState.name}
              onChange={(e) => setFormState({...formState, name: e.target.value})}
              className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Email Address</label>
            <input 
              required
              type="email" 
              placeholder="john@example.com"
              value={formState.email}
              onChange={(e) => setFormState({...formState, email: e.target.value})}
              className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Message</label>
            <textarea 
              required
              rows={4} 
              placeholder="Tell me about your project..."
              value={formState.message}
              onChange={(e) => setFormState({...formState, message: e.target.value})}
              className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all resize-none"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/20 active:scale-95 flex items-center justify-center gap-2"
          >
            Send Message
            <i className="fa-solid fa-paper-plane text-xs"></i>
          </button>
          {status && <p className="text-center text-sm font-medium text-blue-400 animate-pulse">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
