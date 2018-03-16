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
//s2.log="log str"  报错
console.log(s2.log)

var num  = 99
console.log(num.toFixed(2))
console.log(num.toExponential(1))
console.log(num.toPrecision(1))
console.log(num.toPrecision(2))
console.log(num.toPrecision(3))

function testReplace(text) {
    return text.replace(/(.at)/g, function(match, pos , originalText) {
        console.log(match)
    });
}

testReplace("cat bat hat")
function sayhi(){
    console.log("sayhi outside")
}
eval("function sayhi(){console.log('sayhi inside')}")
sayhi() //严格模式下outside，非严格下inside


var msgArray = [];
msgArray[0] = 'Hello';
msgArray[99] = 'world';

if (msgArray.length === 100) {
  console.log('The length is 100.');
  console.log(msgArray)
}