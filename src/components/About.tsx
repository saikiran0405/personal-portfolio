export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <div className="flex justify-center">
          <div className="w-[280px] h-[320px] bg-gray-100 rounded-xl flex items-center justify-center">
            <span className="text-gray-400">Your Photo</span>
          </div>
        </div>

        {/* TEXT */}
        <div>
          <h2 className="text-3xl font-semibold">About Me</h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            {/* YOUR CONTENT */}
            Add your intro here.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            {/* YOUR CONTENT */}
            Add more details here.
          </p>
        </div>

      </div>
    </section>
  );
}