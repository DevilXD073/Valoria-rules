export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050816] text-white">
      <div className="text-center">
        <h1 className="text-7xl font-black">404</h1>

        <p className="mt-4 text-slate-400">
          This page doesn't exist.
        </p>

        <a
          href="/"
          className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3"
        >
          Back Home
        </a>
      </div>
    </main>
  );
}
