/**
 *
 * Given a statement like "India is a great country and I will work towards making our country the better India”
 * Order the unique words by frequency first then by length of the word and then by position from left.
 *
 *
 * Output for this statement:
 * country, India, towards, making, better, great, will …..
 */

// const startTime = Date.now();

const s = 'India is a great country and I will work towards making our country the better India';

function main() {
    const splittedS = s.split(' ');
    const elementsWithFrequencyAndLengthAndPos = getElementsWithFrequencyAndLengthAndPos(splittedS);
    console.log('elementsWithFrequencyAndLengthAndPos \n', elementsWithFrequencyAndLengthAndPos);
    const filteredArray = removeSecondDuplicateInArray(elementsWithFrequencyAndLengthAndPos)
    console.log('filteredArray \n', filteredArray);
    const sortedArray = sortByFrequencyAndLengthAndPos(filteredArray);
    console.log('sortedArray \n', sortedArray);
    const result = sortedArray.map(e => e.name).join(', ');
    console.log('Result \n', result);
}
main()


function getElementsWithFrequencyAndLengthAndPos(arr) {
    const elementsWithFrequency = [];
    for (let i = 0; i < arr.length; i++) {
        const count = countOfPresenceOfElementInArray(i, arr[i], arr, arr.length);
        elementsWithFrequency.push({ name: arr[i], frequency: count, length: arr[i].length, pos: i });
    }
    return elementsWithFrequency;
}

function countOfPresenceOfElementInArray(i, element, arr, length) {
    let count = 0;
    for (let j = i; j < length; j++) {
        if (element === arr[j]) {
            count++;
        }
    }
    return count;
}

function removeSecondDuplicateInArray(arr) {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj.hasOwnProperty(arr[i].name)) {
            continue;
        }
        obj[arr[i].name] = arr[i];
    }
    const tempArray = new Array();
    for (let key in obj) {
        tempArray.push(obj[key]);
    }
    return tempArray;
}

function sortByFrequencyAndLengthAndPos(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (j = 0; j < arr.length - i - 1; j++) {
            if (arr[j].frequency < arr[j + 1].frequency) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            if (arr[j].frequency === arr[j + 1].frequency && arr[j].length < arr[j + 1].length) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            if (arr[j].frequency === arr[j + 1].frequency && arr[j].length === arr[j + 1].length && arr[j].pos > arr[j + 1].pos) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// const endTime = Date.now();
// console.log('Took ' + (endTime - startTime) + 'ms');