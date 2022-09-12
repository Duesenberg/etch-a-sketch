const containter = document.querySelector('.grid-container');
let gSize = document.getElementById('size-input').value; //get initial gSize val
let mouseDown = 0; //changes value to 1 or 0 whether mouse is clicked or not

//change whether mouseDown is 1/0 whether mouse is clicked or not
const body = document.querySelector('body');
body.addEventListener('mousedown', () => {
    mouseDown = 1;
})
body.addEventListener('mouseup', () => {
    mouseDown = 0;
})

//function for creating a n x n grid
function createGrid () {
    const input = document.getElementById('size-input').value;
    if (input <= 64) {
        //loop for creating squares
        for (i=0; i<(gSize ** 2); i++) {
            gSize = document.getElementById('size-input').value; //read new gSize val
            const square = document.createElement('div');
            square.setAttribute('ondragstart', 'return false;');
            square.setAttribute('ondrop', 'return false;')
            square.classList.add('square');
            containter.appendChild(square);
        }
    } else alert('Maximum size of canvas can be 64X64.');
    //adding grid display style to container
    containter.style.display = 'grid';
    containter.style.gridTemplateRows = 'repeat('+gSize+', 1fr)';
    containter.style.gridTemplateColumns = 'repeat('+gSize+', 1fr)';
    let sqr = document.querySelectorAll('.square');
    sqr.forEach((div) => {
        div.style.backgroundColor = 'white';
    })

}

//function for clearing grid, turning all squares white
function clearGrid () {
    //animate button selection
    clrButton = document.querySelector('.clear-button');
    clrButton.classList.add('selected');
    setTimeout(function () {
        clrButton.classList.remove('selected');
    }, 100);
    //turn all squares white
    let sqr = document.querySelectorAll('.square');
    sqr.forEach((div) => {
        div.style.backgroundColor = 'white';
    })
}

//first clear all squares, then draw on them if mouseDown = 1.
//invoked when page loads, and when changing grid size
function draw () {
    let sqr = document.querySelectorAll('.square');
    const pencil = document.querySelector('.pencil');
    pencil.classList.add('selected');
    sqr.forEach((div) => {
        div.addEventListener('mouseover', () => {
            if (mouseDown == 1) {
                //take color from color picker and paint the square
                const color = document.getElementById('color-picker').value;
                div.style.backgroundColor = color;
            } else {}
        });
})
}

//drawing with the pencil. invoked when tool selected
function drawPencil () {
    const pencil = document.querySelector('.pencil');
    pencil.classList.add('selected');
    const eraser = document.querySelector('.eraser');
    eraser.classList.remove('selected');
    const rainbow = document.querySelector('.rainbow');
    rainbow.classList.remove('selected');
    let sqr = document.querySelectorAll('.square');
    sqr.forEach((div) => {
        div.addEventListener('mouseover', () => {
            if (mouseDown == 1) {
                //take color from color picker and paint the square
                const color = document.getElementById('color-picker').value;
                div.style.backgroundColor = color;
            } else {}
        });
})
}

//turning squares white, giving effect of eraser. invoked when tool selected
function eraser () {
    const pencil = document.querySelector('.pencil');
    pencil.classList.remove('selected');
    const eraser = document.querySelector('.eraser');
    eraser.classList.add('selected');
    const rainbow = document.querySelector('.rainbow');
    rainbow.classList.remove('selected');
    let sqr = document.querySelectorAll('.square');
    sqr.forEach((div) => {
        div.addEventListener('mouseover', () => {
            if (mouseDown == 1) {
                div.style.backgroundColor = 'white';
            } else {}
        });
})
}

//drawing random colors. invoked when tool selected
function rainbow () {
    const pencil = document.querySelector('.pencil');
    pencil.classList.remove('selected');
    const eraser = document.querySelector('.eraser');
    eraser.classList.remove('selected');
    const rainbow = document.querySelector('.rainbow');
    rainbow.classList.add('selected');
    let sqr = document.querySelectorAll('.square');
    sqr.forEach((div) => {
        div.addEventListener('mouseover', () => {
            if (mouseDown == 1) {
                //randomColor generates a random hex code, then used to paint square
                let randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
                div.style.backgroundColor = randomColor;
            } else {}
        });
})
}

createGrid (); //load grid when page loads
draw (); //allow drawing when page loads