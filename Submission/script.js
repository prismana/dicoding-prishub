const p = document.createElement('p');
p.innerHTML = 'tes';

const buttons = document.querySelectorAll('button');

buttons[0].addEventListener('click', () => {
    console.log('Button ke-4 clicked');
})