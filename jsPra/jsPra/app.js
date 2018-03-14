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

var s1= new String("sometext")
s1.log="log str"
console.log(s1.log)

var s2= "sometext"
//s2.log="log str"  ±¨´í
console.log(s2.log)

var num  = 99
console.log(num.toFixed(2))
console.log(num.toExponential(1))
console.log(num.toPrecision(1))
console.log(num.toPrecision(2))
console.log(num.toPrecision(3))