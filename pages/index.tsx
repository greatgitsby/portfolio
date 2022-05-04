import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import type { GetStaticProps, NextPage } from 'next';
import { BlogCard } from '../components/BlogCard';
import { Footer } from '../components/Footer';
import { Header } from "../components/Header";
import { getPostProps, getPostPaths, PostProps } from '../src/posts';
import Head from "next/head";

interface HomeProps {
  posts: PostProps[]
};

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh"
        }}
      >
        <Head>
          <title>Trey Moen</title>
        </Head>

        <Stack
          component="main"
          marginTop="25px" // TODO maybe remove?
          direction="column"
          spacing={3}
          marginBottom={3}
          alignItems="center"
          alignSelf="center"
          flexGrow={1}
          maxWidth="85%"
        >
          <Header
            avatar="/img/me.jpg"
            github="https://github.com/greatgitsby"
            linkedin="https://linkedin.com/in/trey-moen"
            email="trey@moen.ai"
            resume="./pdf/resume.pdf"
          />

          <Stack
            gap={2} 
          >
            {posts.map((p, i) => (
              <BlogCard
                key={i}
                title={p.title}
                date={p.created}
                desc={p.desc}
                url={p.slug}
              />
            ))}
          </Stack>


        </Stack>
        <Footer />
      </Box>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const posts: PostProps[] = [];
  const paths = await getPostPaths();

  for (const path of paths) {
    const post = await getPostProps(path);
    posts.push(post);
  }

  // Sort posts youngest to oldest
  posts.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());

  return Promise.resolve({
    props: {
      posts
    }
  });
};

export default Home;
