/**
 * 
 * Make all numbers of an array equal
 * 
 * Given an array arr[], the task is to make all the array elements equal with the given operation. 
 * In a single operation, any element of the array can be either multiplied by 2 or by 3. 
 * If its possible to make all the array elements equal with the given operation then print Yes else print No.
 */

// Inputs
const arrToDo = [10, 14];

function main() {
    console.log(equalNumbers(arrToDo))
}
main()

function equalNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        while (arr[i] % 2 === 0) {
            arr[i] /= 2
        }
        while (arr[i] % 3 === 0) {
            arr[i] /= 3
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[0]) {
            return false
        }
    }
    return true
}