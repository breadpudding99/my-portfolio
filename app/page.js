export default function Home() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-8">
      {/* Header Section */}
      <div className="max-w-4xl w-full flex flex-col items-center gap-8">
        {/* Intro Text */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-700">Hello, there!</h2>
          <h1 className="text-4xl font-bold text-gray-900 mt-1">
            I&apos;m <span className="text-green-600">Sena</span>.
          </h1>
          <p className="mt-4 text-gray-700">
            Currently, I&apos;m a <span className="text-green-600 font-medium">Designer and Marketer</span>.
            I love to write, build products, and explore new things. 🚀
          </p>
          <p className="mt-2 text-gray-600">
            Most of my work involves creativity, from creating social media content and writing engaging blog stories to designing posts or event materials.
          </p>
        </div>
      </div>
    </main>
  );
}
