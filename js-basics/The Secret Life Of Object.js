function speak(line){
    console.log(`The ${this.type} rabbit says '${line}'`);
}


let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hunry", speak};

whiteRabbit.speak("Oh my fur and whiskers");

speak.call(whiteRabbit,"Hurry");

let finder = {
    find(array){
        return array.some(v => v == this.value);
    },
    value : 5
}

console.log(finder.find([4,5]));

console.log(Object.getPrototypeOf({})== Object.prototype);

console.log(Object.getPrototypeOf(Math.max) == Function.prototype);

console.log(Object.getPrototypeOf([]) == Array.prototype);

let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
};
let blackRabbit = Object.create(protoRabbit);
blackRabbit.type = "black";
blackRabbit.speak("I am fear and darkness"); 


function makeRabbit(type){
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}

class Rabbit {
    constructor(type){
        this.type = type;
    }

    speak(line){
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let killerRabbit = new Rabbit("killer");

function ArchaicRabbit(type){
    this.type = type;
}

ArchaicRabbit.prototype.speak = function(line){
    console.log(`The ${this.type} rabbit says '${line}'`);
}

let oldSchoolRabbit = new ArchaicRabbit("old school");

let object = new class {getWord() {return "hello"}};
console.log(object.getWord()) 

class SecretiveObject {
    #getSecret(){
        return "I ate all the plums";
    }
    interrogate(){
        let sallISayIt = this.#getSecret();
        return "never";
    }
}

class RandomSource {
    #max;
    constructor(max){
        this.#max = max;
    }
    getNumber(){
        return Math.floor(Math.random()*this.#max);
    }
}

Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);

killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);

console.log((new Rabbit("basic")).teeth);

console.log(Rabbit.prototype.teeth); 

let ages1 = {
    Boris : 39,
    Liang : 22,
    Julia : 62
};

console.log(`Julia is ${ages1["Julia"]}`);
console.log("Is Jack's age known?", "Jack" in ages1);
console.log("Is toString's are knows", "toString" in ages1);

let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Julia", 62); 

console.log(`Julia is ${ages.get("Julia")}`);
 
console.log("Is Jack's age known?", ages.has("Jack"));
 
console.log(ages.has("toString")); 

console.log(Object.hasOwn({x:1},"x"));

Rabbit.prototype.toString = function() {
  return `a ${this.type} rabbit`;
};

console.log(String(killerRabbit)); 

Array.prototype.forEach.call({
    lenght: 2,
    0: "A",
    1: "B"
},elt => console.log(elt));

let varyingSize = {
  get size() {
    return Math.floor(Math.random() * 100);
  }
};

console.log(varyingSize.size);

console.log(varyingSize.size);

class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }

  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}

let temp = new Temperature(22);

console.log(temp.fahrenheit);

temp.fahrenheit = 86;

console.log(temp.celsius); 

let sym = Symbol("name");

console.log(sym == Symbol("name"));

Rabbit.prototype[sym] = 55;

console.log(killerRabbit[sym]);

const length = Symbol("length");

Array.prototype[length] = 0;

console.log([1, 2].length);
 
console.log([1, 2][length]); 

let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next());

console.log(okIterator.next());

console.log(okIterator.next());

class List {
  constructor(value, rest) {
    this.value = value;
    this.rest = rest;
  }

  get length() {
    return 1 + (this.rest ? this.rest.length : 0);
  }

  static fromArray(array) {
    let result = null;
    for (let i = array.length - 1; i >= 0; i--) {
      result = new this(array[i], result);
    }
    return result;
  }
}

class ListIterator {
  constructor(list) {
    this.list = list;
  }

  next() {
    if (this.list == null) {
      return {done: true};
    }
    let value = this.list.value;
    this.list = this.list.rest;
    return {value, done: false};
  }
} 

List.prototype[Symbol.iterator] = function() {
  return new ListIterator(this);
};

let list = List.fromArray([1, 2, 3]);
for (let element of list) {
  console.log(element);
}

console.log([..."PCI"]);

class LengthList extends List {
  #length;

  constructor(value, rest) {
    super(value, rest);
    this.#length = super.length;
  }

  get length() {
    return this.#length;
  }
}

console.log(LengthList.fromArray([1, 2, 3]).length); 

console.log(
  new LengthList(1, null) instanceof LengthList);

console.log(new LengthList(2, null) instanceof List);

console.log(new List(3, null) instanceof LengthList);

console.log([1] instanceof Array); 

// ex 1 

class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(other) {
    return new Vec(this.x + other.x, this.y + other.y);
  }

  minus(other) {
    return new Vec(this.x - other.x, this.y - other.y);
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));

console.log(new Vec(1, 2).minus(new Vec(2, 3)));

console.log(new Vec(3, 4).length);

// ex 2
class Group0{
    #table = [];
    
    static from(collection) {
    let group = new Group0;
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }

    has(element){
        if(this.#table.indexOf(element) == -1){
            return false;
        }else{
            return true;
        }
    }

    add(element){
        if(this.#table.indexOf(element)==-1){
            this.#table.push(element);
        }
    }

    delete(element){
        if(this.#table.indexOf(element)!=-1){
            let index = this.#table.indexOf(element);
            this.#table.splice(index, 1);
        }
    }
}
let group = Group0.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));

// ex 3

class Group1 {
  #members = [];

  add(value) {
    if (!this.has(value)) {
      this.#members.push(value);
    }
  }

  delete(value) {
    this.#members = this.#members.filter(v => v !== value);
  }

  has(value) {
    return this.#members.includes(value);
  }

  static from(collection) {
    let group = new Group1;
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this.#members);
  }
}

class GroupIterator {
  #members;
  #position;

  constructor(members) {
    this.#members = members;
    this.#position = 0;
  }

  next() {
    if (this.#position >= this.#members.length) {
      return {done: true};
    } else {
      let result = {value: this.#members[this.#position],
                    done: false};
      this.#position++;
      return result;
    }
  }
}

for (let value of Group1.from(["a", "b", "c"])) {
  console.log(value);
}

