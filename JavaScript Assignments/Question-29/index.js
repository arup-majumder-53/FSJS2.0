// Write a javascript program which takes the input of filename as string and prints the extension 
// of the file in the console.




function getFileExtension(name){

    const xtnsion = name.split('.').pop();
    return xtnsion;
}

let filename = "index.js";
console.log(getFileExtension(filename));