// https://www.hackerrank.com/challenges/plus-minus/problem

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));
    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
    let countOfPositiveNumbers = 0;
    let countOfNegetiveNumbers = 0;
    let countOfZeros = 0;
    for (const e of arr) {
        if (e > 0) {
            countOfPositiveNumbers++;
        } else if (e < 0) {
            countOfNegetiveNumbers++;
        } else if (e === 0) {
            countOfZeros++;
        }
    }
    console.log(countOfPositiveNumbers / arr.length)
    console.log(countOfNegetiveNumbers / arr.length)
    console.log(countOfZeros / arr.length)
}

function main() {
    const n = parseInt(readLine(), 10);
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    plusMinus(arr);
}