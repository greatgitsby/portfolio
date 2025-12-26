import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { getPostProps, getPostPaths, PostProps } from '../src/posts';

interface HomeProps {
  posts: PostProps[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <div className="min-h-screen flex flex-col bg-warm-white">
      <Head>
        <title>Trey Moen</title>
      </Head>

      <main className="flex-grow max-w-3xl w-full mx-auto px-12 md:px-8 py-8 md:py-12">
        {/* Header with avatar and social links */}
        <Header />

        {/* Divider */}
        <hr className="border-border-gray mb-12" />

        {/* Blog posts list */}
        <div className="space-y-8">
          {posts.map((post, index) => (
            <article
              key={post.slug}
              className={`animate-fade-in-up stagger-${Math.min(index + 1, 5)}`}
            >
              {/* Title */}
              <h3 className="font-display text-2xl md:text-3xl mb-2">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-rich-black hover:text-terracotta transition-colors"
                >
                  {post.title}
                </Link>
              </h3>

              {/* Description */}
              <p className="font-body text-base md:text-lg text-text-muted">
                {post.desc}
              </p>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const posts: PostProps[] = [];
  const paths = await getPostPaths();

  for (const path of paths) {
    const post = await getPostProps(path);
    posts.push(post);
  }

  // Sort posts newest to oldest
  posts.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());

  return {
    props: {
      posts,
    },
  };
};

export default Home;
