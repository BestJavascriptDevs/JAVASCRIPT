//shadowing

var a = 100;   //global
{                            //block scoped
    var a = 10;
    console.log(a);
}
console.log(a);

//for let and const

let b = 100;
{
    let b = 20;
    const c = 30;
    console.log(b);
    console.log(c);
}
console.log(b);