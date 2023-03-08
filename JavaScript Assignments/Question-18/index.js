// Write a program which tells the number of days in a month.


function getDays (year, month){
    new Date(year, month, 0).getDate();
};

console.log(getDays(2020, 2));
console.log(getDays(2020, 2));

// output
// 29
// 28
