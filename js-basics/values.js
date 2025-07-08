
const ten = 12
let ass = ten

console.log(ass)

// ex 1
 
let letter = "#"
for (let i = 0 ; i < 7 ; i+=1){
    console.log(letter)
    letter += "#"
}

// ex 2 
for(let i = 1 ; i <=100 ; i+=1 ){

    if( i % 5 == 0 && i % 3 == 0){
        console.log("FizzBuzz");
    }else if(i % 5 == 0){
        console.log("Buzz");
    }else if(i % 3 == 0){
        console.log("Fizz");
    }else{
        console.log(i);
    }
}

// ex 3 

let position = ""
for(let i = 0 ; i < 8 ; i++){
    position = ""
    for( let j = 0 ; j < 8 ; j++){
        if( (i+j)%2 == 1){
            position += "#"
        }else{
            position += " "
        }
    }
    console.log(position)
}


