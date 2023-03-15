const openBtn = document.querySelector('.navbar-toggler');
const closeBtn = document.querySelector('.closeIcon');
const menu = document.querySelector('.phoneMenu');

openBtn.addEventListener('click', ()=>{
    menu.classList.remove('d-none');
    menu.classList.add('d-block');
    menu.classList.add('animationOpen');
})

closeBtn.addEventListener('click', ()=>{
    menu.classList.remove('animationOpen');
    menu.classList.add('animationClose');
    setTimeout(() => {
        menu.classList.remove('d-block');
        menu.classList.add('d-none');
        menu.classList.remove('animationClose');
    }, 500);
})


