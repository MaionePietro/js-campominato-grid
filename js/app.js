let latoGriglia = 10
let numeroCelle = latoGriglia * latoGriglia

const preGame = document.querySelector('section');
const inGame = document.querySelector('section:last-child')
const grigliaElement = document.querySelector('.griglia')
const btnElement = document.querySelector('.btn');
const clickElement = document.querySelectorAll('.cella');

btnElement.addEventListener('click', function (){
    preGame.classList.remove('active');
    inGame.classList.add('active');
})

for (let i = 0; i < numeroCelle; i++) {
    let num = i + 1;
    let divString = `<div class="cella" style="width: calc(100% / ${latoGriglia});">${num}</div>`;
    grigliaElement.innerHTML += divString;
}

clickElement.addEventListener('click', function (){
    console.log('ciao');
})
