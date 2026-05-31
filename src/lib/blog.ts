import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const blogDir = path.join(process.cwd(), "content/blog");

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
  content?: string;
};

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".md"));

  return files
    .map((filename) => {
      const raw = fs.readFileSync(path.join(blogDir, filename), "utf-8");
      const { data } = matter(raw);
      return {
        slug: data.slug as string,
        title: data.title as string,
        description: data.description as string,
        date: data.date as string,
        author: data.author as string,
        image: data.image as string,
        tags: (data.tags as string[]) ?? [],
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".md"));

  for (const filename of files) {
    const raw = fs.readFileSync(path.join(blogDir, filename), "utf-8");
    const { data, content } = matter(raw);

    if (data.slug === slug) {
      const processed = await remark().use(html).process(content);
      return {
        slug: data.slug as string,
        title: data.title as string,
        description: data.description as string,
        date: data.date as string,
        author: data.author as string,
        image: data.image as string,
        tags: (data.tags as string[]) ?? [],
        content: processed.toString(),
      };
    }
  }

  return null;
}

export function getRelatedPosts(currentSlug: string, tags: string[]): BlogPost[] {
  return getAllPosts()
    .filter((p) => p.slug !== currentSlug)
    .filter((p) => p.tags.some((t) => tags.includes(t)))
    .slice(0, 3);
}
