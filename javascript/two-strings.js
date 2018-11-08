/**
 * Given two strings of equal length, 
 * you have to tell whether they both strings are identical.
 * 
 * Two strings S1 and S2 are said to be identical, if any of the permutation of string S1 is equal to the string S2.
 * 
 * Input :
 * 
 * First line, contains an intger 'T' denoting no. of test cases.
 * Each test consists of a single line, containing two space separated strings S1 and S2 of equal length.
 * 
 * Output:
 * 
 * For each test case, if any of the permutation of string S1 is equal to the string S2 print YES else print NO.
 */

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let stdin_input = "";

process.stdin.on("data", (input) => {
    stdin_input += input;
})

process.stdin.on("end", () => {
    main(stdin_input);
})

function main() {
    const splittedElements = stdin_input.split("\n");
    const noOfTestCases = Number(splittedElements[0]);
    let j = 1;
    for (let i = 0; i < noOfTestCases; i++) {
        const splittedStrings = splittedElements[j].split(" ");
        const string1 = Array.from(splittedStrings[0]).sort().join();
        const string2 = Array.from(splittedStrings[1]).sort().join();
        if (string1 === string2) {
            console.log("YES");
        }
        else {
            console.log("NO");
        }
        j++;
    }
}