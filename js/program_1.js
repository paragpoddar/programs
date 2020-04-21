/**
 * 
 * https://www.geeksforgeeks.org/count-numbers-0-digit/
 * 
 * Count numbers having 0 as a digit
 * 
 * Count how many integers from 1 to N contains 0’s as a digit.
 */

process.stdin.resume();
process.stdin.setEncoding("utf-8");
let stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;
});

process.stdin.on("end", function () {
    main(stdin_input);
});

function main(input) {
    const N = parseInt(input)
    console.log(getCount(N))
}

/**
 * 
 * Get count of 0 contained number of 1 to N
 */
function getCount(N) {
    let count = 0;
    for (let i = 1; i <= N; i++) {
        if (has0(i)) {
            count += 1
        }
    }
    return count;
}

/**
 * 
 * Traverse each digit of a number 
 */
function has0(number) {
    let temp = number;
    while (temp) {
        const digit = temp % 10;
        if (digit === 0) {
            return true;
        }
        temp = parseInt(temp / 10)
    }
    return false;
}