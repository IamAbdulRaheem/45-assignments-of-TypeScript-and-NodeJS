"use strict";
// Task 31: No users
Object.defineProperty(exports, "__esModule", { value: true });
let userNames = [];
if (userNames.length == 0) {
    console.log("We need to find some new users.");
}
for (let item of userNames) {
    if (item == "Admin") {
        console.log("Hello Admin, Would you like to check some status report.");
    }
    else {
        console.log("Thank you for logging in again");
    }
}
// Task 32: Checking UserNames
let currentUsers = ["User1", "User2", "User3", "User4", "User5"];
let newUsers = ["User4", "User5", "User6", "User7", "User8"];
for (let newName of newUsers) {
    let userNameExist = false;
    for (let currentName of currentUsers) {
        if (newName.toLowerCase() === currentName.toLowerCase()) {
            userNameExist = true;
        }
    }
    if (userNameExist) {
        console.log(`The user name ${newName} is already taken!`);
    }
    else {
        console.log(`The user name ${newName} is available!`);
    }
}
// Task 33: Ordinal Numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of numbers) {
    if (number == 1) {
        console.log(`${number}st`);
    }
    else if (number == 2) {
        console.log(`${number}nd`);
    }
    else if (number == 3) {
        console.log(`${number}rd`);
    }
    else {
        console.log(`${number}th`);
    }
}
