import { Link } from 'react-router-dom'

function Scan() {
  return (
    <section className="flex min-h-svh flex-col place-content-center place-items-center bg-black text-gray-100">
      <h1 className="text-5xl font-medium tracking-tight">Scan</h1>
      <p className="mt-4 text-gray-400">Placeholder page for Scan. Content coming soon.</p>
      <p className="mt-2 max-w-md text-center text-gray-500">
        This page will let you scan and analyze items in real time.
      </p>
      <p className="mt-2 max-w-md text-center text-gray-500">
        Check back soon for updates as this feature is built out.
      </p>
      <Link to="/" className="mt-6 rounded-md border border-gray-700 px-4 py-2 hover:bg-gray-900">
        Home
      </Link>
    </section>
  )
}

export default Scan
