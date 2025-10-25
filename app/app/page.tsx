"use client";
import Link from 'next/link';
import { useAuth } from '@/components/Providers';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ChartsOverview } from '@/components/visuals/ChartsOverview';

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();
  useEffect(()=>{ if(!user) router.push('/auth'); },[user,router]);
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Tableau de bord</h1>
        <Link href="/app/new" className="btn btn-primary">+ Nouvelle note de calcul</Link>
      </div>
      <ChartsOverview />
      <div className="card p-4">
        <div className="font-semibold">Mes projets récents</div>
        <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
          <li>Projet On-grid – Alger</li>
          <li>Pompage solaire – Oran</li>
        </ul>
      </div>
    </div>
  );
}
