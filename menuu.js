
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})


ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 

});

ScrollReveal().reveal('.topo-do-site, .cabecalho', { origin: 'top' });
ScrollReveal().reveal('.img-topo-site, .habilidades, .contacto form', { origin: 'bottom' });
ScrollReveal().reveal('.txt-topo-site, .sobre-img, .img-port', { origin: 'left' });
ScrollReveal().reveal('.txt-topo-site p, .sobre-txt', { origin: 'right' });