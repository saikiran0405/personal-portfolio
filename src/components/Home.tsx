export default function Home() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-r from-white via-pink-100 via-purple-100 to-blue-100 pt-12 pb-80"
    >
      {/* HERO CONTENT */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-24">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-5xl pb-4 mt-12">Hello, I’m</h2>
            <h2 className="text-5xl">Sai Kiran Beeram</h2>

            <p className="mt-6 text-gray-600">
              Phoenix-based Full Stack Developer, currently enhancing their
              healthcare platform at Banner health. I enjoy software
              development, user interfaces and design and infrastructure
              automation.
            </p>
          </div>

          <div className="mb-12 flex">
            <div className="px-6! py-3! rounded-md flex flex-col bg-purple-300 text-black">
              <div className="text-3xl font-semibold">7. Y</div>
              <div className="text-gray-600">Experience</div>
            </div>
            <div className="px-6! py-3! rounded-md flex flex-col bg-purple-300 text-black">
              <div className="text-3xl font-semibold">5+</div>
              <div className="text-gray-600">Projects</div>
            </div>
            <div className="px-6! py-3! rounded-md flex flex-col bg-purple-300 text-black">
              <div className="text-3xl font-semibold">5+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
          </div>
        </div>

        <div className="flex shrink-0 justify-center">
          <img
            src="/profile-photo.png"
            alt="Sai Kiran"
            className="w-[280px] md:w-[300px] h-auto max-h-[400px] rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>

      <div className="absolute left-0 right-0 -bottom-20 z-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-16 flex flex-col md:flex-row gap-24">
            <div className="shrink-0">
              <img
                src="/profile-photo.png"
                alt="Sai Kiran"
                className="w-[240px] h-auto max-h-[260px] rounded-2xl shadow-lg object-cover"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                I am a Full Stack Developer
              </h3>

              <p className="mt-4 text-gray-600">
                I did my masters in SOftware Engineeing from saint louis
                university, where I explored Machine learning, AI, LLMs, alogn
                with software development.
              </p>

              <div className="mt-6 flex gap-4">
                <button className="bg-purple-500 text-white px-4 py-2 rounded-md">
                  My Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
