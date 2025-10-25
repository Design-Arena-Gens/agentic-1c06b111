"use client";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

export default function ResultsPage({ params }: { params: { id: string } }){
  const monthly = Array.from({length:12},(_,i)=>({m:i+1, kwh: Math.round(700+Math.sin(i/12*Math.PI*2)*180)}));
  const roi = 4;
  const cost = 6000;
  const production = monthly.reduce((a,b)=>a+b.kwh,0);
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Résultats du calcul</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="card p-4">Production annuelle estimée: <b>{production} kWh</b></div>
        <div className="card p-4">Coût estimé: <b>{cost.toLocaleString()} €</b></div>
        <div className="card p-4">ROI: <b>{roi} ans</b></div>
      </div>
      <div className="card p-4">
        <div className="font-semibold mb-2">Production mensuelle</div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthly}>
              <XAxis dataKey="m"/>
              <YAxis/>
              <Tooltip/>
              <Bar dataKey="kwh" fill="#16a34a"/>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="flex gap-3">
        <button className="btn btn-primary" onClick={()=>window.print()}>Imprimer</button>
        <button className="btn" onClick={()=>navigator.share?.({title:'Résultats', text:'Voir mes résultats', url:window.location.href})}>Partager</button>
      </div>
    </div>
  );
}
