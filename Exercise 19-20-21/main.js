"use strict";
// Task 19: Dinner Guests
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = ["Kamran Tessori", "Zia Khan", "Daniyal Nagori", "Ameen Alam", "Muhammad Qasim", "Asharib Ali"];
console.log(`I am inviting ${guestList.length} number of guests at my dinner party.`);
// Task 20: Think of something you could store in an array
let List = ["Pakistan", "India", "Russia", "China", "North Korea"];
console.log("Here is the list of countries with nuclear power:");
for (let item of List) {
    console.log(item);
}
// Task 21: Think of something you could store in TS objec
let employee = {
    Name: "Abdul Raheem",
    Profession: "Web Developer",
    Salary: 200000,
    WorkingHours: "9am to 5pm",
};
for (let key in employee) {
    console.log(`The ${key} of employee is ${employee[key]}.`);
}
