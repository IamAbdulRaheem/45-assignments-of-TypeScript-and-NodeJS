// Task 40: Make Album

function makeAlbum(artist:string,title:string,tracks?:number) {
    let album:any={artist,title};
    if (tracks) {
        album["tracks"]=tracks;
    }
    return album;
}

console.log(makeAlbum("Artist One","The first album"));
console.log(makeAlbum("Artist Two","The second album",12));


// Task 41: Magicians

let magicians:string[]=["Abdul Raheem","Abdul Sami","Abdul Rehman"];

function showMagicians(magicians:string[]) {
    for(let magician of magicians){
        console.log(magician);
    }
}

showMagicians(magicians);



// Task 42: Great magicians

function makeGreat(magicians:string[]) {
    for(let magician of magicians){
        console.log(`${magician}, the Great!`)
    }
}

makeGreat(magicians);  // modifies the original array
showMagicians(magicians);  // Shows modified names

