/* Self-contained scale-modeling gallery: generated image list comes from Jekyll site.static_files. */
(function () {
  'use strict';
  const manifest = document.getElementById('modeling-photo-manifest');
  if (!manifest) return;
  let paths;
  try { paths = JSON.parse(manifest.textContent); } catch (_) { return; }
  const validImage = /\.(jpe?g|png|webp|gif|avif)$/i;
  const models = new Map();
  for (const path of paths) {
    if (!validImage.test(path)) continue;
    const marker = '/modeling/';
    const start = path.indexOf(marker);
    if (start < 0) continue;
    const parts = path.slice(start + marker.length).split('/');
    if (parts.length < 3) continue;
    const [folder, section] = parts;
    if (section !== 'studio' && section !== 'wip') continue;
    if (!models.has(folder)) models.set(folder, {folder, studio: [], wip: []});
    models.get(folder)[section].push(path);
  }
  const collator = new Intl.Collator(undefined, {numeric:true, sensitivity:'base'});
  const entries = Array.from(models.values()).filter(m => m.studio.length || m.wip.length).sort((a,b)=>collator.compare(b.folder,a.folder));
  for (const m of entries) {
    m.studio.sort(collator.compare); m.wip.sort(collator.compare);
    m.cover = m.studio.find(p => /\/cover\.jpe?g$/i.test(p)) || m.studio[0] || m.wip[0];
    const raw = m.folder.replace(/[_-]+/g,' ').replace(/\s+/g,' ').trim();
    const dateMatch = raw.match(/^(\d{4})(?:\s+(\d{1,2}))?(?:\s+(\d{1,2}))?\s+(.+)$/);
    m.label = dateMatch ? dateMatch[4] : raw;
    m.date = dateMatch ? [dateMatch[1],dateMatch[2],dateMatch[3]].filter(Boolean).join('-') : '';
  }
  const $ = id => document.getElementById(id);
  const index = $('modeling-index'), detail = $('modeling-detail'), cards = $('modeling-cards');
  const lightbox = $('modeling-lightbox'), large = $('modeling-large-image');
  let photos = [], position = 0, priorFocus = null;
  const img = (src, alt, loading='lazy') => {const el=document.createElement('img');el.src=src;el.alt=alt;el.loading=loading;el.decoding='async';return el;};
  const linkFor = name => '?model=' + encodeURIComponent(name);
  for (const m of entries) {
    const a=document.createElement('a');a.className='modeling-card';a.href=linkFor(m.folder);
    const visual=document.createElement('div');visual.className='modeling-card-visual';visual.appendChild(img(m.cover,m.label));a.appendChild(visual);
    const h=document.createElement('h2');h.textContent=m.label;a.appendChild(h);
    if(m.date){const d=document.createElement('div');d.className='modeling-card-date';d.textContent=m.date;a.appendChild(d);}
    cards.appendChild(a);
  }
  $('modeling-empty').hidden = entries.length > 0;
  function fillGallery(container, section, m) {
    container.replaceChildren();
    const list=m[section];
    const sectionEl=container.closest('.modeling-photo-section');sectionEl.hidden=!list.length;
    list.forEach((src,i)=>{
      const b=document.createElement('button');b.type='button';b.className='modeling-photo';b.setAttribute('aria-label',`Open ${section} image ${i+1}`);
      b.appendChild(img(src,`${m.label}, ${section} photo ${i+1}`));
      b.addEventListener('click',()=>openLightbox(list,i,b));container.appendChild(b);
    });
  }
  function render() {
    const wanted=new URLSearchParams(location.search).get('model');
    const m=entries.find(e=>e.folder===wanted);
    index.hidden=Boolean(m); detail.hidden=!m;
    if(m){$('modeling-model-title').textContent=m.label;fillGallery($('modeling-studio'),'studio',m);fillGallery($('modeling-wip'),'wip',m);document.title=m.label+' | Scale Modeling';}
    else {document.title='Scale Modeling | Levent Burak Kara';}
  }
  function updateLightbox(){large.src=photos[position];large.alt=`Photograph ${position+1} of ${photos.length}`;$('modeling-counter').textContent=`${position+1} / ${photos.length}`;}
  function openLightbox(list,i,source){photos=list;position=i;priorFocus=source;updateLightbox();lightbox.hidden=false;document.body.style.overflow='hidden';$('modeling-close').focus();}
  function closeLightbox(){lightbox.hidden=true;large.removeAttribute('src');document.body.style.overflow='';if(priorFocus)priorFocus.focus();}
  const step=n=>{position=(position+n+photos.length)%photos.length;updateLightbox();};
  $('modeling-close').addEventListener('click',closeLightbox);
  $('modeling-prev').addEventListener('click',()=>step(-1));
  $('modeling-next').addEventListener('click',()=>step(1));
  lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox();});
  document.addEventListener('keydown',e=>{if(lightbox.hidden)return;if(e.key==='Escape')closeLightbox();if(e.key==='ArrowLeft')step(-1);if(e.key==='ArrowRight')step(1);if(e.key==='Tab'){const controls=[$('modeling-close'),$('modeling-prev'),$('modeling-next')];const i=controls.indexOf(document.activeElement);if(e.shiftKey&&i===0){e.preventDefault();controls[2].focus();}else if(!e.shiftKey&&i===2){e.preventDefault();controls[0].focus();}}});
  render();
}());
