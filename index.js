import{a as m,S as f,i as a}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",g="50608541-859a2339eccb527f555031f69";async function y(s){const r={key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await m.get(p,{params:r})).data}function h(s){return s.map(r=>{const{webformatURL:o,largeImageURL:n,tags:e,likes:t,views:i,comments:u,downloads:d}=r;return`
      <li class="gallery-item">
        <a href="${n}">
          <img src="${o}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${t}</p>
          <p><b>Views:</b> ${i}</p>
          <p><b>Comments:</b> ${u}</p>
          <p><b>Downloads:</b> ${d}</p>
        </div>
      </li>
    `}).join("")}const b=document.querySelector("form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader"),L=new f(".gallery a");b.addEventListener("submit",async s=>{s.preventDefault();const r=s.target.elements.searchQuery.value.trim();if(!r){a.warning({message:"Please enter a search query!",position:"topRight"});return}c.innerHTML="",l.classList.remove("hidden");try{const o=await y(r);if(o.hits.length===0){a.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}c.innerHTML=h(o.hits),L.refresh()}catch{a.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{l.classList.add("hidden")}});
//# sourceMappingURL=index.js.map
