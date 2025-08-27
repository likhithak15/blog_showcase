export default function BlogCard({ title, description, image }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
