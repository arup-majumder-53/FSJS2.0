// Figure out the result of the following comparison expression first without using console.log(). 
// After you decide the result confirm it using console.log()

// - 4 > 3 -true
console.log(4 > 3);

// - 4 >= 3 -true
console.log(4 >= 3);

// - 4 < 3 -false
console.log(4 < 3);

// - 4 <= 3 -false
console.log(4 <= 3);

// - 4 == 4 -true
console.log(4 == 4);

// - 4 === 4 -true
console.log(4 === 4);

// - 4 != 4 -false
console.log(4 != 4);

// - 4 !== 4 -false
console.log(4 !== 4);

// - 4 != '4' -false
console.log(4 != '4');

// - 4 == '4' -true
console.log(4 == '4');

// - 4 === '4' -false
console.log(4 === '4');



// - Find the length of python and jargon and make a falsy comparison statement.

const pyhton = "python";
console.log(pyhton.length);

const jargon = "jargon";
console.log(jargon.length);

if (pyhton.length > jargon.length)  {
    console.log(`${pyhton}lenght > ${jargon} lenght`);
} else {
    console.log(`Both ${pyhton} & ${jargon} has same lenght which is ${pyhton.length}`);
}




// output

// true
// true
// false
// false
// true
// true
// false
// false
// false
// true
// false

// 6
// 6
// Both python & jargon has same lenght which is 6

