export interface PostProps {
  content: string;
  title: string;
  desc: string;
  updated: string;
  created: string;
  slug: string;
}

interface PostFrontmatter {
  title: string;
  desc: string;
  updated: Date;
  created: Date;
}

export async function getPostMetadata(slug: string): Promise<PostProps> {
  const matter = (await import("gray-matter")).default;
  const path = await import("path");
  const fs = await import("fs/promises");

  const markdownFilePath = path.join(process.cwd(), "content", slug + ".md");
  const markdownFile = await fs.readFile(markdownFilePath);
  const content = markdownFile.toString();
  const metadata = matter(content).data as PostFrontmatter;

  return {
    content,
    desc: metadata.desc,
    slug: "/blog/" + slug,
    title: metadata.title,
    created: metadata.created.toLocaleDateString(),
    updated: metadata.updated.toLocaleDateString()
  };
}

export async function getPostPaths(): Promise<string[]> {
  const fs = await import("fs/promises");
  const path = await import("path");
  const contentDir = path.join(process.cwd(), "content");

  return (await fs.readdir(contentDir))
    .map((p) => p.split(".").slice(0, 1))
    .flat();
}