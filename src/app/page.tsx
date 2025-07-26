"use client";
import { useState } from "react";

function Sidebar() {
  return (
    <aside className="w-60 bg-neutral-950 border-r border-neutral-800 min-h-screen pt-8 px-4 fixed top-0 left-0 flex flex-col">
      <nav className="flex flex-col gap-1 mt-4">
        <a className="px-4 py-2 rounded-md bg-neutral-900 text-white font-semibold" href="#">
          Dashboard
        </a>
        <a className="px-4 py-2 rounded-md text-neutral-400 hover:bg-neutral-800 hover:text-white transition" href="#">
          Projects
        </a>
        <a className="px-4 py-2 rounded-md text-neutral-400 hover:bg-neutral-800 hover:text-white transition" href="#">
          Domains
        </a>
        <a className="px-4 py-2 rounded-md text-neutral-400 hover:bg-neutral-800 hover:text-white transition" href="#">
          Settings
        </a>
      </nav>
    </aside>
  );
}

function Header() {
  return (
    <header className="h-16 px-8 flex items-center justify-between bg-neutral-950 border-b border-neutral-800 ml-60 fixed top-0 right-0 left-0 z-10">
      <div className="flex items-center gap-2">
        <span className="text-2xl text-white font-bold flex items-center gap-2">
          <span className="mr-2">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
              <polygon points="16,4 28,28 4,28" fill="white" />
            </svg>
          </span>
          VercelZero
        </span>
      </div>
      <div className="flex items-center gap-4">
        <button className="px-5 py-1 rounded-full border border-neutral-700 text-white hover:bg-neutral-800 transition">
          Sign In
        </button>
        <span className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-white font-bold">
          U
        </span>
      </div>
    </header>
  );
}

export default function Home() {
  const [authenticated] = useState<boolean>(false);

  return (
    <main className="bg-neutral-950 min-h-screen">
      <Sidebar />
      <Header />
      <div className="ml-60 pt-16 flex flex-col min-h-screen">
        <section className="flex flex-1 flex-col items-center justify-center text-center">
          {!authenticated ? (
            <>
              <h1 className="text-5xl font-bold text-white mb-4">
                Build. Preview. Launch
              </h1>
              <p className="text-lg text-neutral-300 mb-8">
                Speed up your development with VercelZero - simple, fast and powerful.
              </p>
              <div className="flex gap-4 justify-center">
                <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
                  Get started with GitHub
                </button>
                <a
                  href="https://github.com/DaveSimoes/VercelZero"
                  className="text-white border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition"
                >
                  See the documentation
                </a>
              </div>
            </>
          ) : (
            // Add dashboard for authenticated user if you want
            <div></div>
          )}
        </section>
      </div>
    </main>
  );
}
