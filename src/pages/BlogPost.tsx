import { Link, Navigate, useParams } from "react-router-dom";
import { BLOG_POSTS, getPostBySlug } from "../data/blogPosts";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="pb-24 pt-32 sm:pt-40">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Link to="/blog" className="text-sm text-white/60 transition hover:text-gold">
          ← Retour au blog
        </Link>

        <div className="mt-6 flex items-center gap-3 text-xs font-semibold tracking-widest text-gold">
          <span>{post.category.toUpperCase()}</span>
          <span className="text-white/30">•</span>
          <span className="text-white/40">
            {formatDate(post.date)} · {post.readTime} de lecture
          </span>
        </div>

        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">{post.title}</h1>
      </div>

      <div className="mx-auto mt-10 max-w-5xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-2xl">
          <img src={post.coverImage} alt={post.title} className="h-[320px] w-full object-cover sm:h-[440px]" />
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-3xl px-5 sm:px-8">
        <div className="space-y-5 text-white/75">
          {post.content.map((paragraph, i) => (
            <p key={i} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {otherPosts.length > 0 && (
        <div className="mx-auto mt-20 max-w-3xl border-t border-white/10 px-5 pt-10 sm:px-8">
          <p className="text-xs font-semibold tracking-[0.3em] text-gold">À LIRE AUSSI</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {otherPosts.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="group flex items-center gap-4 rounded-xl bg-panel p-3 transition hover:-translate-y-0.5"
              >
                <img
                  src={p.coverImage}
                  alt={p.title}
                  className="h-16 w-16 flex-shrink-0 rounded-lg object-cover"
                />
                <span className="font-display text-sm font-semibold leading-snug transition group-hover:text-gold">
                  {p.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
