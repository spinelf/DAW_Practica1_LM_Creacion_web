// MENU JS PARA MOVIL Y TABLET

const mainMenu = document.querySelector('.page__menu__list');
const closeMenu = document.querySelector('.page__menu__closeMenu');
const openMenu = document.querySelector('.page__menu__openMenu');
const menu_items = document.querySelectorAll('.page__menu .page__menu__list li a');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click', function () {
        close();
    })
})

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close() {
    mainMenu.style.top = '-100%';
}

// FORMULARIO JS PARA QUE FUNCIONE EL BOTÓN DE ENVIAR

const form = document.querySelector('.js-form');
const formSubmitButton = document.querySelector('.js-submit');
const formResetButton = document.querySelector('.js-reset');
const userEmail = document.getElementById('email'); //ver esto

function sendEmail(e) {
    e.preventDefault()
}

function resetForm() {
    form.reset()
}

formSubmitButton.addEventListener('click', sendEmail);
formResetButton.addEventListener('click', resetForm);