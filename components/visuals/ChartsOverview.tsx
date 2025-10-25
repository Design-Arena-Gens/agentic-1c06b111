"use client";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

const data = Array.from({length:12},(_,i)=>({month:i+1,prod:Math.round(800+Math.sin(i/12*Math.PI*2)*200)}));

export function ChartsOverview(){
  return (
    <div className="card p-4">
      <div className="font-semibold mb-2">Production estimée (kWh)</div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#16a34a" stopOpacity={0.6}/>
                <stop offset="95%" stopColor="#16a34a" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="month"/>
            <YAxis/>
            <Tooltip/>
            <Area type="monotone" dataKey="prod" stroke="#16a34a" fillOpacity={1} fill="url(#g)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
