function binarySearch(arr, x) {
    const arrLen = arr.length;
    let start = 0;
    let end = arrLen - 1;
    while (start <= end) {
        const mid = parseInt((start + end) / 2);
        if (x === arr[mid]) {
            return mid;
        } else if (x < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}

console.log(bs([1, 2, 3, 4], 1));