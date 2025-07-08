
const dodawanie = function(x,y){
    return x+y;
}

console.log(dodawanie(5,9))
const hummus = function(factor) {
  const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
ingredient(1, "can", "chickpeas");
ingredient(0.25, "cup", "tahini");
ingredient(0.25, "cup", "lemon juice");
ingredient(1, "clove", "garlic");
ingredient(2, "tablespoon", "olive oil");
ingredient(0.5, "teaspoon", "cumin");
};

hummus(2);

const odejmowanie = (x,y) => x - y ; 

console.log(odejmowanie(10,12))

function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");

function wyswietl(x =1){
    console.log(x);
}

wyswietl()

function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5)); 

let name = "alisa"
console.log(name[3])


function min(x,y) {
    if (x >= y ){
        return y ;
    }else{
        return x ;
    }
}
console.log(min(0, 10));

function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}

function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}