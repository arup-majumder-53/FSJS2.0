// Use the Date object to do the following activities

const d = new Date();

//     - What is the year today?
    
   console.log(d.getFullYear());

//     - What is the month today as a number?

   console.log(d.getMonth());

//     - What is the date today?

   console.log(d.getDate());

//     - What is the day today as a number?

   console.log(d.getDay());

//     - What is the hours now?

   console.log(d.getHours());

//     - What is the minutes now?
   
   console.log(d.getMinutes());
   

//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.
   


const secondselapsed = Math.round(Date.now() / 1000);//JavaScript stores dates as number of milliseconds since January 01, 1970.
console.log(secondselapsed);



// output

// 2023
// 1
// 24
// 5
// 23
// 51
// 1677262913.045


