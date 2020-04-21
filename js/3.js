// https://www.hackerrank.com/challenges/staircase/problem

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

// Complete the staircase function below.
function staircase(n) {
    for (let i = 1; i <= n; i++) {
        let s = '';
        for (let j = 1; j <= n - i; j++) {
            s = s.concat(' ');
        }
        for (let k = 1; k <= i; k++) {
            s = s.concat('#');
        }
        console.log(s);
    }
}

function main() {
    const n = parseInt(readLine(), 10);
    staircase(n);
}