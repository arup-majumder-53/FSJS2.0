// Write a program to print the table of any number given by the user. The format of the output should be 
// smiliar to the below example-If the number given by the user is 2 then the output should look like this-
// 2 * 1 = 2
// 2 * 2 = 4
// 2 * 3 = 6 and so on till 2 * 10 = 20.




function table(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i}= ${num*i}`);
    }
 }
 
 
 table(12);


// output
// 12 * 1= 12
// 12 * 2= 24
// 12 * 3= 36
// 12 * 4= 48
// 12 * 5= 60
// 12 * 6= 72
// 12 * 7= 84
// 12 * 8= 96
// 12 * 9= 108
// 12 * 10= 120