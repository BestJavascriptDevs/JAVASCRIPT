//lexical scope means one scope inside another

const a = 20;
{
    const a = 100;
    {
        const a = 200;
        console.log(a);   //a will get access to nearest value
    }
}

const a = 20;
{
    const a = 100;
    {
        const a = 200;
    }
    console.log(a);   //a will get access to nearest value
}

//first class functions
