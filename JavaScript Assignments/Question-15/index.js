// Write a program which can give grades to students according to theirs scores:
// - 80-100, A
// - 70-89, B
// - 60-69, C
// - 50-59, D
// - 0-49, F

const marks = 92;

if(marks >=80 && marks<=100){
    console.log("obtained grade is A");
} 
else if(marks >=70 && marks<=89){
    console.log("obtained grade is B");
} 
else if(marks >=60 && marks<=69){
    console.log("obtained grade is C");
}
else if(marks >=50 && marks<=59){
    console.log("obtained grade is D");
}
else if(userMarks >=0 && userMarks<=49){
    console.log("obtained grade is F");
} 
else {
    console.log("invalid marks");
}

// output
// obtained grade is A
