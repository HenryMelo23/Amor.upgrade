const header = document.querySelector('.header')
const icon = document.querySelector('.icon')
const nav = document.querySelector('nav')
const texto = document.querySelector('.texto')
const conteiner = document.querySelector('.conteiner')
const body= document.querySelector('body')


icon.addEventListener('click',()=> {
    header.classList.toggle('dark');
    icon.classList.toggle('dark');
    nav.classList.toggle('dark');
    texto.classList.toggle('dark');
    conteiner.classList.toggle('dark');
    body.classList.toggle('dark');
})