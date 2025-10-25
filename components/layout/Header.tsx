"use client";
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useAuth } from '@/components/Providers';
import { Sun, Moon, Leaf } from 'lucide-react';

export function Header() {
  const { theme, setTheme } = useTheme();
  const { user, signOut } = useAuth();
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-gray-900/60 border-b border-gray-200 dark:border-gray-800">
      <div className="container-max h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary-600" />
          <span className="font-bold">Green Energy</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link className="nav-link" href="/">Accueil</Link>
          <Link className="nav-link" href="/about">À propos</Link>
          <Link className="nav-link" href="/contact">Contact</Link>
          <Link className="nav-link" href="/legal">Mentions légales</Link>
        </nav>
        <div className="flex items-center gap-3">
          <button aria-label="Theme" className="btn btn-ghost rounded-full" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <Sun className="h-5 w-5"/> : <Moon className="h-5 w-5"/>}
          </button>
          {user ? (
            <div className="flex items-center gap-3">
              <Link href="/app" className="btn btn-ghost">Tableau de bord</Link>
              <button className="btn btn-primary" onClick={signOut}>Déconnexion</button>
            </div>
          ) : (
            <Link href="/auth" className="btn btn-primary">Connexion</Link>
          )}
        </div>
      </div>
    </header>
  );
}
