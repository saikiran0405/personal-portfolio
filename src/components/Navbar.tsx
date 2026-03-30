export default function Navbar() {
  return (
    <div className="w-full border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-purple-500 text-white flex items-center justify-center font-semibold">
            S
          </div>
          <span className="font-semibold text-lg">Sai Kiran</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <button className="hover:text-black"><a href="#home">Home</a></button>
          <button className="hover:text-black"><a href="#experience">Experience</a></button>
          <button className="hover:text-black"><a href="#skills">Skills</a></button>
          <button className="hover:text-black"><a href="#projects">Open Source work</a></button>
          <button className="hover:text-black"><a href="#projects">Projects</a></button>
          <button className="hover:text-black"><a href="#certifications">Certifications</a></button>
          <button className="hover:text-black">Contact</button>
        </div>

        {/* CTA */}
        <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md text-sm transition">
          Contact
        </button>

      </div>
    </div>
  );
}