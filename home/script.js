const nav = document.querySelector('.header__list');
const header = document.querySelector('.header')
const burger = document.querySelector('.header__burger');
const body = document.querySelector('body')

burger.addEventListener('click', () => {
  if (window.innerWidth > 840) return
  nav.classList.toggle('active')
  header.classList.toggle('active')
  body.classList.toggle('overflow')
})

header.addEventListener('click', (event) => {
  if (window.innerWidth > 840) return
  if(event.target.matches('.header__link')) {
    nav.classList.toggle('active')
    header.classList.toggle('active')
    body.classList.toggle('overflow')
  }
})

document.addEventListener('keydown', (event) => {
  if (window.innerWidth > 840) return
  if(event.key === 'Escape') {
    nav.classList.remove('active')
    header.classList.remove('active')
    body.classList.remove('overflow')
  }
})
