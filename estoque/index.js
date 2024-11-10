class ProdutoStoque {
  constructor(productName, price, amount = 0) {
    this.productName = productName;
    this.price = price;
    this.amount = amount;
  }

  total() {
    return `Total value in products: R$${this.price * this.amount}`;
  }

  addToStock(value) {
    if (value > 0) {
      this.amount += value;
      return `This is the quantity of products in stock: ${this.amount}`;
    }
    return `value must be greater than 0`;
  }

  removeToStock(value) {
    if (value < this.amount) {
      this.amount -= value;
      return `was go removed ${value} that stock, total value on stock now: ${this.amount}`;
    }
    return `amount is invalid`;
  }
}

const table = new ProdutoStoque("Table", 700, 1);

console.log(table.total());
console.log(table.addToStock(3));
console.log(table.total());
console.log(table.removeToStock(1));
console.log(table.total());
