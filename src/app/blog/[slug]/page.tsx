import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { IconCalendar, IconArrowLeft, IconTag } from "@tabler/icons-react";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { SocialSharing } from "@/components/blog/social-sharing";
import { RelatedPosts } from "@/components/blog/related-posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, post.tags);
  const pageUrl = `https://www.liggar.site/blog/${post.slug}`;

  return (
    <div className="py-20">
      <div className="mx-auto max-w-(--container-max) px-4">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <IconArrowLeft className="h-4 w-4" />
          All Articles
        </Link>

        <article className="mx-auto max-w-2xl">
          {/* Header */}
          <div className="mb-8">
            <div className="mb-4 flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 rounded-full bg-brand/10 px-2.5 py-1 text-xs font-medium text-brand"
                >
                  <IconTag className="h-2.5 w-2.5" />
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {post.title}
            </h1>

            <div className="flex items-center justify-between gap-4 border-b border-border/40 pb-6">
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <IconCalendar className="h-4 w-4" />
                {formatDate(post.date)} · {post.author}
              </div>
              <SocialSharing url={pageUrl} title={post.title} />
            </div>
          </div>

          {/* Content */}
          <div
            className="prose prose-invert prose-brand max-w-none prose-headings:font-semibold prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-brand prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-li:text-muted-foreground prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3"
            dangerouslySetInnerHTML={{ __html: post.content ?? "" }}
          />
        </article>

        <div className="mx-auto max-w-2xl">
          <RelatedPosts posts={related} />
        </div>
      </div>
    </div>
  );
}
