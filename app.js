//function declaration
function a(){
    console.log("a called");
    console.log(a);
}

//function expression
var b = function(){
    console.log("b called");
}

//named function expression
var c = function xyz(){
    console.log("c called");
    console.log(xyz);
}
c();
// xyz();

