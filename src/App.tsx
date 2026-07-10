import { Link } from 'react-router-dom'

function App() {
  return (
    <section className="flex min-h-svh flex-col place-content-center place-items-center gap-6 bg-black text-gray-100">
      <h1 className="text-5xl font-medium tracking-tight">broskey</h1>
      <div className="flex gap-4">
        <Link to="/memory" className="rounded-md border border-gray-700 px-4 py-2 hover:bg-gray-900">
          Memory
        </Link>
        <Link to="/scan" className="rounded-md border border-gray-700 px-4 py-2 hover:bg-gray-900">
          Scan
        </Link>
      </div>
    </section>
  )
}

export default App
