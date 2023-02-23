// Boolean value is either true or false.
//     - Write three JavaScript statement example which provide truthy value.
//     - Write three JavaScript statement example which provide falsy value.


//Falsy values : A falsy value is a value that is considered false when encountered in a Boolean context.


if(undefined) {
    console.log("if part");
} else {
    console.log("else part");
}

if(null) {
    console.log("if part");
} else {
    console.log("else part");
}

if(NaN) {
    console.log("if part");
} else {
    console.log("else part");
}

// truthy values : In JavaScript, a truthy value is a value that is considered true when encountered 
// in a Boolean context. All values are truthy unless they are defined as falsy. That is, all values are
//  truthy except false, 0, -0, 0n, "", null, undefined, and NaN.

if(3) {
    console.log("if part");
} else {
    console.log("else part");
}

if("false") {
    console.log("if part");
} else {
    console.log("else part");
}

if(Infinity) {
    console.log("if part");
} else {
    console.log("else part");
}

// output

// else part
// else part
// else part

// if part
// if part
// if part