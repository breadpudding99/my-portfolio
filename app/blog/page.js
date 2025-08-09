import Link from "next/link";

export default function BlogPage() {
  const posts = [
    { slug: "my-first-post", title: "My First Blog Post", description: "This is the beginning of my blogging journey..." },
    { slug: "another-post", title: "Another Post", description: "Some thoughts I want to share with the world..." },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block p-4 bg-white rounded shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
