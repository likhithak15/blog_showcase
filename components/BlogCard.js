export default function BlogCard({ blog }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
      <img
        src={blog.image}
        alt={blog.title}
        className="rounded-lg mb-3 w-full h-40 object-cover"
      />
      <h2 className="text-xl font-semibold">{blog.title}</h2>
      <p className="text-gray-600 mt-2">{blog.excerpt}</p>
    </div>
  );
}
