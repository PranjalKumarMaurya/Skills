// change navbar on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 170)
})

//show hidden faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change plus icon
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = 'uil uil-angle-down';
        }
        else icon.className = 'uil uil-plus';     
    })
})

// show/hide nav menu

const menu = document.querySelector(".nav__menu");
const menubutton = document.querySelector("#open-menu-button");
const menuclose = document.querySelector("#close-menu-button");

menubutton.addEventListener('click', () => {
    menu.style.display = 'flex';
    menuclose.style.display = 'inline-block';
    menubutton.style.display = 'none';
})

const closenav = () => {
    menu.style.display = 'none';
    menuclose.style.display = 'none';
    menubutton.style.display = 'inline-block';
}
menuclose.addEventListener('click', closenav)