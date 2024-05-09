"use strict";
{
    //filterEvenNumbers :
    function filterEvenNumbers(arr) {
        const evenNumbers = [];
        for (let num of arr) {
            if (num % 2 === 0) {
                evenNumbers.push(num);
            }
        }
        return evenNumbers;
    }
    console.log(filterEvenNumbers([2, 3, 4, 5, 6, 7, 8, 9]));
    //
}
