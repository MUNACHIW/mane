/* ===== EDIT THIS: client details ===== */
const C = { name: 'Mane Textiles', wa: '2348000000000', cur: '₦', email: 'hello@manetextiles.com', phone: '+234 800 000 0000', addr: 'Balogun Market, Lagos Island, Lagos' };
/* ===== EDIT THIS: products (bg = CSS fabric pattern; replace with image url later) ===== */
const st = (a, b, w = 8) => `repeating-linear-gradient(90deg,${a} 0 ${w}px,${b} ${w}px ${w * 2}px)`;
const chk = (a, b) => `conic-gradient(${a} 25%,${b} 0 50%,${a} 0 75%,${b} 0) 0 0/28px 28px`;
const P = [
    { id: 1, name: 'Egyptian Cotton Bedsheet Set', cat: 'Linens', price: 48000, unit: 'set', bg: '#e8ecf4', d: '400 thread count, sateen finish. Fitted sheet, flat sheet and two pillowcases.' },
    { id: 2, name: 'Pure Linen Duvet Cover', cat: 'Linens', price: 62000, unit: 'piece', bg: st('#d9d4c7', '#e6e2d7', 3), d: 'Stonewashed European linen that softens with every wash.' },
    { id: 3, name: 'Turkish Bath Towels', cat: 'Linens', price: 28500, unit: 'set of 4', bg: st('#f1f1ee', '#e3e6ea', 14), d: 'Heavy 600gsm cotton, quick drying and highly absorbent.' },
    { id: 4, name: 'Damask Table Cloth', cat: 'Home', price: 35000, unit: 'piece', bg: chk('#eceff6', '#e1e6f1'), d: 'Jacquard-woven table cloth, available for 6 and 10 seaters.' },
    { id: 5, name: 'Ankara Wax Print', cat: 'Fabrics', price: 18000, unit: '6 yards', bg: 'radial-gradient(circle at 50% 50%,#b7892b 0 18%,transparent 19%) 0 0/36px 36px,#1f2a4d', d: 'Authentic double-sided wax print, colourfast and vibrant.' },
    { id: 6, name: 'Handwoven Aso-Oke', cat: 'Fabrics', price: 75000, unit: 'set', bg: `${st('#b7892b', '#1f2a4d', 5)}`, d: 'Traditional Yoruba strip-woven cloth for weddings and ceremonies.' },
    { id: 7, name: 'Swiss Voile Lace', cat: 'Fabrics', price: 42000, unit: '5 yards', bg: 'radial-gradient(circle,#fff 0 30%,#dfe5f0 31% 55%,#fff 56%) 0 0/22px 22px', d: 'Fine embroidered lace with a soft, light drape.' },
    { id: 8, name: 'Cotton Poplin', cat: 'Fabrics', price: 9500, unit: 'yard', bg: st('#cfd8ea', '#dbe2f1', 2), d: 'Crisp, breathable poplin for shirts, dresses and uniforms.' },
    { id: 9, name: 'Velvet Curtain Panels', cat: 'Home', price: 54000, unit: 'pair', bg: 'linear-gradient(120deg,#26325e,#3b4a82 50%,#26325e)', d: 'Lined velvet panels, 2.5m drop, with blackout backing.' },
    { id: 10, name: 'Silk Satin', cat: 'Fabrics', price: 16500, unit: 'yard', bg: 'linear-gradient(115deg,#e9dcc0,#f7efdc 40%,#d9c79d 70%,#f1e6cb)', d: 'Luxurious silk-feel satin for gowns, scarves and linings.' },
    { id: 11, name: 'Embroidered Kaftan', cat: 'Clothing', price: 38000, unit: 'piece', bg: 'linear-gradient(180deg,#2e3d70 0 70%,#b7892b 70% 74%,#2e3d70 74%)', d: 'Ready-to-wear kaftan with hand embroidery. Sizes S to XXL.' },
    { id: 12, name: 'Linen Shirt', cat: 'Clothing', price: 24000, unit: 'piece', bg: st('#e4e0d4', '#d6d1c2', 2), d: 'Relaxed-fit linen shirt, tailored in Lagos. Sizes S to XXL.' }];
