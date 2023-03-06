// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer


let month = "january";
        
switch (month) {

    case "september":
    case "october":
     case "november":
        console.log(`the season is Autumn`);
        break;

           
    case "december":
    case "january":
    case "february":
        console.log(`the season is Winter`);
        break;

   
    case "march":
    case "april":
    case "may":
        console.log(`the season is Spring`);
        break;

    case "june":
    case "july":
    case "august":
        console.log(`the season is Summer`);
        break;

    default:
        console.log(`Please check spelling of month`);
}   

// output
// the season is Winter