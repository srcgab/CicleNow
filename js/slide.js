let list = document.querySelector('.slides-container .slide-content');
let items = document.querySelector('.slides-container .slide-content .slide');
let navs = document.querySelectorAll('.slides-container .slides-nav li');
let prev = document.getElementById('.prev');
let next = document.getElementById('.next');
let active = 0;
let lengthItems = items.length - 1;

next.onclick = function() {
    if(active + 1 > lengthItems) {
        active = 0;
    } else {
        active = active++;
    }   
    reloadSlide();
}

prev.onclick = function () {
    if(active - 1 < 0) {
        active = lengthItems;
    } else {
        active = active--;
    }
    reloadSlide();
}

let refreshSlide = setInterval(() => {
    next.click()
}, 5000);

function reloadSlide() {
    list.style.left = -items[active].offsetLeft;

    let lastActiveNav = document.querySelector('.slides-container .slides-nav li.active');
    lastActiveNav.classList.remove('active');
    navs[active].classList.add('active');
    clearInterval(refreshSlide);
    refreshSlide = setInterval(() => { 
        next.click()  
    }, 3000);
}

navs.forEach((li, key ) => {
    li.addEventListener('click', function () {
        active = key;
        reloadSlide();
    })
})