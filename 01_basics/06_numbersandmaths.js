const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
//toFixed makes  after decimal upto that no only it does not make accurate values lilke toPrecision
// console.log(balance.toFixed(4));


const otherNumber = 123.8966
// //toPrecision is decimal pointed to that no of digits size only....
// console.log(otherNumber.toPrecision(3));



// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));//it round  values>5 to upper and <5 to lower values after decimal
// console.log(Math.ceil(4.2));//it rounds to all decimal after .0 to ceil i.e upper value
// console.log(Math.floor(4.9));//it rounds to all decimal after.0 to floor i.e lower value
// console.log(Math.min(4, 3, 6, 8));//returns min of all
// console.log(Math.max(4, 3, 6, 8));// returns max of all


console.log(Math.random());//value is between 0-1
console.log((Math.random()*10) + 1);//value is mul by 10 i.e moved by 1 decimal value i.e 1 digit comes
// console.log(Math.floor(Math.random()*10) + 1);//+1 means definetly +1 is added to value and is always>1

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)//val b/n min-max