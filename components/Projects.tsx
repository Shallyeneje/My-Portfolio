import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tech: string[];
  live: string;
  github: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "StudyBoosta",
    description: "An educational platform with video courses and Q&A features.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    live: "https://study-boosta.vercel.app/",
    github: "https://github.com/shallyeneje/study-boosta",
    image: "/studyboosta.png"
  },
  // {
  //   title: "Task Planner",
  //   description: "A task management app with modals, checkboxes, and toast notifications.",
  //   tech: ["React", "Vite", "Tailwind", "ShadCN"],
  //   live: "https://taskplanner.vercel.app",
  //   github: "https://github.com/yourgithub/taskplanner",
  //   image: "/taskplanner.png"
  // },
  {
    title: "Mimipoint",
    description: "A VTU application that helps with all bills, cable, airtime and data subscriptions.",
    tech: ["Next.js", "Vite", "Tailwind", "ShadCN"],
    live: "https://www.mimipoint.com",
    github: "https://github.com/Mimipoint-app/mimipoint.git",
    image: "/mimipoint.png"
  },
  {
    title: "Wedding Site",
    description: "A responsive wedding website with event details, gallery, gift section and RSVP functionality.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    live: "https://mims-wedding-site.vercel.app/",
    github: "https://github.com/shallyeneje/weddingsite",
    image: "/wedding.png"
  },
  {
    title: "Task Planner",
    description: "A task management app with modals, checkboxes, and toast notifications.",
    tech: ["React", "Vite", "Tailwind", "ShadCN"],
    live: "https://taskplanner.vercel.app",
    github: "https://github.com/shallyeneje/taskplanner",
    image: "/taskplanner.png"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-center mb-12 border-b-4 border-t-4 p-3 inline-block border-blue-500">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, idx) => (
            <div key={idx} className="rounded-2xl shadow-lg overflow-hidden bg-white">
              <div className="relative w-full h-48">
                <Image src={p.image} alt={p.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-600 mb-4">{p.description}</p>
                <p className="text-sm text-gray-500 mb-4">Tech: {p.tech.join(", ")}</p>
                <div className="flex gap-4">
                  <a href={p.live} target="_blank" className="text-blue-500 hover:underline">Live Demo</a>
                  <a href={p.github} target="_blank" className="text-gray-700 hover:underline">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
