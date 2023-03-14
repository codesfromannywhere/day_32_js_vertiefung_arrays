console.log("läuft");

// lvl_1_1: Arrays

const person = ["Laura" , "Bergliebe" , "Yoga"]
const friends = ["Lisa" , "Eva" , "Maria"]
const favoriteFood = ["Knoblauch" , "Käse" , "Pizza"]

// console.log(person);
// console.log(friends);
// console.log(favoriteFood);


//lvl_1_2: Arrays Index

// console.log(person[0]);
// console.log(person[1]);
// console.log(person[2]);
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(favoriteFood[0]);


// lvl_1_3: Arrays length

// console.log(person.length);
// console.log(friends.length);
// console.log(favoriteFood.length);


// lvl_1_4: Arrays push()

// console.log(person);
console.log(person.push("Lustig", "Cool" ));
console.log(person);

// console.log(friends);
console.log(friends.push("Niko" , "Fabio"));
console.log(friends);

// // console.log(favoriteFood);
console.log(favoriteFood.push("Indisch" , "Chips"));
console.log(favoriteFood);


// lvl_1_5: Arrays pop()

// console.log(person.pop(3));
let lastValue1 = person.pop(3)
console.log(lastValue1);
console.log(person);

// let lastValue2 = friends.pop(3)
// console.log(lastValue2);
// console.log(friends);

// let lastValue3 = favoriteFood.pop(3)
// console.log(lastValue3);
// console.log(favoriteFood);


//lvl_1_6: Arrays shift()

// console.log(person.shift());
let firstValue1 = person.shift();
console.log(firstValue1);
console.log(person);


// lvl_1_7: Arrays unshift()

console.log(friends.unshift("Gela" , "Mara"));
console.log(friends);
console.log(friends.unshift("Basti"));
console.log(friends);

console.log(favoriteFood.unshift("Käseknödel" , "Käsespätzle"));
console.log(favoriteFood);


// lvl_1_8: Arrays slice()

const favoritePlaces = ["Italien" , "Portugal" , "Spanien" , "Schweiz" , "Frankreich" , "Uganda", "Ghana"]

console.log(favoritePlaces.slice(0,2));


// lvl_1_10: Arrays/String split()

const text = "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards."

// console.log(text.split());

let split1 = text.split(" " , 6);
console.log(split1);

let split2 = text.split(" ");
console.log(split2);

let split3 = text.split("");
console.log(split3);




