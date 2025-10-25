"use client";
import { useState } from 'react';
import Link from 'next/link';

const sample = [
  { id: '1', type: 'On-grid', date: '2025-01-10', location: 'Alger' },
  { id: '2', type: 'Off-grid', date: '2025-03-22', location: 'Oran' },
  { id: '3', type: 'Pompage', date: '2025-04-05', location: 'Constantine' },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('');
  const filtered = sample.filter(p => !filter || p.type.includes(filter));
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Mes projets</h1>
        <Link href="/app/new" className="btn btn-primary">+ Nouvelle note</Link>
      </div>
      <div className="card p-4">
        <div className="flex gap-2 mb-4">
          <select className="input max-w-xs" value={filter} onChange={(e)=>setFilter(e.target.value)}>
            <option value="">Tous types</option>
            <option>On-grid</option>
            <option>Off-grid</option>
            <option>Pompage</option>
          </select>
          <input className="input max-w-xs" placeholder="Lieu" />
          <input className="input max-w-xs" type="date" />
        </div>
        <table className="w-full text-sm">
          <thead className="text-left">
            <tr><th className="py-2">Type</th><th>Date</th><th>Lieu</th><th></th></tr>
          </thead>
          <tbody>
            {filtered.map(p => (
              <tr key={p.id} className="border-t border-gray-200 dark:border-gray-800">
                <td className="py-2">{p.type}</td>
                <td>{p.date}</td>
                <td>{p.location}</td>
                <td className="text-right"><Link href={`/app/results/${p.id}`} className="text-primary-600 hover:underline">Voir</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
