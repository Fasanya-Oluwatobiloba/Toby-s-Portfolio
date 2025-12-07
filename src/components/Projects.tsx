import { Terminal, Github, ExternalLink, ChevronRight } from "lucide-react";
import { PROJECTS, PROFILE, type Project } from "../data/content";

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-indigo-500 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1">
    
    {/* IMAGE PREVIEW */}
    <div className="h-48 bg-slate-900 relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-300"
      />

      {/* Overlay fade */}
      <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent pointer-events-none"></div>
    </div>

    {/* CONTENT */}
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>

      <p className="text-slate-400 text-sm mb-4 line-clamp-3">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium px-2 py-1 rounded bg-slate-700 text-indigo-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={project.links.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
        >
          <Github size={16} /> Code
        </a>
        <a
          href={project.links.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          <ExternalLink size={16} /> Live Demo
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-slate-400 max-w-xl">
              Here are some of the projects I’ve recently built — from admin dashboards 
              to mobile marketplace apps and production client websites.
            </p>
          </div>

          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 flex items-center gap-2"
          >
            View Github <ChevronRight size={16} />
          </a>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
