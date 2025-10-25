"use client";
import { useEffect, useRef } from 'react';

export default function ContactPage(){
  const mapRef = useRef<HTMLIFrameElement>(null);
  useEffect(()=>{},[]);
  return (
    <div className="container-max py-12 space-y-6">
      <h1 className="text-3xl font-bold">Contact / Support</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <form className="card p-6 space-y-3" onSubmit={(e)=>{e.preventDefault(); alert('Message envoyé (démo)')}}>
          <div>
            <label className="label">Nom</label>
            <input className="input" required />
          </div>
          <div>
            <label className="label">Email</label>
            <input type="email" className="input" required />
          </div>
          <div>
            <label className="label">Message</label>
            <textarea className="input min-h-[120px]" required />
          </div>
          <button className="btn btn-primary">Envoyer</button>
        </form>
        <div className="card p-0 overflow-hidden">
          <iframe ref={mapRef} className="w-full h-full min-h-[360px]" loading="lazy" allowFullScreen src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999383914355!2d2.2922926156749!3d48.858373608498254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUxJzMwLjEiTiAywrAxNSczNi4yIkU!5e0!3m2!1sfr!2sfr!4v1616580000000"></iframe>
        </div>
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400">Email: support@greenenergy.example • Téléphone: +33 1 23 45 67 89</div>
    </div>
  );
}
