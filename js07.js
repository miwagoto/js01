let fruit = {apple:'りんご', strawberry:'いちご', grape:'ぶどう', lemon:'れもん'};

console.log(fruit.grape);

for (key in fruit) {
    console.log(key);
}

for (key in fruit) {
    console.log(fruit[key]);
}
