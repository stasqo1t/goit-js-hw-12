import{a as v,S as x,i}from"./assets/vendor-DQvd0HNi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const q="https://pixabay.com/api/",M="55065656-85ede50aef63e79db30190b1f",R=15;async function g(n,t){const o={key:M,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:R};return(await v.get(q,{params:o})).data}const y=document.querySelector(".gallery"),c=document.querySelector(".loader"),L=document.querySelector(".load-more-btn"),$=new x(".gallery a",{captionsData:"alt",captionDelay:250});function b(n){const t=n.map(({webformatURL:o,largeImageURL:s,tags:e,likes:r,views:l,comments:E,downloads:S})=>`
        <li class="gallery-item">
          <a href="${s}">
            <img src="${o}" alt="${e}" loading="lazy" />
          </a>
          <ul class="info">
            <li>
              <span>Likes</span>
              <span>${r}</span>
            </li>
            <li>
              <span>Views</span>
              <span>${l}</span>
            </li>
            <li>
              <span>Comments</span>
              <span>${E}</span>
            </li>
            <li>
              <span>Downloads</span>
              <span>${S}</span>
            </li>
          </ul>
        </li>`).join("");y.insertAdjacentHTML("beforeend",t),$.refresh()}function B(){y.innerHTML=""}function w(){c.textContent="Loading images, please wait...",c.classList.add("visible")}function u(){c.classList.remove("visible"),c.textContent=""}function m(){L.classList.remove("is-hidden")}function d(){L.classList.add("is-hidden")}const P=document.querySelector(".form"),W=P.elements["search-text"],A=document.querySelector(".load-more-btn");let h="",a=1,p=0;const f=15;P.addEventListener("submit",O);A.addEventListener("click",_);async function O(n){n.preventDefault();const t=W.value.trim();if(!t){i.warning({title:"Warning",message:"Please enter a search query",position:"topRight"});return}h=t,a=1,B(),d(),w();try{const o=await g(h,a);if(u(),!o.hits||o.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:432});return}p=o.totalHits,b(o.hits);const s=Math.ceil(p/f);a<s?m():(d(),i.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight",maxWidth:432}))}catch(o){u(),i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight",maxWidth:432}),console.error(o)}}async function _(){a+=1,d(),w();try{const n=await g(h,a);u(),b(n.hits);const t=document.querySelector(".gallery-item");if(t){const{height:s}=t.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}const o=Math.ceil(p/f);a<o?m():(d(),i.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight",maxWidth:432}))}catch(n){u();const t=Math.ceil(p/f);a<t&&m(),i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight",maxWidth:432}),console.error(n)}}
//# sourceMappingURL=index.js.map
