import { Code2, Smartphone, Database } from 'lucide-react';
import { SKILLS } from '../data/content';

const SkillCard = ({ title, skills, icon: Icon }: { title: string, skills: string[], icon: any }) => (
  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-indigo-500/50 transition-colors">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => (
        <span key={skill} className="px-3 py-1 bg-slate-900 rounded-full text-sm text-slate-300 border border-slate-700">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A snapshot of the technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard 
            title="Frontend Web" 
            skills={[...SKILLS.languages, ...SKILLS.frameworks.filter(f => !f.includes('Native'))]} 
            icon={Code2} 
          />
          <SkillCard 
            title="Mobile Development" 
            skills={["React Native", "Expo", "iOS", "Android", "AsyncStorage"]} 
            icon={Smartphone} 
          />
          <SkillCard 
            title="Backend & Tools" 
            skills={[...SKILLS.backend_tools, ...SKILLS.other]} 
            icon={Database} 
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;