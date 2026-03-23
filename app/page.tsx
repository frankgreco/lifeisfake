export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        Life is Fake
      </h1>
      <footer className="absolute bottom-8 flex gap-4 text-sm text-gray-400">
        <a href="/legal/terms" className="hover:text-gray-600">Terms</a>
        <span>&middot;</span>
        <a href="/legal/privacy" className="hover:text-gray-600">Privacy</a>
      </footer>
    </div>
  );
}
