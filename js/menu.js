let menuBtn = document.querySelector('.hamb')
const menuReduzido = document.querySelector('.menu-reduzido')
const hambBtn = document.querySelector('.menu-hamb-icon')
const fecharBtn = document.querySelector('.menu-x-icon')
const menuLinks = document.querySelectorAll('.menu-link')

menuBtn.addEventListener('click', () => {
  if (menuReduzido.classList.contains('menu-reduzido--active')) {
    menuReduzido.classList.remove('menu-reduzido--active')
  } else {
    menuReduzido.classList.add('menu-reduzido--active')
  }
  if (hambBtn.classList.contains('d-none')) {
    hambBtn.classList.add('rotate-in')
    hambBtn.classList.remove('d-none')
    fecharBtn.classList.add('d-none')
  } else {
    hambBtn.classList.add('d-none')
    fecharBtn.classList.remove('d-none')

  }
})

for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener('click', () => {
    menuReduzido.classList.remove('menu-reduzido--active')
    hambBtn.classList.remove('d-none')
    fecharBtn.classList.add('d-none')
  })
}

// ---
// const headerLogoConatiner = document.querySelector('.header__logo-container')

// headerLogoConatiner.addEventListener('click', () => {
//   location.href = 'index.html'
// })
