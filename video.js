import {byId} from './data.js';
export const videos={
 march:{id:'u1gmWFvEluM',author:'Margaret Martin, Physical Therapist'},
 squat:{id:'Zqc_lc93hak',author:'DAREBEE'},
 pushup:{id:'lFR1GWy1Dcs',author:'Dr. Carl Baird'},
 lunge:{id:'MRNXHUewLYY',author:'Latitude 32 Fitness'},
 bridge:{id:'c4b6Tq_jA0s',author:'Forever Oak Health Center'},
 bird:{id:'BGa1fAdVzI0',author:'Forever Oak Health Center'},
 plank:{id:'mH5Sfb_KTGg',author:'Well+Good'},
 deadbug:{id:'KtTxAy1d0jc',author:'Forever Oak Health Center'},
 calf:{id:'A_npfqG65vs',author:'NHS Ayrshire & Arran'},
 chin:{id:'VdDuzmQnO-M',author:'Forever Oak Health Center'},
 neckturn:{id:'PruXF-NE2zI',author:'AskDoctorJo'},
 necktilt:{id:'UUXUVFQS5u0',author:'AskDoctorJo'},
 shoulder:{id:'Gmw7flYIR1U',author:"KK Women's and Children's Hospital"},
 cat:{id:'7mzPgS1Hf1U',author:'Forever Oak Health Center'},
 reach:{id:'_JGWt2BDCl4',author:'Live Lean TV Daily Exercises'},
 wall:{id:'tSQFX74g55A',author:'Forever Oak Health Center'},
 child:{id:'2vJKSlfLX10',author:'Royal Free London NHS Foundation Trust'},
 stepjack:{id:'JHdVMkRBuRA',author:'DAREBEE'}
};
export function demo(id,{compact=false,onPlay}={}){
 const v=videos[id];const wrapper=document.createElement('div');wrapper.className=`video-guide ${compact?'compact':''}`;wrapper.dataset.exercise=id;
 const preview=document.createElement('button');preview.type='button';preview.className='video-preview';preview.setAttribute('aria-label',`Odtwórz film: ${byId[id].name}`);
 const img=document.createElement('img');img.src=`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`;img.alt=`Film instruktażowy: ${byId[id].name}`;img.loading='lazy';img.referrerPolicy='strict-origin-when-cross-origin';
 const icon=document.createElement('span');icon.className='video-play';icon.textContent='▶';const label=document.createElement('span');label.className='video-label';label.textContent=compact?'FILM INSTRUKTAŻOWY':'Odtwórz film instruktażowy';
 preview.append(img,icon,label);wrapper.append(preview);
 preview.onclick=()=>{onPlay?.();if(compact)return;const iframe=document.createElement('iframe');iframe.src=`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0&playsinline=1&cc_load_policy=1`;iframe.title=`${byId[id].name} — ${v.author}`;iframe.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';iframe.allowFullscreen=true;iframe.referrerPolicy='strict-origin-when-cross-origin';iframe.className='video-player';preview.replaceWith(iframe);};
 if(!compact){const credits=document.createElement('div');credits.className='video-credits';const author=document.createElement('span');author.textContent=`Film: ${v.author} · YouTube`;const link=document.createElement('a');link.href=`https://www.youtube.com/watch?v=${v.id}`;link.target='_blank';link.rel='noopener';link.textContent='Otwórz w YouTube ↗';link.onclick=()=>onPlay?.();credits.append(author,link);wrapper.append(credits);const hint=document.createElement('p');hint.className='video-hint';hint.textContent='Instrukcje po polsku poniżej. Tempo i napisy możesz zmienić w odtwarzaczu (⚙).';wrapper.append(hint);}
 return wrapper;
}
