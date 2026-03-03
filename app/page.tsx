"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-50 text-gray-900 scroll-smooth">

      {/* ================= NAVBAR ================= */}
      <header className="fixed w-full bg-white shadow-sm z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Apurba Sanjel</h1>

          <ul className="hidden md:flex gap-8 font-medium">
            <li><a href="#home" className="hover:text-blue-600">Home</a></li>
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>

          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </nav>

        {menuOpen && (
          <div className="md:hidden bg-white shadow-md px-6 pb-4">
            <ul className="flex flex-col gap-4 font-medium">
              <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
              <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
              <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </header>

      {/* ================= HERO ================= */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-24 bg-gradient-to-br from-blue-100 to-purple-100">
        <div className="text-center px-6">
          <h2 className="text-5xl font-bold mb-6">Hi, I'm Apurba Sanjel</h2>
          <p className="text-xl text-gray-700 mb-4">
            Nepalese | Student | Coding Enthusiast
          </p>
          <p className="text-gray-600 max-w-xl mx-auto">
            Motivated, hardworking and passionate about building modern applications 
            and constantly learning new technologies.
          </p>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">About Me</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            I'm Apurba (Apooba), born on 12 May 2006. 
            I am a positive and motivated individual with strong teamwork skills.
            I may be shy at first, but once comfortable, I am friendly and open.
            I enjoy philosophical reading, coding in my free time, and constantly 
            researching random interesting topics.
          </p>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-12">Skills & Traits</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow">
              <h4 className="font-semibold text-lg mb-3">Technical</h4>
              <ul className="text-gray-600 space-y-2">
                <li>Coding</li>
                <li>Quick Learner</li>
                <li>Problem Solving</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              <h4 className="font-semibold text-lg mb-3">Personal Traits</h4>
              <ul className="text-gray-600 space-y-2">
                <li>Hardworking</li>
                <li>Responsible</li>
                <li>Motivated</li>
                <li>Honest</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              <h4 className="font-semibold text-lg mb-3">Hobbies</h4>
              <ul className="text-gray-600 space-y-2">
                <li>Reading philosophy</li>
                <li>Playing PC games</li>
                <li>Traveling</li>
                <li>Writing journals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-12">Projects</h3>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-8 border rounded-xl hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-3">Portfolio Website</h4>
              <p className="text-gray-600">
                A modern personal portfolio built with Next.js and Tailwind CSS.
              </p>
            </div>

            <div className="p-8 border rounded-xl hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-3">Database System Project</h4>
              <p className="text-gray-600">
                Designed and normalized database systems using 1NF, 2NF, and 3NF.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-8">Contact Me</h3>

          <div className="bg-white p-8 rounded-xl shadow space-y-4">
            <p><strong>Email:</strong> apurbasanjel@gmail.com</p>
            <p><strong>Phone:</strong> 9749400462</p>
            <p><strong>Location:</strong> Gothatar Heights, Nepal</p>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} Apurba Sanjel. All rights reserved.</p>
      </footer>

    </div>
  );
}