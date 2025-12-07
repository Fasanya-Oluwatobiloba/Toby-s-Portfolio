import { ChevronRight, Github } from 'lucide-react';
import { PROFILE } from '../data/content';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <p className="text-indigo-400 font-medium mb-4 tracking-wide">HELLO, WORLD.</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">{PROFILE.name}</span>.
          </h1>
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-400 mb-8">
            I build mobile apps & responsive websites.
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed">
            {PROFILE.summary}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group">
              View Projects
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
              <Github size={20} />
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 opacity-20 translate-x-1/3 -translate-y-1/4">
        <div className="w-96 h-96 bg-indigo-600 rounded-full blur-[128px]"></div>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-10 -translate-x-1/3 translate-y-1/4">
        <div className="w-96 h-96 bg-cyan-600 rounded-full blur-[128px]"></div>
      </div>
    </section>
  );
};

export default Hero;