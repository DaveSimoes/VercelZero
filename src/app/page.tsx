"use client";
import { useState } from "react";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
// Import other components you create for ProjectList, Hero, etc.

export default function Home() {
  const [authenticated, setAuthenticated] = useState(false); // Simulation, then switch to real auth

  return (
    <main className="bg-neutral-950 min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <section className="flex-1 px-6 py-8">
          {!authenticated ? (
            // Hero section for visitors
            <div className="flex flex-col items-center justify-center h-full text-center">
              <h1 className="text-5xl font-bold text-white mb-4">Deploy. Preview. Ship.</h1>
              <p className="text-lg text-neutral-300 mb-8">
                Acelere seu desenvolvimento com o VercelZero – simples, rápido e poderoso.
              </p>
              <div className="flex gap-4 justify-center">
                <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
                  Comece com GitHub
                </button>
                <a
                  href="https://github.com/DaveSimoes/VercelZero"
                  className="text-white border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
                >
                  See the documentation
                </a>
              </div>
            </div>
          ) : (
            // Dashboard for authenticated users
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white">Seus Projetos</h2>
                <button className="bg-primary text-white px-4 py-2 rounded-full font-semibold hover:scale-105 transition">
                  Novo Projeto
                </button>
              </div>
              {/* Project´s list example */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Map user projects here */}
                {/* <ProjectCard ... /> */}
                <div className="bg-neutral-900 p-6 rounded-xl shadow hover:shadow-lg border border-neutral-800 transition">
                  <h3 className="text-white font-semibold mb-2">meu-projeto</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-green-400 bg-green-950 px-2 py-1 rounded-full">Deploy: Success</span>
                    <span className="text-xs text-neutral-400">Updated 2 min ago</span>
                  </div>
                  <a href="#" className="text-primary hover:underline text-sm">Access Preview/a>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
      <footer className="text-neutral-500 text-xs text-center py-4">
        VercelZero — open source clone. created by DaveSimoes.
      </footer>
    </main>
  );
}
