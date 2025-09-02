// FUNCTIONS IN JS:
// BLOCK OF CODE THAT PERFORMS A SPECIFIC TASK, CAN BE INVOKED WHENEVER NEEDED.
// INVOKED -> CALL

console.log("mahnoor");

"abc".toUpperCase()

[1, 2, 3].push(4);

// FUNCTIONS IN JS:
// FUNCTION DEFINITION:
// function functionName() {
//do some work
//}

//function functionName( param1,param2 ...){
//   do some work
//}

// FUNCTION CALL:
// functionName();

function myFunction() {
    console.log("Welcome to NED University!");
    console.log("We are learning JS :)");
    console.log("Welcome to NED University!");
    console.log("We are learning JS :)");
}

myFunction();
myFunction();

// FUNCTIONS PREVENT FROM REDUNDANCY -> REPEAT.
// MINIMIZE REDUNDANCY

// for undefined function:
function myFunction(msg) {
    //parameter -> input
    console.log(msg);
}

myFunction();

// for argument:
function myFunction(msg) {
    //parameter -> input
    console.log(msg);
}

myFunction("I love JS"); //argument


// we want to call sum for output:
// Sum(1, 2);
//Function -> 2 numbers, sum

function sum(x, y) {
    console.log(x + y);
}

//Function -> 2 numbers, sum 

function sum(x, y) {
    //local variables -> scope
    s = x+ y;
    return s;
}

let val = sum(3, 4);
console.log(val);

// ARROW FUNCTIONS:
// compact way of writing a function 
// const functionName = ( param1, param2 ...) => {
//    // do some work
//}
//sum function
function sum(a, b) {
    return a + b;
}
//Modern JS: we prefer write an arrow function.
const arrowSum = (a, b) => {
    console.log(a + b);
};

//multiplicatuion function:
function mul(a, b) {
    return a * b;
}

const arrowMul = (a, b) => {
    return a * b;
};

// arrowMul = 5;

// sum function:
function sum(a, b) {
    return a + b;
}

const arrowSum = (a, b) => {
    return a + b;
};

const printHello = () => {
    console.log("hello");
};

const printHello = () => console.log("hello");

// LET'S PRACTICE:
// Q: CREATE A FUNCTION USING THE "FUNCTION" KEYWORD THAT TAKES A STRING 
// AS AN ARGUMENT & RETURNS THE NUMBER OF VOWELS IN THE STRING.
function countVowels(str) {
    //"ApnaCollege", count = 5
    for(const char of str) {
        console.log(char);
    }
}
// check vowels: a,e,i,o,u
function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if(char === "a" || char === "e" || char === "i" || char == "o" || char === "u") {
            count++;
        }
    }

    return count;
}

// for countVow("aeiou"); => for output: write in console.
const countVow = (str) => {
   function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if(char === "a" || char === "e" || char === "i" || char == "o" || char === "u") {
            count++;
        }
    }

    return count;
}

// ForEach LOOP IN ARRAYS:
// arrowMul.forEach( callBackFunction )
function abc() {
    console.log("hello");
}

function myFunc(abc) {
    return abc;
}

// eg:
let arr = [1, 2, 3, 4, 5];

arr.forEach(function print(val) {
   console.log(val); 
});

// for value, eg:
let arr = ["pune", "delhi", "mumbai"];

arr.forEach((val, idx, arr) => {
    console.log(val.toUpperCase(), idx, arr);
});

// what are higher order function/methods: -> fn parameter, fn. return

//Q: CREATE AN ARROW FUNCTION TO PERFORM THE SAME TASK.
const countVow = (str) => {
    let count = 0;
    for (const char of str) {
        if(
            char === "a" || 
            char === "e" || 
            char === "i" || 
            char == "o" || 
            char === "u"
        ) {
            count++;
        }
    }

    return count;
};

//forEach Loop in Arrays:
// arr.forEach( callBackFunction )
// method function => "abc" => string, "abc".toUpperCase() => string => "abc", .toUpperCase() => method
// "abc".toUpperCase();

function abc() {
    console.log("hello");
}

