function removeDuplicate() {
    let s = 'geeksforgeeks'
    const len = s.length;
    let index = 0
    for (let i = 0; i < len; i++) {
        let j;
        for (j = 0; j < i; j++) {
            console.log('ij ', i, j);
            console.log(s[i], s[j]);
            if (s[i] === s[j]) {
                break
            }
        }
        if (j === i)
            s[index++] = s[i]
        else
            s[]
    }
    console.log(s);

}
removeDuplicate()