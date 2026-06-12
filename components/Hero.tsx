"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-white text-gray-800 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* ✅ Left: Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-bold ">
            Hello, 
          </h2>
          <h2 className="font-bold text-xl md:text-3xl mb-2"> I’m{" "}
            Eneje Chimcheberem Shalom</h2>
            <h2 className="font-bold text-xl md:text-3xl mb-6"> a{" "}
            <span className="text-blue-500">Frontend Web Developer</span></h2>
          <p className="text-sm md:text-base max-w-2xl mb-6">
            2+ years of experience
            specializing in{" "}
            <strong>Next.js, React, and TypeScript</strong>.<br/> I build
            responsive, scalable, and engaging web apps — with growing
            expertise in{" "}
            <strong>React Native, and AI/ML integrations</strong>.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 rounded-2xl bg-blue-500 hover:bg-blue-600 transition"
            >
              View My Work
            </a>
            {/* <a
              href="#contact"
              className="px-6 py-3 rounded-2xl border border-gray-400 hover:bg-gray-700 transition"
            >
              Contact Me
            </a> */}
            {/* ✅ Resume Button */}
            <a
              href="/Chimcheberem_Shalom_Frontend_Engineer_CV.pdf"
              download
              className="px-6 py-3 rounded-2xl border border-gray-400 hover:bg-gray-700 transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* ✅ Right: Hero Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-72 md:w-96 h-96">
            <Image
              src="/hero1.png"
              alt="Hero Image"
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 768px) 288px, 384px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
