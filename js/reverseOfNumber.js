function reverse(n) {
    let temp = n;
    let s = 0;
    while (temp) {
        const r = temp % 10;
        s = (s * 10) + r;
        temp = parseInt(temp / 10);
    }
    return s;
}

console.log(reverse(105));
console.log(reverse(125));
