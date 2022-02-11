const arr = [5, 1, 3, 0, 28];

function findSum (arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(findSum(arr));

const output = arr.reduce(function(acc, curr){
        acc = acc + curr;
        return acc;
}, 0);

console.log(output);

function findMax (arr){
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if( arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax(arr));

const max = arr.reduce( function(max, curr){
    if( max < curr ){
        max = curr
    }
    return max;
}, arr[0]);
console.log(max);