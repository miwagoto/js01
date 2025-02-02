
for (let i = 10; i > 0; i--) {  // i を 10 から 1 まで減少
    let s = '(' + i + '):';
    for (let j = 0; j < i; j++) {
        s = s + '*';
    }
    console.log(s);
}