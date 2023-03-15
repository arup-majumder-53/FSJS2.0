// Write a program to print the given patterns using the loops-
// a. Print a triangle pattern, if the given input is 3 then the pattern 
// should be similar to the given output
//    *
//    **
//    ***

function triangle(n) {
    for (let i = 1; i <= n; i++) {
        console.log("*".repeat(i));
    }
}
triangle(3);

// b. Print a square pattern, if the input is 3 then the output should be similar to the given output
//    ***
//    ***
//    ***

function square(n) {
    for (let i = 1; i <= n; i++) {
        console.log("*".repeat(n));
    }
}
square(3);

// c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
//       *
//      ***
//     *****


function pyramid(n) {
    for (let i = 1; i <= n; i++) {
        console.log(" ".repeat(n - i) + "*".repeat( (2 * i) -1));
    }
  }
  pyramid(3);