function myFunc(abc) {
    return abc;
}
// A CALLBACK IS A FUNCTION PASSED AS AN ARGUMENT TO ANOTHER FUNCTION.
let arr = [1, 2, 3, 4, 5];

arr.forEach(function printVal(val) { //value at each idx
    console.log(val);
});

// for callback function:
let arr = [1, 2, 3, 4, 5];

arr.forEach((val) => {
    console.log(val);
});

let arr = ["pune", "delhi", "mumbai"];

arr.forEach((val) => {
    console.log(val.toUpperCase());
});

// 3 parameters use in array:
let arr = ["pune", "delhi", "mumbai"];

arr.forEach((val, idx, arr) => {
    console.log(val.toUpperCase(), idx, arr);
});

// LET'S PRACTICE:
// Q: FOR A GIVEN ARRAY OF NUMBERS, PRINT THE SQUARE OF EACH VALUE USING 
// THE forEach loop.
let nums = [2, 3, 4, 5, 6];

nums.forEach((num) => {
    console.log(num * num); //num**2
});
// for calcSquare:
let nums = [67, 52, 39];

let calcSquare = (num) => {
    console.log(num * num);
};

nums.forEach(calcSquare);

// SOME MORE ARRAY METHODS:
// MAP: => MAP METHOD, MAP USE FOREACH ARRAY.
// CREATES A NEW ARRAY WITH THE RESULTS OF SOME OPERRATION. THE VALUE ITS CALLBACK
//RETURNS ARE USED TO FORMNEW ARRAY
// arr.map( callbackFnx( value, index, array ))
let nums = [67, 52, 39];

let newArr = nums.map((val) => {
    return val * 2;
});

console.log(newArr);

let calcSquare = (num) => {
    console.log(num * num);
};

// map use to create a new array.
// Filter method. => creates a new array of elements that give true for a condition/filter.
// eg: all even elements
// let newArr = arr.filter( (val)=> {
//    return val % 2 === 0;
// })
let arr = [1, 2, 3, 4, 5, 6, 7];

let evenArr = arr.filter((val) => {
    return val % 2 === 0;
});

console.log(evenArr);
// for condition:
let arr = [1, 2, 3, 4, 5, 6, 7];

let evenArr = arr.filter((val) => {
    return val % 2 !== 0;
});

console.log(evenArr); 

// for condition:
let arr = [1, 2, 3, 4, 5, 6, 7];

let evenArr = arr.filter((val) => {
    return val > 3;
});

console.log(evenArr);

// Reduce method:
// performs some operations & reduces the array to a single value. it returns that single value.
// JAVASCRIPT DEMO: Array.reduce()
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
);

console.log(sumWithIntial);
// Expected output: 10

eg:
let arr = [1, 2, 3, 4];

const output = arr.reduce((res, curr) => {
    return res + curr;
});

console.log(output); // 10 result

// for largest element with array:
let arr = [5, 6, 2, 1, 3];

const output = arr.reduce((prev, curr) => {
    return prev > curr ? prev: curr;
});

console.log(output); // 6 result

// LET'S PRACTICE:
// Q: WE ARE GIVEN ARRAY OF MARKS OF STUDENTS. FILTER OUR OF THE MARKS OF STUDENTS
// THAT STORED 90+.
//Q: TAKE A NUMBER n AS INPUT FROM USER. CREATE AN ARRAY OF NUMBERS FROM 1 TO n.
// USE THE REDUCE METHOD TO CALCULATE SUM OF ALL NUMBERS IN THE ARRAY.
// USE THE REDUCE METHOD TO CALCULATE PRODUCT OF ALL NUMBERS IN THE ARRAY.

prompt("enter a number : ");

let arr = [];

for (let i=1; i<=n; i++ ) {
    arr[i-1] = i; //1(0), 2(1), 3(2), 4(3) => 4 3rd index py store hoga
}

console.log(arr);

let sum = arr.reduce((res, curr) => {
    return res + curr;
})

console.log("sum = ",sum);

let factorial = arr.reduce((res, curr) => {
    return res * curr;
});

console.log("factorial = ", factorial);