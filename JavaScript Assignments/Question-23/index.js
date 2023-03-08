// Write a program to check that the number given by the user is a prime number or not.


 function checkprime(num) {

    if (num<2) 
        return `${num} is not a prime number`

    for(let i = 2; i<num; i++) {
        if (num % i === 0) {
            return `${num} is not a prime number`
            
        }
    }  
    
    return `${num} is a prime number`
 }

 let input = checkprime(17);
 console.log(input);





//  output
//  17 is a prime number