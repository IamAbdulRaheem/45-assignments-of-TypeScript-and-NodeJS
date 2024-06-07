"use strict";
// will use exercise 41 here
Object.defineProperty(exports, "__esModule", { value: true });
function showMagicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
// Task 43: Unchanged magicians
let magicians = ["Abdul Raheem", "Abdul Sami", "Abdul Rehman"];
function makeGreat(magicians) {
    let greatMagicians = [];
    for (let magician of magicians) {
        greatMagicians.push(`${magician}, the Great`);
    }
    return greatMagicians;
}
let greatMagicians = makeGreat(magicians.slice()); // creates a new modified array
console.log("Origianl Magician: ");
showMagicians(magicians);
console.log("Great Magicians: ");
showMagicians(magicians); // show modified names
// Task 44: Sandwiches
function makeSandwich(...items) {
    console.log(`Making a Sandwich with: ${items.join(", ")}`);
}
makeSandwich("hum", "cheese");
makeSandwich("turkey", "lettuce", "tomato");
makeSandwich("avocado", "sprouts", "mustards", "mayo");
// Task 45: Cars
function makeCar(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
console.log(makeCar("Toyota", "Corolla", ["color", "black"], ["year", "2020"]));
console.log(makeCar("ford", "fiesta", ["color", "red"], ["year", "2022"]));
