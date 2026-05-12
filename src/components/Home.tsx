import { FaLinkedinIn, FaGithub } from "react-icons/fa";
// import { FaGlobe } from "react-icons/fa";

export default function Home() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-r from-white via-pink-100 via-purple-100 to-blue-100 pt-18 pb-100"
    >
      {/* HERO CONTENT */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-stretch gap-24">
        <div className="flex flex-col h-full justify-between">
          <div>
            <h2 className="text-5xl pb-4 mt-12">Hello, I’m</h2>
            <h2 className="text-5xl">Sai Kiran Beeram</h2>

            <p className="mt-6 text-gray-600">
              Phoenix-based Full Stack Developer, currently enhancing healthcare
              platforms at Banner Health. I have a strong background in building
              software for healthcare, banking, and financial systems, and I
              enjoy creating scalable applications, clean user interfaces, and
              reliable infrastructure.
            </p>
          </div>

          <div className="flex gap-1 mt-12">
            <div className="flex-1 px-6! py-1.5! rounded-md flex flex-col bg-purple-200 text-black">
              <div className="text-2xl font-semibold">7. Y</div>
              <div className="text-gray-600">Experience</div>
            </div>
            <div className="flex-1 px-6! py-3! rounded-md flex flex-col bg-purple-200 text-black">
              <div className="text-2xl font-semibold">5+</div>
              <div className="text-gray-600">Projects</div>
            </div>
            <div className="flex-1 px-6! py-3! rounded-md flex flex-col bg-purple-200 text-black">
              <div className="text-2xl font-semibold">5+</div>
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
            <div className="relative flex shrink-0 justify-center">
              <img
                src="/profile-photo.png"
                alt="Sai Kiran"
                className="w-[240px] h-auto max-h-[260px] rounded-2xl shadow-lg object-cover"
              />
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white shadow-md rounded-lg px-4 py-2 flex gap-5">
                <a
                  href="https://linkedin.com/in/sai-kiran-beeram-866075190"
                  target="_blank"
                  className="text-purple-600 hover:scale-110 transition"
                >
                  <FaLinkedinIn size={18} />
                </a>
                {/* <a
                  href="https://www.dice.com/profile/your-profile"
                  target="_blank"
                  className="text-purple-600 hover:scale-110 transition"
                >
                  <FaGlobe size={18} />
                </a> */}
                <a
                  href="https://github.com/saikiran0405"
                  target="_blank"
                  className="text-purple-600 hover:scale-110 transition"
                >
                  <FaGithub size={18} />
                </a>
              </div>
            </div>

            <div>
              {/* <h3 className="text-xl font-semibold">
                I am a Full Stack Developer
              </h3> */}

              <p className="mt-4 text-gray-600">
                I completed my Master’s in Software Engineering from Saint Louis
                University, where I explored Machine Learning, Artificial
                Intelligence, and LLMs alongside software design and
                development.
              </p>
              <p className="mt-4 text-gray-600">
                I take ownership of my work and enjoy figuring things out,
                trying new approaches, and keeping up with how technology is
                evolving.
              </p>

              {/* <div className="mt-6 flex gap-4">
                <button className="bg-purple-500 text-white px-4 py-2 rounded-md">
                  My Projects
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
