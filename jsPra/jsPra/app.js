'use strict';

console.log('Hello world');

var color = "blue"

function changeColor() {
    if(color == 'blue') {
        color = 'red'
    }else {
        color = 'blue'
    }
}

changeColor()

console.log(color)
