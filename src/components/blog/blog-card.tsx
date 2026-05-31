import Link from "next/link";
import { IconCalendar, IconTag } from "@tabler/icons-react";
import type { BlogPost } from "@/lib/blog";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-xl border border-border/40 bg-card overflow-hidden transition-colors hover:border-brand/30"
    >
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap gap-1.5">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 rounded-full bg-brand/10 px-2 py-0.5 text-xs font-medium text-brand"
            >
              <IconTag className="h-2.5 w-2.5" />
              {tag}
            </span>
          ))}
        </div>

        <h2 className="mb-2 font-semibold text-foreground transition-colors group-hover:text-brand line-clamp-2">
          {post.title}
        </h2>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {post.description}
        </p>

        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <IconCalendar className="h-3.5 w-3.5" />
          {formatDate(post.date)}
        </div>
      </div>
    </Link>
  );
}
