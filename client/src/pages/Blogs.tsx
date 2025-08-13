import CommonTitile from "@/components/CommonTitle";
import Error from "@/components/Error";
import useFetch from "@/hooks/useFetch";
import type { BlogData } from "@/interfaces/interface";
import { ChevronsRight } from "lucide-react";
import { Link } from "react-router";

export default function Blogs() {
  const { data: blogData } = useFetch<BlogData[]>("/api/blogs");

  if (!blogData) {
    return <Error />;
  }

  return (
    <section className="flex flex-col gap-5 my-20 p-3 custom-width mx-auto">
      <CommonTitile title="BLOG" />
      <p className="text-center mb-10">Resent travel blog posts</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 sm:gap-x-5 gap-y-16">
        {blogData?.map((blog: BlogData) => (
          <div key={blog.slug} className="flex flex-col gap-5 items-center">
            <img
              src={blog.featuredImage}
              alt={blog.title}
              className="rounded-sm"
            />
            <div className="flex gap-2 items-center">{}</div>
            <h4 className="font-semibold text-center">{blog.title}</h4>
            <div className="h-[2px] w-20 bg-secondary self-center"></div>
            <p className="text-sm text-black/70 line-clamp-4 text-pretty">
              {blog.excerpt}
            </p>
            <Link to={`/blog/${blog.slug}`}>
              <button className="bg-secondary hover:bg-secondary/80 text-white px-4 py-2 font-semibold text-sm cursor-pointer flex items-center gap-1">
                Read More
                <ChevronsRight className="size-5" />
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
