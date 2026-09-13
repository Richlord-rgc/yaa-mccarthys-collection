const wa = "233550122057";
const grid = document.getElementById("products");
const buttons = document.querySelectorAll(".categories button");

function money(p){
  return p && p > 0 ? `GHS ${Number(p).toLocaleString()}` : "Price on WhatsApp";
}
function whatsapp(p){
  const price = p.price > 0 ? ` — GHS ${p.price}` : "";
  const text = `Hello Yaa McCarthy's Collection, I'm interested in ${p.name}${price}. Please send me availability and details.`;
  return `https://wa.me/${wa}?text=${encodeURIComponent(text)}`;
}
function render(category="all"){
  const list = category==="all" ? products : products.filter(p=>p.category===category);
  grid.innerHTML = list.map(p=>`
    <article class="card">
      <div class="photo">
        ${p.image ? `<img src="${p.image}" alt="${p.name}">` : `<div class="placeholder">YM<br><small>PRODUCT PHOTO</small></div>`}
      </div>
      <div class="info">
        <div class="tag">${p.category}</div>
        <div class="name">${p.name}</div>
        <div class="desc">${p.description}</div>
        <div class="price ${p.price>0?'':'contact-price'}">${money(p.price)}</div>
        <a class="order" href="${whatsapp(p)}" target="_blank" rel="noopener">ORDER ON WHATSAPP</a>
      </div>
    </article>
  `).join("");
}
buttons.forEach(btn=>{
  btn.addEventListener("click",()=>{
    buttons.forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    render(btn.dataset.category);
  });
});
render();
