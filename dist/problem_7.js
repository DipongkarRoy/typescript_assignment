"use strict";
{
    //
    function logString(value) {
        if (typeof value === 'string') {
            console.log(value);
        }
        else {
            throw new Error('string is unvalid value');
        }
    }
    try {
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Input is not a string.");
        }
    }
    logString('amr sonar bangla');
    //
}
