import { useEffect, useState } from 'react'

export default function Products() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/products`)
        const data = await res.json()
        setItems(data.items || [])
      } catch (e) {
        setItems([])
      }
    }
    load()
  }, [])

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Digital products</h2>
        <p className="mt-3 text-gray-600">Ready‑to‑use workflows and templates. Import, tweak, ship.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.length === 0 && (
            <div className="col-span-full text-gray-600">No products yet. Check back soon.</div>
          )}
          {items.map((p) => (
            <div key={p._id} className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm hover:shadow-md transition">
              {p.thumbnail && <img src={p.thumbnail} alt={p.title} className="w-full h-40 object-cover rounded-lg" />}
              <h3 className="mt-4 font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600 line-clamp-3">{p.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-gray-900 font-medium">{p.price > 0 ? `$${p.price}` : 'Free'}</span>
                {p.download_url && (
                  <a href={p.download_url} className="text-sm underline hover:no-underline">Download</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
