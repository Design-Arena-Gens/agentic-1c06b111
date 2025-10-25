"use client";
import Link from 'next/link';
import { ArrowRight, Leaf, Shield, TrendingUp, Sun, Droplet } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white dark:from-green-950/40 dark:to-transparent" />
        <div className="container-max py-20 sm:py-28">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-4xl sm:text-5xl font-extrabold leading-tight">
                Optimisez vos projets solaires facilement.
              </motion.h1>
              <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1,duration:0.6}} className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Calculs On-grid, Off-grid et Pompage solaire avec rapports PDF/Excel.
              </motion.p>
              <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2,duration:0.6}} className="mt-8 flex gap-3">
                <Link href="/app/new" className="btn btn-primary">
                  Créer une note de calcul <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/about" className="btn btn-ghost">À propos</Link>
              </motion.div>
            </div>
            <motion.div initial={{opacity:0,scale:0.95}} animate={{opacity:1,scale:1}} transition={{duration:0.6}} className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
                <img src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop" alt="Solar panels" className="w-full h-full object-cover"/>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-max py-16">
        <h2 className="text-2xl font-bold">Nos services</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {icon: Sun, title: 'Calcul On-grid', desc: 'Dimensionnement raccordé réseau.'},
            {icon: Leaf, title: 'Calcul Off-grid', desc: 'Autonomie et stockage optimisés.'},
            {icon: Droplet, title: 'Pompage solaire', desc: 'Systèmes de pompage efficaces.'}
          ].map((s, i) => (
            <motion.div key={s.title} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="card p-6">
              <div className="flex items-center gap-3">
                <s.icon className="h-6 w-6 text-primary-600" />
                <h3 className="font-semibold">{s.title}</h3>
              </div>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{s.desc}</p>
              <Link href="/app/new" className="mt-4 inline-flex text-primary-600 hover:underline">Lancer un calcul →</Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-gray-50 dark:bg-gray-950 py-16">
        <div className="container-max">
          <h2 className="text-2xl font-bold">Pourquoi nous choisir</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{Icon:TrendingUp,title:'Économie',desc:'Optimisez coûts, ROI et production.'},{Icon:Shield,title:'Fiabilité',desc:'Méthodes robustes et vérifiées.'},{Icon:Leaf,title:'Durabilité',desc:'Impact environnemental positif.'}].map((f,i)=> (
              <motion.div key={f.title} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="card p-6">
                <f.Icon className="h-6 w-6 text-solar" />
                <h3 className="mt-2 font-semibold">{f.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials/partners */}
      <section className="container-max py-16">
        <h2 className="text-2xl font-bold">Témoignages & partenaires</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <div key={i} className="card p-6">
              <p className="italic">“Une interface claire et des résultats fiables.”</p>
              <div className="mt-4 text-sm text-gray-500">— Client {i}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
