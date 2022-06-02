'use strict'

class Snake{
    constructor(x, y, size) {
        this.x = x
        this.y = y
        this.size = size
        this.tail = [{x:this.x, y:this.y}]
        this.rotateX = 0
        this.rotateY = 1

    }

    move(){
        let newRect
        if(this.rotateX == 1)
    }
}











let canvas = document.getElementById('canvas');

let snake = new Snake();

let apple = new Apple();

let canvasContext  = canvas.getContext('2d');

window.onload = ()=> {
    gameLoop();
}

function gameLoop() {
    setInterval(show, 1000/15) // 15 - значение fps
}

function show() {
    update();
    draw();
}