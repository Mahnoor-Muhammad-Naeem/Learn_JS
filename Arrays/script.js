// ARRAYS IN JS:
// COLLECTION OF ITEMS -> LINEAR

// arrays -> collection of items. 
// array has key and value pair.
// array indices:
// arr[0], arr[1], arr[2] ....
// strings are immutable. 
// array is mutable.

let marks1 = [97, 82, 75, 64, 36]
console.log(marks1);
console.log(marks1.length); // property

// task: group member:
let marks = [98, 97, 96, 95, 94, 93, 92, 1, 9, 8];
console.log(marks.length);

let heroes2 = ["ironman", "thor", "hulk", "shaktiman", "spiderman", "antman"];
console.log(heroes2);

// looping over an array: => print all elements of an array
// loops -> iterable (strings, objects, arrays)
// for loop: length 

// for (let idx = 0; arr.length; idx++){

// }

let heroes1 = ["ironman", "thor", "hulk", "shaktiman", "spiderman", "antman"];
// for loop:
// for (let idx = 0; idx < heroes.length; idx++) {
//     console.log(heroes[idx]);
// }

// for of
for (let hero of heroes) {
    console.log(hero);
}

let cities = ["delhi", "pune", "mumbai", "hydrebad", "gurgaon"];

for (let city of cities) {
    console.log(city.toUpperCase());
}

// LET'S PRACTICE:
// Q: FOR A GIVEN ARRAY WITH MARKS OF STUDENTS -> [85, 97, 44, 37, 76, 60]
// FIND THE AVERAGE MARKS OF THE ENTIRE CLASS.

let marks = [85, 97, 44, 37, 76, 60];

let sum = 0;

for (let val of marks) {
    sum += val;
}

let avg = sum / marks.length;
console.log(`avg marks of the class = ${avg}`);

// LET'S PRACTICE: 
// Q: FOR A GIVEN ARRAY WITH PRICES OF 5 ITEMS -> [250, 645, 300, 900, 50]
// ALL ITEMS HAVE AN OFFER OF 10% OFF ON THEM. CHANGE THE ARRAY TO STORE FINAL PRICE AFTER APPLYING OFFER.

let items = [250, 645, 300, 900, 50];

// let i = 0;
// for (let val of items) {
//     console.log(`value at index ${i} = ${val}`);
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }

for(let i=0; i < items.length; i++) {
    let offer = items[i] / 10;
    items[i] -= offer;
}

console.log(items);

// ARRAYS IN JS:
// ARRAY METHODS.
// Push(): add to end
//Pop(): delete from end & return
//toString(): converts array to string
// push -> add
// pop -> delete

let foodItems = ["potato", "apple", "litchi", "tomato"];

console.log(foodItems);
let deletedItem = foodItems.pop();
console.log(foodItems);
console.log("deleted", deletedItem);

// concat(): joins multiple arrays & returns 

let marvel_heroes = ["thor", "spiderman", "ironman"];
let dc_heroes = ["superman", "batman"];

let heroes = marvel_heroes.concat(dcHeroes);
console.log(heroes);

// unshift(): add to start -> starting to delete
let marvelHeroes = ["thor", "spiderman", "ironman"];

let val = marvelHeroes.shift();
console.log("deleted", val);

// methods are always start from small letter.

// slice()
// splice()


// LET'S PRACTICE:
// Q: CREATE AN ARRAY TO STORE COMPANIES -> "BLOOMING", "MICROSOFT", "UBER",
// "GOOGLE", "IBM", "NETFLIX"
// A. REMOVE THE FIRST COMPANY FROM THE ARRAY
// B. REMOVE UBER & ADD Ola IN ITS PLACE
// C. ADD AMAZON AT THE END

// note: pop -> end delete, shift -> start delete
// replacement -> splice(2,1,"Ola")
// push -> end, unshift-> start

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.shift();
companies.splice(2, 1, "Ola");
companies.push("Amazon");