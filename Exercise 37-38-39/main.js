"use strict";
// Task 37: Large Shirts
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = "Large", message = "I love TypeScript") {
    console.log(`A ${size}-sized shirt will print the message, "${message}."`);
}
// Default message for the large shirt
make_shirt();
// Default message for the medium shirt
make_shirt("medium");
// shirt of any type with the different message
make_shirt("large", "Hello World");
// Task 38: Cities
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Dhaka", "Bangladesh");
// Task 39: City Names
function city_country(city, country) {
    console.log(`"${city}, ${country}"`);
}
city_country("Lahore", "Pakistan");
city_country("Dhaka", "Bangladesh");
city_country("Mumbai", "India");
