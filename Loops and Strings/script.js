// LOOPS IN JS: 
// LOOPS ARE USED TO EXECUTE A PIECE OF CODE AGAIN AND AGAIN.
// FOR LOOP:
// for (let i = 1; i <= 5; i++) {
// console.group("mahnoor");
// }

console.log("mahnoor");
console.log("mahnoor");
console.log("mahnoor");
console.log("mahnoor");
console.log("mahnoor");

for (let count = 1; count <= 5; count++) {
    console.log("mahnoor"); //5 execute
}

console.log("loop has ended");

//Print 1 to 5 
// for (let count = 1; count <= 5; count++) {
// console.log("mahnoor")
// }

//Calculate sum of 1 to 5
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum = sum + i; // sum = 0 + 1 => 1 + 2 => 3 + 3 => 6 + 4 => 10 + 5 => 15
}
console.log("sum = ", sum);
console.log("loop has ended");

// Calculate sum of 1 to n
// let sum = 0;
// let n = 5;
// for (let i = 1; i <= n; i++) {
//     sum = sum + i; // sum = 15
// }
// console.log("sum = ", sum);
// console.log("loop has ended");

//Print  1 to 5:
for (let i = 1; i <= 5; i++) {
    console.log("i = ", i);
}
 
// LOOPS IN JS:
// INFINITE LOOP: A LOOP THAT NEVER ENDS. => NEVER ENDS, STOPPING CONDITION -> TRUE

// WHILE LOOP:
while (condition) {
    // do some work
}

let i = 1;
while (i<=5) {
    console.log("mahnoor");
    i++;
}

// do-while loop:
// do {
//     // do some work
// } while (condition);

// eg:
let i2 = 20;
do {
    console.log("mahnoor");
    i2++;
} while (i2 <= 10);

// OR: DO-WHILE LOOP:
let i1 = 1;
do {
    console.log("i1=", i);
    i1++;
} while (i1 <= 10);

//for-of Loop: -> we can use for strings and arrays, not for objects
for (let val of strVar) {
    //do some work
}

// eg:
let str99 = "mahnoor";

for (let i of str99) { //iterator -> characters
    console.log("i=", i);
}

// if string calaculate:
let str999 = "mahnoor";

let size = 0;
for (let val of str999) {
    console.log("val=", val);
    size++;
}

console.log("string size = ", size); //10

//for in loop:
// below code, i is a key.
let student = {
    name: "mahnoor",
    age: 20,
    cgpa: 4.0,
    isPass: true,
};

for (let i in student) {
    console.log(i);
}

// for in loop:
// write key and value in output.
// let student = {
//     name: "mahnoor",
//     age: 20,
//     cgpa: 4.0,
//     isPass: true,
// };

// for (let key in student) {
//     console.log("key=", key, " value=", student[key]);
// }

//LET'S PRACTICE:
// Q1: PRINT ALL EVEN NUMBERS FROM 0 TO 100.
for (let num = 0; num <= 100; num++) {
    if (num % 2 === 0) {
        //even number
        console.log("num =", num);
    }
}

//for odd number:
for (let num = 0; num <= 100; num++) {
    if (num % 2 !== 0) {
        //odd number
        console.log("num =", num);
    }
}

// Q2: CREATE A GAME WHERE YOU START WITH ANY RANDOM GAME NUMBER. ASK THE USER TO KEEP GUESSING 
// THE GAME NUMBER UNTIL THE USER ENTERS CORRECT VALUE.
let gameNum = 25;
let userNum = prompt("Guess the game number : ");

while (userNum != gameNum) {
    userNum = prompt("You entered wrong number. Guess again : ");
}

console.log("congratulations, you entered the right number");

// STRINGS: -> inbuilt properties and function -> methods
// let str = "mahnoor";
// let str2 = "naeem";
//string length: str.length
//string indices: str[0], str[1], str[2]

// let str = "mahnoor";
// console.log(str[0]); //m

//TEMPLATE LITERALS IN JS:
let specialString1 = 'This is a template literal';
console.log(specialString1);
// console.log(typeof specialString);

// practical eg: for object:
let obj99 = {
    item: "pen",
    price: 10,
};

console.log("the cost of", obj99.item, " is", obj99.price);
// for singlestring, we can use template literals.
let obj999 = {
    item: "pen",
    price: 10,
};

let output = 'the cost of ${obj999.item} is ${obj999.price} rupees';
console.log(output);

//TEMPLATE LITERALS:
let specialString = 'THis is a template literal ${1 + 2 + 3}';
console.log(specialString);

// for output, print another line:
console.log("mahnoor\nnaeem");
console.log("mahnoor\tnaeem");

// for string: template literals:
let str66 = "mahnoor\tnaeem";
console.log(str66.length);

// string methods in JS:
// these are built-in functions to manipulate a string.
// str.toUpperCase()
// str.toLowerCase()
// str.trim() // removes whitespaces
let str77 = "mahnoor";
str.toUpperCase();
console.log(str77);

// for newStr:
let str88 = "mahnoor";
let newStr = str88.toUpperCase();
console.log(str88);
console.log(newStr);

// strings are immutable-> no change
// for toLoweCase():
let str11 = "mahnoor";
str = str11.toLowerCase();
console.log(str11);

// str.trim(): // removes whitespaces:
let str0 = "      mahnoor    naeem       ";
console.log(str0.trim());

// str.slice(start, end?) // returns part of string
// str1.concat(str2) // joins str2 with str1
// str.replace( searchVal, newVal )
// str.charAt( idx )

// eg:
let str5 = "0123456";
console.log(str5.slice(1, 3));

// concat:
let str1 = "mahnoor";
let str2 = "naeem";

let res = str1.concat(str2);
// let res = str1 + str2;
console.log(res);

// replace:
let str3 = "noor";
console.log(str3.replace("n", "h"));

// for character searching:
let str4 = "IloveJS";
console.log(str4.charAt(0)); //I

// FOR LETTER CHANGING:
// we cannot change original string.
let str = "IloveJS";
str = str.replace("I", "S");
console.log(str); //SloveJS

// let's practice:
// Q1: PROMPT THE USER TO ENTER THEIR FULL NAME. GENERATE A USERNAME FOR THEM
// BASED ON THE INPUT. START USERNAME WITH @, FOLLOWED BY THEIR FULL NAME AND ENDING WITH THE FULLNAME LENGTH.
// EG: user name = "mahnoornaeem", username should be "@mahnoornaeem13


let fullName = prompt("enter your fullname without spaces");

let username = "@" + fullName + fullName.length;
console.log(username); 