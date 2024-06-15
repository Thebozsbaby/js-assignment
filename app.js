// 10 maths mathod

// math pow
var x = Math.pow(3,2);
console.log(x)

// math round
var math = Math.round(22,7);
console.log(math)

// math ceil
var math = Math.ceil(22.7);
console.log(math)

// Math floor
var math = Math.floor(22.7);
console.log(math)

// MATH TRUNC
var math = Math.trunc(40.7);
console.log(math)

// MATH SIGN
var math = Math.sign(-5,1,2);
console.log(math)

// math sqrt
var math = Math.sqrt(25);
console.log(math)

// math abs
var math = Math.abs(-5.9);
console.log(math)

// math sin
var math = Math.sin(30 * Math.PI / 180);
console.log(math)

// math cos 
var math = Math.cos(30 * Math.PI / 180);
console.log(math)

// array methods
// array sort
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);

 // Array Pop
const fruit = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
console.log(fruits)

array reverse
const fruitsapple = ["Banana", "Orange", "Apple", "Mango"];
fruitsapple.reverse();
console.log(fruitsapple)

array toSorted
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
console.log(sorted);

Array Push
const freshFruits = ["Banana", "Orange", "Apple", "Mango"];
freshFruits.push("kiwi");
console.log(freshFruits) 

Array Shift
const ffruits = ["Banana", "Orange", "Apple", "Mango"];
ffruits.shift();
console.log(ffruits)

Array Unshift
const fruitss = ["Banana", "Orange", "Apple", "Mango"];
fruitss.unshift("Lemon");
console.log(fruitss)

Array copywithin
const fruiits = ["Banana", "Orange", "Apple", "Mango"];
fruiits.copyWithin(2, 0);
console.log(fruiits)


string method
string toUpperCase
var str = "Hello World";
console.log(str.toUpperCase());

// string toLowerCase;
var str = "HELLO WORLD";
console.log(str.toLowerCase());

String length
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length)

 String at()
const name = "W3Schools";
let letter = name.at(6);
console.log(letter)

padstart()
let texte = "5";
let padded = texte.padStart(4,"0");
console.log(padded)

// pad end
let textee = "5";
let paddedd = textee.padEnd(4,"0");
console.log(paddedd)

// repeat()
let textte = "Hello world!";
let result = textte.repeat(2);
console.log(result)
