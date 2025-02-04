const apple = { name: "りんご", color: "赤", size: "中", weight: 200 };
const orange = { name: "みかん", color: "オレンジ", size: "小", weight: 100 };
const grape = { name: "ぶどう", color: "紫", size: "小", weight: 150 };

const fruits = [apple, orange, grape];

let totalWeight = 0;
for (const fruit of fruits) {
    totalWeight += fruit.weight;
}

console.log(`総重量: ${totalWeight}g`);