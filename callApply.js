const normalParson = {
    fastNname: "rahim ",
    lastName: "korim",
    salary: 15000,
    getfullName: function() {
        console.log(this.fastNname, this.lastName)
    },
    chargBil: function(bil) {
        this.salary = this.salary - bil;
        return (this.salary)
    }
}
normalParson.chargBil(150);
normalParson.chargBil(4850);
console.log(normalParson.salary);