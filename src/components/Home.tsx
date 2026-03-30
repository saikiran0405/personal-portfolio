// export default function Home() {
//   return (
//     <section id="home" className="relative bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 py-24">

//       <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

//         {/* LEFT */}
//         <div>
//           <h1 className="text-5xl font-bold">
//             Hi, I’m Sai Kiran
//           </h1>

//           <p className="mt-6 text-gray-600">
//             Phoenix-based Full Stack Developer building scalable systems.
//           </p>

//           <button className="mt-6 bg-purple-500 text-white px-6 py-3 rounded-md">
//             Say Hello
//           </button>
//         </div>

//         {/* RIGHT */}
//         <div className="flex justify-center">
//           <div className="w-[300px] h-[350px] bg-white rounded-2xl shadow-md flex items-center justify-center">
//             Your Image
//           </div>
//         </div>

//       </div>

//       {/* 🔥 FLOATING CARD INSIDE SAME SECTION */}
//       <div className="relative mt-20">
//         <div className="max-w-5xl mx-auto px-6">

//           <div className="bg-white rounded-2xl shadow-xl p-8 grid md:grid-cols-2 gap-8">

//             {/* IMAGE */}
//             <div className="flex justify-center">
//               <div className="w-[200px] h-[240px] bg-gray-100 rounded-xl flex items-center justify-center">
//                 Photo
//               </div>
//             </div>

//             {/* TEXT */}
//             <div>
//               <h3 className="text-xl font-semibold">
//                 I am a Full Stack Developer
//               </h3>

//               <p className="mt-4 text-gray-600 leading-relaxed">
//                 Passionate about building scalable microservices and deploying
//                 applications using Kubernetes, AWS, and Azure.
//               </p>

//               <p className="mt-4 text-gray-600">
//                 Experienced in React, Spring Boot, Kafka, and cloud-native systems.
//               </p>

//               <div className="mt-6 flex gap-4">
//                 <button className="bg-purple-500 text-white px-4 py-2 rounded-md">
//                   My Projects
//                 </button>
//                 <button className="border px-4 py-2 rounded-md">
//                   Download CV
//                 </button>
//               </div>
//             </div>

//           </div>

//         </div>
//       </div>

//     </section>
//   );
// }

export default function Home() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 pt-24 pb-80"
    >
      {/* HERO CONTENT */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-5xl font-bold">
            Hi, I’m Sai Kiran
          </h1>

          <p className="mt-6 text-gray-600">
            Phoenix-based Full Stack Developer building scalable systems.
          </p>

          <button className="mt-6 bg-purple-500 text-white px-6 py-3 rounded-md">
            Say Hello
          </button>
        </div>

        <div className="flex justify-center">
  <img
    src="/profile-photo.png"
    alt="Sai Kiran"
    className="w-[280px] md:w-[320px] h-auto rounded-2xl shadow-lg object-cover"
  />
</div>

      </div>

      {/* 🔥 FLOATING CARD (REAL OVERFLOW) */}
      <div className="absolute left-0 right-0 -bottom-50 z-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="bg-white rounded-2xl shadow-xl p-8 grid md:grid-cols-2 gap-8">

            <div className="flex justify-center">
              <div className="w-[200px] h-[240px] bg-gray-100 rounded-xl flex items-center justify-center">
                Photo
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                I am a Full Stack Developer
              </h3>

              <p className="mt-4 text-gray-600">
                Passionate about building scalable microservices and deploying
                applications using Kubernetes, AWS, and Azure.
              </p>

              <p className="mt-4 text-gray-600">
                Experienced in React, Spring Boot, Kafka, and cloud-native systems.
              </p>

              <div className="mt-6 flex gap-4">
                <button className="bg-purple-500 text-white px-4 py-2 rounded-md">
                  My Projects
                </button>
                <button className="border px-4 py-2 rounded-md">
                  Download CV
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}