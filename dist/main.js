(()=>{"use strict";const n="eyJhbGciOiJIUzI1NiIsInR 5cCI6IkpXVCJ9. eyJfaWQiOiI2NDcyZTJhMDViODE4OD AwMTk1ZTgxMmEiLCJpYXQiOjE2ODUy NTA3MjB9. nRlNqnbmauv5Wk4BiMUbqUR1nqaSTD GJX-YALtHO7JU",a=async a=>{const e=a?`${n} ${a}`:"https://coding-challenge-api.aerolab.co/products";try{return(await fetch(e,{headers:{Authorization:`Bearer ${n}`}})).json()}catch(n){console.log("fetch error!",n)}},e=()=>'\n        <div class="Error404">\n            <h2>Error 404</h2>\n        </div>  \n    ',r=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",t={"/":async()=>`\n       <div class = "product">\n        ${(await a()).map((n=>`\n            <article class = "product-items">\n\n            //el hash esta encerrado dentro de una etiqueta ancord para q nos permita cliquear cada una de esas card e irnos a una ruta\n                <a href="#/${n.id}/">\n\n                    <img src="${n.img.url}" alt= "${n.name}">\n                    <h2>${n.name}</h2>\n                </a>\n            </article>\n            `)).join("")} //esto genera un bloque de html que debemos unir y lo hacemos con un join, con las comillas separamos\n            \n       </div>\n    `,"/:id":async n=>{const a=await(n=>{const a=r();return n.find((n=>n._id===a))||null})(n);return console.log(a),a?`\n\n         <div class = "Productos-inner">\n            <article class = "Products-card">\n                <img src="${a.image.url}" alt="${a.name}">  \n                <h2>${a.name}</h2>\n            </article>\n\n            <article class = "Products-card">\n            <h3> name: <span>${a.name}</span></</h3>\n            <h3> cost: <span>${a.cost}</span></</h3>\n            <h3> category: <span>${a.category}</span></h3>\n            \n            </article>\n        </div>  \n        `:'\n        <div class="Error404">\n            <h2>Error 404</h2>\n        </div>  \n    '}},s=async()=>{const n=await a,s=document.getElementById("header"),c=document.getElementById("content");s.innerHTML=await'\n        <div class="Header-main">\n                <h1>Electronics</h1>\n        </div>   \n    ';let i=r(),o=await(n=>n.length<=3?"/"===n?n:"/:id":`/${n}`)(i),d=t[o]?t[o]:e;c.innerHTML=await d(n)};window.addEventListener("load",s),window.addEventListener("hashchange",s)})();