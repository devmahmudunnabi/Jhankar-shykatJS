const student = [
    {id : 10 , name : 'rony '},
    {id : 11 , name : 'maruf'},
    {id : 12 , name : 'rabbi'}

];
const expected = student.map(  y => y.name)
const ides = student.map( y => y.id);
const filters = student.filter(x => x.id > 11)
const total = student.find(x => x.id>11);
console.log(expected , ides ,filters , total) 