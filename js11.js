// 1
let p1 = document.getElementById("p1");
let input = document.createElement("input");
input.type = "input";
input.value = "商品";
p1.replaceWith(input);

// 2
let p2 = document.getElementById("p2");
p2.textContent = "テキスト文字列";

// 3
let p3 = document.getElementById("p3");
p3.id = "p5";
