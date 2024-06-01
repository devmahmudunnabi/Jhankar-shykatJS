class perent {
    constructor(){
        this.fatherName = "nurunnabi";
    }
}
class child extends perent{
    constructor(name){
        super();
        this.name = name;

    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}
const children = new child("shykat");
const children2 = new child("mohona");

console.log(children);
console.log(children2.getFullName());
