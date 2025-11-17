import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/90 pointer-events-none" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 backdrop-blur px-3 py-1 text-sm text-gray-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            Building AI apps, automations and private infra
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            FreeDAIY — AI and Automations Agency
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-700">
            Specialising in voice interfaces and hands‑free productivity, self‑hosted AI and private infrastructure, n8n and Make.com automations, AI applications and consulting.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#downloads" className="inline-flex items-center justify-center rounded-lg bg-black text-white px-5 py-3 font-medium hover:bg-gray-900 transition">Free downloads</a>
            <a href="#hire" className="inline-flex items-center justify-center rounded-lg bg-white text-gray-900 px-5 py-3 font-medium shadow border border-black/10 hover:bg-gray-50 transition">Hire experts</a>
          </div>
        </div>
      </div>
    </section>
  )
}
