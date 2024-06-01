class Parson {
     constructor (firstName, lastName, salery){
          this.firstName1 = firstName;
          this.lastName2= lastName;
          this.salery=salery;
     }
}
const hero = new Parson('md' , 'shykat', 200000);
console.log(hero)

//second newam a kora jay but old

function propaty (fastName , lastName , salary ){
     this.fastParson = fastName;
     this.secondParson = lastName;
     this.baton = salary
}
 const oldparson = new propaty('md', 'mahmud',200000000);
 console.log(oldparson)