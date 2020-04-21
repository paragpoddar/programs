function addHourGlassDataElements(arr) {
  if (arr.length) {
    return arr.reduce(
      (total, currentValue, currentIndex, arr) =>
        parseInt(total) + parseInt(currentValue)
    );
  }
}

function isValid(input2dArray, j, i) {
  var verticalSize = input2dArray.length;
  var horizontalSize = input2dArray[j].length;
  if (j + 2 >= verticalSize || i + 2 >= horizontalSize) {
    return false;
  }
  return true;
}

function getHourGlassData(input2dArray, j, i) {
  var hourGlassData = [];
  if (isValid(input2dArray, j, i)) {
    hourGlassData.push(input2dArray[j][i]);
    hourGlassData.push(input2dArray[j][i + 1]);
    hourGlassData.push(input2dArray[j][i + 2]);
    hourGlassData.push(input2dArray[j + 1][i + 1]);
    hourGlassData.push(input2dArray[j + 2][i]);
    hourGlassData.push(input2dArray[j + 2][i + 1]);
    hourGlassData.push(input2dArray[j + 2][i + 2]);
  }

  return hourGlassData;
}

function processData(input) {
  var highestHourglassValue;
  var input2dArray = input
    .trim()
    .split("\n")
    .map(e => e.split(" "));
  for (var i = 0; i < input2dArray.length; i++) {
    for (var j = 0; j < input2dArray[i].length; j++) {
      var hourGlassData = getHourGlassData(input2dArray, j, i);
      var sumOfHourGlassDataElement = addHourGlassDataElements(hourGlassData);
      if (highestHourglassValue < sumOfHourGlassDataElement || highestHourglassValue === undefined) {
        highestHourglassValue = sumOfHourGlassDataElement;
      }
    }
  }
  log(highestHourglassValue);
}

function log(...s) {
  console.log(...s);
}

var _input = "";
process.stdin.setEncoding("ascii");
process.stdin.on("data", input => {
  _input += input;
});
process.stdin.on("end", () => {
  processData(_input);
});
