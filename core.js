import {byId} from './data.js';
export const clamp=(n,min,max,fallback=min)=>Number.isFinite(Number(n))?Math.max(min,Math.min(max,Math.round(Number(n)))):fallback;
export const formatTime=s=>`${Math.floor(Math.max(0,s)/60).toString().padStart(2,'0')}:${Math.floor(Math.max(0,s)%60).toString().padStart(2,'0')}`;
export function timeline(plans,rounds=1,rest=15){
 const moves=plans.flatMap(p=>p.items.map(item=>({...item,plan:p.name})));
 if(!moves.length)return [];
 const stages=[{kind:'ready',duration:5,name:'Przygotuj się',id:moves[0].id,round:1}];
 for(let r=1;r<=clamp(rounds,1,10);r++)moves.forEach((item,i)=>{
  stages.push({...item,kind:'work',name:byId[item.id].name,round:r});
  if(rest>0 && (i<moves.length-1 || r<rounds)) stages.push({kind:'rest',name:'Chwila oddechu',duration:clamp(rest,0,120),id:moves[(i+1)%moves.length].id,round:r});
 });
 return stages;
}
export function normalizePreset(p){
 if(!p || typeof p.name!=='string' || !p.name.trim() || !Array.isArray(p.items) || !p.items.length || p.items.length>100)throw new Error('Nieprawidłowy preset.');
 const items=p.items.map(item=>{if(!item || !byId[item.id] || !Number.isFinite(Number(item.duration)))throw new Error('Nieznane ćwiczenie lub czas.');return {id:item.id,duration:clamp(item.duration,5,600)};});
 return {id:`custom-${crypto.randomUUID()}`,name:p.name.trim().slice(0,70),description:String(p.description||'Twój własny zestaw ćwiczeń.').slice(0,160),category:'custom',tag:'TWÓJ PLAN',color:'#a6bbb5',mark:'↗',demo:items[0].id,items};
}
export class WorkoutClock{
 constructor(stages,now=()=>Date.now()){this.stages=stages;this.now=now;this.index=0;this.paused=false;this.deadline=this.now()+stages[0].duration*1000;this.remaining=0;this.elapsed=0;this.started=this.now();}
 tick(){if(this.paused)return;const now=this.now();while(this.index<this.stages.length && now>=this.deadline){this.index++;if(this.index<this.stages.length)this.deadline+=this.stages[this.index].duration*1000;}}
 pause(){if(!this.paused){this.remaining=Math.max(0,this.deadline-this.now());this.elapsed+=this.now()-this.started;this.paused=true;}}
 resume(){if(this.paused){this.deadline=this.now()+this.remaining;this.started=this.now();this.paused=false;}}
 move(delta){this.index=Math.max(0,Math.min(this.stages.length,this.index+delta));if(this.index<this.stages.length){this.remaining=this.stages[this.index].duration*1000;this.deadline=this.now()+this.remaining;}}
 seconds(){return this.index>=this.stages.length?0:Math.max(0,Math.ceil((this.paused?this.remaining:this.deadline-this.now())/1000));}
 activeSeconds(){return Math.floor((this.elapsed+(this.paused?0:this.now()-this.started))/1000);}
}
