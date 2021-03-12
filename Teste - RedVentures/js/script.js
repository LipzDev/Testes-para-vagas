async function getContent() {
   let sun = document.querySelector("#sun");
   let water = document.querySelector("#water");
   let pet = document.querySelector("#pet");

   // SHOW ICONS

   try {
     const response = await fetch(
       `https://front-br-challenges.web.app/api/v2/green-thumb/?sun=${sun.value}&water=${water.value}&pets=${pet.value}`
     );
     const data = await response.json();
     show(data);
   } catch (error) {
     console.error(error);
   }
 }

 function show(dados) {
   let output = "";

   for (let dado of dados) {
     // CRIA OS BOX NO HTML COM OS DADOS DA API

     //Tratamento para o item pet
     let animal = "";

     if (pet.value == true || dado.toxicity == false) {
       animal = "images/icons/pet.svg";
     } else {
       animal = "images/icons/toxic.svg";
     }

     //Tratamento para o item sun
     let sol = "";

     if (sun.value == "high") {
       sol = "images/icons/HighSun.svg";
     } else if (sun.value == "low") {
       sol = "images/icons/low-sun.svg";
     } else {
       sol = "images/icons/no-sun.svg";
     }

     //Tratamento para o item water
     let agua = "";

     if (water.value == "regularly") {
       agua = "images/icons/3-drops.svg";
     } else if (water.value == "daily") {
       agua = "images/icons/2-drops.svg";
     } else {
       agua = "images/icons/1-drop.svg";
     }

     output += `
     <div class="item">
     <img src="${dado.url}" alt="Imagem 2">

     <div class="card-text-2">
       <div class="card-name-2">
         <p>${dado.name}</p>
         <span>$${dado.price}</span>
       </div>

         <div class="icon-2">
           <img src="${animal}" />
           <img src="${sol}" alt="Icone" />
           <img src="${agua}" alt="Icone" />
         </div>
     </div>
   </div>`;
   }

   document.querySelector(".shop--grid").innerHTML = output;
 }

 // FUNÇÃO DE RECARREGAR A PAGINA

 function reload() {
   window.location.reload();
 }

 // FUNÇÃO PARA O BOTÃO BACK

 const button = document.querySelectorAll('.button--return a[href^="#"');
 const arrow = document.querySelectorAll('.bg__text a[href^="#"');

 function ScrollSection(event) {
   event.preventDefault();
   const href = event.currentTarget.getAttribute("href");
   const section = document.querySelector(href);
   const top = section.offsetTop;
   window.scrollTo({
     top: top,
     behavior: "smooth"
   });
 }

 button.forEach((link) => {
   link.addEventListener("click", ScrollSection);
 });

 arrow.forEach((link) => {
   link.addEventListener("click", ScrollSection);
 });