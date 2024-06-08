"use strict";
// Task 16: More Guests
Object.defineProperty(exports, "__esModule", { value: true });
let guests = ["Kamran Tessori", "Zia Khan", "Daniyal Nagori"];
let unableToAttend = guests.splice(0, 1)[0];
console.log(`${unableToAttend} can't make it to the dinner due to some reasons!`);
// Adding a print statement for bigger dinner table
console.log(`Good news! We found a bigger dinner table`);
// Adding more guests
let newInvite = "Ameen Alam";
guests.push(newInvite); // Adding one guest at the end of list
guests.unshift("Hamzah Syed"); // Adding one guest at the start of list
guests.splice(Math.floor(guests.length / 2), 0, "Asharib Ali"); // Adding one new guest at the middle of array
// Printing the invititation statement
for (let names of guests) {
    console.log(`Dear ${names}, you are cordially invited to dinner. Please join us for an evening of great conversation and delicious food!`);
}
// Task 17: Shrinking Guest List
let guestList = ["Kamran Tessori", "Zia Khan", "Daniyal Nagori", "Ameen Alam", "Muhammad Qasim", "Asharib Ali"];
// Announcement
console.log("Attention: Due to unforeseen circumstances, we can only invite two people for dinner.");
// Removing the guests we can't invite
while (guestList.length > 2) {
    let removeguest = guestList.pop();
    console.log(`Sorry ${removeguest}, We won't be able to invite you to dinner`);
}
// Sending message to the guests we are still inviting
for (let names of guestList) {
    console.log(`Dear ${names}, I am really honored to say that you are still invited to dinner`);
}
// Printing empty list
guestList.pop();
guestList.pop();
console.log(`Final Guest list: ${guestList}`);
// Task 18: Seeing the world
let places = ["Makkah", "Madina", "Blue Mosque", "Bait ul Muqaddas", "Mount Everest"];
//Print array in Original order
console.log("Original order:", places);
//Print array in Alphabatical order
console.log("Alphabatical Order:", [...places.sort()]);
//Print array in Original order again
console.log("Original order:", places);
//Print array in Reverse Alphabatical order
console.log("Reverse Alphabatical Order:", [...places.sort().reverse()]);
//Print array in Original order again
console.log("Original order:", places);
//Print array in Reversed order
places.reverse();
console.log("Reversed order", places);
//Print array in Reversed order again
places.reverse();
console.log("Back to its original order", places);
//Sort array in Alphabatical order
console.log("Sorted in Alphabatical order:", [...places.sort()]);
//Sort array in Reverse Alphabatical order
console.log("Stored in Reverse Alphabatical Order:", [...places.sort().reverse()]);
