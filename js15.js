// 親クラス Item
class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getInfo() {
        return `商品名: ${this.name}, 価格: ${this.price}円`;
    }
}

// 子クラス Chair（Itemを継承）
class Chair extends Item {
    constructor(name, price, isUsed) {
        super(name, price); // 親クラスのコンストラクタを呼び出し
        this.isUsed = isUsed; // 中古かどうかのプロパティ
    }

    getInfo() {
        let condition = this.isUsed ? '中古' : '新品';
        return `${super.getInfo()}, 状態: ${condition}`;
    }
}

// インスタンスを作成して動作確認
const chair1 = new Chair("オフィスチェア", 12000, false);
const chair2 = new Chair("ダイニングチェア", 5000, true);
const chair3 = new Chair("ゲーミングチェア", 25000, false);

console.log(chair1.getInfo());
console.log(chair2.getInfo());
console.log(chair3.getInfo());
