"use strict";

function Product(name, price, expirationDate) {
  (this.id = Math.trunc(Math.random() * 99999 - 10000 + 1) + 10000),
    (this.name = name),
    (this.price = String(price.toFixed(2))),
    (this.expirationDate = expirationDate),
    (this.getInfo = function () {
      const code =
        this.name.slice().at(0).toUpperCase() +
        this.name.slice().at(-1).toUpperCase() +
        this.id;
      return `${code}, ${this.name}, ${this.price}`;
    });
}

function ShoppingBag() {
  this.products = [];
  (this.addProduct = function (product) {
    const expDate = new Date(product.expirationDate);
    if (expDate.getTime() - Date.now() > 86400000) {
      this.products.push(product);
    }
  }),
    (this.calcAvgPrice = function () {
      this.avg = this.products
        .map((val) => val.price)
        .reduce((acc, price, i, arr) => (acc += Number(price) / arr.length), 0);
      return this.avg.toFixed(3);
    }),
    (this.getMostExpensive = function () {
      const { id, name, price, expirationDate } = this.products
        .slice()
        .sort((a, b) => b.price - a.price)
        .at(0);
      console.log(
        `The most expensive product is = id: ${id}, name: ${name}, price: ${price}, expiration date: ${expirationDate}`
      );
    }),
    (this.calculateTotalPrice = function () {
      this.priceTotal = this.products
        .map((product) => product.price)
        .reduce((acc, price) => (acc = acc + Number(price)), 0);
    });
}

function PaymentCard(balance, status, validUntil) {
  (this.balance = balance.toFixed(2)),
    (this.status = status),
    (this.validUntil = validUntil);
}

const checkoutAndBuy = function (shoppingBag, paymentCard) {
  if (Number(paymentCard.balance) >= Number(shoppingBag.priceTotal)) {
    console.log("Purchase Successful!");
  } else {
    console.log(
      `Purchase Unsuccessful. You are missing ${
        Number(shoppingBag.priceTotal) - Number(paymentCard.balance)
      } to complete the purchase.`
    );
  }
};

const product1 = new Product("milk", 200, "01/02/2023");

const product2 = new Product("bread", 100, "30/01/2023");

const product3 = new Product("sugar", 150, "30/06/2023");

const product4 = new Product("oil", 240, "12/24/2023");

const paymentCard = new PaymentCard(100, "active", "01/01/2024");

const paymentCard2 = new PaymentCard(1000, "active", "01/01/2024");

const shoppingBag = new ShoppingBag();

(() => {
  shoppingBag.addProduct(product1);
  shoppingBag.addProduct(product2);
  shoppingBag.addProduct(product3);
  shoppingBag.addProduct(product4);

  console.log(
    "The average price of products in the shopping bag is: ",
    shoppingBag.calcAvgPrice()
  );

  shoppingBag.getMostExpensive();
  shoppingBag.calculateTotalPrice();

  checkoutAndBuy(shoppingBag, paymentCard);
  checkoutAndBuy(shoppingBag, paymentCard2);
})();
