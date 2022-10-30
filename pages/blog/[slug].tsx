import { GetStaticPaths, GetStaticProps, NextPage } from "next/types";
import Head from "next/head";

import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowBack from "@mui/icons-material/ArrowBack";
import CalendarMonth from "@mui/icons-material/CalendarMonth";

import ReactMarkdown from "react-markdown";
import RemarkGfm from "remark-gfm";
import RehypeSlug from "rehype-slug";
import RehypeRemoveComments from "rehype-remove-comments";
import RemarkFrontmatter from "remark-frontmatter";

import { getPostContent, getPostPaths, getPostProps, PostProps } from "../../src/posts";
import { Footer } from "../../components/Footer";
import * as markdownComponents from "../../components/Markdown";
import Link from "next/link";

const BlogPage: NextPage<PostProps> = ({ created, content, title, updated }) => {
  const pageContent = content || "";

  return (
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
        maxWidth="85%"
      >
        <Head>
          <title>{title} ⸱ Trey Moen</title>
        </Head>

        <Box
          width="100%"
        >
          <Link href="/" passHref>
            <Fab color="secondary">
              <ArrowBack />
            </Fab>
          </Link>
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
                {pageContent}
              </ReactMarkdown>
            </Box>
            <Typography fontStyle="italic">
              Updated {updated}
            </Typography>
          </Stack>
        </Box>
      </Stack>
      <Footer />
    </Box>
  );
};

export const getStaticProps: GetStaticProps<PostProps> = async (context) => {
  const slug = context.params?.slug as string;
  const props = await getPostProps(slug);
  const content = await getPostContent(props.filePath);
  props.content = content;

  return { props };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = (await getPostPaths()).map((slug) => "/blog/" + slug);

  return {
    paths,
    fallback: false
  };
};

export default BlogPage;
