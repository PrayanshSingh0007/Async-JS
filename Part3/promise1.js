const pr = new Promise((res, rej) => {
    console.log('executor callback triggered by promise constructor'); 
    for (let i = 0; i < 10000000000; i++) {}
});


console.log('promise created');
console.log(pr);