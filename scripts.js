const para = document.querySelector('.pX');
let count = 0;

const decBtn = document.querySelector('.decBtn');
const resBtn = document.querySelector('.resBtn');
const incBtn = document.querySelector('.incBtn');

function decreaseCount(){
    count--;
    para.textContent = count;
    para.style.color = '#DB0F00';
}

function resetCount(){
    count = 0;
    para.textContent = count;
    para.style.color = 'black';
}

function increaseCount(){
count++;
para.textContent = count;
para.style.color = '#237A78';
}


decBtn.addEventListener('click', decreaseCount);
resBtn.addEventListener('click', resetCount);
incBtn.addEventListener('click', increaseCount);