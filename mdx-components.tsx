import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'

// This file defines custom React components to be used in MDX files
// Simple, minimal styling using Tailwind classes
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Headings - using Newsreader font
    h1: ({ children }) => (
      <h1 className="font-display text-4xl md:text-5xl font-bold mt-12 mb-6 text-rich-black">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-display text-3xl md:text-4xl font-semibold mt-10 mb-4 text-rich-black">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-display text-2xl md:text-3xl font-semibold mt-8 mb-3 text-rich-black">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-display text-xl md:text-2xl font-semibold mt-6 mb-2 text-rich-black">
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="font-display text-lg md:text-xl font-semibold mt-6 mb-2 text-rich-black">
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6 className="font-display text-base md:text-lg font-semibold mt-4 mb-2 text-rich-black">
        {children}
      </h6>
    ),

    // Paragraph - using IBM Plex Sans
    p: ({ children }) => (
      <p className="font-body text-base md:text-lg leading-relaxed mb-4 text-rich-black">
        {children}
      </p>
    ),

    // Links
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-terracotta underline decoration-1 underline-offset-2 hover:decoration-2 transition-all"
      >
        {children}
      </a>
    ),

    // Code - inline and blocks
    code: ({ children, className }) => {
      const isInline = !className

      if (isInline) {
        return (
          <code className="font-mono text-sm bg-gray-100 px-1.5 py-0.5 rounded text-rich-black">
            {children}
          </code>
        )
      }

      return (
        <code className="font-mono text-sm text-rich-black">
          {children}
        </code>
      )
    },

    pre: ({ children }) => (
      <pre className="bg-gray-50 p-4 md:p-6 rounded-lg overflow-x-auto my-6 border border-border-gray">
        {children}
      </pre>
    ),

    // Images - simple, responsive
    img: ({ src, alt }) => (
      <span className="block my-8">
        <img
          src={src}
          alt={alt || ''}
          className="rounded-lg w-full h-auto"
        />
        {alt && (
          <span className="block text-sm italic text-text-muted mt-2 text-center">
            {alt}
          </span>
        )}
      </span>
    ),

    // Blockquotes
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-terracotta pl-4 md:pl-6 py-2 my-6 italic text-text-muted">
        {children}
      </blockquote>
    ),

    // Lists
    ul: ({ children }) => (
      <ul className="list-disc list-outside ml-6 mb-4 space-y-2">
        {children}
      </ul>
    ),

    ol: ({ children }) => (
      <ol className="list-decimal list-outside ml-6 mb-4 space-y-2">
        {children}
      </ol>
    ),

    li: ({ children }) => (
      <li className="font-body text-base md:text-lg leading-relaxed text-rich-black">
        {children}
      </li>
    ),

    // Horizontal rule
    hr: () => (
      <hr className="border-border-gray my-8" />
    ),

    // Allow custom components to be passed in
    ...components,
  }
}
