"use strict";
{
    const student1 = {
        name: "Engr.Diongkar",
        age: 23,
        grades: [75, 80, 82, 88, 34, 34, 34, 90]
    };
    function calculateAverageGrade(student) {
        const totalGrades = student.grades.reduce((total, grade) => total + grade, 0);
        console.log(totalGrades);
        console.log(student.grades.length);
        const averageGrade = totalGrades / student.grades.length;
        return averageGrade;
    }
    console.log(calculateAverageGrade(student1));
    //
}
