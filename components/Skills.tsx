import { FaReact, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React", icon: <FaReact className="text-sky-400 text-4xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white text-4xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-4xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-4xl" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500 text-4xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500 text-4xl" /> },
    // { name: "Cypress", icon: <SiCypress className="text-green-600 text-4xl" /> },
    // { name: "Three.js", icon: <SiThreedotjs className="text-gray-700 dark:text-white text-4xl" /> },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl text-gray-900 font-bold mb-12 inline-block border-b-4 border-t-4 p-3 border-blue-500">Skills & Tools</h2>
        {/* <h2 className="text-3xl font-bold mb-12">Skills & Tools</h2> */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          {skills.map((skill, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center">
              {skill.icon}
              <p className="mt-3 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
