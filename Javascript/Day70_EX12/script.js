let boxes = document.querySelectorAll('.box');

let colors = ['red','gree','aqua','blue','orange'];

boxes.forEach(box => {
    let randBack = Math.floor(Math.random()*5);
    box.style.background = colors[randBack];
    let randCol = Math.floor(Math.random()*5);
    box.style.color = colors[randCol];
});


