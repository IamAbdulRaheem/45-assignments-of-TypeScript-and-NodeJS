"use strict";
// Task 34: Pizzas
Object.defineProperty(exports, "__esModule", { value: true });
let favouritePizza = ["Cheese Pizza", "Pepperoni Pizza", "Vaggie Pizza"];
for (let flavour of favouritePizza) {
    console.log(`${flavour}`);
}
for (let flavour of favouritePizza) {
    console.log(`I really like ${flavour}.`);
}
console.log("I really love pizzas so much.");
// Task 35: Animals
let animals = ["Dog", "Cat", "Rabbit"];
for (let animal of animals) {
    console.log(`${animal}`);
}
for (let animal of animals) {
    console.log(`${animal} would make a great pet.`);
}
console.log("I love cats so I think that cats would make great pet!");
// Task 36: T shirt
function make_shirt(size, message) {
    console.log(`A ${size}-sized shirt will printed with the message ${message}.`);
}
// Call the function
make_shirt("medium", "Hello World");
