// will use exercise 41 here

function showMagicians(magicians:string[]) {
    for(let magician of magicians){
        console.log(magician);
    }
}



// Task 43: Unchanged magicians

let magicians:string[]=["Abdul Raheem","Abdul Sami","Abdul Rehman"];

function makeGreat(magicians:string[]):string[] {
    let greatMagicians:string[]=[];
    for(let magician of magicians){
        greatMagicians.push(`${magician}, the Great`);
    }
    return greatMagicians;
}

let greatMagicians=makeGreat(magicians.slice());  // creates a new modified array

console.log("Origianl Magician: ");
showMagicians(magicians);
console.log("Great Magicians: ");
showMagicians(magicians);   // show modified names




// Task 44: Sandwiches

function makeSandwich(...items:string[]) {
    console.log(`Making a Sandwich with: ${items.join(", ")}`)
}
makeSandwich("hum","cheese");
makeSandwich("turkey","lettuce","tomato");
makeSandwich("avocado","sprouts","mustards","mayo");



// Task 45: Cars

function makeCar(manufacturer:string,model:string,...options:[string,any][]):Object{
    let car:any={manufacturer,model};
    options.forEach(([key,value])=>{
        car[key]=value;
    });
    return car;
}

console.log(makeCar("Toyota","Corolla",["color","black"],["year","2020"]));
console.log(makeCar("ford","fiesta",["color","red"],["year","2022"]));