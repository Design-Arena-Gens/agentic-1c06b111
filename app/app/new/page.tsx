"use client";
import { useState } from 'react';
import Link from 'next/link';
import { z } from 'zod';
import { jsPDF } from 'jspdf';
import * as XLSX from 'xlsx';

const schema = z.object({
  name: z.string().min(2),
  location: z.string().min(2),
  mode: z.enum(['on','off','pump']),
  powerKw: z.number().min(0.5),
  dailyKwh: z.number().min(0),
});

type FormData = z.infer<typeof schema>;

export default function NewCalcPage(){
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>({name:'Projet solaire', location:'Alger', mode:'on', powerKw:5, dailyKwh:20});

  function next(){ setStep(s => Math.min(4, s+1)); }
  function prev(){ setStep(s => Math.max(1, s-1)); }

  function simulate(){
    // Simple estimations for demo
    const irradiance = 5; // kWh/m2/day typical
    const pr = 0.75; // performance ratio
    const monthly = Array.from({length:12},(_,i)=> Math.round(data.powerKw * irradiance * 30 * pr * (1 + 0.2*Math.sin(i/12*Math.PI*2))));
    const annual = monthly.reduce((a,b)=>a+b,0);
    return { monthly, annual, roiYears: Math.max(2, Math.round(6000/(annual*0.15))) };
  }

  function downloadPdf(){
    const s = simulate();
    const doc = new jsPDF();
    doc.text('Note de calcul – Green Energy', 14, 16);
    doc.text(`Projet: ${data.name}`, 14, 26);
    doc.text(`Lieu: ${data.location}`, 14, 34);
    doc.text(`Mode: ${data.mode}`, 14, 42);
    doc.text(`Puissance: ${data.powerKw} kW`, 14, 50);
    doc.text(`Conso: ${data.dailyKwh} kWh/j`, 14, 58);
    doc.text(`Production annuelle estimée: ${s.annual} kWh`, 14, 74);
    doc.text(`ROI: ${s.roiYears} ans`, 14, 82);
    doc.save('note-de-calcul.pdf');
  }

  function downloadExcel(){
    const s = simulate();
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet([
      ['Mois','Production (kWh)'],
      ...s.monthly.map((v,i)=>[i+1,v])
    ]);
    XLSX.utils.book_append_sheet(wb, ws, 'Production');
    XLSX.writeFile(wb, 'note-de-calcul.xlsx');
  }

  const sim = simulate();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Nouvelle note de calcul</h1>
        <Link href="/app/projects" className="nav-link">Retour</Link>
      </div>

      <div className="flex items-center gap-2 text-sm">
        {[1,2,3,4].map(i => (
          <div key={i} className={`px-3 py-1 rounded-full ${i<=step? 'bg-primary-600 text-white':'bg-gray-200 dark:bg-gray-800'}`}>Étape {i}</div>
        ))}
      </div>

      {step===1 && (
        <div className="card p-6 grid sm:grid-cols-2 gap-4">
          <div>
            <label className="label">Nom du projet</label>
            <input className="input" value={data.name} onChange={e=>setData({...data,name:e.target.value})}/>
          </div>
          <div>
            <label className="label">Lieu</label>
            <input className="input" value={data.location} onChange={e=>setData({...data,location:e.target.value})}/>
          </div>
          <div className="sm:col-span-2">
            <label className="label">Mode</label>
            <div className="flex gap-2">
              <button className={`btn ${data.mode==='on'?'btn-primary':''}`} onClick={()=>setData({...data,mode:'on'})}>On-grid</button>
              <button className={`btn ${data.mode==='off'?'btn-primary':''}`} onClick={()=>setData({...data,mode:'off'})}>Off-grid</button>
              <button className={`btn ${data.mode==='pump'?'btn-primary':''}`} onClick={()=>setData({...data,mode:'pump'})}>Pompage</button>
            </div>
          </div>
        </div>
      )}

      {step===2 && (
        <div className="card p-6 grid sm:grid-cols-2 gap-4">
          <div>
            <label className="label">Puissance (kW)</label>
            <input type="number" className="input" value={data.powerKw} onChange={e=>setData({...data,powerKw:parseFloat(e.target.value)})}/>
          </div>
          <div>
            <label className="label">Consommation quotidienne (kWh)</label>
            <input type="number" className="input" value={data.dailyKwh} onChange={e=>setData({...data,dailyKwh:parseFloat(e.target.value)})}/>
          </div>
        </div>
      )}

      {step===3 && (
        <div className="card p-6">
          <div className="font-semibold mb-2">Simulation</div>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-3 rounded bg-green-50 dark:bg-green-900/20">Production annuelle: <b>{sim.annual} kWh</b></div>
            <div className="p-3 rounded bg-yellow-50 dark:bg-yellow-900/20">ROI: <b>{sim.roiYears} ans</b></div>
            <div className="p-3 rounded bg-blue-50 dark:bg-blue-900/20">Puissance: <b>{data.powerKw} kW</b></div>
          </div>
        </div>
      )}

      {step===4 && (
        <div className="card p-6">
          <div className="font-semibold mb-2">Résultats & rapport</div>
          <div className="flex gap-3">
            <Link href="/app/results/temp" className="btn btn-primary">Voir les résultats</Link>
            <button className="btn" onClick={downloadPdf}>Exporter PDF</button>
            <button className="btn" onClick={downloadExcel}>Exporter Excel</button>
          </div>
        </div>
      )}

      <div className="flex justify-between">
        <button className="btn" onClick={prev} disabled={step===1}>Précédent</button>
        <button className="btn btn-primary" onClick={next} disabled={step===4}>Suivant</button>
      </div>
    </div>
  );
}
