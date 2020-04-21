function swap(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    console.log('a = ', a, '\nb = ', b);
}

swap(a = 4, b = 10);