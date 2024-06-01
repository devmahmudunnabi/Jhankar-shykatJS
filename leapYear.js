function isYear(year){
    const result = year % 4
    if (result === 0){
        return (true)
    }else{
        return (false)
    }
}

const totalResult = isYear(2001)
console.log(totalResult)