// Write a program to print all the prime number between 0 to 100 (0 and 100 included).

function printprime() {

    for (let i = 0; i <= 100; i++) {
      let isPrime = true;
      for (let j = 2; j < i; j++) {
          if (i % j == 0) {
            isPrime = false;
              break;
          }
      }
      if ( i > 1 && isPrime ) {
          console.log(i);
      }
  }
    
  }
  
  printprime();



// output
// 2
// 3
// 5
// 7
// 11
// 13
// 17
// 19
// 23
// 29
// 31
// 37
// 41
// 43
// 47
// 53
// 59
// 61
// 67
// 71
// 73
// 79
// 83
// 89
// 97