// process.stdin.resume();
// process.stdin.setEncoding("utf-8");
// let stdin_input = "";

// process.stdin.on("data", (input) => {
//     stdin_input += input;
// })

// process.stdin.on("end", () => {
//     main(stdin_input);
// })

// function main(input) {
//     process.stdout.write("input: ", input);
// }


process.stdin.on('data', (input) => {
    console.log('input: ', input)
})