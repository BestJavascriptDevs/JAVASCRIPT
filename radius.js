const radius = [3, 1, 2, 4];

const output = radius.reduce(function(acc, curr){
    acc = [...acc, Math.PI*curr*curr];
    return acc;
},[])

console.log(output);

const output1 = radius.map((x)=>{
    return Math.PI*x*x;
})

console.log(output1);