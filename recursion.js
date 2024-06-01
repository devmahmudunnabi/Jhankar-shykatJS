function factorial(num){
    var fat =  1;
    for ( var i = 1; i <= num; i++){
        fat = fat *i
    }
    return fat 
}
var result = factorial(5)
console.log(result)

var newNumber = factorial(6)
console.log(newNumber)