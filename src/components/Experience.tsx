// export default function Experience() {
//   return (
//     <section id="experience" className="relative bg-gray-100 pt-20">
//       <div className="mx-auto px-6">

//         <h2 className="text-3xl font-semibold mb-10">
//           Work Experience
//         </h2>

//         <div className="space-y-6">

//           <div className="bg-white p-6 rounded-xl shadow-sm">
//             <h3 className="font-semibold">Banner Health</h3>
//             <p className="text-gray-600 mt-2">
//               Built scalable healthcare platform handling 50K+ users.
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow-sm">
//             <h3 className="font-semibold">JPMC</h3>
//             <p className="text-gray-600 mt-2">
//               Developed fraud processing system using Kafka.
//             </p>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

import { Card, CardContent } from "@/components/ui/card";
import { FaHospital, FaUniversity, FaChartLine } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      company: "Banner Health",
      role: "Full Stack Developer",
      duration: "2024 - Present",
      desc: "Built healthcare platform for 50K+ patients with real-time scheduling and AI workflows.",
      icon: <FaHospital />,
    },
    {
      company: "JPMC",
      role: "Full Stack Developer",
      duration: "2021 - 2022",
      desc: "Developed fraud processing system using Kafka and microservices improving throughput.",
      icon: <FaUniversity />,
    },
    {
      company: "Principal Financial Group",
      role: "Software Engineer",
      duration: "2018 - 2021",
      desc: "Built financial analytics platform with scalable backend and real-time dashboards.",
      icon: <FaChartLine />,
    },
  ];

  return (
    <section id="experience" className="bg-gray-100 py-24">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-16">
          Work Experience
        </h2>

        <div className="relative flex flex-col gap-12">

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* CONNECTOR LINE */}
              <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-300 hidden md:block"></div>

              {/* CARD */}
              <Card className="w-full md:w-[45%] backdrop-blur-xl bg-white/70 border border-gray-200 shadow-lg hover:shadow-2xl transition duration-300 rounded-2xl">
                <CardContent className="p-6">

                  {/* ICON */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600 mb-4">
                    {exp.icon}
                  </div>

                  {/* TEXT */}
                  <h3 className="text-lg font-semibold">
                    {exp.company}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {exp.role} • {exp.duration}
                  </p>

                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                    {exp.desc}
                  </p>

                </CardContent>
              </Card>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}