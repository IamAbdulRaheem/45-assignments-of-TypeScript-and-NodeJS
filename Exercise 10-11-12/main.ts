// Task 10: Adding Comments

// 1: This is how we can display and remove extra white spaces in a data type 

let Name: string= "\tAbdul Raheem \n";
console.log(Name);
console.log(Name.trim());


// 2: This is the method how we can print a message to show our favourite Number 

let favnumber1: number= 85;
console.log(`My favourite number is ${favnumber1}`);



// Task 11: Names

let namesOfFriends: string[]= ["Abdul Raheem", "Abdul Rehman", "Abdullah", "Saad", "Abdul Sami", "Asad"]

// We can do this task by using different for loops. all these for loops have same output

for (let index = 0; index < namesOfFriends .length; index++) {
    console.log(namesOfFriends[index]);
    
}

for(let item of namesOfFriends){
    console.log(item);
}

namesOfFriends.forEach(function f(item){
    console.log(item);
});



// Task 12: Greetings

let greetingToFriends:string[]=["Abdul Raheem", "Abdul Rehman", "Abdullah", "Saad", "Abdul Sami", "Asad"]

for(let names of greetingToFriends){
    console.log(`Good Morning! Have a nice day, ${names}`)
}