import Hero from './components/Hero'
import FocusAreas from './components/FocusAreas'
import Downloads from './components/Downloads'
import Products from './components/Products'
import Hire from './components/Hire'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-black/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="font-extrabold tracking-tight text-xl">FreeDAIY</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-700">
            <a href="#downloads" className="hover:text-gray-900">Downloads</a>
            <a href="#hire" className="hover:text-gray-900">Hire</a>
            <a href="/test" className="hover:text-gray-900">Status</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <FocusAreas />
        <Downloads />
        <Products />
        <Hire />
      </main>

      <footer className="py-10 border-t border-black/10 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} FreeDAIY — AI & Automations Agency</p>
      </footer>
    </div>
  )
}

export default App
