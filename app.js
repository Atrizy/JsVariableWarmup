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