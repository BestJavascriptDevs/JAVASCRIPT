const users = [
    { firstName: 'sachin', lastName: 'sharma', age: 25 },
    { firstName: 'steve', lastName: 'jobs', age: 76 },
    { firstName: 'elon', lastName: 'musk', age: 47 },
    { firstName: 'linus', lastName: 'torvald', age: 76 },
    { firstName: 'data', lastName: 'name', age: 25 },
]
const output0 = users.map( x=>  x.firstName + ' ' + x.lastName  );
const output = users.map( function(x){
    return {
        name: x.firstName + ' ' + x.lastName,
        age: x.age
    }
});

const data = users.reduce(function(accu, curr){
    if(accu[curr.age]){
        accu[curr.age] = ++accu[curr.age];
    }else{
        accu[curr.age] = 1;
    }
    return accu;
}, {})

console.log(data);