function factorial(number) {
    let receviedNumber = number;
    let result = 1;
    while(receviedNumber) {
        result = result * receviedNumber;
        receviedNumber--;
    }
    return result;
}

console.log(factorial(26));