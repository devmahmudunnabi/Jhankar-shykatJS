function anamilCount(anamil){
    var count = 0
    if( anamil<= 10){
        count = anamil* 50
    }else if( anamil <= 10){
        var fast  =  10 * 50
        var remain  = anamil- 10;
        var second =  remain  * 100
        anamil = fast + second
    }
    else{
        var fast = 10 * 50
        var second = 10 * 100
        var remain = anamil - 20
        var third  = remain * 300
        anamil = fast + second + third
    }
    return anamil
}
 var result = anamilCount(22)
 console.log(result)

 var resulttwo  = anamilCount(23)
 console.log(resulttwo)