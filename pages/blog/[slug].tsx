import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import ReactMarkdown from "react-markdown";
import RemarkGfm from "remark-gfm";
import RehypeToc from "rehype-toc";
import RehypeSlug from "rehype-slug";
import RehypeRemoveComments from "rehype-remove-comments";
import RehypeAutoLinkHeading from 'rehype-autolink-headings'
import RemarkFrontmatter from "remark-frontmatter";
import { Box, Fab, Stack, ThemeProvider, Typography } from "@mui/material";
import theme from "../../styles/theme";
import { Footer } from "../../components/Footer";
import { getPostPaths, getPostProps, PostProps } from "../../src/posts";
import * as markdownComponents from "../../components/Markdown";
import { ArrowBack, CalendarMonth } from "@mui/icons-material";
import Head from "next/head";

const BlogPage: NextPage<PostProps> = ({ content, created, title, updated }) => {

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{title} ⸱ Trey Moen</title> 
      </Head>

      <Stack
        alignItems="center"
        justifyContent="center"
        gap={2}
        sx={{
          margin: "auto",
          marginTop: "3rem",
          marginBottom: "3rem",
          width: {
            xs: "85%",
            md: "65%"
          }
        }}
      >
        <Box
          width="100%"
        >
          <Fab
            color="secondary"
            href="/"
          >
            <ArrowBack />
          </Fab>
        </Box>
        <Typography variant="h2" align="center" fontWeight="bold">{title}</Typography>
        <Stack direction="row" alignItems="center" gap={1}>
          <CalendarMonth />
          <Typography variant="body1" align="center">
            {created}
          </Typography>
        </Stack>

        <Box
          alignItems="center"
          justifyContent="center"
        >
          <Stack gap={2}>
            <Box>
              <ReactMarkdown
                components={markdownComponents as any}
                remarkPlugins={[RemarkFrontmatter, RemarkGfm]}
                rehypePlugins={[
                  RehypeRemoveComments,
                  RehypeSlug,
                  //[RehypeAutoLinkHeading, { behavior: "wrap" }],
                  //RehypeToc
                ]}
              >
                {content}
              </ReactMarkdown>
            </Box>
            <Typography fontStyle="italic">
              Updated {updated}
            </Typography>
          </Stack>
        </Box>
      </Stack>
      <Footer />
    </ThemeProvider>
  );
};

export const getStaticProps: GetStaticProps<PostProps> = async (context) => {
  const slug = context.params?.slug as string;
  const props = await getPostProps(slug);

  return {
    props
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = (await getPostPaths()).map((slug) => "/blog/" + slug);

  return {
    paths,
    fallback: false
  };
};

export default BlogPage;
