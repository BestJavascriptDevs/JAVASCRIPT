const radius = [3, 1, 2, 4];

const calculate = function(radius, logic){
    const output = logic(radius);
    return output;
}

const area = function(radius){
    const output = radius.reduce(function(acc, curr){
          acc =  [...acc, Math.PI*curr*curr];
        return acc;
    },[])
    return output;
}

const cirumference = function(radius){
    const output = radius.reduce(function(acc, curr){
          acc = [...acc, 2*Math.PI*curr];
        return acc;
    },[])
    return output;
}

const diameter = function(radius){
    const output = radius.map( x=>{
        return x*2;
    })
    return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, cirumference));
console.log(calculate(radius, diameter));


