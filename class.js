class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Shykat school";
    }
}
const student1 = new Student( 12 , "maruf");
const student2 = new Student( 22, 'rony ');
const student3 = new Student( 23, 'tahimina ');


console.log(student1,student2,student3.name);  