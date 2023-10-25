let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.left-side');

menu.onclick = () => {
    menu.classList.toggle('fa-x');
    navbar.classList.toggle('open');
}

let modalidade = document.querySelector('.modalidade');

