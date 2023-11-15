let imgs = document.querySelectorAll('.image');
let aside = document.querySelector('.aside');
let asideText = document.querySelector('#aside-texto');
let asideImage = document.querySelector('#img-aside');

imgs.forEach(image => {
    image.addEventListener('click', () => {
        let text = image.getAttribute('data-text');
        let src = image.getAttribute('data-src');
        asideText.textContent = text;
        asideImage.setAttribute('src', src);
        aside.classList.add('active');
    });
});

aside.addEventListener('click', () => {
    aside.classList.remove('active');
});