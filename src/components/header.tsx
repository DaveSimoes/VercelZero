"use client";

export default function Header() {
  return (
    <header className="w-full h-16 flex items-center px-6 bg-neutral-950 border-b border-neutral-800">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* Logo/Brand */}
        <div className="flex items-center gap-2">
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            {/* Ícone minimalista estilo Vercel */}
            <polygon points="12,3 22,21 2,21" fill="#fff" />
          </svg>
          <span className="font-bold text-lg text-white tracking-tight">VercelZero</span>
        </div>
        {/* User actions */}
        <div className="flex items-center gap-4">
          {/* Placeholder para autenticação futura */}
          <button className="bg-neutral-900 border border-neutral-700 text-white px-4 py-1 rounded-full hover:bg-neutral-800 transition">
            Sign In
          </button>
          <div className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center text-white font-bold text-sm">
            U
          </div>
        </div>
      </div>
    </header>
  );
}
