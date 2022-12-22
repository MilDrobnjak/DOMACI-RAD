//Write a program that for a 1-12 number input (representing a month in a year) shows that month’s name. 
//All other cases output a message explaining that input must be a number between 1 and 12. 
//    For input 2, output should be “February”.
//    For input 6, output should be “June”.
//    For input 13, output should be “Input must be a number between 1 and 12”.
var  month = 13;
var result = 'April';

    switch (month) {
        case 1:
            result = "January";
            break;
        case 2:
            result = "February";
            break;
        case 3:
            result = "March";
            break;
        case 4:
            result = "April";
            break;
        case 5:
            result = "May";
            break;
        case 6:
            result = "June";
            break;
        case 7:
            result = "July";
            break;
        case 8:
            result = "August";
            break;
        case 9:
            result = "September";
            break;
        case 10:
            result = "October";
            break;
        case 11:
            result = "November";
            break;
        case 12:
            result = "December";
            break;
        default:
            result = "Input must be a number between 1 and 12";
    }
       
       console.log(result);

       
