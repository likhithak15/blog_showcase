import BlogCard from "@/components/BlogCard";
import blogs from "@/data/blogs";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">
        🚀 My Blog Showcase
      </h1>
      <div className="grid md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </main>
  );
}
