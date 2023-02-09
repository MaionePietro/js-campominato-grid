
const preGame = document.querySelector('section');
const inGame = document.querySelector('section:last-child')

const btnElement = document.querySelector('.btn');

btnElement.addEventListener('click', function (){
    preGame.classList.remove('active');
    inGame.classList.add('active');
})
