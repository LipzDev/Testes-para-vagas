export default function initHeaderEfect(){
   const header = document.querySelector('.header');

function showHeader(){
   if(window.scrollY > 0){
      header.classList.add('header-ativo');
   } else {
      header.classList.remove('header-ativo');
   }

};

window.addEventListener('scroll', showHeader);
}
