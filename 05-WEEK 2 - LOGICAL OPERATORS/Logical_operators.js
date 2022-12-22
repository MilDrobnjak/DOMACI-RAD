// 1.	Use the console to check the results you think should go in the following table:
        // p	    q	       p && q	   p || q
        // true	   true		
        // true	   false		
        // false   true		
        // false   false	

var p = true
var q = true
        console.log(p&&q);
        console.log(p||q);
var p = true
var q = false
        console.log(p&&q);
        console.log(p||q);
var p = false
var q = true
        console.log(p&&q);
        console.log(p||q);
var p = false
var q = false
        console.log(p&&q);
        console.log(p||q);
        
// 2.	If the variable age stores the information about user’s age, how we can check whether it contains a correct value?
//       Write expressions for checking:
//      ●	Is age negative value
//      ●	Is age greater than 120 

var age = 38
console.log(age>=0)
console.log(age>120)       
 


// 3.	 Let’s say there are speed limitations on a motorway from 60 to 120 kilometers per hour.
//      If we store the current speed value in the variable speed. Write an expression which will check if 
//      we are driving drive safely or not? (true if we are driving safe and false if not)   

var speed = 80 
        if (speed<60 || speed>120) {
         result = speed + " is not safe";       
        }
        else {
         result = speed + " is safe";   
        }
console.log(result)

