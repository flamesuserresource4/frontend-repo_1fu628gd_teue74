export default function Hire() {
  return (
    <section id="hire" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Hire FreeDAIY experts</h2>
              <p className="mt-3 text-gray-600">We design, automate and deploy AI systems that plug into your stack. Fixed‑scope packages and bespoke builds available.</p>
              <ul className="mt-6 space-y-2 text-gray-700 list-disc list-inside">
                <li>Discovery & architecture workshop</li>
                <li>Proof‑of‑concept in 1–2 weeks</li>
                <li>Production roll‑out with observability</li>
              </ul>
            </div>
            <div>
              <a href="#downloads" className="inline-flex items-center justify-center rounded-lg bg-black text-white px-6 py-3 font-medium hover:bg-gray-900 transition">Start with a free asset</a>
              <a href="mailto:hello@freedaiy.com" className="ml-3 inline-flex items-center justify-center rounded-lg bg-white text-gray-900 px-6 py-3 font-medium shadow border border-black/10 hover:bg-gray-50 transition">Book a call</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
