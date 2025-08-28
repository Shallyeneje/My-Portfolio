export default function About() {
  return (
    <section
      id="about"
      className=" min-h-screen py-20 px-6 bg-white text-gray-800"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl text-gray-900 font-bold mb-12 inline-block border-b-4 border-t-4 p-3 border-blue-500">
          About Me
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          {/* I’m a frontend engineer with experience building responsive and
          engaging modern web apps using React, Next.js, TypeScript, and
          Tailwind CSS. I enjoy creating clean, performant interfaces and
          bringing user experiences to life. I’ve built and deployed projects
          including; edutech and e-commerce applications and worked on API
          integrations, custom styling, and scalable layouts. */}
          I'm a frontend Developer
          with a strong background in building user-friendly, responsive web
          applications using React, Next.js, TypeScript, Tailwindcss and modern web
          technologies. Experienced in API integration, Redux state management,
          custom styling, optimizing component performance and continuous
          deployment using Vercel. Passionate about creating seamless user
          experiences and solving complex frontend challenges. I’ve built and deployed different projects
          including; edutech and e-commerce applications.
        </p>
        <p className="text-lg leading-relaxed">
          I also studied Industrial Engineering in the University of Benin, Benin,
          Nigeria.
        </p>
      </div>
    </section>
  );
}
