//Write a program that shows text representation of a day in a week for a number input from 1 to 7.
//All other cases output a message explaining that input must be a number between 1 and 7.
//For input 1, output should be “Monday”.
//For input 10, output should be “Input must be a number between 1 and 7”.
var  day = 10;
var result = 'Wednesday';

    switch (day) {
        case 1:
            result = "Today is Monday";
            break;
        case 2:
            result = "Today is Tuesday";
            break;
        case 3:
            result = "Today is Wednesday";
            break;
        case 4:
            result = "Today is Thursday";
            break;
        case 5:
            result = "Today is Friday";
            break;
        case 6:
            result = "Today is Saturday";
            break;
        case 7:
        result = "Today is Sunday";
            break;
        default:
        result = "Input must be a number between 1 and 7";
       }
       
       console.log(result);