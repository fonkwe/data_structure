//Description:  Create a grades object that stores a 
//set of student grades in an object.Provide a function for adding a 
//grade and a function for displaying the student’s grade average.

//Implementations:
function createGrade() { 
    this.gradeStore = [];
    this.addStudentGrade = addStudentGrade;
    this.averageStudentGrade = this.averageStudentGrade;
}
function addStudentGrade(grade) {
    this.gradeStore.push(grade);  
}
function averageStudentGrade() {
    let total = 0;
    for(let i = 0; i < this.gradeStore.length; i++) {
        total += this.gradeStore[i];
    }
    return total / this.gradeStore.length;
}
   
let thisWeek = new createGrade();
thisWeek.addStudentGrade(52);
thisWeek.addStudentGrade(55);
thisWeek.addStudentGrade(61);
thisWeek.addStudentGrade(65);
thisWeek.addStudentGrade(55);
thisWeek.addStudentGrade(50);
thisWeek.addStudentGrade(52);
thisWeek.addStudentGrade(49);
//thisWeek.averageStudentGrade();
console.log(gradeStore);