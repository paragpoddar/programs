/**
 * @description https://www.codechef.com/problems/HORSES
 */

process.stdin.resume();
process.stdin.setEncoding('utf8');

let stdin_input = '';

process.stdin.on('data', (input) => {
    stdin_input += input
});

process.stdin.on('end', () => {
    main(stdin_input);
});

function main(input) {
    const inputs = input.split('\n')
    const t = parseInt(inputs.shift())
    for (let i = 0; i < t; i++) {
        const n = parseInt(inputs.shift())
        const arr = inputs.shift().split(' ').map(Number);
        console.log(findShortestDiff(arr))
    }
}

function findShortestDiff(arr) {
    arr = arr.sort((a, b) => { return a - b });
    let shortestDiff = arr[1] - arr[0];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const diff = arr[j] - arr[i];
            if (shortestDiff > diff) {
                shortestDiff = diff;
            }
        }
    }
    return shortestDiff;
}