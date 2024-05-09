"use strict";
{
    //findLargestNumber:
    function findLargestNumber(array) {
        if (array.length === 0) {
            return undefined;
        }
        let largestNumber = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] > largestNumber) {
                largestNumber = array[i];
            }
        }
        return largestNumber;
    }
    const result = findLargestNumber([10, 5, 8, 20, 3]);
    console.log(result);
    //
}
