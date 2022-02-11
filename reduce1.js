const users = [
    { firstName: 'sachin', lastName: 'sharma', age: 25 },
    { firstName: 'steve', lastName: 'jobs', age: 76 },
    { firstName: 'elon', lastName: 'musk', age: 47 },
    { firstName: 'linus', lastName: 'torvald', age: 76 },
    { firstName: 'data', lastName: 'name', age: 25 },
]

//first name of the people whose age is less than 30

const output = users.filter(x=> x.age < 30 ).map( x => x.firstName )

console.log(output);

const output1 = users.reduce(function(acc, curr){
    if(curr.age<30){
        acc = [...acc, curr.firstName];
    }
    return acc;
},[])

console.log(output1);