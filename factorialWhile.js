function factorial (num){
    var i = 1
    var fat = 1
    while(i <= num){
        fat = fat * i
        i++
    }
    return fat
}
var result = factorial(6)
console.log(result)