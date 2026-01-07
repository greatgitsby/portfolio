import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  // Enable static export for Next.js 13+
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Configure pageExtensions to include MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
  // Handle both .md and .mdx files
  extension: /\.(md|mdx)$/,
  // Add markdown plugins here if needed (we're keeping it minimal)
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
