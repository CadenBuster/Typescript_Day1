// Homework Exercises

// 1. For each of these values, what type will the TypeScript compiler infer?
let a = 118;
// A: number

let b = 'Thieves';
// A: string

let c = [true, false, false];
// A: boolean[]

let d = {age: number};
// A: any

let e = [3]
// A: number[]

let f;
// A: any

let g = []
// A: any[]



// 2. What are the compilation errors in each of the following code snippets?
let song: {
    title: string,
    releaseYear: number,
} = {
    title: 'Lose Yourself'
};
// A: releaseYear does not have a question mark on it to make it optional.

let prices = [100, 200, 300];
prices[0] = '$100';
// A: index 0 cannot be redefined as a string when it was set up to be number.

function myFunc(a: number, b: number): number {}
// A: it is not returning anything



// javascript code wars


/*
Problem: https://www.codewars.com/kata/574b3b1599d8f897470018f6/solutions/javascript
Solution:
function getRealFloor(n) {
  if (n>13) {
    n -= 2;
  } else if (n>0){
    n-=1;
  } else {
    n = n
  }
  return n
}

Problem: https://www.codewars.com/kata/55a5bfaa756cfede78000026/solutions/javascript
Solution: function problem(x){
  if (typeof x === 'string') {
    return 'Error';
  } else {
    return (x * 50) + 6
  }
}

*/