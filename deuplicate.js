var data = [3,6,88,66,33,38,9,55,3,55];
var uniQue = [];
for ( var i = 0; i < data.length ; i ++){
    var element = data [i];
    var ddd = uniQue.indexOf( element );
    if (ddd == -1){
        uniQue.push(element);
    }
}
console.log(uniQue)