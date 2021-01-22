export default function initMenuMobile(){
   const icon = document.querySelector('.icon');
   const menuM = document.querySelector('.menu-mobile');
   const menuList = document.querySelectorAll('.menu-mobile li');

   function menuEvent(){
      icon.classList.toggle('icon-x');
      menuM.classList.toggle('actived');
   }

   icon.addEventListener('click', menuEvent);

   // EVENTO QUE FECHA O MENU MOBILE QUANDO CLICA NA LISTA

   menuList.forEach((e) => {
      e.addEventListener('click', menuEvent);
   });
}