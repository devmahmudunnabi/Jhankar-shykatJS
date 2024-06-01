var space = "i am a student .   i leves in a bangladesh ."
var count = 0;
for ( var i = 0 ; i <space.length ; i++ ){
    var child = space[i];
    if (child==" " && space[i -1 ] !=" "){
        count++;
    }
}

console.log(count)