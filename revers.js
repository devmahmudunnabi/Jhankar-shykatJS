function reversFunction(string){
    var revers = ""
    for(var i = 0; i < string.length; i++){
        var str = string[i]
        revers = str + revers

    }
    return revers
}
var line = "i am a student in cty unaversity "
var result = reversFunction(line)
console.log(result)


var ddddd = reversFunction(" afsut ut iowfw 4urti4 shykat")
console.log(ddddd)
