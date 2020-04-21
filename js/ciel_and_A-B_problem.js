/**
 * @description https://www.codechef.com/problems/CIELAB
 */


process.stdin.resume();
process.stdin.setEncoding('utf8');

let stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;
});

process.stdin.on("end", function () {
    main(stdin_input);
});

function stringToNumber(s) {
    return parseInt(s);
}

function changeString(stringValue, index, replacement) {
    const preFix = stringValue.substring(0, index);
    const postFix = stringValue.substr(index + 1);
    return preFix + replacement + postFix;
}

function getRandomNumber(from = 1, to = 9) {
    return Math.floor((Math.random() * to) + from);
}

function getWrongResult(numberOne, numberTwo, rightResult) {
    const valueToString = rightResult.toString();
    const changeIndex = getRandomNumber(0, valueToString.length - 1);
    const replaceValue = getRandomNumber().toString();
    const wrongResult = stringToNumber(changeString(valueToString, changeIndex, replaceValue));
    if (rightResult === wrongResult || numberOne === wrongResult || numberTwo === wrongResult) {
        getWrongResult(numberOne, numberTwo, rightResult);
    }
    return wrongResult;
}


function getNumbersArray(stringValue) {
    return stringValue.split(' ').map((element) => {
        return parseInt(element.trim(), 10);
    });
}

function main(input) {
    const numbers = getNumbersArray(input);
    const numberOne = stringToNumber(numbers[0]);
    const numberTwo = stringToNumber(numbers[1]);
    const rightResult = stringToNumber(numberOne - numberTwo);
    console.log(getWrongResult(numberOne, numberTwo, rightResult));
}