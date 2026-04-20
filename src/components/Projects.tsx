import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "Revive Gallery Marketplace",
      image: "/marketplace.jpg",
      desc: "Secure marketplace with trust scoring, reviews, and chat-based buying/selling system.",
      links: [{ label: "GitHub", url: "https://github.com/SriHarikaV/Revive_Gallery/commits/main/?author=SaiKiran0407" }],
    },
    {
      title: "SAMS",
      image: "/attendance.png",
      desc: "Smart Attendance Management System using facial recognition and webcam with admin and student dashboards.",
      links: [{ label: "GitHub", url: "https://github.com/Anjali0407-git/SAMS-facial-recognition" }],
    },
    {
      title: "Public Speaking Practice App",
      image: "/speech.png",
      desc: "Web-based platform for practicing public speaking with real-time speech and body language feedback.",
      links: [{ label: "GitHub", url: "https://github.com/Anjali0407-git/public_speaking_app" }, { label: "Demo", url: "https://drive.google.com/file/d/17Xe7-5CWcfmo-cxSsaf8vqJN7xqrTQ_R/view" }, { label: "Paper", url: "https://github.com/Anjali0407-git/public_speaking_app/blob/stable/Public_Speaking_Practice_using_VR.pdf" }],
    },
    {
      title: "Predicting Smoking & Drinking Habits",
      image: "/ml.png",
      desc: "ML project analyzing behavioral patterns using clustering, classification, and visualization techniques.",
      links: [{ label: "Report", url: "https://drive.google.com/file/d/1EcPRb3upkfj6UGA5D5FYhMa_BmdQY6Mf/view" }],
    },
    {
      title: "Weather Monitoring Safety System",
      image: "/drone_red.jpg",
      desc: "C++ system that processes sensor and weather data to support UAV and emergency systems.",
    },  
  ];

  return (
    <section id="projects" className="bg-gray-100 py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-12">
          Projects
        </h2>

        {/* FLEX LAYOUT */}
        <div className="grid grid-cols-3 gap-6">

          {projects.map((project, index) => (
            <Card key={index} className="min-h-[360px] min-w-[250px] bg-white border-b-gray-50 shadow-sm rounded-xl overflow-hidden flex flex-col hover:shadow-md transition !py-0 !gap-0">

                {/* IMAGE */}
                <div className="h-[180px] w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-fill hover:scale-105 transition duration-300"
                  />
                </div>

                {/* CONTENT */}
                <CardContent className="flex flex-col justify-between flex-1 p-3">

                  {/* TEXT */}
                  <div>
                    <h3 className="text-lg font-semibold">
                      {project.title}
                    </h3>

                    <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                      {project.desc}
                    </p>
                  </div>

                  {/* LINKS */}
                  {project.links && project.links.length > 0 && (
                    <div className="flex gap-2 mt-4 flex-wrap">
                      {project.links.map((link, i) => (
                        <Button
                          key={i}
                          variant="purple-outline"
                          size="sm"
                          className="text-xs"
                          onClick={() => window.open(link.url)}
                        >
                          {link.label}
                        </Button>
                      ))}
                    </div>
                  )}

                </CardContent>
              </Card>
          ))}

        </div>
      </div>
    </section>
  );
}