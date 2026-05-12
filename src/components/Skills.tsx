import { Button } from "./ui/button";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 py-20 pb-60"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center">
          Skills & Technologies
        </h2>

        <div className="mt-8 space-y-8">
          {/* FRONTEND */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Frontend</h3>
            <div className="flex flex-wrap gap-10 items-center">
              <i
                className="devicon-react-original colored text-4xl hover:scale-110 transition"
                title="React"
              ></i>
              <i
                className="devicon-angularjs-plain colored text-4xl hover:scale-110 transition"
                title="Angular"
              ></i>
              <i
                className="devicon-typescript-plain colored text-4xl hover:scale-110 transition"
                title="TypeScript"
              ></i>
              <i
                className="devicon-javascript-plain colored text-4xl hover:scale-110 transition"
                title="JavaScript"
              ></i>
              <i
                className="devicon-html5-plain colored text-4xl hover:scale-110 transition"
                title="HTML5"
              ></i>
              <i
                className="devicon-css3-plain colored text-4xl hover:scale-110 transition"
                title="CSS3"
              ></i>
              <i
                className="devicon-redux-original colored text-4xl hover:scale-110 transition"
                title="Redux"
              ></i>
              <i
                className="devicon-rxjs-plain colored text-4xl hover:scale-110 transition"
                title="RxJS"
              ></i>
              {/* <i className="devicon-ngrx-original colored text-5xl" title="NgRx"></i> */}
              {/* <img
                src="https://ngrx.io/assets/images/badge.svg"
                alt="NgRx"
                title="NgRx"
                className="w-12 h-12 hover:scale-110 transition"
              /> */}
              <i
                className="devicon-figma-plain colored text-4xl hover:scale-110 transition"
                title="Figma"
              ></i>
            </div>
          </div>

          {/* BACKEND */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Backend</h3>
            <div className="flex flex-wrap gap-10 items-center">
              <i
                className="devicon-java-plain colored text-4xl hover:scale-110 transition"
                title="Java"
              ></i>
              <i
                className="devicon-spring-plain colored text-4xl hover:scale-110 transition"
                title="Spring Boot"
              ></i>
              <i
                className="devicon-python-plain colored text-4xl hover:scale-110 transition"
                title="Python"
              ></i>
              <i
                className="devicon-csharp-plain colored text-4xl hover:scale-110 transition"
                title="C#"
              ></i>
              <i
                className="devicon-apachekafka-original colored text-4xl hover:scale-110 transition"
                title="Kafka"
              ></i>
            </div>
          </div>

          {/* CLOUD */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Cloud & DevOps</h3>
            <div className="flex flex-wrap gap-10 items-center">
              <i
                className="devicon-azure-plain colored text-4xl hover:scale-110 transition"
                title="Azure"
              ></i>
              {/* <i className="devicon-amazonwebservices-original colored text-5xl hover:scale-110 transition" title="AWS"></i> */}
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                alt="AWS"
                title="AWS"
                className="h-14 hover:scale-110 transition"
              />
              <i
                className="devicon-docker-plain colored text-4xl hover:scale-110 transition"
                title="Docker"
              ></i>
              <i
                className="devicon-kubernetes-plain colored text-4xl hover:scale-110 transition"
                title="Kubernetes"
              ></i>
              {/* <i className="devicon-openshift-plain colored text-5xl hover:scale-110 transition" title="OpenShift"></i> */}
              {/* <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openshift/openshift-original.svg"
                alt="OpenShift"
                title="OpenShift"
                className="w-12 h-12 hover:scale-110 transition"
              /> */}
              <i
                className="devicon-jenkins-plain colored text-4xl hover:scale-110 transition"
                title="Jenkins"
              ></i>
              <i
                className="devicon-git-plain colored text-4xl hover:scale-110 transition"
                title="Git"
              ></i>
            </div>
          </div>

          {/* DATABASES */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Databases</h3>
            <div className="flex flex-wrap gap-10 items-center">
              <i
                className="devicon-postgresql-plain colored text-4xl hover:scale-110 transition"
                title="PostgreSQL"
              ></i>
              <i
                className="devicon-mongodb-plain colored text-4xl hover:scale-110 transition"
                title="MongoDB"
              ></i>
              <i
                className="devicon-oracle-original colored text-5xl hover:scale-110 transition"
                title="Oracle"
              ></i>
              <i
                className="devicon-microsoftsqlserver-plain colored text-4xl hover:scale-110 transition"
                title="MS SQL Server"
              ></i>
              <i
                className="devicon-mysql-plain colored text-4xl hover:scale-110 transition"
                title="MySQL"
              ></i>
            </div>
          </div>

          {/* AI */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              AI & Intelligent Systems
            </h3>
            <div className="flex flex-wrap gap-10 items-center text-4xl">
              <span title="Machine Learning">📊</span>
              <span title="Spring AI">🧠</span>
              <span title="Claude API">🤖</span>
              <span title="Gemini API">✨</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-0 right-0 -bottom-50 z-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-12 flex flex-col gap-4">
            <div>
              <h3 className="text-2xl font-semibold text-center">
                Open Source Collaboration
              </h3>
              <p className="mt-6 text-gray-600">
                I actively contributed to an open-source project focused on
                building a material donor mutual assist platform. The goal of
                this system was to help organizations efficiently manage and
                track donated resources like bicycles, computers, computer
                parts, and monetary donations, ensuring transparency and real
                impact.
              </p>

              <p className="mt-4 text-gray-600">
                I worked on developing and improving features that allowed
                admins to manage inventory, monitor donations, and track the
                full lifecycle of each donated item. A key part of the
                experience was enabling donors to see how their contributions
                were being used, creating a stronger connection between donors
                and beneficiaries. I did quick iterations, delivered
                improvements fast, and focused on delivering real value to
                users.
              </p>
            </div>

            <div className="flex justify-center gap-4 flex-wrap">
              <Button
                variant="purple"
                size="lg"
                className="text-xs"
                onClick={() =>
                  window.open(
                    "https://github.com/oss-slu/material-derailleur/commits/main/?author=SaiKiran0407",
                  )
                }
              >
                View GitHub Contributions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
