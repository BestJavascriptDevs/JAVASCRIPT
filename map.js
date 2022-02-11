const arr = [5, 1, 3, 0, 28];

const output = arr.map(double);
const output2 = arr.map(triple);
const output3 = arr.map(binary);

function double(x){
    return x*2;
}

function triple(x){
    return x*3;
}

function binary(x){
    return x.toString(2);
}

const data = arr.map((x) => x*5);
console.log(data);
