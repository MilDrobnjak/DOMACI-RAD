// 1.	Create an object that represents your favourite coffee. Please include coffee name,
// strength, flavour, milk, sugar, … everything you like!
var coffee = {
name: "Doncafe Moment",
strength: "medium",
flavour: "coffee with full flavor and intense aroma",
milk: "as you wish",
sugar: "as you wish"
}
// 2.	Create an object that represents your favourite movie. Please include title,
// actors, director, genre, popularity.
var favouriteMovie = {
    title: "Terminator 2: Judgment Day",
actors: ["Arnold Schwarzenegger","Linda Hamilton", "Robert Patrick", "Edward Furlong", "Joe Morton"],
director: "James Cameron",
genre: "science-fiction action film",
popularity: "very popular"
}
// 3.	Write a function that creates an object that represents a project. Each project is
// described by: description,  programming language, git repository, boolean status that
// says if the project is in development or not. Add a method that prints out the project's
// repository,  a method that checks if the project is written in JavaScript as well as a
// method that checks if the project is in development or not.
var projectSportsEquipment = {
    description: "Creating a website for ordering sports equipment online",
    programmingLanguage: "Java",  
    gitRepository: "https://github.com/MilDrobnjak",
    projectIsInDevelopment: false
}

function checkObject(projectSportsEquipment) {
  if (projectSportsEquipment.programmingLanguage === "JavaScript") {
    var rez = true
} else {
    var rez = false
}
if (projectSportsEquipment.projectIsInDevelopment === "true") {
    rezult = "Project is in development."
} else {
    rezult = "Project isn't in development."
}
console.log(`Project's repository is ${projectSportsEquipment.gitRepository},  the project is written in JavaScript: ${rez},  project is in development: ${rezult}`)
}
checkObject(projectSportsEquipment)

// 4.	Write a function that creates an object that represents a culinary recipe. Each recipe
// is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
// preparing time, preparing instruction. 
// ○	Add a method that prints out all the ingredients necessary for the meal preparation. 
// ○	Add a method that checks if a meal can be prepared in under 15 minutes. 
// ○	Add a method that changes the type of cuisine to the given value. 
// ○	Add a method that delete a given ingredient from the list of ingredients. 
var culinaryRecipe = {
    name: "Homemade bread",
    typeOfCuisine: "home cooking",
    complexity: 5,
    list: listOfIngredients = {
        flourInGrams: 800,
        waterInGrams:700,
        yeastInGrams: 20,
        saltInGrams: 10,
        sugarInGrams: 5,
        },
    preparingTimeInMinute: 90, 
    preparingInstruction: "Sift the flour and pour it into the mixing bowl. Crumble the yeast in the middle of the flour, add salt and sugar. Pour lukewarm water and knead the dough. The dough must be soft. Leave it to rise, then stir once more and leave it to rise again. Mix once more and pour into a well-greased baking sheet. Prick the top of the dough with a fork in several places. Wait a little longer until the oven heats up. Bake in a well-heated oven at 220c. When it is baked, spray it with water on all sides and wrap it briefly in a kitchen towel." 
}

function checkRecipe(culinaryRecipe) {
    var cul = JSON.stringify(culinaryRecipe.list) 
if (checkRecipe.preparingTimeInMinute<=15) {
    rez = "meal can be prepared in under 15 minutes."
} else {
    rez = "it takes more than 15 minutes to prepare a meal"
}


console.log(`List of ingredients: ${cul}, ${rez}, in Italy they have ${culinaryRecipe['typeOfCuisine'] ='Italian style of bread baking'}, and sugar is removed from the list of ingredients: ${delete culinaryRecipe.list.sugarInGrams}`);
}
checkRecipe(culinaryRecipe)
