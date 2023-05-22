let styleRepository=function(){let e=[];function t(e){let t=document.querySelector(".style__list"),i=document.createElement("li"),l=document.createElement("button");l.setAttribute("data-toggle","modal"),l.setAttribute("data-target","#modal-container");let s=e.name.charAt(0).toUpperCase()+e.name.slice(1);l.innerText=s,l.classList.add("style-button","btn","show-modal"),i.classList.add("list-group-item"),i.appendChild(l),t.appendChild(i),n(l,e)}function n(e,t){e.addEventListener("click",function(){i(t)})}function i(e){d(e).then(function(){a(e)})}let l=document.querySelector(".style__list"),s=document.querySelector("#modal-container"),o;function a(e){styleRepository.loadDetails(e).then(function(){s.innerHTML="";let t=document.createElement("div");t.classList.add("modal");let n=document.createElement("h1"),i=e.name.charAt(0).toUpperCase()+e.name.slice(1);n.innerText=i;let l=document.createElement("img");l.src=e.imageUrl,l.classList.add("pokemon-img");let o=document.createElement("p");o.innerText="Height: "+e.height;let a=document.createElement("button");a.classList.add("modal-close"),a.setAttribute("data-dismiss","modal"),a.innerText="Close",a.addEventListener("click",r),t.appendChild(n),t.appendChild(l),t.appendChild(o),t.appendChild(a),s.appendChild(t),s.classList.add("is-visible")})}function r(){s.classList.remove("is-visible"),s.classList.remove("show"),o&&(o(),o=null)}function c(){return e}function d(e){return fetch(e.detailsUrl).then(function(e){return e.json()}).then(function(t){e.imageUrl=t.sprites.front_default,e.height=t.height,e.types=t.types}).catch(function(e){console.error(e)})}return window.addEventListener("keydown",e=>{"Escape"===e.key&&l.classList.contains("is-visible")&&r()}),s.addEventListener("click",e=>{e.target===l&&r()}),{add:function t(n){"object"==typeof n?e.push(n):console.log("Incorrect style")},getAll:c,addListItem:t,showDetails:i,addButtonListener:n,loadList:function e(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then(function(e){return e.json()}).then(function(e){e.results.forEach(function(e){t({name:e.name,detailsUrl:e.url})})}).catch(function(e){console.error(e)})},loadDetails:d,showModal:a}}();console.log(styleRepository.getAll()),console.log(styleRepository.styleList),styleRepository.loadList().then(function(){styleRepository.getAll().forEach(function(e){styleRepository.addListItem(e)})});