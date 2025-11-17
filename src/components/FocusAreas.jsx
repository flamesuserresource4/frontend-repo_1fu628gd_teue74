import { Sparkles, Mic, ServerCog, Workflow } from 'lucide-react'

export default function FocusAreas() {
  const areas = [
    {
      icon: Mic,
      title: 'Voice & Hands‑Free',
      desc: 'Voice UIs, voice agents, phone bots and ambient assistants for productivity.'
    },
    {
      icon: ServerCog,
      title: 'Self‑Hosted AI',
      desc: 'Private infrastructure, model orchestration, data governance, and compliance.'
    },
    {
      icon: Workflow,
      title: 'Automations',
      desc: 'n8n and Make.com workflows that connect your tools and ship outcomes fast.'
    },
    {
      icon: Sparkles,
      title: 'AI Applications',
      desc: 'Strategy, prototyping and production apps that create value with AI.'
    },
  ]

  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">What we focus on</h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">From idea to production, we build end‑to‑end solutions tailored to your workflow.</p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((a, i) => (
            <div key={i} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition">
              <a.icon className="h-6 w-6 text-gray-900" />
              <h3 className="mt-4 font-semibold text-gray-900">{a.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
