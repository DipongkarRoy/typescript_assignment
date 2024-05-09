"use strict";
{
    // repeatString:
    function repeatString(param1, param2) {
        let result = ' ';
        for (let i = 0; i < param2; i++) {
            result += param1;
        }
        return result;
    }
    const result = repeatString('dipok', 13);
    console.log(result);
    //
}
