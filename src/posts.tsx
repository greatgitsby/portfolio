export interface PostProps {
  slug: string;
  title: string;
  desc: string;
  updated: string;
  created: string;
}

export async function getPostProps(slug: string): Promise<PostProps> {
  // Dynamically import the MDX file to get its metadata
  const mdxModule = await import(`../content/${slug}.mdx`)
  const metadata = mdxModule.metadata

  return {
    slug: slug,
    title: metadata.title,
    desc: metadata.desc,
    created: metadata.created,
    updated: metadata.updated
  }
}

export async function getPostPaths(): Promise<string[]> {
  const fs = await import("fs/promises");
  const path = await import("path");
  const contentDir = path.join(process.cwd(), "content");

  // Get all .mdx files (changed from .md)
  const files = await fs.readdir(contentDir)

  return files
    .filter(file => file.endsWith('.mdx'))
    .map((file) => file.replace('.mdx', ''))
}
