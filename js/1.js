// https://www.hackerrank.com/challenges/diagonal-difference/problem

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the diagonalDifference function below.
function diagonalDifference(arr) {
    const rowLength = arr[0].length;
    const colLength = arr.length;
    let i = 0;
    let j = 0;
    let sum1 = 0;
    while (i < colLength && j < rowLength) {
        sum1 += arr[i][j];
        i++;
        j++;
    }
    let sum2 = 0;
    i = 0;
    j = rowLength - 1;
    while (i < colLength && j >= 0) {
        sum2 += arr[i][j];
        i++;
        j--;
    }
    return Math.abs(sum2 - sum1);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const n = parseInt(readLine(), 10);
    let arr = Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    const result = diagonalDifference(arr);
    ws.write(result + '\n');
    ws.end();
}