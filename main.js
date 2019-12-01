"use strict";

// Find in array: sum, min and max, replace min and max - create custom functions

let numberMaxMin = [12, 34, 5, 67, 89];

function arrSum(array) {
    let j = 0;
    for(let i = 0; i < array.length; i++) {
        j += array[i];
    }
    console.log("sum", (j));
}
arrSum(numberMaxMin);


Array.prototype.max = function () {
    return Math.max.apply(null, this);
};

Array.prototype.min = function () {
  return Math.min.apply(null, this);
};

console.log("max " + numberMaxMin.max() + "\nmin " + numberMaxMin.min());

function repluceMinmax() {
    let maxrep = numberMaxMin.min(),
    minrep = numberMaxMin.max();
    return ("max replace " + minrep + "\nmin replace " + maxrep)
}
console.log(repluceMinmax());

// Create function which will return function with callback in arguments

function funcParams (param1, param2) {
    console.log(param1 + " and " + param2);
}
function callbackFun(callback) {
    callback(arguments[1], arguments[2]);
}
callbackFun(funcParams, "one", "two");


//Create a function that will replace all number dividing three with ‘foo’,
// dividing seven with ‘bar’ and dividing three
// and seven with ‘foobar’. Function with n params.

let numberThreeSeven = (new Array(100).fill(1).map((item, i) => i + 1));
let res = numberThreeSeven.map(n => `${n % 3 ? '' : 'foo'}${n % 7 ? '' : 'bar'}` || n);

console.log(res);


//Create function with 2 string params. It must check if letters in the first
// correspond to the number of matches in second and return %.

function similar(a,b) {
    let equivalency = 0;
    let minLength = (a.length > b.length) ? b.length : a.length;
    let maxLength = (a.length < b.length) ? b.length : a.length;
    for(let i = 0; i < minLength; i++) {
        if(a[i] === b[i]) {
            equivalency++;
        }
    }

    return (equivalency / maxLength) * 100 + "%";
}
console.log(similar("abcd","ab"));
console.log(similar("abcd","abcd"));
console.log(similar("abc","abcd"));


//Create calculator.


let inPut = document.getElementById('inputVal');

document.querySelectorAll('.calculator-keys .calc-btn').forEach(function (button) {

    button.addEventListener('click', onButtonClick);
});

function onButtonClick(e) {
    if (e.target.innerHTML === 'AC') {
        inPut.innerHTML = '0';
    } else if (e.target.innerHTML === '=') {
        inPut.innerHTML = eval(inPut.innerHTML);
    } else if (inPut.innerHTML === '0') {
        inPut.innerHTML = e.target.innerHTML;
    } else {
        inPut.innerHTML += e.target.innerHTML;
    }
}
