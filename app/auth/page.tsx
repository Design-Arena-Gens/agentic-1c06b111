"use client";
import { useState } from 'react';
import { useAuth } from '@/components/Providers';
import { GoogleIcon } from '@/components/ui/GoogleIcon';
import { motion } from 'framer-motion';

export default function AuthPage() {
  const [mode, setMode] = useState<'signin'|'signup'>('signin');
  const { signIn } = useAuth();

  return (
    <div className="container-max py-16">
      <div className="max-w-md mx-auto card p-8 relative overflow-hidden">
        <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="absolute -top-12 -right-12 w-40 h-40 bg-green-500/10 rounded-full"/>
        <div className="text-center mb-6">
          <div className="text-2xl font-bold">{mode === 'signin' ? 'Se connecter' : 'Créer un compte'}</div>
          <p className="text-gray-600 dark:text-gray-400">Bienvenue sur Green Energy</p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget as HTMLFormElement);
            const email = String(data.get('email'));
            signIn(email);
            window.location.href = '/app';
          }}
          className="space-y-4"
        >
          <div>
            <label className="label">Email</label>
            <input name="email" required type="email" className="input" placeholder="vous@exemple.com" />
          </div>
          <div>
            <label className="label">Mot de passe</label>
            <input name="password" required type="password" className="input" placeholder="••••••••" />
          </div>
          {mode === 'signup' && (
            <div>
              <label className="label">Confirmer le mot de passe</label>
              <input name="confirm" required type="password" className="input" placeholder="••••••••" />
            </div>
          )}
          <button className="btn btn-primary w-full" type="submit">
            {mode === 'signin' ? 'Se connecter' : 'Créer un compte'}
          </button>
          <button className="btn btn-ghost w-full" type="button" onClick={() => alert('Mot de passe oublié - e-mail envoyé (démo)')}>
            Mot de passe oublié ?
          </button>
          <div className="pt-2">
            <button type="button" className="btn w-full border border-gray-300 dark:border-gray-700" onClick={() => { signIn('google-user@example.com'); window.location.href = '/app'; }}>
              <GoogleIcon className="mr-2 h-5 w-5"/> Continuer avec Google
            </button>
          </div>
        </form>
        <div className="mt-6 text-center text-sm">
          {mode === 'signin' ? (
            <button className="text-primary-600 hover:underline" onClick={() => setMode('signup')}>Créer un compte</button>
          ) : (
            <button className="text-primary-600 hover:underline" onClick={() => setMode('signin')}>Déjà inscrit ? Se connecter</button>
          )}
        </div>
      </div>
    </div>
  );
}
