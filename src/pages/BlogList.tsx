import { Link } from "react-router-dom";
import { BLOG_POSTS } from "../data/blogPosts";
import Reveal from "../components/Reveal";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogList() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
      <Reveal className="mb-14 text-center">
        <p className="text-xs font-semibold tracking-[0.3em] text-gold">CARNET DE BORD</p>
        <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">Blog</h1>
        <p className="mx-auto mt-4 max-w-lg text-white/60">
          Ce que j'apprends, ce qui foire parfois, et quelques trucs utiles glanés sur le terrain.
        </p>
      </Reveal>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {BLOG_POSTS.map((post, i) => (
          <Reveal key={post.slug} delay={i * 100}>
            <Link
              to={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl bg-panel transition hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-xs font-semibold tracking-widest text-gold">
                  <span>{post.category.toUpperCase()}</span>
                  <span className="text-white/30">•</span>
                  <span className="text-white/40">{formatDate(post.date)}</span>
                </div>
                <h2 className="mt-3 font-display text-xl font-semibold leading-snug transition group-hover:text-gold">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-sm text-white/60">{post.excerpt}</p>
                <span className="mt-5 text-sm font-semibold text-gold">Lire l'article →</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
