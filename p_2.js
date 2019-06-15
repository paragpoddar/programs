function main() {
    const arr = [2, 3, -2, 4];
    let ele_1 = 0;
    let ele_2 = 0;
    let product = 0;
    let i_1 = 0;
    let i_2 = i_1 + 1;
    while (arr[i_2]) {
        let temp = 0;
        temp = arr[i_1] * arr[i_2];
        if (temp > product) {
            ele_1 = arr[i_1];
            ele_2 = arr[i_2];
            product = temp;
        }
        i_1++;
        i_2++;
    }
    console.log([ele_1, ele_2]);
    console.log(product);
}
main()