"use client";
import Link from 'next/link';
import type { Route } from 'next';
import { usePathname } from 'next/navigation';
import { BarChart3, Home, PlusCircle, User, LogOut, Folder } from 'lucide-react';
import { useAuth } from '@/components/Providers';
import clsx from 'clsx';

const links = [
  { href: '/app', label: 'Accueil', Icon: Home },
  { href: '/app/projects', label: 'Mes projets', Icon: Folder },
  { href: '/app/new', label: 'Nouveau calcul', Icon: PlusCircle },
  { href: '/app/profile', label: 'Profil', Icon: User },
] satisfies Array<{ href: Route; label: string; Icon: typeof Home }>;

export function AppSidebar() {
  const pathname = usePathname();
  const { signOut } = useAuth();
  return (
    <aside className="card p-4 h-max sticky top-24">
      <nav className="space-y-1">
        {links.map(({href,label,Icon}) => (
          <Link key={href} href={href} className={clsx('flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800', pathname===href && 'bg-gray-100 dark:bg-gray-800 font-medium')}>
            <Icon className="h-4 w-4" /> {label}
          </Link>
        ))}
      </nav>
      <button onClick={signOut} className="mt-4 w-full btn">Déconnexion</button>
    </aside>
  );
}
