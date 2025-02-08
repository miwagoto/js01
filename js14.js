var a = [1, 2, 3];

try {
    console.log(a[i]); // i は未定義なのでエラー発生
} catch (error) {
    console.log("エラーが発生しました:", error.message);
}