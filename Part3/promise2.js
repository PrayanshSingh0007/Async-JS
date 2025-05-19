const pr = new Promise( function exec(res, rej)  {
    console.log('executor callback triggered by promise constructor'); 
    const randmonNum = Math.floor(Math.random()*100);
    console.log('random number is:', randmonNum);
    if (randmonNum % 2 === 0) {
        res();
    } else {
        rej();
    }
});


console.log('promise created');
console.log(pr);