function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

let labels = [];
repeat(5, i => {
  labels.push(`Unit ${i + 1}`);
});
console.log(labels);
// → ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]

function greaterThan(n) {
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));


function unless(test , them){
    if(!test) them();
}

repeat(3 , n => {
    unless(n % 2 == 1 , () =>{
        console.log(n , "is even");
    });
});

["A","B"].forEach(l => console.log(l));

function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0)); 
console.log([1, 2, 3, 4].reduce((a, b) => a + b));

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.find(c => c.name == name);
    if (!known) {
      counts.push({name, count: 1});
    } else {
      known.count++;
    }
  }
  return counts;
}

console.log(countBy([1, 2, 3, 4, 5], n => n > 2)); 

// ex 1

let arrays = [[1, 2, 3], [4, 5], [6]];

let flattened = arrays.reduce((acc, curr) => acc.concat(curr), []);

console.log(flattened);

// ex 2

function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}

// ex 3 

function every(array, test) {
    for(let element of array){
        if (test(element)!= true ){
            return false;
        }
    }
    return true;
}
function every2(array, predicate) {
  return !array.some(element => !predicate(element));
}

// ex 4

function dominantDirection(text) {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");

  if (counted.length == 0) {
    return "ltr";
  }

  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}
