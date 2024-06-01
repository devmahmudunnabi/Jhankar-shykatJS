var marks = [45,81,56,84,89,99,86,82,35,36];
var max = marks[0];
for (var i =0; i <marks.length; i++){
    var element = marks[i];
    if(element > max){
        max= element;
    }
}
console.log("highest value is :",max)