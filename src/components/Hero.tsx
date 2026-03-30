export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-5xl font-bold leading-tight">
            Hello, I’m <br />
            <span className="text-gray-900">Sai Kiran</span>
          </h1>

          <p className="mt-6 text-gray-600 max-w-md">
            {/* YOU WILL REPLACE THIS */}
            Your intro goes here.
          </p>

          <button className="mt-6 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-md transition">
            Say Hello
          </button>

          {/* EMPTY STATS CONTAINER (optional for later) */}
          <div className="mt-10 flex gap-6 bg-white/60 backdrop-blur-md p-4 rounded-lg w-fit border">
            {/* You can add stats later OR remove */}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <div className="w-[320px] h-[380px] bg-white rounded-2xl shadow-md flex items-center justify-center">
            {/* Replace with your image */}
            <span className="text-gray-400">Your Image</span>
          </div>
        </div>

      </div>
    </section>
  );
}