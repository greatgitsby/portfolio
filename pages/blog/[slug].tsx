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
import { getPostPaths, getPostMetadata, PostProps } from "../../src/posts";
import * as markdownComponents from "../../components/Markdown";
import { ArrowBack } from "@mui/icons-material";

const BlogPage: NextPage<PostProps> = ({ content, created, title, updated }) => {

  return (
    <ThemeProvider theme={theme}>
      <Stack
        alignItems="center"
        justifyContent="center"
        spacing={5}
        sx={{
          margin: "auto",
          marginTop: "3rem",
          marginBottom: "3rem",
          maxWidth: "75%"
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
        <Typography variant="h1" align="center">{title}</Typography>
        <Box
          alignItems="center"
          justifyContent="center"
          sx={{
            maxWidth: "90%"
          }}
        >
          <Stack
            spacing={5}
          >
            <Box>
              <ReactMarkdown
                components={markdownComponents as any}
                remarkPlugins={[RemarkFrontmatter, RemarkGfm]}
                rehypePlugins={[RehypeRemoveComments, RehypeSlug, [RehypeAutoLinkHeading, { behavior: "wrap" }], RehypeToc]}
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
  const props = await getPostMetadata(slug);

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
