(()=>{"use strict";const e=()=>{const e=document.querySelector("#content"),t=document.createElement("img");t.classList.add("logo"),t.src="../src/img/logo.webp";const n=document.createElement("img");n.classList.add("homepage-ad"),n.src="../src/img/homepage-ad.jpg";const i=document.createElement("div");i.classList.add("navbar"),i.appendChild(t),i.appendChild(n);const a=document.createElement("div");a.classList.add("promise-container");const o=document.createElement("h2");o.classList.add("promise-title"),o.textContent="Our Promise to You";const c=document.createElement("div");c.classList.add("promise-list");const d=document.createElement("ul");d.innerHTML="<h3>Cock a doodle do's</h3><br><ul><li>Since 1982. Cluckin' Bell has been leading the way in providing billions of chickens with a very happy resting place - your stomach! Using our uniquely humane way of factory farming them, we can provide you with the cheapest, most satisfying fried chicken around!</li><br><li>Using our patented herby feed, the chickens are effectively being marinated from the day they are born. All to bring the taste all the way to your plate. Cock A Doodle Do!</li><br><li>Our chickens don't die in vain. Guaranteed!</li></ul><br><h3>Cock a doodle don'ts</h3><br><ul><li>No Cluckin' Bell chicken ever saw the light of day, so they don't know what they are missing!</li><br><li>Unlike other chains, our chickens WANT to be deep fried at a young age!</li><br><li>Our deep fried chicken is healthy, especially for girls hitting puberty!</li></ul>",c.appendChild(d),a.appendChild(o),a.appendChild(c);const l=document.createElement("div");l.classList.add("main-container"),l.appendChild(i),l.appendChild(a),e.appendChild(l)};function t(){alert("triggering clear contnt");const e=document.querySelector("#content"),t=document.querySelector(".main-container");t&&e.removeChild(t)}((()=>{const n=document.querySelector("#content"),i=document.createElement("button"),a=document.createElement("button"),o=document.createElement("button");i.textContent="Home",a.textContent="Menu",o.textContent="About",i.classList.add("navbar-btn-left"),a.classList.add("navbar-btn-middle"),o.classList.add("navbar-btn-right");const c=document.createElement("div");c.classList.add("btnContainer"),c.appendChild(i),c.appendChild(a),c.appendChild(o),i.addEventListener("click",(()=>{t(),e()})),a.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("main-container");const n=document.createElement("img");n.classList.add("menu-img"),n.src="../src/img/menu.png",t.appendChild(n),e.appendChild(t)})()})),o.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("main-container");const n=document.createElement("div");n.classList.add("promise-container2");const i=document.createElement("h2");i.classList.add("promise-title"),i.textContent="Legal/Disclaimer";const a=document.createElement("div");a.classList.add("promise-list2");const o=document.createElement("p");o.innerHTML="Cluckin' Bell bears no responsibility for any of the following side effects from eating our chicken - mammary gland swelling (in Cluckin' Bell versus the state of Ohio, 1994, it was proven that the link could not be established), erectile dysfunction (in a landmark case in Mexico City last month, the judge was killed so the case was thrown out of court. COck a Doodle DO!), hair loss (you're bald, lady - chicken's have feathers - don't blame us!), heart disease, brain shrinkage, obesity, stomach ulcers, blindness or teenage acne. <br><br> Cluckin' Bell recommens a healthy, mixed diet with lots of excercise. Just because our food is cheap and full of addictive chemicals, doesn't mean you should eat it all of the time. If you do, that's your look out. Guaranteed!",a.appendChild(o),n.appendChild(i),n.appendChild(a),t.appendChild(n),e.appendChild(t)})()})),n.appendChild(c)})(),void e())()})();