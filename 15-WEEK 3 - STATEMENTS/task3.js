// 3. Find the grade for input marks (you should have at least two input marks). Grades are:
// A (91-100), B (81-90), C (71-80), D (61-70), E (51-60). Optionally print if student has failed the exam.
var x = 29;
    if (50<x && x<61)
{
    console.log("Your grade is E!");
}
else if (60<x && x<71)
{
    console.log("Your grade is D!");
}
else if (70<x && x<81)
{
    console.log("Your grade is C!");
}
else if (80<x && x<91)
{
    console.log("Your grade is B!");
}
else if (90<x && x<101)
{
    console.log("Your grade is A!");
}
else 
{
    console.log("You failed the exam");
}