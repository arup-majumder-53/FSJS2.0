// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not 
// using JavaScript? Create a program which checks that the given number is even or odd.


function checknum(n) {

    if ( n%2 ===0) {
        console.log(`It's an even number`);
        
    } else {
        console.log(`It's an odd number`);
        
    }
    
}

checknum(8);

// output
// It's an even number