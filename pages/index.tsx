import { Box, Stack, ThemeProvider } from '@mui/material';
import type { GetStaticProps, NextPage } from 'next';
import { BlogCard } from '../components/BlogCard';
import { Footer } from '../components/Footer';
import { Header } from "../components/Header";
import { getPostProps, getPostPaths, PostProps } from '../src/posts';
import theme from "../styles/theme";
import Head from "next/head";

interface HomeProps {
  posts: PostProps[]
};

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Trey Moen</title>
      </Head>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh"
        }}
      >
        <Stack
          component="main"
          marginTop="25px" // TODO maybe remove?
          direction="column"
          spacing={3}
          marginBottom={3}
          alignItems="center"
          alignSelf="center"
          flexGrow={1}
          sx={{
            maxWidth: {
              xs: "90%",
              sm: "70%"
            }
          }}
        >
          <Header
            avatar="https://cdn.discordapp.com/attachments/954055017093005393/962537929178247199/funny.jpg"
            github="https://github.com/greatgitsby"
            linkedin="https://linkedin.com/in/trey-moen"
            email="trey@moen.ai"
            resume="./resume.pdf"
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
    </ThemeProvider>
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
