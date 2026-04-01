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
const addNumbers = function (a, b) {
    return a + b;
};
console.log(addNumbers(2, 3));

// Arrow functions
const add = (a, b) => a + b;
console.log(add(2, 3));

function welcome(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(welcome("John"));
console.log(welcome());

// Rest Parameters
function sumAll(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}

function sumAll2(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

console.log(sumAll(1, 2, 3, 4, 5))
console.log(sumAll2(1, 2, 3, 4, 5))

// Callback functions: functions passed as arguments to other functions
// A callback function is a function that is passed as an argument to another function.
function processInput(input, callback) {
    callback(input);
}

processInput("Astrid", (name) => console.log(name.toUpperCase()));
processInput("Astrid", (name) => console.log("Callback hello to " + name + "!"));

// Working with arrays
let fruits = ['Apple', 'Banana'];
// To dd Orange to fruits array
fruits.push('Orange'); // add Orange to fruits to the end of the array
fruits.pop(); // remove the last element from the array - removes from the end
fruits.splice(1, 1); // Removes 1 element at index 1
fruits.forEach(fruit => console.log("Fruit:", fruit));

let numbers = [1, 2, 3, 4, 5];
const result = numbers.map(number => '<li>' + number + '</li>').join('');
console.log(result);
const largets = numbers.filter(number => number > 3);
console.log("largets:", largets);
// find returns the first element that matches the condition
const found = numbers.find(number => number === 4);
console.log("found:", found);
const index = numbers.findIndex(number => number === 4); // returns the index of the first element that matches the condition
// if the index is not found, it returns -1
console.log("index:", index);

//  Objects
// A literal object is a collection of key-value pairs.
const car = {brand: 'Toyota', model: 'Camry', year: 2020};
console.log(car.brand); // Dot Notation
console.log(car["brand"]); // Bracket Notation
car.year = 2021;
car.color = 'red'; // if the property doesn't exist, it will be created'
// delete car.color;
console.log(car);

const jsonString = JSON.stringify(car); // Converts an object to a JSON string
console.log(jsonString);
const backToObject = JSON.parse(jsonString); // Converts a JSON string to an object
console.log(backToObject);

// Try Catch
/*
try {
    let x = y + 10; // y in not defined
} catch (error) {
    console.log("Error: ", error.message);
} finally {

}
 */

function validateUser(name, age) {
    if (!name) {
        throw new Error("Name is required!"); // Throws an error
    }
    if (age < 0) {
        throw new Error("Age must be positive!");
    }
    return `User ${name} is ${age} years old.`;
}


try {
    console.log(validateUser("John", 20));
    console.log(validateUser("John", -20));
} catch (error) {
    console.log("Validation Failed: ", error.message);
}

// Date and Time
const now = new Date();
console.log("Current Date: ", now); // it returns date and time in UTC
const birthDate = new Date('1990-01-01'); // Output: 1990-01-01T00:00:00.000Z
const birthDate2 = new Date(1990, 1, 1); // Output: 1990-02-01T00:00:00.000Z

console.log(now.toLocaleString());

// Options for toLocaleString
const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
console.log(now.toLocaleString('en-US', options));