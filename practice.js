// task:  group member:

let numbers = [98, 97, 96, 95, 94, 93, 92, 1, 9, 8];
console.log(marks.length);



let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}

console.log(largest); // 98

// 2nd task:
let arr = [98, 97, 6, 3, 1, 2, 3, 4, 5, 7];

let evenArr = arr.filter((val) => {
    return val % 2 == 0;
});

console.log(evenArr); 



let arr1 = [98, 97, 6, 3, 1, 2, 3, 4, 5, 7];

let oddArr = arr1.filter((val1) => {
    return val1 % 2 !== 0;
});

console.log(oddArr);


