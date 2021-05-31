/*1. Create a function that adds up the integers in the following array var numbers
= [10,20,30,40,50]. Do not use any array prototype methods, this must be
completed using for loops and variables.*/

let numbers = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(
  "1. Create a function that adds up the integers 10,20,30,40,50: " + sum
);

/*2. Create a function that reverses the following array - let numbers =
[10,20,30,40,50]. Do not use array prototype method
.reverse().*/

var reversedNum = [];
for (let i = numbers.length - 1; i >= 0; i--) {
  reversedNum.push(numbers[i]);
}

console.log(
  "2. Create a function that reverses the array 'numbers':" + numbers,
  "to\n " + reversedNum
);

/*2. Create a function that reverses the following array - let numbers =
[10,20,30,40,50]. Do not use array prototype method
.reverse().*/
//(a)
const deleteNumbersb = numbers.splice(0);
numbers.push(10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0);
console.log(numbers);

/*2. Create a function that reverses the following array - let numbers =
[10,20,30,40,50]. Do not use array prototype method
.reverse().*/
//(b)
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();

numbers.push(10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0);

console.log(numbers);

// Set numbers variable to 50,40,30,20,10 from 10,9,8,7,6,5,4,3,2,1,0
numbers = [50, 40, 30, 20, 10];

/*3. Implement Fizz Buzz. Loop from 1 to 100. If the number is divisible by both 3 and
5, print "fizzbuzz". Otherwise, if the number is divisible by 3, print "fizz", or, if the
number is divisible by 5, print "buzz". If none of the above are true, print the
number. This is a very common interview question! Try completing this on your
own before looking up the answer.*/
console.log("\n3. Implement Fizz Buzz. Loop from 1 to 100. If the number is divisible by both 3 and 5, 'print fizzbuzz'. Otherwise, if the number is divisible by 3, 'print fizz', or, if the number is divisible by 5, 'print buzz'. If none of the above are true, 'print' the number. This is a very common interview question! Try completing this on your own before looking up the answer.\n");

let ii;
for (let ii = 1; ii <= 100; ii++) {
  if (ii % 15 == 0) console.log("FizzBuzz" + " ");
  else if (ii % 3 == 0) console.log("Fizz" + " ");
  else if (ii % 5 == 0) console.log("Buzz" + " ");
  else console.log(ii + " ");
}

/*4. Challenge: Write a JavaScript program to construct the following pattern
(see below), using a nested for loop.*/
console.log(
  "\n4. Challenge Write a JavaScript program to construct the following pattern using a nested for loop. \n\n*\n**\n***\n****\n*****\n\n"
);

function starArray(star, star1, star2, star3, star4) {
  firstTier();
  secondTier();

  function firstTier() {
    console.log(star);
    console.log(star1);
    console.log(star2);
  }

  function secondTier() {
    console.log(star3);
    console.log(star4);
  }
}

starArray("*", "**", "***", "****", "*****\n");

/*4. Challenge: Write a JavaScript program to construct the following pattern
(see below), using a nested for loop.*/
//(a)
var reversedNum = [];
for (let i = numbers.length - 1; i >= 0; i--) {
  reversedNum.push(numbers[i]);
  console.log(reversedNum);
}
