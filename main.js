"use strict";
// Task 1
// Vs Code, Node.js and TypeScript are installed.
Object.defineProperty(exports, "__esModule", { value: true });
// import { off } from "process"
// My first task is to thank Mr.Kamran Khan Tessori, Daniyal Nagori, Sir Zia Khan, and all my faculty teachers for giving an opportunity to us in the world of programming and GenAI.
// Task 2: Personal Message
// let personname: string= "Eric";
// console.log(`Hello ${personname}, would you like to learn some TypeScript today?`);
// Task 3: Name Cases
// let Name: string= "Abdul Raheem";
// console.log(Name.toLowerCase());
// console.log(Name.toUpperCase());
// console.log(Name.charAt(0).toUpperCase()+Name.slice(1).toLowerCase());
// Task 4: Famous Quote 1
// let author: string= "Quaid e Azam";
// let quote: string= "There are two powers in the world; One is sword and the other is pen. There is great competition and rivalry between the two";
// console.log(`"${author} once said, "${quote}.""`);
// Task 5: Famous Quote 2
// let famousperson: string= "Quaid e Azam";
// let quote: string= "There are two powers in the world; One is sword and the other is pen. There is great competition and rivalry between the two";
// let message: string= (`"${famousperson} once said, "${quote}.""`);
// console.log(message);
// Task 6: Stripping Names 
// let Name: string= "\tAbdul Raheem \n";
// console.log(Name);
// console.log(Name.trim());
// Task 7: Number Eight
// console.log(5+3);
// console.log(11-3);
// console.log(4*2);
// console.log(16/2);
// Task 8: Create Four lines 
// console.log(5+3);
// console.log(11-3);
// console.log(4*2);
// console.log(16/2);
// Task 9: Fovourite Number 
// let favnumber: number= 85;
// console.log(`My favourite number is ${favnumber}`);
// Task 10: Adding Comments
// 1: This is how we can display and remove extra white spaces in a data type 
// let Name: string= "\tAbdul Raheem \n";
// console.log(Name);
// console.log(Name.trim());
// 2: This is the method how we can print a message to show our favourite Number 
// let favnumber1: number= 85;
// console.log(`My favourite number is ${favnumber1}`);
// Task 11: Names 
// let names: string[]= ["Abdul Raheem", "Abdul Rehman", "Abdullah", "Saad", "Abdul Sami", "Asad"]
// We can do this task by using different for loops. all these for loops have same output
// for (let index = 0; index < names .length; index++) {
//     console.log(names[index]);
// }
// for(let item of names){
//     console.log(item);
// }
// names.forEach(function f(item){
//     console.log(item);
// })
// Task 12: Greeting
// let names: string[]= ["Abdul Raheem", "Abdul Rehman", "Abdullah", "Saad", "Abdul Sami", "Asad"]
// for(let item of names){
//     console.log("Good Morning! Have a nice day," + item);
// }
// // Task 13:Your own Array
// let transportation: string[]= ["Honda MotorCycle", "BMW Car", "Luxury House", "Apple Mobile", "Rolex Watch"]
// for(let item of transportation){
//     // console.log("I would like to own a " + " " +item);
//     console.log(`I would like to own a ${item}`);
// }
// // Task 14: Guest List 
// let guests: string[]= ["Kamran Tessori", "Zia Khan", "Daniyal Nagori"]
// for (let index = 0; index < guests.length; index++) {
//     console.log(`Dear ${guests[index]}, you are cordially invited to dinner. Please join us for an evening of great conversation and delicious food!`); 
// }
// Task 15: Changing Guest list
// let Guests: string[]= ["Kamran Tessori", "Zia Khan", "Daniyal Nagori"]
// let unabletoattend: string= "Kamran Tessori";
// console.log(`${unabletoattend} can't make to the dinner due to some reasons`);
// // Replace the guest
// let newguest: string= "Ameen Alam";
// Guests[Guests.indexOf(unabletoattend)]= newguest;
// // New Invitation
// for(let item of Guests){
//     console.log(`Dear ${item}, you are cordially invited to dinner. Please join us for an evening of great conversation and delicious food!`)
// }
// Task 16: More Guests 
// let guestList: string[] = ["Kamran Tessori", "Zia Khan", "Daniyal Nagori", "Ameen Alam"];
// let unableToAttend: string = guestList.splice(0, 1)[0]; // Removing the first guest who can't make it
// let newInvitee: string = "Asharib Ali"; // New person to invite
// console.log(`${unableToAttend} can't make it to the dinner due to some reasons.`);
// guestList.push(newInvitee); // Adding the new person to the end of the guest list
// guestList.unshift("Muhammad Qasim"); // Adding one new guest to the beginning of the array
// guestList.splice(Math.floor(guestList.length / 2), 0, "Hamza"); // Adding one new guest to the middle of the array
// console.log("Good news! We found a bigger dinner table.");
// // Sending invitations to the updated guest list
// for (let i = 0; i < guestList.length; i++) {
//     console.log(`Dear ${guestList[i]}, you are cordially invited to dinner. Please join us for an evening of great conversation and delicious food!`);
// }
// Task 17:Shrinking Guest list 
// let guestList: string[] = ["Kamran Tessori", "Zia Khan", "Daniyal Nagori", "Ameen Alam", "Muhammad Qasim", "Asharib Ali"];
// let unableToAttend: string = guestList.splice(0, 1)[0]; 
// console.log(`${unableToAttend} can't make it to the dinner due to some reasons.`);
// // Announcement
// console.log("Attention: Due to unforeseen circumstances, we can only invite two people for dinner.");
// // Removing the guests we can't invite
// while(guestList.length > 2){
//  let removeguest= guestList.pop();
//  console.log(`Sorry ${removeguest}, We won't be able to invite you to dinner`)
// }
// // Sending message to the guests we are still inviting
// for (let index = 0; index < guestList.length; index++) {
//     console.log(`Dear ${guestList[index]}, I am really honored to say that you are still invited to dinner`);
// }
// //Printing the empty list
//     guestList.pop();
//     guestList.pop();
//     console.log("Final Guest list:", guestList);
// Task 18: Seeing the world
// let places: string[]= ["Makkah", "Madina", "Blue Mosque", "Bait ul Muqaddas", "Mount Everest"];
// //Print array in Original order
// console.log("Original order:", places);
// //Print array in Alphabatical order
// console.log("Alphabatical Order:", [...places.sort()]);
// //Print array in Original order again
// console.log("Original order:", places);
// //Print array in Reverse Alphabatical order
// console.log("Reverse Alphabatical Order:", [...places.sort().reverse()]);
// //Print array in Original order again
// console.log("Original order:", places);
// //Print array in Reversed order
// places.reverse();
// console.log("Reversed order", places);
// //Print array in Reversed order again
// places.reverse();
// console.log("Back to its original order", places);
// //Sort array in Alphabatical order
// console.log("Sorted in Alphabatical order:", [...places.sort()]);
// //Sort array in Reverse Alphabatical order
// console.log("Stored in Reverse Alphabatical Order:", [...places.sort().reverse()]);
// Task 19: Dinner Guests
// let guestList: string[] = ["Kamran Tessori", "Zia Khan", "Daniyal Nagori", "Ameen Alam", "Muhammad Qasim", "Asharib Ali"];
// let length= guestList.length;
// console.log(`I am inviting ${length} number of guests at my dinner party.`);
// for(let item of guestList){
//     console.log(`Dear ${item}, You are cordially invited to dinner. Please join us for an evening of great conversation and delicious food!`);
// }
// //Task 20:Think of something you could store in an array
// let List: string[]= ["Pakistan", "India", "Russia", "China", "North Korea"];
// console.log("Here is the list of countries with nuclear power:");
// for(let item of List){
//     console.log(item);
// }
// // Task 21: Think of something you could store in TS object
// let employee:{
// Name: string , Profession: String, Salary: Number, WorkingHours: string,
// }={
//     Name: "Abdul Raheem",
//     Profession: "Web Developer",
//     Salary: 200000,
//     WorkingHours: "9am to 5pm" ,
// }
// for(let key in employee){
//     console.log(`The ${key} of employee is ${(employee as any)[key]}.`);
// }
// Task 22: Intentional Error
// let friends: string[]= ["Abdul Raheem", "Abdul Rehman", "Abdullah", "Saad", "Asad"];
// // In the above array the value of index is up to 4, so if we print value 5 which doesn't exist it will show error
// console.log(friends[5]);
// // Now correcting the index error
// let $friends: string[]= ["Abdul Raheem", "Abdul Rehman", "Abdullah", "Saad", "Asad"];
// console.log($friends[4]);
// // Task 23: Conditional Tests
// // Test 1:
// let car: string= "subaru";
// console.log("Is car=='subaru'? I predict True.");
// console.log(car== 'subaru');
// // Test 2:
// console.log("Is car=='toyota'? I predict False.");
// console.log(car== 'toyota');
// // Test 3:
// let Bike: string= "Honda";
// console.log("Is Bike=='Honda'? I predict True.");
// console.log(Bike== 'Honda');
// // Test 4:
// console.log("Is Bike=='Unique'? I predict False.");
// console.log(Bike== 'Unique');
// // Test 5:
// let Train: string= "Karachi Express";
// console.log("Is Train=='Karachi Express'? I predict True.");
// console.log(Train== 'Karachi Express');
// // Test 6:
// console.log("Is Train=='Green Line Express'? I predict False.");
// console.log(Train== 'Green Line Express');
// // Test 7:
// let airLines: string= "Pak Air Ways";
// console.log("Is airLines=='Pak Air Ways'? I predict True.");
// console.log(airLines=='Pak Air Ways');
// // Test 8:
// console.log("Is airLines=='Turkish Air Lines'? I predict False.");
// console.log(airLines=='Turkish Air Lines');
// // Test 9:
// let LED: string= "Samsung";
// console.log("Is LED=='Samsung'? I predict True.");
// console.log(LED=='Samsung');
// // Test 10:
// console.log("Is LED=='TCL'? I predict False.");
// console.log(LED=='TCL');
// Task 24: More conditional tests
// Test For equality for strings
// let studentName: string= "Abdul Raheem";
// console.log("The name of student is 'Abdul Raheem.'");
// console.log(studentName=='Abdul Raheem');
// console.log("The name of student is 'Abdul Rehman'");
// console.log(studentName=='Abdul Rehman');
// // Test for inequality for strings
// let Profession: string= "Web Developer";
// console.log("The profession of student is 'Android Developer'.'");
// console.log(Profession!='Android Developer');
// console.log("The profession of student is 'Web Developer'.'");
// console.log(Profession!='Web Developer');
// // Test for lower case function
// let Name: string= "Abdul Raheem";
// console.log(Name.toLowerCase()== 'abdul raheem');
// console.log(Name.toLowerCase()=='Abdul raheem');
// // Numerical Test
// console.log(5==5);
// console.log(5!=5);
// console.log(5>2);
// console.log(10<3);
// console.log(20>=20);
// console.log(4<=2);
// Test using 'and' operator
// console.log(20>5 && 5<20);
// console.log(5>20 && 20<5);
// // Test using 'or' operator
// console.log(10==10 || 10<12);
// console.log(5*5==24 || 25/5!=5);
// // Test whether item is in an array
// let fruits: string[]= ["apple", "banana", "mango"];
// console.log("Is apple included in fruits?");
// console.log(fruits.includes("apple"));
// // Test whether item is not in an array
// console.log("Is onion included in fruits?");
// console.log(fruits.includes("onion"));
// Task 25: Alien Colors#1:
// let alien_color: string= "Green";
// if (alien_color=='Green') {
//     console.log("Congratulations! You have just earned 5 Points.");
// }
// if (alien_color=='Red') {
//     // No Output because the condition is false
// }
// Task 26: Alien Colors#2
// Version that runs the if block
// let alien_color: string= "Green";
// if (alien_color=='Green') {
//     console.log("Congratulations! You have just earned 5 Points.");
// }
// else{
//     console.log("Congratulations! You have just earned 10 Points.");
// }
// Version that runs the else block
// let alien_color: string= "Red";
// if (alien_color=='Green') {
//     console.log("Congratulations! You have earned 5 Points.");
// }
// else{
// console.log("Congratulations! You have just earned 10 Points.");
// }
// Task 27: Alien Colors#3
// // Green Alien Version
// let alien_color: string= "Green";
// if (alien_color=='Green') {
//     console.log("Congratulations! You have just earned 5 Points.");
// }
// else if (alien_color=='Yellow') {
//     console.log("Congratulations! You have just earned 10 Points.");
// }
// else if (alien_color=='red') {
//     console.log("Congratulations! You have just earned 15 Points.");
// }
// Yellow Alien Version
// let alien_color: string= "Yellow";
// if (alien_color=='Green') {
//     console.log("Congratulations! You have just earned 5 Points.");
// }
// else if (alien_color=='Yellow') {
//     console.log("Congratulations! You have just earned 10 Points.");
// }
// else if (alien_color=='red') {
//     console.log("Congratulations! You have just earned 15 Points.");
// }
// Red Alien Version
// let alien_color: string= "Red";
// if (alien_color=='Green') {
//     console.log("Congratulations! You have just earned 5 Points.");
// }
// else if (alien_color=='Yellow') {
//     console.log("Congratulations! You have just earned 10 Points.");
// }
// else if (alien_color=='Red') {
//     console.log("Congratulations! You have just earned 15 Points.");
// }
// Task 28: Stages of Life
// let age: number= 18;
// if (age<2) {
//     console.log("The person is baby");
// }
// else if (age<4) {
//     console.log("The person is toddler");
// }
// else if (age<13) {
//     console.log("The person is kid");
// }
// else if (age<20) {
//     console.log("The person is teenager");
// }
// else if (age<65) {
//     console.log("The person is an adult");
// }
// else {
//     console.log("The person is an elder");
// }
// Task 29: Favourite Fruit
// let favourite_fruit: string[]= ["Orange", "Apple", "Grapes"];
// if (favourite_fruit.includes("Apple")) {
//     console.log("I really like Apple.")
// }
// if (favourite_fruit.includes("Orange")) {
//     console.log("I really like Orange.");
// }
// if (favourite_fruit.includes("Grapes")) {
//     console.log("I really like Grapes.");
// }
// if (favourite_fruit.includes("Cherry")) {
//     console.log("I really like Cherry.");
// }
// if (favourite_fruit.includes("Banana")) {
//     console.log("I really like Banana.");
// }
// Task 30: Hello Admin
// let userNames: string[]= ["Admin", "User1", "User2", "User3", "User4"];
// for(let item of userNames){
//     if (item==="Admin") {
//         console.log("Hello Admin, Would you like to see a status report?")
//     }
//     else{
//         console.log(`Hello ${item}, Thank you for logging in again.`);
//     }
// }
// Task 31: No users
// let userNames: string[]= [];
// if (userNames.length==0) {
//     console.log("We need to find some new users.");
// }
// for(let item of userNames){
//     if (item=="Admin") {
//         console.log("Hello Admin, Would you like to check some status report.")
//     }
//     else{
//         console.log("Thank you for logging in again")
//     }
// }
// Task 32: Checking User Names
// let current_users: string[]= ["User1", "User2", "User3", "User4", "User5"];
// let new_users: string[]= ["User5", "User4", "User6", "User7", "User8"];
// for(let Name of new_users){
//     let username_exist: boolean= false;
//     for(let current_name of current_users){
//         if(Name.toLowerCase()===current_name.toLowerCase()){
//             username_exist= true;
//             break;
//         }
//     }
//     if (username_exist) {
//         console.log(`Sorry the username "${Name}" has already been taken. Please enter a new username.`);
//     }
//     else{
//         console.log(`The username "${Name}" is available.`);
//     }
// }
// Task 33: Ordinal Numbers
// let numbers: number[]= [1,2,3,4,5,6,7,8,9];
// for(let number of numbers){
//     if (number==1) {
//         console.log(`${number}st`);
//     }
//     else if (number==2) {
//         console.log(`${number}nd`);
//     }
//     else if (number==3) {
//         console.log(`${number}rd`);
//     }
//     else{
//         console.log(`${number}th`);
//     }
// }
// Task 34: Pizzas
// let favouritePizza: string[]= ["Cheese Pizza", "Pepperoni Pizza", "Vaggie Pizza"];
// for(let flavour of favouritePizza){
//     console.log(`${flavour}`);
// }
// for(let flavour of favouritePizza){
//     console.log(`I really like ${flavour}.`);
// }
// console.log("I really love pizzas so much.");
// Task 35: Animals
// let animals: string[]= ["Dog", "Cat", "Rabbit"];
// for(let animal of animals){
//     console.log(`${animal}`);
// }
// for(let animal of animals){
//     console.log(`${animal} would make a great pet.`)
// }
// console.log("I love cats so I think that cats would make great pet!");
// Task 36: T shirt
// function make_shirt(size:string, message:string):void {
//     console.log(`A ${size}-sized shirt will printed with the message ${message}.`)
// }
// // Call the function
// make_shirt("medium", "Hello World");
// Task 37: Large Shirts
// function make_shirt(size:string= "Large", message:string="I love TypeScript"): void {
//     console.log(`A ${size}-sized shirt will print the message, "${message}."`)
// }
// // Default message for the large shirt
// make_shirt();
// // Default message for the medium shirt
// make_shirt("medium");
// // shirt of any type with the different message
// make_shirt("large", "Hello World");
// Task 38: Cities
// function describe_city(city:string, country:string="Pakistan"): void {
//     console.log(`${city} is in ${country}.`);
// }
// describe_city("Karachi");
// describe_city("Lahore");
// describe_city("Dhaka", "Bangladesh");
// Task 39: City Names
// function city_country(city:string, country: string): void {
//     console.log(`"${city}, ${country}"`);
// }
// city_country("Lahore", "Pakistan");
// city_country("Dhaka", "Bangladesh");
// city_country("Mumbai", "India");
// Task 40: Album
// function make_album(artist:string, title: string, tracks?: number): {artist: string, title:string, tracks?:number}{
//     let album:{artist:string, title: string, tracks?:number}={
//         artist:artist,
//         title: title,
//     }
//     if (tracks!==undefined) {
//         album.tracks= tracks;
//     }
//     return album;
// }
// // Making three dictionaries that have different albums
// let album1 = make_album("Taylor Swift", "Folklore");
// let album2 = make_album("Ed Sheeran", " ", 12); // Including number of tracks
// let album3 = make_album("Beyoncé", "Lemonade");
// // Printing each return value to show that objects are storing the album information correctly
// console.log(album1);
// console.log(album2);
// console.log(album3);
// Task 41: Magicians
// function show_magician(Magicians:string[]): void {
//     for(let Names of Magicians){
//         console.log(Names);
//     }
// }
// let Magicians: string[]=["Abdul Raheem", "Abdul Sami", "Abdul Rehman", "Abdullah"];
// show_magician(Magicians);
// Task 42: Great Magicians
// function make_great(Phrase: string, magicians:string[]):void {
//     for(let Names of magicians){
//         console.log(`${Phrase}, ${Names}`);
//     }
// }
// let magicians: string[]=["Abdul Raheem", "Abdul Sami", "Abdul Rehman", "Abdullah"];
// // Calling make_great to modify the array
// make_great("The Great", magicians);
// // calling show_magician to see the modified list
// show_magician(Magicians);
// Task 43: Unchanged Magicians
// function make_great(magicians: string[]): string[] {
//     let great_magicians: string[] = [];
//     for (let magician of magicians) {
//         great_magicians.push("the Great " + magician);
//     }
//     return great_magicians;
// }
// // Reusing the show_magicians function from Exercise 39
// function show_magicians(magicians: string[]): void {
//     for (let magician of magicians) {
//         console.log(magician);
//     }
// }
// // Array of magician's names
// let magicians: string[] = ["Abdul Raheem", "Abdul Sami", "Abdul Rehman", "Abdullah"];
// // Creating a copy of the original array
// let original_magicians: string[] = [...magicians];
// // Calling make_great with a copy of the array
// let great_magicians: string[] = make_great([...magicians]);
// // Calling show_magicians to show the original array
// console.log("Original Magicians:");
// show_magicians(original_magicians);
// // Calling show_magicians to show the array with "the Great" added to each magician's name
// console.log("\nGreat Magicians:");
// show_magicians(great_magicians);
// Task 44: Sandwiches
// function make_sandwich(...items: string[]): void {
//     console.log("Making a sandwich with the following items:");
//     for (let item of items) {
//         console.log("- " + item);
//     }
// }
// // Calling the function with different number of arguments
// make_sandwich("ham", "cheese", "lettuce");
// make_sandwich("turkey", "bacon");
// make_sandwich("peanut butter", "jelly");
// Task 45: Cars
function car_info(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
        options: {}
    };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        for (var key in option) {
            car.options[key] = option[key];
        }
    }
    return car;
}
// Calling the function with required information and two additional name-value pairs
var my_car = car_info("Toyota", "Camry", { color: "red" }, { year: 2022 });
// Printing the returned Object to ensure all information was stored correctly
console.log(my_car);