const TG = { 1: 'Bestseller', 5: 'Bestseller', 6: 'New', 9: 'New', 11: 'Bestseller' };
const OPT = { Linens: ['Queen', 'King', 'Super King'], Clothing: ['S', 'M', 'L', 'XL', 'XXL'], Home: ['Standard', 'Large'] };
const COL = { Linens: [['White', '#f4f4f2'], ['Grey', '#a9aeb8'], ['Navy', '#1f2a4d']], Fabrics: [['Indigo', '#1f2a4d'], ['Gold', '#b7892b'], ['Wine', '#6b1f2f'], ['Forest', '#24523b']], Clothing: [['Navy', '#1f2a4d'], ['Sand', '#d9cfb8'], ['White', '#f4f4f2']], Home: [['Navy', '#1f2a4d'], ['Ivory', '#ece6d6'], ['Grey', '#a9aeb8']] };
const FREE = 100000;
const vtxt = (c, s) => c + (s ? ' / ' + s : '');
const dv = p => vtxt(COL[p.cat][0][0], OPT[p.cat]?.[0]);
const CATS = [['Linens', 'Bedsheets, duvets and towels'], ['Fabrics', 'Lace, wax print, aso-oke'], ['Clothing', 'Kaftans and shirts'], ['Home', 'Curtains and table linen']];
const $ = (s, e = document) => e.querySelector(s), $$ = (s, e = document) => [...e.querySelectorAll(s)];
const fmt = n => C.cur + n.toLocaleString('en-NG');
const wa = t => `https://wa.me/${C.wa}?text=${encodeURIComponent(t)}`;
const get = id => P.find(p => p.id == id);
let W = []; try { W = JSON.parse(localStorage.getItem('mane-w') || '[]') } catch (e) { }
let CART = []; try { CART = JSON.parse(localStorage.getItem('mane') || '[]') } catch (e) { }
const save = () => { try { localStorage.setItem('mane', JSON.stringify(CART)) } catch (e) { } $$('.cc').forEach(e => e.textContent = CART.reduce((a, i) => a + i.q, 0)) };
function add(id, q = 1, v) { v = v || dv(get(id)); const i = CART.find(x => x.id == id && x.v == v); i ? i.q += q : CART.push({ id: +id, q, v }); save(); toast(get(id).name + ' added to cart') }
function toast(m) { let t = $('.toast'); if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.append(t) } t.textContent = m; t.classList.add('s'); clearTimeout(t.h); t.h = setTimeout(() => t.classList.remove('s'), 2200) }
const card = p => `<article class="card"><a href="product.html?id=${p.id}" aria-label="${p.name}"><div class="sw" style="background:${p.bg}"></div>${TG[p.id] ? `<span class="tg">${TG[p.id]}</span>` : ''}</a><button class="hr ${W.includes(p.id) ? 'on' : ''}" data-wish="${p.id}" aria-label="Save ${p.name}">♥</button><div class="ci"><small>${p.cat}</small><h3>${p.name}</h3><p>${fmt(p.price)} <span>/ ${p.unit}</span></p><button class="btn o sm" data-add="${p.id}">Add to cart</button></div></article>`;
const page = document.body.dataset.page;
function layout() {
    const nav = [['index', 'Home'], ['shop', 'Shop'], ['about', 'About'], ['contact', 'Contact']].map(([k, l]) => `<a href="${k}.html" class="${page == k ? 'on' : ''}">${l}</a>`).join('');
    document.body.insertAdjacentHTML('afterbegin', `<div class="ann">Free delivery in Lagos on orders above ₦100,000. Wholesale prices on request.</div><header class="hd"><div class="wrap"><a class="logo" href="index.html">${C.name}</a><nav id="nv">${nav}</nav><a class="cartb" href="cart.html">Cart <b class="cc">0</b></a><button class="mb" aria-label="Menu" onclick="$('#nv').classList.toggle('open')">Menu</button></div></header>`);
    document.body.insertAdjacentHTML('beforeend', `<footer class="ft"><div class="wrap"><div><h4>${C.name}</h4><p>Linens, fabrics and ready-to-wear clothing, supplied to homes, hotels and tailors across Nigeria.</p></div><div><h4>Shop</h4>${CATS.map(c => `<a href="shop.html?cat=${c[0]}">${c[0]}</a>`).join('')}<a href="index.html#faq">Delivery and FAQ</a></div><div><h4>Visit and contact</h4><p>${C.addr}</p><p>${C.phone}<br>${C.email}</p></div><p class="cp">© ${new Date().getFullYear()} ${C.name}. All rights reserved.</p></div></footer><a class="wab" target="_blank" rel="noopener" href="${wa('Hello ' + C.name + ', I would like to make an enquiry.')}">Chat on WhatsApp</a>`);
    save()
}
function home() { $('#feat').innerHTML = P.filter(p => [1, 5, 6, 11].includes(p.id)).map(card).join(''); $('#cats').innerHTML = CATS.map(c => { const p = P.find(x => x.cat == c[0]); return `<a class="cat" href="shop.html?cat=${c[0]}"><div class="sw" style="background:${p.bg}"></div><div><h3>${c[0]}</h3><p>${c[1]}</p></div></a>` }).join('') }
function shop() {
    let cat = new URLSearchParams(location.search).get('cat') || 'All';
    const chips = $('#chips'), q = $('#q'), s = $('#so');
    const draw = () => {
        chips.innerHTML = ['All', ...CATS.map(c => c[0]), 'Saved'].map(c => `<button class="chip ${c == cat ? 'on' : ''}" data-c="${c}">${c}</button>`).join('');
        let l = P.filter(p => (cat == 'All' || (cat == 'Saved' ? W.includes(p.id) : p.cat == cat)) && p.name.toLowerCase().includes(q.value.toLowerCase()));
        if (s.value == 'lo') l.sort((a, b) => a.price - b.price); if (s.value == 'hi') l.sort((a, b) => b.price - a.price);
        $('#list').innerHTML = l.length ? l.map(card).join('') : '<p class="empty" style="grid-column:1/-1">Nothing here yet. Save products with the heart icon, or try another category or keyword.</p>'
    };
    chips.onclick = e => { if (e.target.dataset.c) { cat = e.target.dataset.c; draw() } }; q.oninput = s.onchange = draw; draw()
}
function product() {
    const p = get(new URLSearchParams(location.search).get('id')) || P[0]; let n = 1, ci = 0, si = 0; document.title = p.name + ' | ' + C.name;
    const cols = COL[p.cat], sz = OPT[p.cat], v = () => vtxt(cols[ci][0], sz && sz[si]);
    const r = () => $('#pd').innerHTML = `<div class="sw" style="background:${p.bg}"></div><div><p class="bc"><a href="shop.html">Shop</a> / <a href="shop.html?cat=${p.cat}">${p.cat}</a></p><h1>${p.name}</h1><div class="pr">${fmt(p.price)} <span style="font-weight:400;font-size:15px;color:var(--mut)">/ ${p.unit}</span></div><p class="lead">${p.d}</p>
<p class="ol">Colour: <b>${cols[ci][0]}</b></p><div class="dots">${cols.map((c, i) => `<button class="dot ${i == ci ? 'on' : ''}" data-ci="${i}" aria-label="${c[0]}" style="background:${c[1]}"></button>`).join('')}</div>
${sz ? `<p class="ol">Size: <b>${sz[si]}</b></p><div class="dots">${sz.map((s, i) => `<button class="chip ${i == si ? 'on' : ''}" data-si="${i}">${s}</button>`).join('')}</div>` : ''}
<div class="acts" style="margin:22px 0"><div class="qty"><button data-n="-1" aria-label="Less">−</button><span>${n}</span><button data-n="1" aria-label="More">+</button></div><button class="btn" data-add="${p.id}" data-q="${n}" data-v="${v()}">Add to cart</button><a class="btn w" target="_blank" rel="noopener" href="${wa(`Hello ${C.name}, I'd like to order ${n} x ${p.name} (${v()}) at ${fmt(p.price)} per ${p.unit}.`)}">Order on WhatsApp</a></div>
<details open><summary>Details</summary><p>${p.d} Bulk and wholesale pricing on request.</p></details><details><summary>Delivery</summary><p>Lagos deliveries in 1 to 2 days. Nationwide in 3 to 5 days. Free in Lagos above ${fmt(FREE)}.</p></details><details><summary>Swatches and returns</summary><p>Ask for a free swatch on WhatsApp before you buy. Unopened items can be exchanged within 7 days.</p></details></div>`;
    r(); $('#pd').onclick = e => { const d = e.target.dataset; if (d.n) n = Math.max(1, n + +d.n); else if (d.ci) ci = +d.ci; else if (d.si) si = +d.si; else return; r() };
    $('#rel').innerHTML = P.filter(x => x.cat == p.cat && x.id != p.id).slice(0, 4).map(card).join('')
}
function cartPg() {
    const draw = () => {
        const L = CART.map(i => ({ ...get(i.id), q: i.q, v: i.v })), tot = L.reduce((a, i) => a + i.price * i.q, 0);
        if (!L.length) { $('#cart').innerHTML = '<div class="empty" style="grid-column:1/-1"><p>Your cart is empty.</p><br><a class="btn" href="shop.html">Browse the shop</a></div>'; return }
        const left = FREE - tot;
        $('#cart').innerHTML = `<div>${L.map((i, k) => `<div class="row"><div class="sw" style="background:${i.bg}"></div><div><h3>${i.name}</h3><small>${i.v} · ${fmt(i.price)} / ${i.unit}</small><br><button class="rm" data-rm="${k}">Remove</button></div><div class="qty"><button data-m="${k}" data-d="-1" aria-label="Less">−</button><span>${i.q}</span><button data-m="${k}" data-d="1" aria-label="More">+</button></div></div>`).join('')}</div>
<div class="sum"><h3>Order summary</h3><div class="t"><span>Total</span><span>${fmt(tot)}</span></div><div class="bar"><i style="width:${Math.min(100, tot / FREE * 100)}%"></i></div><small style="color:var(--mut)">${left > 0 ? `Add ${fmt(left)} more for free delivery in Lagos.` : 'You qualify for free delivery in Lagos.'}</small><input id="nm" placeholder="Your name"><input id="ad" placeholder="Delivery address"><button class="btn w" id="co">Send order on WhatsApp</button></div>`;
        $('#co').onclick = () => { const t = `Hello ${C.name}, I'd like to place an order:\n` + L.map(i => `- ${i.q} x ${i.name} (${i.v}) ${fmt(i.price * i.q)}`).join('\n') + `\nTotal: ${fmt(tot)}\nName: ${$('#nm').value || '-'}\nAddress: ${$('#ad').value || '-'}`; window.open(wa(t), '_blank') }
    };
    $('#cart').onclick = e => { const d = e.target.dataset; if (d.rm) CART.splice(+d.rm, 1); if (d.m) CART[+d.m].q = Math.max(1, CART[+d.m].q + +d.d); save(); draw() }; draw()
}
function contact() { $('#cf').onsubmit = e => { e.preventDefault(); const f = new FormData(e.target); window.open(wa(`Hello ${C.name}, my name is ${f.get('n')}. ${f.get('m')}`), '_blank') } }
document.addEventListener('click', e => { const w = e.target.closest('[data-wish]'); if (w) { const id = +w.dataset.wish; W = W.includes(id) ? W.filter(x => x != id) : [...W, id]; try { localStorage.setItem('mane-w', JSON.stringify(W)) } catch (x) { } w.classList.toggle('on'); toast(W.includes(id) ? 'Saved to your list' : 'Removed from your list'); return } const b = e.target.closest('[data-add]'); if (b) add(b.dataset.add, +b.dataset.q || 1, b.dataset.v) });
layout(); ({ index: home, shop, product, cart: cartPg, contact })[page]?.();