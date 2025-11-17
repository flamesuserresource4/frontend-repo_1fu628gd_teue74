import { useEffect, useState } from 'react'

export default function Downloads() {
  const [email, setEmail] = useState('')
  const [interest, setInterest] = useState('n8n')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, interest, message, source: 'download', asset: interest })
      })
      const data = await res.json()
      if (res.ok) setStatus('✅ Check your inbox for the download link!')
      else setStatus(`❌ ${data.detail || 'Something went wrong'}`)
    } catch (err) {
      setStatus(`❌ ${err.message}`)
    }
  }

  return (
    <section id="downloads" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Free downloads</h2>
            <p className="mt-3 text-gray-600">Get starter workflows, prompts and templates for n8n, Make.com and self‑hosted AI. We’ll email you the link.</p>
            <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside">
              <li>n8n: Notion to Slack daily summary</li>
              <li>Make.com: Lead enrichment pipeline</li>
              <li>Self‑hosted AI: RAG boilerplate guide</li>
            </ul>
          </div>
          <form onSubmit={submit} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} required type="email" placeholder="you@company.com" className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />

            <label className="mt-4 block text-sm font-medium text-gray-700">Interest</label>
            <select value={interest} onChange={(e)=>setInterest(e.target.value)} className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black">
              <option value="n8n">n8n Workflows</option>
              <option value="make">Make.com Scenarios</option>
              <option value="voice">Voice Interfaces</option>
              <option value="infra">Self‑Hosted AI</option>
            </select>

            <label className="mt-4 block text-sm font-medium text-gray-700">Message (optional)</label>
            <textarea value={message} onChange={(e)=>setMessage(e.target.value)} rows={3} placeholder="What are you building?" className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"></textarea>

            <button type="submit" className="mt-4 w-full rounded-lg bg-black text-white py-3 font-medium hover:bg-gray-900 transition">Send download</button>
            {status && <p className="mt-3 text-sm text-gray-700">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
