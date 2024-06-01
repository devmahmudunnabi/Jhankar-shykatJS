// const number = [9, 2, 3, 4];
// const output = [];
// for(var i = 0; i < number.length; i++){
//     const element = number[i];
//     const value = element * element
//     output.push(value);
// }
// console.log(output);


// next system a kora jay 
// const number = [9, 2, 3, 4];
// function squre( element){
//     return element * element; 
// }
// number.map(function(element, index,array){
//     console.log(element , index,array);
// });

//thead system a kora jay

// const number = [9, 2, 3, 4];
// function squre( element){
//     return element * element;
// }
// const result = number.map(function(element){
//     return element * element;
// });
// console.log(result);


//4th system a kora jay 

const number = [9, 2, 3, 4 , 10];
const result = number.map(x => x * x);
console.log(result);
// map  are system 
const big = number.filter(x => x > 5);
console.log(big);