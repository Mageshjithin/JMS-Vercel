const slug=s=>s.toLowerCase().replace(/&/g,'').replace(/\s+/g,'-');
const wa=(name='a dress from your collection')=>'https://wa.me/919876543211?text='+encodeURIComponent(`Hi JMS Textiles, I am interested in ${name}. Please share availability, sizes and ordering details.`);
document.querySelectorAll('[data-wa]').forEach(a=>{a.href=wa(a.dataset.wa==='general'?undefined:a.dataset.wa);a.target='_blank';a.rel='noopener'});
document.querySelectorAll('.chips').forEach(box=>{
 box.innerHTML=products.filter((p,i,list)=>p.cat===box.dataset.group&&list.findIndex(x=>x.cat===p.cat&&x.type===p.type)===i).map(p=>`<button class="category-choice" data-product="${p.id}" aria-pressed="false"><img src="${p.img}" alt="${p.supplied?p.name:`Sample ${p.type}`}" loading="lazy" width="80" height="100"><span>${p.type}</span></button>`).join('');
 box.querySelectorAll('button').forEach(b=>b.onclick=()=>{const p=products.find(p=>p.id===b.dataset.product);renderProducts(p.cat,p.type);document.querySelector('#collection').scrollIntoView()});
});
function card(p){return `<article class="product-card"><div class="product-image"><img src="${p.img}" alt="${p.supplied?p.name:`AI-generated sample of ${p.name}`}" loading="lazy" width="600" height="800"><span class="tag">${p.tag}</span></div><div class="product-info"><span class="meta">${p.cat} · ${p.type}</span><h3>${p.name}</h3><span class="sizes">${p.supplied?'Size details':'Sample sizes'}: ${p.sizes}</span><div class="price"><span class="original">₹${p.old}</span><span class="offer">₹${p.price}</span></div><div class="card-actions"><button data-detail="${p.id}">View Details</button><a target="_blank" rel="noopener" href="${wa(p.name)}">Order on WhatsApp</a></div></div></article>`}
function renderProducts(cat='All',type='',tag=''){
 const list=products.filter(p=>(cat==='All'||p.cat===cat)&&(!type||p.type===type)&&(!tag||p.tag===tag));
 document.querySelector('.products-section h2').textContent=type?`${cat} · ${type}`:tag||(cat==='All'?'Latest collection':`${cat}’s collection`);
 document.querySelectorAll('[data-cat]').forEach(b=>{b.classList.toggle('active',b.dataset.cat===cat);b.setAttribute('aria-pressed',b.dataset.cat===cat)});
 document.querySelectorAll('.category-choice').forEach(b=>b.setAttribute('aria-pressed',products.find(p=>p.id===b.dataset.product)?.cat===cat&&products.find(p=>p.id===b.dataset.product)?.type===type));
 document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.filter===tag));
 document.querySelector('#productGrid').innerHTML=list.length?list.map(card).join(''):'<p>No sample styles in this category yet.</p>';
 document.querySelectorAll('[data-detail]').forEach(b=>b.onclick=()=>showProduct(b.dataset.detail));
}
document.querySelectorAll('[data-cat]').forEach(b=>b.onclick=()=>renderProducts(b.dataset.cat));
document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{renderProducts('All','',b.dataset.filter);document.querySelector('#collection').scrollIntoView()});
function showProduct(id){const p=products.find(p=>p.id===id);document.querySelector('#dialogBody').innerHTML=`<div class="dialog-content"><img src="${p.img}" alt="${p.name}"><div class="dialog-copy"><p class="eyebrow">${p.tag}</p><h2 id="detailTitle">${p.name}</h2><p>${p.cat} · ${p.type}</p><p>${p.supplied?'Size details':'Sample sizes'}: <strong>${p.sizes}</strong></p><div class="price"><span class="original">₹${p.old}</span><span class="offer">₹${p.price}</span></div><p>${p.supplied?'Please confirm availability, sizes and ordering details on WhatsApp.':'AI-generated sample image. Prices and sizes are illustrative, not confirmed inventory. Ask us for availability and actual product photos.'}</p><a class="btn dark" target="_blank" rel="noopener" href="${wa(p.name)}">Order on WhatsApp</a></div></div>`;const d=document.querySelector('#productDialog');d.setAttribute('aria-labelledby','detailTitle');d.showModal()}
renderProducts();
