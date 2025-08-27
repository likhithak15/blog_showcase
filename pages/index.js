import BlogCard from '../components/BlogCard';
import blogs from '../data/blogs';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Blog</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            description={blog.description}
            image={blog.image}
          />
        ))}
      </div>
    </div>
  );
}

