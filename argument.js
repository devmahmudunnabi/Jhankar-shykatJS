function argument(num1 , num2) {
    var sum = 0
    for (let i = 0; i < arguments.length; i++){
        const element = arguments[i];
        sum = sum + element
    }
    var almamoon = "Ektah maindar";
    var dadu = "Ektah Batpar";
    var equal = almamoon + dadu;
    console.log(equal);
    return sum;
}
 var result = argument(20,10,30)
 console.log(result)