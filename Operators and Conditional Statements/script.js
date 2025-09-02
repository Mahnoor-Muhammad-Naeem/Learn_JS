//This is a code that prints
//mahnoor on our console window
console.log("mahnoor");

// OPERATORS IN JS:
// USED TO PERFORM SOME OPERATION ON DATA. 
// ARITHMETIC OPERATORS
// +, -, *, / 
// MODULUS => %
// EXPONENTIATION
// INCREMENT => ++
// DECREMENT => --

//ARITHMETIC OPERATORS:
let a = 5;
let b = 2;
console.log("a + b");
// OR console.log("a + b = ", a + b);

let x = 10;
let y = 20;

console.log("a = ", a, " & b = ", b);
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b); //5^2 => 25

//UNARY OPERATOR:
let m = 80;
let n = 90;

console.log("a= ", a, " & b = ", b);
a = a + 1; //6
console.log("a = ", a); //6

OR 
let m1 = 80;
let n1 = 90;

console.log("a= ", a, " & b = ", b);
a++; //6 or a = a - 1; or a--;
console.log("a = ", a); //6

// increment: a++ (post), ++a (pre) 
// decrement: a-- (post), --a (pre)

// another example:
// unary operator:
let a1 = 5;
let b1 = 2;

console.log("a = ", a, " & b = ", b);

console.log("a-- = ", a--);
console.log("a = ", a);

// OPERATORS IN JS:
// ASSIGNMENT OPERATORS:
// =
// +=
// -=
// *=
// %=
// **=

// += => a += 1 or a = a + 1

// ASSIGNMENT OPERATORS:
let a11 = 5;
let b11 = 2;

a += 4; // a = a + 4
console.log("a = ", a); //9

// OPERATORS IN JS:
// COMPARISON OPERATORS:
// Equal to == 
// Not equal to != 
// Equal to & type === 
// Not equal to & type !== 

// >, >=, <, <= 

// comparison operators:
let p1 = 5;
let q1 = 2;

console.log("5 != 2", p1 != q1); //false

// comparison operators: another eg:
let p = 5;
let q = 5;

console.log("5 >= 5", a >= b);

// OPERATORS IN JS:
// LOGICAL OPERATORS: TRUE OR FALSE
// LOGICAL AND => &&
// LOGICAL OR => || 
// LOGICAL NOT => !

//LOGICAL OPERATORS:
let x1 = 6;
let x2 = 5;

let cond1 = a > b; //true 
let cond2 = a === 6; //true
console.log("cond1 && cond2 = ", cond1 && cond2);

// CONDITIONAL STATEMENTS:
// TO IMPLEMENT SOME CONDITION IN THE CODE.

let age = 25;

if (age > 18) {
    console.log("you can vote");
}

// another eg:
let age1 = 16;

if (age >= 18) {
    console.log("you can vote");
}

if(age < 18) {
    conbsole.log("you cannot vote");
}

// for mode eg:
let mode = "dark";
let color;

if (mode === "dark") {
    color = "black";
}

if (mode === "light") {
    color = "white";
}

console.log(color);

// if, else condition statement:
let mode1 = "light";
let color1;

if (mode === "dark") {
    color = "black";
} else {
    color = "white";
}

console.log(color);

// another eg:
let age11 = 25;

if (age >= 18) {
    console.log("vote");
} else {
    console.log("not vote");
}

// conditional statements:
// odd or even:
let num = 10;

if (num % 2 === 0) {
    console.log(num, "is even");
} else {
    console.log(num, "is odd");
}

//conditional statements:
//else-if statement:
let mode2 = "dark";
let color2;

if (mode2 === "dark") {
    color2 = "black";
} else if (mode2 === "blue") {
    color2 = "blue";
} else if (mode2 === "pink") {
    color2 = "pink";
} else {
    color2 = "white";
}

console.log(color2);

if (mode2 === "dark") {
    console.log(mode2);
}

// conditional statements:
let age111 = 16;

let result = age >= 18 ? "adult" : "not adult";
console.log(result);

OR 
//conditionalstatements:
let age22 = 16;
age >= 18 ? "adult" : "not adult"; //simpler, compact if-else

// LET'S PRACTICE: 
// Q1: GET USER TO INPUT A NUMBER USING PROMPT("Enter a Number:"). CHECK IF THE NUMBER IS A 
// MULTIPLE OF 5 OR NOT.
// alert("hello!"); //one time popup
let name = prompt("hello!");
console.log(name);

//solution of Q1:
let num1 = prompt("enter a number:");

if (num1 % 5 === 0) {
    console.group(num1, " is multiple of 5");
} else {
    console.log(num1, " is NOT a multiple of 5");
}

// LET'S PRACTICE: 
// Q2: WRITE A CODE WHICH CAN GIVE GRADES TO STUDENTS ACCORDING TO THEIR SCORES: 
// 80-100, A 
// 70-89, B 
// 60-69, C 
// 50-59, D 
// 0-49, F

let score = 75;
let grade;

if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 70 && score <= 89) {
    grade = "B";
} else if (score >= 60 && score <= 69) {
    grade = "C";
} else if (score >= 50 && score <= 59) { 
    grade = "D";
} else if (score >= 0 && score <= 49) {
    grade = "F";
}

console.log("according to your scores, your grade was : ", grade)

// OR 
// let score = PROMPT("ENTER YOUR SCORE (0-100):");
// let grade;

// if (score >= 90 && score <= 100) {
//     grade = "A";
// } else if (score >= 70 && score <= 89) {
//     grade = "B";
// } else if (score >= 60 && score <= 69) {
//     grade = "C";
// } else if (score >= 50 && score <= 59) { 
//     grade = "D";
// } else if (score >= 0 && score <= 49) {
//     grade = "F";
// }

// console.log("according to your scores, your grade was : ", grade)