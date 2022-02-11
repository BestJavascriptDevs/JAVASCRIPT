const arr = [1, 4, 6, 7, 9, 0];

function isOdd(x){
    return x % 2 === 0; 
}

const output = arr.filter(isOdd);

console.log(output);