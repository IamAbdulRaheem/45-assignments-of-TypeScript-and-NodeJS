"use strict";
// Task 25: Alien Colors#1:
Object.defineProperty(exports, "__esModule", { value: true });
let alien_color = "Green";
if (alien_color == 'Green') {
    console.log("Congratulations! You have just earned 5 Points.");
}
if (alien_color == 'Red') {
    // No Output because the condition is false
}
// Task 26: Alien Color#2
// Version that runs the if block
let alienColorForIf = "Green";
if (alienColorForIf == 'Green') {
    console.log("Congratulations! You have just earned 5 Points.");
}
else {
    console.log("Congratulations! You have just earned 10 Points.");
}
// Version that runs the else block
let alienColorForElse = "Red";
if (alienColorForElse == 'Green') {
    console.log("Congratulations! You have earned 5 Points.");
}
else {
    console.log("Congratulations! You have just earned 10 Points.");
}
// Task 27: Alien Colors#3
// Green Alien Version
let alienGreenVersion = "Green";
if (alienGreenVersion == 'Green') {
    console.log("Congratulations! You have just earned 5 Points.");
}
else if (alienGreenVersion == 'Yellow') {
    console.log("Congratulations! You have just earned 10 Points.");
}
else if (alienGreenVersion == 'red') {
    console.log("Congratulations! You have just earned 15 Points.");
}
// Yellow Alien Version
let alienYellowVersion = "Yellow";
if (alienYellowVersion == 'Green') {
    console.log("Congratulations! You have just earned 5 Points.");
}
else if (alienYellowVersion == 'Yellow') {
    console.log("Congratulations! You have just earned 10 Points.");
}
else if (alienYellowVersion == 'red') {
    console.log("Congratulations! You have just earned 15 Points.");
}
// Red Alien Version
let alienRedVersion = "Red";
if (alienRedVersion == 'Green') {
    console.log("Congratulations! You have just earned 5 Points.");
}
else if (alienRedVersion == 'Yellow') {
    console.log("Congratulations! You have just earned 10 Points.");
}
else if (alienRedVersion == 'Red') {
    console.log("Congratulations! You have just earned 15 Points.");
}
