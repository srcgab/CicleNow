let list = document.querySelector('.slides-container .slide-content');
let items = document.querySelectorAll('.slides-container .slide-content .slide');
let navs = document.querySelectorAll('.slides-container .slides-nav li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let active = 0;

let lengthItems = items.length - 1;

next.onclick = function() {
    if(active + 1 <= lengthItems) {
        active++;
    } else {
        active = 0;
    }   
    reloadSlide();
}

prev.onclick = function () {
    if(active - 1 >= 0) {
        active--;
    } else {
        active = lengthItems;
    }
    reloadSlide();
}

let refreshInterval = setInterval(()=> {
    next.click()
}, 3000);

function reloadSlide() {
    list.style.left = -items[active].offsetLeft + 'px';

    let lastActiveNav = document.querySelector('.slides-container .slides-nav li.active');
    lastActiveNav.classList.remove('active');
    navs[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => { 
        next.click()  
    }, 3000);
}

navs.forEach((li, key ) => {
    li.addEventListener('click', () => {
        active = key;
        reloadSlide();
    })
})

let refreshSlide = setInterval(() => {
    next.click()
}, 3000);