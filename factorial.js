// let factorial = 1
// for (var i = 1; i <= 5; i++){
//     factorial =  factorial * i
//     console.log(i , factorial)
// }

function factorial (num){
    let result = 1
    for (var i = 1; i <= 5; i++){
        result = result * i
        console.log(i, result)
    }
}
var totalResult = factorial (5)
console.log(totalResult)