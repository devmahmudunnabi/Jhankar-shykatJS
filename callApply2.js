const normalParson = {
    fastName: 'mahmud',
    lastName: 'nabi',
    salary: 20000,
    getFullname: function() {
        console.log(this.fastName, this.lastName)
    },
    chargeBill: function(bil ,tex , tips ) {
        this.salary = this.salary - bil - tex - tips
        return (this.salary)
    }
}
 const heroParson  = {
    fastName : 'hero',
    lastName : 'janu' ,
    salary :1500,
 }
const friendlyPerson = {
 fastName : 'sakib',
 lastName : 'khan',
 salary :25000,
}
// const friendlyParson1 = normalParson.chargeBill.bind(normalParson);
// friendlyParson1(2000);
// friendlyParson1(3000);

// // console.log(heroParson.salary);
// console.log(normalParson);


// normalParson.chargeBill.call(friendlyPerson,5000 , 300 , 10)
// normalParson.chargeBill.call(normalParson,5000 , 300 , 10)
// console.log(normalParson.salary)
// console.log(friendlyPerson.salary)
// console.log(heroParson.salary)


 