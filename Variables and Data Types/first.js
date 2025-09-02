console.log("Mahnoor");
console.log("Welcome to JavaScript");
console.log("I love JavaScript");

// for console:
// age = 22; then ElementInternals, output 22

// age

// age + 1 output: 23

// name = "Mahnoor"

// name

// price = 150.50 output: 150.5

// price output: then ElementInternals 

// for variable:
fullName = "Mahnoor";
console.log(fullName);

// for variable: 
fullName = "Mahnoor";
age = 22;
console.log(fullName);

// for boolean value, which is true:
fullName = "Mahnoor";
age = 22;
price = 99.99;
radius = 14;
a = null;
y = undefined;
isFollow = true;
console.log(isFollow);

// for variables:
fullName = "Mahnoor";
age = 22;
price = 99.99;
r = 14;
a = null;
y = undefined;
isFollow = true;

fullName = 25;

console.log(fullName);

// js is a dynamically typed language.

// variable rules:
fullname = "Mahnoor";
fullName = "Naeem";

console.log(fullname);
console.log(fullName);

// variables names, we can write:
fullName = "Mahnoor";
_fullName = "Mahnoor";
$fullName = "Mahnoor";

console.log(fullname);

// reserved words cannot be variable names. reserved words are protective, like small c we cannot used, we can used capital C. 
// because console.log("mahnoor"). small c we can use for printing purpose.
Console = "mahnoor";
console.log(Console);

// for variable rules:
// fullName => we can use camel case
// fullname
// full_name => snake case
// full-name => kabab case
// FullName => pascal case

// let, const & var: for var we can use let and const.
let fullName1 = "Mahnoor";
console.log(fullName);

// let age = 22;
// let totalPrice = 1000;

// for three variables declare:
// let age = 22;
// age = 50;
// age = 34;
// console.log(age);

// for const:
const PI = 3.14;
console.log(PI);

// FOR LET:
let a;
a = 10;

// Data Types in JS:
// Number, String, Boolean, Undefined, Null, BigInt, Symbol
// primitive (7 Data Types), Non-primitive => objects
// let age = 22;
// output: write age, result: 22
// for price:
// let age = 22;
// let price = 100.5;
// for string data type:
let fullName= "Mahnoor";
// for boolean:
isFollow = true;
// for undefined:
// let x;
// output: x, result: undefined

// for null: 
// let x = null;

// for BigInt:
let x = BigInt("123");
// output: x, result: 123n

// for symbol: 
// let y = Symbol("Hello!");


// FOR NON-PRIMITIVE:
// OBJECTS => COLLECTION OF VALUES
// (ARRAYS, FUNCTIONS)

const student = {
    fullName : "Mahnoor",
    age: 22,
    cgpa: 4.0,
    isPass: true
};

student["age"] = student["age"] + 1;

console.log(student["age"]);

OR 
const student = {
    fullName : "Mahnoor",
    age: 22,
    cgpa: 4.0,
    isPass: true
};

student["name"] = "Mahnoor";
console.log(student["name"]);

// console.log(student["age"]);

// for output: we can use console:
// student then Enter 
// typeof student 
// student["fullName"]

// let can be update, but const cannot be update, const obj -> key can be upadte

// LET'S PRACTICE:
// Q: CREATE A CONST OBJECT CALLED "PRODUCT" TO STORE INFORMATION SHOWN IN THE PICTURE.
const product = {
    title: "Ball Pen",
    rating: 4,
    offer: 5,
    price: 270,
};

console.log(product);
// output: console:
typeof product 
// output: 'object' 
1 + 2 
// 3
2 - 1 
//1 
"123" + 1
'1231'

"abcd" + 123
// result: 'abcd123'
"123" + 123
'123123'

// LET'S PRACTICE:
// Q2: CREATE A CONST OBJECT CALLED "PROFILE" TO STORE INFORMATION SHOWN IN THE PICTURE.
const profile = {
    username: "@mahnoor",
    isFollow: false,
    followers: 123,
    following: 123,
};

console.log(typeof profile);
console.log(typeof profile["username"]);