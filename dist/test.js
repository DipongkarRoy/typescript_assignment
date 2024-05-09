"use strict";
const nameData = 'amr sonar bangla ami tomay balobasi';
console.log(nameData);
const user = {
    name: 'susmita',
    age: 23,
    marriad: false
};
console.log({
    user
});
const student = ['dipo', 'danto', 'rita', 'mita', 'konika', 'kobuta'];
student.push('ami bangla');
let students = [...student];
const [a, b, c, ...rest] = student;
console.log(students);
console.log(student);
console.log(a);
console.log(b);
console.log(c);
console.log(rest);
