import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog/blog-card";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Travel guides, driving tips, and rental advice for exploring Bali — from the team at Sanur Ride Co.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="py-20">
      <div className="mx-auto max-w-(--container-max) px-4">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-brand">
            Travel & Tips
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Our Blog
          </h1>
          <p className="mt-3 text-muted-foreground">
            Guides, tips, and stories to help you get the most out of Bali.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
