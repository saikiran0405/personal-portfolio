// import { Badge } from "@/components/ui/badge";

// export default function Experience() {
//   const experiences = [
//     {
//       company: "Banner Health",
//       role: "Full Stack Developer",
//       duration: "2024 - Present",
//       desc: "Built healthcare platform for 50K+ patients with real-time scheduling and AI workflows.",
//       logo: "/logos/banner_health.jpg",
//     },
//     {
//       company: "JPMC",
//       role: "Full Stack Developer",
//       duration: "2021 - 2022",
//       desc: "Developed fraud processing system using Kafka and microservices improving throughput.",
//       logo: "/logos/jpmc.jpeg",
//     },
//     {
//       company: "Principal Financial Group",
//       role: "Software Engineer",
//       duration: "2018 - 2021",
//       desc: "Built financial analytics platform with scalable backend and real-time dashboards.",
//       logo: "/logos/principal.jpeg",
//     },
//   ];

//   return (
//     <section id="experience" className="bg-gray-100 py-24">
//       <div className="max-w-6xl mx-auto px-6">

//         <h2 className="text-3xl font-bold mb-12">
//           Work Experience
//         </h2>

//         <div className="flex flex-col gap-10">

//           {experiences.map((exp, index) => (
//             <div key={index} className="flex items-stretch">

//               {/* LOGO BOX (SQUARE) */}
//               <div className="w-[80px] h-[80px] bg-white border border-gray-300 shadow-sm flex items-center justify-center rounded-l-xl">
//                 <img
//                   src={exp.logo}
//                   alt={exp.company}
//                   className="w-10 h-10 object-contain"
//                 />
//               </div>

//               {/* CONTENT BOX (ATTACHED) */}
//               <div className="flex-1 bg-white border border-gray-300 border-l-0 shadow-sm rounded-r-xl p-6">

//                 <div className="flex flex-wrap items-center gap-2">

//                   <h3 className="text-lg font-semibold">
//                     {exp.company}
//                   </h3>

//                   <Badge variant="secondary" className="text-xs">
//                     {exp.role}
//                   </Badge>

//                   <Badge variant="outline" className="text-xs">
//                     {exp.duration}
//                   </Badge>

//                 </div>

//                 <p className="mt-2 text-gray-600 text-sm leading-relaxed max-w-3xl">
//                   {exp.desc}
//                 </p>

//               </div>

//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }

import { Badge } from "@/components/ui/badge";

export default function Experience() {
  const experiences = [
    {
      company: "Banner Health",
      role: "Full Stack Developer",
      duration: "2024 - Present",
      desc: "Built healthcare platform for 50K+ patients with real-time scheduling and AI workflows.",
      logo: "/logos/banner_health.jpg",
    },
    {
      company: "JPMC",
      role: "Full Stack Developer",
      duration: "2021 - 2022",
      desc: "Developed fraud processing system using Kafka and microservices improving throughput.",
      logo: "/logos/jpmc.jpeg",
    },
    {
      company: "Principal Financial Group",
      role: "Software Engineer",
      duration: "2018 - 2021",
      desc: "Built financial analytics platform with scalable backend and real-time dashboards.",
      logo: "/logos/principal.jpeg",
    },
  ];

  return (
    <section id="experience" className="bg-gray-100 py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-8">
          Work Experience
        </h2>

        <div className="flex flex-col gap-6">

          {experiences.map((exp, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`flex items-stretch ${
                  isReverse ? "flex-row-reverse" : ""
                }`}
              >
                {/* LOGO */}
                <div className="w-[120px] min-w-[120px] h-[120px] bg-white border border-gray-300 shadow-sm flex items-center justify-center">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-full h-full object-fill"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex-1 h-[120px] bg-white border border-gray-300 shadow-sm p-6 flex flex-col justify-center">

                  <div className="flex flex-wrap items-center gap-2">

                    <h3 className="text-lg font-semibold">
                      {exp.role}
                    </h3>

                    {/* <Badge variant="secondary" className="text-xs">
                      {exp.role}
                    </Badge> */}

                    <Badge variant="outline" className="text-xs">
                      {exp.duration}
                    </Badge>

                  </div>

                  <p className="mt-2 text-gray-600 text-sm leading-relaxed max-w-3xl">
                    {exp.desc}
                  </p>

                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}