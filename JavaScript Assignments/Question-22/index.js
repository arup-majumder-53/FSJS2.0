// The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

    
//     - Sort the array and find the min and max age

        console.log(ages.sort());
        
        console.log(Math.max(...ages));
        console.log(Math.min(...ages));


//     - Find the median age(one middle item or two middle items divided by two)

       const median = ages[ages.length / 2]
       console.log(`the median age is ${median}`);

//     - Find the average age(all items divided by number of items)
      
       const sum = (a) => { 
          let sum = 0; 
          for (let i = 0; i < a.length; i++) 
          sum += a[i]; 

          return sum; 
        } 

       const average = sum(ages)/ages.length;
       console.log(`the average age ${average}`);    

//     - Find the range of the ages(max minus min)

        let range=(Math.max(...ages)-Math.min(...ages));
        console.log(`The range of the ages is ${range}`);

//     - Compare the value of (min - average) and (max - average), use abs() method
      
       const min_average = Math.abs(Math.min(...ages) - average);
       const max_average = Math.abs(Math.max(...ages) - average)
       
       if (min_average > max_average) {
           console.log("min_average is greater than max_average")
       } else {
           console.log("min_average is less than max_average");
       } ;




//  output
//   [
//     19, 19, 20, 22, 24,
//     24, 24, 25, 25, 26
//   ]
//   26
//   19
//   the median age is 24
//   the average age 22.8
//   The range of the ages is 7
//   min_average is greater than max_average
  