import { Code2 } from 'lucide-react';
import TobyImage from '../assets/Toby.png';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-12 h-1 bg-indigo-500 rounded-full"></span>
              About Me
            </h2>

            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                My journey into tech started with a curiosity about how mobile applications work. That curiosity quickly turned into a passion for writing code that solves real-world problems.
              </p>
              <p>
                As a self-taught developer, I've cultivated a strong discipline for continuous learning. I don't just write code; I focus on scalability, performance, and user experience.
              </p>
              <p>
                Currently based in <span className="text-white font-medium">Lagos, Nigeria</span>, I'm open to remote and on-site opportunities.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                <h4 className="text-indigo-400 font-bold text-2xl mb-1">3+</h4>
                <p className="text-slate-400 text-sm">Projects Underway</p>
              </div>
              <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                <h4 className="text-indigo-400 font-bold text-2xl mb-1">100%</h4>
                <p className="text-slate-400 text-sm">Commitment</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-indigo-600 rounded-2xl rotate-6 opacity-20"></div>

              <div className="absolute inset-0 bg-slate-800 rounded-2xl -rotate-6 border border-slate-700 flex items-center justify-center overflow-hidden">
                <Code2 size={64} className="text-slate-600" />

                <div className="absolute left-0 top-0 right-0 text-center text-slate-500 text-sm">
                  <img
                    src={TobyImage}
                    alt="Portrait"
                    className="object-cover rounded-2xl"
                  />
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
