function callBack(name, age ,task){
    console.log('hello ' ,name)
    console.log('your age ', age)
    task()
}


function washHeand (){
    console.log('wash heand')
}
function takeShawar(){
    console.log('take shawar')
}
function goodMan(){
    console.log('he is naw coding good')
}
callBack('sogir uddin', 24 , washHeand )
callBack('gogir uddin', 12, takeShawar)
callBack('shykat ', 27, goodMan)
