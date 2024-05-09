"use strict";
{
    const student1 = {
        title: 'Exam Kit',
        author: 'engr.dipongkar',
        publishedYear: 2010
    };
    const student2 = {
        title: 'web developmen ph-3',
        author: 'Jankar mahabub',
        publishedYear: 2022
    };
    function isRecentBook(student) {
        const year = new Date().getFullYear();
        console.log(year);
        const currrentYear = year - student.publishedYear;
        if (currrentYear <= 5) {
            return true;
        }
        else {
            return false;
        }
    }
    console.log(isRecentBook(student2));
    //
}
