"use client";
import { useTheme } from 'next-themes';

export default function ProfilePage(){
  const { theme, setTheme } = useTheme();
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Profil utilisateur</h1>
      <div className="card p-6 grid sm:grid-cols-2 gap-4">
        <div>
          <label className="label">Nom</label>
          <input className="input" defaultValue="Utilisateur"/>
        </div>
        <div>
          <label className="label">Email</label>
          <input className="input" defaultValue="vous@exemple.com"/>
        </div>
        <div>
          <label className="label">Mot de passe</label>
          <input type="password" className="input" placeholder="••••••••"/>
        </div>
        <div>
          <label className="label">Logo d’entreprise</label>
          <input type="file" className="input"/>
        </div>
        <div className="sm:col-span-2">
          <label className="label">Paramètres</label>
          <div className="flex gap-4 items-center">
            <select className="input max-w-xs">
              <option>Unité métrique</option>
              <option>Unité impériale</option>
            </select>
            <select className="input max-w-xs">
              <option>Français</option>
              <option>English</option>
            </select>
            <button className="btn" onClick={()=> setTheme(theme==='dark'?'light':'dark')}>Basculer thème</button>
          </div>
        </div>
        <div className="sm:col-span-2">
          <button className="btn btn-primary">Enregistrer</button>
        </div>
      </div>
    </div>
  );
}
