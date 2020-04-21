function isValidHourGlass(inputAsArray, firstEntryX, firstEntryY) {
  var isValid = true;
  var xSize = inputAsArray[0].length;
  var ySize = inputAsArray.length;

  if (firstEntryX + 2 >= xSize || firstEntryY + 2 >= ySize) {
    isValid = false;
  }

  return isValid;
}

//returns an array with data from hourglass
function getHourGlassData(inputAsArray, firstEntryX, firstEntryY) {
  var hourGlassData = [];
  if (isValidHourGlass(inputAsArray, firstEntryX, firstEntryY)) {
    hourGlassData.push(inputAsArray[firstEntryX][firstEntryY]);
    hourGlassData.push(inputAsArray[firstEntryX][firstEntryY + 1]);
    hourGlassData.push(inputAsArray[firstEntryX][firstEntryY + 2]);
    hourGlassData.push(inputAsArray[firstEntryX + 1][firstEntryY + 1]);
    hourGlassData.push(inputAsArray[firstEntryX + 2][firstEntryY]);
    hourGlassData.push(inputAsArray[firstEntryX + 2][firstEntryY + 1]);
    hourGlassData.push(inputAsArray[firstEntryX + 2][firstEntryY + 2]);
  }

  return hourGlassData;
}

//returns an array with data from hourglass
//false if first entry is not valid hourglass
function countHourClassData(dataArray) {
  var totalCount;
  if (dataArray && dataArray.length > 0) {
    totalCount = dataArray.reduce(function(
      previousValue,
      currentValue,
      index,
      array
    ) {
      return parseInt(previousValue) + parseInt(currentValue);
    });
  }

  return totalCount;
}

function processData(input) {
  //Enter your code here
  // console.log("input\n", input, typeof(input));
  var inputRows = input.trim().split("\n");
  // console.log("inputRows\n", inputRows);

  var largestSum;
  var inputAs2dArray = [];
  for (var i = 0; i < inputRows.length; i++) {
    var inputColumns = inputRows[i].split(" ");
    console.log("inputColumns\n", inputColumns);
    inputAs2dArray.push(inputColumns);
  }
  console.log("inputAs2dArray\n", inputAs2dArray);

  for (var y = 0; y < inputAs2dArray.length; y++) {
    for (var x = 0; x < inputAs2dArray[y].length; x++) {
      var hourGlassData = getHourGlassData(inputAs2dArray, x, y);
      console.log("hourGlassData\n", hourGlassData);
      var thisHourClassCount = countHourClassData(hourGlassData);

      if (
        typeof thisHourClassCount !== "undefined" &&
        (typeof largestSum === "undefined" || largestSum < thisHourClassCount)
      )
        largestSum = thisHourClassCount;
    }
  }

  console.log(largestSum);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
  _input += input;
});

process.stdin.on("end", function() {
  processData(_input);
});
