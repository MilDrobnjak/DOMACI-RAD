//Write a program that for a string input of a grade from “A”-“F”
//outputs a proper info message about that grade in the following 
//manner: A - "Good job"", B - "Pretty good"", C - "Passed"", D - "Not so good"", F - "Failed".
//Input different from letters A-F outputs a message "Unknown grade".
var  grade = "A";
var result = 'Good job';

    switch (grade) {
        case "A":
            result = "Good job";
            break;
        case "B":
            result = "Pretty good";
            break;
        case "C":
            result = "Passed";
            break;
        case "D":
            result = "Not so good";
            break;
        case "F":
            result = "Failed";
            break;
        default:
        result = "Input different from letters A-F outputs a message Unknown grade";
       }
       
       console.log(result);






