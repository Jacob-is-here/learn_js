let lista = [1,2,3];

lista.push(33);
lista.push(34);

// console.log(lista);
lista.pop();
// console.log(lista);

let word1 = "akacja";

// console.log(word1.toUpperCase());


let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"]
};
// console.log(day1.squirrel);

// console.log(day1.wolf);
day1.wolf = false;
// console.log(day1.wolf);



let descriptions = {
  work: "Went to work",
  "touched tree": "Touched a tree"
}; 

// console.log(descriptions["touched tree"])

let anObject = {left: 1, right: 2};
// console.log(anObject.left);
delete anObject.left;
// console.log(anObject.left);
// console.log("left" in anObject);
// console.log("right" in anObject); 

let objectA = {a: 1 , b: 2};
Object.assign(objectA , {b: 3 , c: 4}); // change and add
// console.log(objectA);

let journal1 = [
  {events: ["work", "touched tree", "pizza",
            "running", "television"],
   squirrel: false},
  {events: ["work", "ice cream", "cauliflower",
            "lasagna", "touched tree", "brushed teeth"],
   squirrel: false},
  {events: ["weekend", "cycling", "break", "peanuts",
            "beer"],
   squirrel: true},
  
];

// console.log(journal1[0]);

// ==============

let journal = [];

function addEntry(events , squirrel){
    journal.push({events,squirrel})
}

addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true); 


// console.log(journal)

for (let entry of journal) {
//   console.log(`${entry.events.length} events.`);
} 

// ================
let todoList = [];
function remember(task){
    todoList.push(task);
}

function getTask(){
    return todoList.shift();
}

function rememberUrgently(task){
    todoList.unshift(task);
}

remember("hello")

console.log(getTask());

let osoba = {
  imie: "Jan",
  nazwisko: "Kowalski",
  wiek: 42,
  zawód: "programista"
};

let { imie } = osoba;

console.log(imie);


function city(object){
    return object.address?.city;
}

console.log(city({address:{city : "Warsaw"}}));

console.log(city({name : "Warsaw"}));


// Json


let text = JSON.stringify({squirrel: false,events: ["weekend"]});
console.log(text);


// ex 1
function range(start,stop,step = start < stop ? 1 : -1)
{

    let listEx1 = [];
    if(step > 0){
        for( let i = start ; i <= stop ; i+=step){
            listEx1.push(i)
        }
    }else{
        for( let i = start ; i >= stop ; i+=step){
            listEx1.push(i)
        }
    }
    return listEx1;
}

function sum(listEx1) {
  let total = 0;
  for (let value of listEx1) {
    total += value;
  }
  return total;
}

// ex 2

function reverseArray(array){

    let outPutArray = [];

    for(let i = array.length - 1 ; i >= 0 ; i--){
        outPutArray.push(array[i]);
    }
    return outPutArray;

}
function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}


let listaa = ["A","B","C"];

console.log(reverseArray(listaa));


// ex 3 

function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(value, list) {
  return {value, rest: list};
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}
console.log(arrayToList([10, 20]));

function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}