/**
 * Ankit is in maze. The command center sent him a string which decodes to come out from the maze. He is initially at (0, 0). String contains L, R, U, D denoting left, right, up and down. 
 * In each command he will traverse 1 unit distance in the respective direction.
 * 
 * For example if he is at (2, 0) and the command is L he will go to (1, 0).
 * 
 * Input:
 * LLRDDR
 * 
 * Output:
 * 0 -2
 * 
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
    let splittedElements = input.split("");
    let x = 0;
    let y = 0;
    for (let i = 0; i < splittedElements.length; i++) {
        if (splittedElements[i] === "L") {
            x += -1;
        }
        if (splittedElements[i] === "R") {
            x += 1;
        }
        if (splittedElements[i] === "U") {
            y += 1;
        }
        if (splittedElements[i] === "D") {
            y += -1;
        }
    }
    console.log(x, y);
}