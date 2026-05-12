import { Badge } from "@/components/ui/badge";

export default function Experience() {
  const experiences = [
    {
      company: "Banner Health",
      role: "Full Stack Developer",
      duration: "2024 - Present",
      desc: "Built healthcare platform for patients and providers with real-time appointment scheduling and AI workflows.",
      logo: "/logos/banner_health.jpg",
    },
    {
      company: "JPMC",
      role: "Full Stack Developer",
      duration: "2021 - 2022",
      desc: "Worked on a fraud and claims platform that streamlined dispute handling, helping teams resolve customer issues faster and more efficiently.",
      logo: "/logos/jpmc.jpeg",
    },
    {
      company: "Principal Financial Group",
      role: "Software Engineer",
      duration: "2018 - 2021",
      desc: "Contributed to a financial platform that provided users with insights into their investments, track and manage their financial goals.",
      logo: "/logos/principal.jpeg",
    },
  ];

  return (
    <section id="experience" className="bg-gray-100 py-20 pt-36">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl text-center font-bold mb-8">
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