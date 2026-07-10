import { Link } from 'react-router-dom'

function Memory() {
  return (
    <section className="flex min-h-svh flex-col place-content-center place-items-center bg-black text-gray-100">
      <h1 className="text-5xl font-medium tracking-tight">Memory</h1>
      <p className="mt-4 text-gray-400">Placeholder page for Memory. Content coming soon.</p>
      <Link to="/" className="mt-6 rounded-md border border-gray-700 px-4 py-2 hover:bg-gray-900">
        Home
      </Link>
    </section>
  )
}

export default Memory
