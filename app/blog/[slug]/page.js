export default function BlogPost({ params }) {
  const { slug } = params;

  const posts = {
    "my-first-post": {
      title: "My First Blog Post",
      content: "Welcome to my blog! This is my very first post. I'm excited to share my journey here..."
    },
    "another-post": {
      title: "Another Post",
      content: "Here's another blog post where I share more about my experiences..."
    }
  };

  const post = posts[slug];

  if (!post) {
    return <main className="p-8">Post not found.</main>;
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.content}</p>
    </main>
  );
}
