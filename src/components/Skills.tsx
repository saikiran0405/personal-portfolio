export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center">
          Skills & Technologies
        </h2>

        <div className="mt-8 space-y-8">

          {/* FRONTEND */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Frontend</h3>
            <div className="flex flex-wrap gap-10 items-center">
              <i className="devicon-react-original colored text-5xl hover:scale-110 transition" title="React"></i>
              <i className="devicon-angularjs-plain colored text-5xl hover:scale-110 transition" title="Angular"></i>
              <i className="devicon-typescript-plain colored text-5xl hover:scale-110 transition" title="TypeScript"></i>
              <i className="devicon-javascript-plain colored text-5xl hover:scale-110 transition" title="JavaScript"></i>
              <i className="devicon-html5-plain colored text-5xl hover:scale-110 transition" title="HTML5"></i>
              <i className="devicon-css3-plain colored text-5xl hover:scale-110 transition" title="CSS3"></i>
              <i className="devicon-redux-original colored text-5xl hover:scale-110 transition" title="Redux"></i>
              <i className="devicon-rxjs-plain colored text-5xl hover:scale-110 transition" title="RxJS"></i>
              {/* <i className="devicon-ngrx-original colored text-5xl" title="NgRx"></i> */}
              {/* <img
                src="https://ngrx.io/assets/images/badge.svg"
                alt="NgRx"
                title="NgRx"
                className="w-12 h-12 hover:scale-110 transition"
              /> */}
              <i className="devicon-figma-plain colored text-5xl hover:scale-110 transition" title="Figma"></i>
            </div>
          </div>

          {/* BACKEND */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Backend</h3>
            <div className="flex flex-wrap gap-10 items-center">
              <i className="devicon-java-plain colored text-5xl hover:scale-110 transition" title="Java"></i>
              <i className="devicon-spring-plain colored text-5xl hover:scale-110 transition" title="Spring Boot"></i>
              <i className="devicon-python-plain colored text-5xl hover:scale-110 transition" title="Python"></i>
              <i className="devicon-csharp-plain colored text-5xl hover:scale-110 transition" title="C#"></i>
              <i className="devicon-apachekafka-original colored text-5xl hover:scale-110 transition" title="Kafka"></i>
            </div>
          </div>

          {/* CLOUD */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Cloud & DevOps</h3>
            <div className="flex flex-wrap gap-10 items-center">
              <i className="devicon-azure-plain colored text-4xl hover:scale-110 transition" title="Azure"></i>
              {/* <i className="devicon-amazonwebservices-original colored text-5xl hover:scale-110 transition" title="AWS"></i> */}
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                alt="AWS"
                title="AWS"
                className="h-14 hover:scale-110 transition"
              />
              <i className="devicon-docker-plain colored text-5xl hover:scale-110 transition" title="Docker"></i>
              <i className="devicon-kubernetes-plain colored text-5xl hover:scale-110 transition" title="Kubernetes"></i>
              {/* <i className="devicon-openshift-plain colored text-5xl hover:scale-110 transition" title="OpenShift"></i> */}
              {/* <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openshift/openshift-original.svg"
                alt="OpenShift"
                title="OpenShift"
                className="w-12 h-12 hover:scale-110 transition"
              /> */}
              <i className="devicon-jenkins-plain colored text-5xl hover:scale-110 transition" title="Jenkins"></i>
              <i className="devicon-git-plain colored text-5xl hover:scale-110 transition" title="Git"></i>
            </div>
          </div>

          {/* DATABASES */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Databases</h3>
            <div className="flex flex-wrap gap-10 items-center">
              <i className="devicon-postgresql-plain colored text-5xl hover:scale-110 transition" title="PostgreSQL"></i>
              <i className="devicon-mongodb-plain colored text-5xl hover:scale-110 transition" title="MongoDB"></i>
              <i className="devicon-oracle-original colored text-6xl hover:scale-110 transition" title="Oracle"></i>
              <i className="devicon-microsoftsqlserver-plain colored text-5xl hover:scale-110 transition" title="MS SQL Server"></i>
              <i className="devicon-mysql-plain colored text-5xl hover:scale-110 transition" title="MySQL"></i>
            </div>
          </div>

          {/* AI */}
          <div>
            <h3 className="text-xl font-semibold mb-6">AI & Intelligent Systems</h3>
            <div className="flex flex-wrap gap-10 items-center text-4xl">
              <span title="Machine Learning">📊</span>
              <span title="Spring AI">🧠</span>
              <span title="Claude API">🤖</span>
              <span title="Gemini API">✨</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}