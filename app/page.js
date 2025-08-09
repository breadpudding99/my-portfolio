export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-4">Hi, I'm Sena</h1>
      <p className="text-lg mb-8 text-center">
        Welcome to my portfolio & blog. I write about my thoughts, projects, and more.
      </p>

      <div className="w-full max-w-2xl space-y-4">
        <article className="p-4 bg-white rounded shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold">My First Blog Post</h2>
          <p className="text-gray-600">This is the beginning of my blogging journey...</p>
        </article>

        <article className="p-4 bg-white rounded shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold">Another Post</h2>
          <p className="text-gray-600">Some thoughts I want to share with the world...</p>
        </article>
      </div>
    </main>
  );
}
