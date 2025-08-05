import useFetch from "@/hooks/useFetch";
import type { BlogData } from "@/interfaces/interface";
import { useParams } from "react-router";

export default function Blog() {
  const { slug } = useParams();
  const { data: blog, loading } = useFetch<BlogData>(`/api/blog/${slug}`);

  if (loading || !blog)
    return (
      <section className="custom-width mx-auto my-20 text-center">
        <p className="text-lg text-black/70">Loading blog...</p>
      </section>
    );

  return (
    <article className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">{blog.title}</h1>

      <div className="text-sm text-gray-500 mb-6 flex flex-wrap gap-4">
        <span>{blog.publishDate}</span>
        <span>{blog.readTime}</span>
        <span>
          {blog.category} &gt; {blog.subcategory}
        </span>
        <span>
          📍 {blog.location.city}, {blog.location.country}
        </span>
      </div>

      <img
        src={blog.featuredImage}
        alt={blog.title}
        className="rounded-lg w-full mb-6 object-cover max-h-[500px]"
      />

      <p className="text-lg text-gray-700 italic mb-6">{blog.excerpt}</p>

      <div className="text-base sm:text-lg text-gray-800 leading-relaxed mb-8 whitespace-pre-line">
        {blog.content}
      </div>

      <div className="mb-6">
        <h3 className="font-semibold text-gray-700 mb-2">Tags:</h3>
        <div className="flex flex-wrap gap-2">
          {blog.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 px-3 py-1 text-sm rounded-full text-gray-600"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center text-sm text-gray-600 border-t pt-4">
        <div>
          ❤️ {blog.likes} &nbsp; 💬 {blog.comments} &nbsp; 👁️ {blog.views}
        </div>
        <div>⭐ {blog.rating.toFixed(1)} / 5</div>
      </div>
    </article>
  );
}
