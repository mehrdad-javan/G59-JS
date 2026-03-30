let score = 10;
score = 'Hello';
console.log(score);

const PI = 3.14;
// PI = 4.2;


console.log(typeof score);
console.log(typeof PI);
console.log(score.length);
console.log(score.toUpperCase());

// Template literals
let city = 'Stockholm';
let text = `Welcome to ${city}`;
console.log(text);

// Operators
// Arithmetic operators: +, -, *, /, %
// Comparison operators: >, <, >=, <=, ==
let number1 = 10;
let number2 = "10";
// Loose equality operator: ==
console.log(number1 == number2); // true

// Strict equality operator: ===
console.log(number1 === number2); // false

// Ternary operator: condition ? true : false
let age = 20;
let status = (age < 18) ? 'Minor' : 'Adult';
console.log(status);


// Conditional statements
let hour = 14;
if (hour < 12) {
    console.log('Good morning');
} else if (hour < 18) {
    console.log('Good afternoon');
} else {
    console.log('Good evening');
}

let day = 'Monday';
switch (day) {
    case 'Monday':
        console.log('It is Monday');
        break;
    case 'Tuesday':
        console.log('It is Tuesday');
        break;
    case 'Wednesday':
        console.log('It is Wednesday');
        break;
    default:
        console.log('Just another day.');
}

// Loops (for, for...of, for...in)
for (let i = 1; i < 10; i++) {
    console.log("Count:", i);
}

const colors = ['red', 'green', 'blue'];
for (let color of colors) {
    console.log(color);
}
// Literal objects
const personObj = {name: 'John', age: 30};
for (let key in personObj) {
    console.log(key, ":", personObj[key]);
}

// Functions

// Function Declaration (Hoisted)
console.log(greetUser('John'));

function greetUser(name) {
    return `Hello, ${name}!`;
}

// Function Expression (Not Hoisted)
const addNumbers = function(a, b) {
    return a + b;
};
console.log(addNumbers(2, 3));

// Arrow functions
const add = (a,b) => a + b;
console.log(add(2, 3));

function welcome(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(welcome("John"));
console.log(welcome());
