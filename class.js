class Student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.school = 'Kollimunnecha school'
    }
}

const student1 = new Student(12, 'Fahim');
const student2 = new Student(65, 'Nani');
console.log(student1.name, student2.name);