// Declare an array containing the multiple values and use lastIndexOf to determine the position of the first 
// and last occurrence of a word "pw skills".

let arr =[ "ineuron","pw skills","lco","lco pro","pw skills"];

let lastoccurrence = arr.lastIndexOf("pw skills");// to find lastoccurrence of "pw skills"


let firstoccurrence = arr.lastIndexOf("pw skills",3);

console.log(lastoccurrence);
console.log(firstoccurrence);


// output
// 4
// 1
