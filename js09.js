let a = Array.from({ length: 100 }, (_, i) => i + 1);

// 3の倍数のみを含む配列 b3 を作成
let b3 = a.filter(num => num % 3 === 0);

// 5の倍数のみを含む配列 b5 を作成
let b5 = a.filter(num => num % 5 === 0);

console.log("3の倍数:", b3);
console.log("5の倍数:", b5);