// //Using your knowledge of JS, implement the following:
// Create a variable called number_of_tickets and set it to any number greater than 0
// Create a variable called player_name and set it to any name of your choosing
// Print to the console a greeting message that includes the players name and the amount of tickets held. Something like:
//   "Welcome awesomePlayer, you have collected 123 tickets" 
//   Where awesomePlayer and 123 come from the variables
// Create an if, else if, else block that captures the following scenarios:
// if the user has more than 10 tickets, print a message that says they can purchase a troll doll
//   if the user has more than 20 tickets, print a message that says they can purchase a stick of gum
//   if the user has more than 50 tickets, print a message that says they can purchase a fake wig
//   if the user has more than 100 tickets, print a message that says they can purchase a blow up hammer
//   !! Make sure that only one message ever prints out !! If a user has 120 tickets, they should only see the blow up hammer message
// Test your code by using different values for your number_of_tickets variable 
// Create a variable called temperature at set it to a number
// Create a variable called weather at set it to one of:
//   "sunny"
//   "cloudy"
//   "rainy"
//   "snowing"

// You will only go outside to tan if the temperature is above 20 and the weather is sunny
// You will only go skiiing if the temperature is below 0 but also above -20 and the weather is snowing
// In any other scenario, you will stay in inside and read a book
// Create an if, else if else block that will print out what you are doing based on the temperature and the weather

// Make an appropriate git commit
// Connect this local repo to a remote repo and push your code

var username = "awsome_Player";
var number_of_tickets = 0;
console.log("Hello " + username + " you have " + number_of_tickets + " tickets" );


if(number_of_tickets < 10){
    console.log("You need to earn more tickets!")
} else if(number_of_tickets >= 100) {
    console.log("You can purchase a blow up hammer!")
} else if(number_of_tickets >= 50) {
    console.log("You can purchase a fake wig!");
} else if(number_of_tickets >= 20) {
    console.log("You can purchase a stick of gum!");
} else if( number_of_tickets >= 10) {
    console.log("You can buy a troll doll!");
} else {
    console.log("Something went wrong!")
}

var temperature = -20;
var weather = "snowing";

if(temperature > 20 && weather === "sunny") {
    console.log("I am going tanning!")
} else if(temperature < 0 && temperature > -20 && weather === "snowing") {
    console.log("I am going skiiing")
} else {
    console.log("I am staying inside and reading a book")
}