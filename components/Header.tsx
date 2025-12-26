'use client';

import { useState } from 'react';

export function Header() {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <header className="mb-16">
      <div className="flex flex-col items-center text-center mb-8">
        {/* Avatar */}
        <img
          src="/img/me.jpg"
          alt="Trey Moen"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-6 border-4 border-terracotta shadow-lg"
        />

        {/* Name */}
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-2 text-rich-black">
          Trey Moen
        </h1>

        {/* Tagline */}
        <p className="font-body text-lg md:text-xl text-text-muted">
          Developer & Writer
        </p>
      </div>

      {/* Social Links */}
      <nav className="grid grid-cols-2 md:flex md:justify-center gap-3 md:gap-4 max-w-sm md:max-w-none mx-auto">
        <a
          href="https://github.com/greatgitsby"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-3 md:px-4 py-2 rounded-lg bg-rich-black text-warm-white hover:bg-terracotta transition-colors font-body text-sm w-full"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c 0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/trey-moen/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-3 md:px-4 py-2 rounded-lg bg-rich-black text-warm-white hover:bg-terracotta transition-colors font-body text-sm w-full"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          LinkedIn
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-3 md:px-4 py-2 rounded-lg bg-rich-black text-warm-white hover:bg-terracotta transition-colors font-body text-sm w-full"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          Resume
        </a>

        <div className="relative w-full">
          <button
            onMouseEnter={() => setShowEmail(true)}
            onMouseLeave={() => setShowEmail(false)}
            className="inline-flex items-center justify-center gap-2 px-3 md:px-4 py-2 rounded-lg bg-rich-black text-warm-white hover:bg-terracotta transition-colors font-body text-sm cursor-default w-full"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email
          </button>

          {/* Tooltip */}
          {showEmail && (
            <div
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-rich-black text-warm-white text-sm rounded-lg whitespace-nowrap"
              style={{ pointerEvents: 'none' }}
            >
              trey at moen dot ai
              <div
                className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0"
                style={{
                  borderLeft: '6px solid transparent',
                  borderRight: '6px solid transparent',
                  borderTop: '6px solid #1A1A1A'
                }}
              />
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
