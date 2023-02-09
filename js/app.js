
const visibleElement = document.querySelector('section');

const btnElement = document.querySelector('.btn');

btnElement.addEventListener('click', function (){
    visibleElement.classList.remove('active');
})
