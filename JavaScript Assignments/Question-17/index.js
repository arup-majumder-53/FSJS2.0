// Write a program which tells the number of days in a month, now consider leap year.



let month = "october"
    
switch (month) {

    case "january":  
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        console.log("31 days");
        break;

    case "february":
        console.log("28 days");
        break;

           
    case "april":
    case "june":
    case "september":
    case "november":   
        console.log("30 days");
        break;

      
    default:
        console.log("Please check spelling of month");
}   



// output

// 31 days




