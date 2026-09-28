const nav = document.querySelector('.header__list');
const header = document.querySelector('.header')
const burger = document.querySelector('.header__burger');
const body = document.querySelector('body')

burger.addEventListener('click', () => {
  nav.classList.toggle('active')
  header.classList.toggle('active')
  body.classList.toggle('overflow')
})

header.addEventListener('click', (event) => {
  if(event.target.matches('.header__item')) {
    alert('хуй')
    nav.classList.toggle('active')
    header.classList.toggle('active')
    body.classList.toggle('overflow')
  }
})

document.addEventListener('keydown', (event) => {
  if(event.key === 'Escape') {
    nav.classList.toggle('active')
    header.classList.toggle('active')
    body.classList.toggle('overflow')
  }
})