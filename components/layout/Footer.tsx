import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-gray-800">
      <div className="container-max py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="font-semibold">Green Energy</div>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Énergie verte, fiabilité, durabilité.</p>
        </div>
        <div>
          <div className="font-semibold">Navigation</div>
          <div className="mt-2 flex flex-col gap-1">
            <Link href="/about" className="hover:underline">À propos</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/legal" className="hover:underline">Mentions légales</Link>
          </div>
        </div>
        <div>
          <div className="font-semibold">Réseaux</div>
          <div className="mt-2 flex gap-3 text-gray-600 dark:text-gray-400">
            <a href="#" className="hover:text-primary-600">Twitter</a>
            <a href="#" className="hover:text-primary-600">LinkedIn</a>
            <a href="#" className="hover:text-primary-600">GitHub</a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 py-4">© {new Date().getFullYear()} Green Energy</div>
    </footer>
  );
}
