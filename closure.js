function  x(){
    const a = 5;
    function y(){
        console.log(a);
    }
    return y;
}

const z = x();
console.log(z);
x()();