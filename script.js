const containter = document.querySelector('.container');
for (i=0; i<256; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    containter.appendChild(square);
}
containter.classList.add('grid');