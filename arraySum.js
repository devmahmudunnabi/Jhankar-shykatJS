function getArraySum(number){
    var sum = 0;
    for (var i = 0; i<number.length; i++){
        var element = number[i];
        sum = sum + element
    }
    return sum
}
var number = [50,20,56,98,88,58,97]
var totalSum =  getArraySum(number)
console.log(totalSum)  

var result = getArraySum([50,60,80,70,60])
console.log(result)
