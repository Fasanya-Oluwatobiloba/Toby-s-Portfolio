// src/data/content.ts

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string; // added image support
  links: {
    demo: string;
    repo: string;
  };
}

export const PROFILE = {
  name: "Fasanya Oluwatobiloba Israel",
  role: "Frontend & Mobile Developer",
  email: "tobilobaisreal5@gmail.com",
  phone: "09068901679",
  location: "Lagos, Nigeria",
  github: "https://github.com/Fasanya-Oluwatobiloba",
  linkedin: "https://www.linkedin.com/in/oluwatobiloba-fasanya",
  summary:
    "Results-driven Frontend and Mobile Developer specializing in building accessible, pixel-perfect user interfaces using React, React Native, and TypeScript. Passionate about crafting seamless digital experiences, optimizing performance, and translating complex requirements into robust, clean code. Dedicated to continuous learning and modern web standards."
};

export const SKILLS = {
  languages: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  frameworks: ["React.js", "React Native", "Next.js", "Expo"],
  styling: ["Tailwind CSS", "Styled Components", "SASS"],
  state: ["Redux Toolkit", "Context API", "Zustand"],
  backend_tools: ["Firebase", "REST APIs", "Node.js (Basic)", "Postman"],
  other: ["Git/GitHub", "VS Code", "Agile/Scrum", "UI/UX Implementation"]
};

// FULLY UPDATED REAL PROJECTS
export const PROJECTS: Project[] = [
  {
    title: "Petra Ltd – Admin Dashboard",
    description:
      "A production-ready admin dashboard built for Petra Ltd, used to manage products, inventory, KPIs, and analytics. Features reusable components, dark mode, dynamic filtering, chart visualizations, and a scalable code architecture. Fully deployed for real business workflows.",
    tags: ["React", "TypeScript", "Tailwind", "Recharts", "REST API"],
    image: "petra.png",
    links: {
      demo: "https://petra-ltd.vercel.app/",
      repo: "https://github.com/Fasanya-Oluwatobiloba/Petra-Ltd"
    }
  },

  {
    title: "Pycart – Mobile Marketplace App",
    description:
      "A cross-platform mobile commerce application inspired by Jumia and Temu. Offers product browsing, cart management, favorites, onboarding screens, animated UI components, and persistent storage using AsyncStorage. Built with Expo and designed for seamless Android performance.",
    tags: ["React Native", "Expo", "TypeScript", "AsyncStorage", "Expo Router"],
    image: "pycart.jpg",
    links: {
      demo: "#", // you will replace this with your APK link
      repo: "https://github.com/Fasanya-Oluwatobiloba/Pycart"
    }
  },

  {
    title: "ASO Concept — Academic Writing Website",
    description:
      "A professional client website designed for an academic writing service. Features responsive UI, structured service layout, animations, SEO optimization, and a contact workflow. The frontend is fully deployed and performance-optimized.",
    tags: ["React", "TypeScript", "Tailwind", "EmailJS", "SEO"],
    image: "aso.png",
    links: {
      demo: "https://aso-concept.vercel.app/",
      repo: "https://github.com/Fasanya-Oluwatobiloba/ASO-CONCEPT"
    }
  }
];
