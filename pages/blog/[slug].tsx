import { GetStaticPaths, GetStaticProps, NextPage } from "next/types";
import Head from "next/head";
import Link from "next/link";
import { getPostPaths, getPostProps, PostProps } from "../../src/posts";
import dynamic from "next/dynamic";

const BlogPage: NextPage<PostProps> = ({ title, created, updated, slug }) => {
  // Dynamically import the MDX component based on slug
  const Content = dynamic(() => import(`../../content/${slug}.mdx`));

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FDFDF9' }}>
      <Head>
        <title>{title} ⸱ Trey Moen</title>
      </Head>

      <main className="flex-grow max-w-3xl w-full mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Back button */}
        <div className="mb-8">
          <Link
            href="/"
            style={{ color: '#D4503C' }}
            className="inline-flex items-center transition-colors hover:opacity-80"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back
          </Link>
        </div>

        {/* Article header */}
        <header className="mb-12">
          <h1
            style={{
              fontFamily: "'Newsreader', serif",
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#1A1A1A'
            }}
          >
            {title}
          </h1>
          <div className="flex items-center gap-2" style={{ color: '#6B6B6B', fontSize: '0.875rem' }}>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <time>{created}</time>
          </div>
        </header>

        {/* MDX Content */}
        <article className="prose prose-lg max-w-none">
          <Content />
        </article>

        {/* Updated date */}
        <footer className="mt-12 pt-6" style={{ borderTop: '1px solid #E8E8E8' }}>
          <p style={{ fontSize: '0.875rem', fontStyle: 'italic', color: '#6B6B6B' }}>
            Last updated {updated}
          </p>
        </footer>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<PostProps> = async (context) => {
  const slug = context.params?.slug as string;
  const props = await getPostProps(slug);

  return {
    props,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = (await getPostPaths()).map((slug) => `/blog/${slug}`);

  return {
    paths,
    fallback: false,
  };
};

export default BlogPage;
