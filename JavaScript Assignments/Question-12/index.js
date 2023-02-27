// Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm



let date = new Date();


let day = date.getDate();
let month = (date.getMonth() + 1);
let year = date.getFullYear();
let hour = date.getHours();
let minutes = date.getMinutes();

function addzero(data){
    data<=9 ? data ="0" + data : data;
    
      return data;
  }

day = addzero(day);
month = addzero(month);
year = addzero(year);
hour = addzero(hour);
minutes = addzero(minutes);




//     - YYYY-MM-DD HH:mm
console.log(year + "-" + month + "-" + day + " " + hour + ":" + minutes);

//     - DD-MM-YYYY HH:mm
console.log(day + "-" + month + "-" + year + " " + hour + ":" + minutes);

//     - DD/MM/YYYY HH:mm
console.log(day + "/" + month + "/" + year + " " + hour + ":" + minutes);



// output

// 2023-02-26 18:40
// 26-02-2023 18:40
// 26/02/2023 18:40