// Create a simple calculator program in JavaScript which can perform the addition, 
// substraction, multiplication and division on given numbers.



function calculator(num1, operand, num2) {


    switch (operand) {
        case "+":
        console.log(num1 + num2);   
         break;
  
        case "-":
        console.log(num1 - num2);   
         break;
  
        case "*":
        console.log(num1 * num2);   
         break;
  
        case "/":
        console.log(num1 / num2);   
         break;
    
        default:
          console.log("Invalid Operator");
            
    }
    
  }
  calculator(8,"*",3);

//   output
//   24