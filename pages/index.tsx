import { Box, Stack, ThemeProvider } from '@mui/material';
import type { GetStaticProps, NextPage } from 'next';
import { BlogCard } from '../components/BlogCard';
import { Footer } from '../components/Footer';
import { Header } from "../components/Header";
import { getPostMetadata, getPostPaths, PostProps } from '../src/posts';
import theme from "../styles/theme";

interface HomeProps {
  posts: PostProps[]
};

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh"
        }}
      >
        <Stack
          marginTop="25px" // TODO maybe remove?
          direction="column"
          spacing={3}
          marginBottom={3}
          alignItems="center"
          flexGrow={1}
        >
          <Header
            avatar="https://cdn.discordapp.com/attachments/954055017093005393/962537929178247199/funny.jpg"
            github="https://github.com/greatgitsby"
            linkedin="https://linkedin.com/in/trey-moen"
            email="trey@moen.ai"
            resume="./resume.pdf"
          />

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
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const posts: PostProps[] = [];
  const paths = await getPostPaths();

  for (const path of paths) {
    const post = await getPostMetadata(path);
    posts.push(post);
  }

  return Promise.resolve({
    props: {
      posts
    }
  });
};

export default Home;
