"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", _ => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function rotate(arr, noOfRotation) {
  var _arr = arr;
  for (var i = 0; i < noOfRotation; i++) {
    var deletedElement = _arr.shift();
    _arr.push(deletedElement);
  }
  return _arr;
}

function main() {
  const nd = readLine().split(" ");

  const n = parseInt(nd[0], 10);

  const d = parseInt(nd[1], 10);

  const a = readLine()
    .split(" ")
    .map(aTemp => parseInt(aTemp, 10));

  const rotatedArr = rotate(a, d);
  for (var e of rotatedArr) {
    process.stdout.write(e + " ");
  }
}
