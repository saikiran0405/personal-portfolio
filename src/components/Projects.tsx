export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">
      
      <div className="bg-white/5 p-6 rounded-xl border border-white/10">
        <h3 className="text-lg font-semibold">Healthcare Portal</h3>
        <p className="text-zinc-400 mt-2">
          Scalable appointment system supporting 50K+ users with optimized
          Elasticsearch search and microservices architecture.
        </p>
      </div>

      <div className="bg-white/5 p-6 rounded-xl border border-white/10">
        <h3 className="text-lg font-semibold">Fraud Detection Platform</h3>
        <p className="text-zinc-400 mt-2">
          Event-driven claims processing system using Kafka, improving
          efficiency and reducing manual workload significantly.
        </p>
      </div>

      <div className="bg-white/5 p-6 rounded-xl border border-white/10">
        <h3 className="text-lg font-semibold">Financial Wellness App</h3>
        <p className="text-zinc-400 mt-2">
          Investment and retirement planning platform with real-time data
          insights and optimized performance.
        </p>
      </div>

    </div>
  );
}