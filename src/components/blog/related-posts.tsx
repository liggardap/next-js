import { BlogCard } from "@/components/blog/blog-card";
import type { BlogPost } from "@/lib/blog";

export function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-16 border-t border-border/40 pt-12">
      <h2 className="mb-6 text-xl font-semibold text-foreground">Related Articles</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
