/*
Variables and Data Types
const = can't be re-assigned a value and can't be declared again  (block scope)
let = can be re-assigned a value but can't be declared again (block scope)
var = it can be re-assigned a value and it can also be declared again  (Global scope)

=> Never use var in your code instead of let because of block and functional scope issues.
# console.table([group of variables you want to show in tabular form])
*/


const accId=140
let accEmail="sneha@gmail.com"
var  accPassword="12345"
accCity="hnk"
let accState;
console.log(typeof(accId));
console.log(accCity);
console.log(accId);
console.table([accEmail,accCity,accPassword,accState])
//done