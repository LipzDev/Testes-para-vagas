function menuMobileInit(){
    const icon = document.querySelector('.icon');
    const menu = document.querySelector('.menu');

    function openMenu(){
        icon.classList.toggle('icon-x');
        menu.classList.toggle('ativo');
    }

    icon.addEventListener('click', openMenu);
}

menuMobileInit();


// MODAL VIDEO

function modalInit(){
    const video = document.querySelector('.video-item img');
    const modal = document.querySelector('.modal');

    function openModal(){
        modal.classList.toggle('ativaModal');
    }

    video.addEventListener('click', openModal);


    // FECHAR MODAL


    const fecharModal = document.querySelector('.modal');

    function closeModal(){
        modal.classList.remove('ativaModal');
    }

    fecharModal.addEventListener('click', closeModal)

}

modalInit();


// SCROLL TO SECTION

const linksInternos = document.querySelectorAll('.menu a[href^="#"');
const arrow = document.querySelectorAll('.arrow a[href^="#"');

function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const topo = section.offsetTop;
    window.scrollTo({
        top: topo,
        behavior: "smooth",
    });
}


linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
});

arrow.forEach((link) => {
    link.addEventListener('click', scrollToSection);
});