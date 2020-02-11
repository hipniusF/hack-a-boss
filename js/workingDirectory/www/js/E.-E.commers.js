'use strict';

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ItemGroup {
  units = 1;
  constructor(item) {
    this.item = item;
  }

  increase() {
    this.units++;
  }
}

class User {
  #cart = [];
  constructor(name) {
    this.name = name;
  }

  addToCart(item) {
    for (const itemGroup of this.#cart) {
      if (itemGroup.item.name === item.name) {
        itemGroup.increase();
        return;
      }
    }
    this.#cart.push(new ItemGroup(item));
  }

  pay(shop) {
    shop.checkout(this.#cart);
    this.emptyCart();
  }

  emptyCart() {
    this.#cart = [];
  }

  generateRandomCart() {
    for (let i = 0; i < Math.round(Math.random() * 10); i++) {
      this.addToCart(zara.Inventory[Math.round(Math.random() * 3)]);
    }
  }
}

class Shop {
  Inventory = [];

  constructor(productsList) {
    this.Inventory = productsList;
  }

  getStock() {
    return this.Inventory;
  }

  checkout(cart) {
    const itemsToCheckout = cart;

    let totalPrice = 0;
    console.log(`Your cart for checkout is:\n`);

    for (const itemGroup of itemsToCheckout) {
      console.log(`* ${itemGroup.item.name} x${itemGroup.units} --> ${itemGroup.item.price}€`);
      totalPrice += itemGroup.item.price * itemGroup.units;
    }
    console.log(`\n Your total to pay is: ${totalPrice}€`);
  }
}

const productList = [new Item('trouser', 25), new Item('shocks', 12), new Item('T-shirt', 15), new Item('jacket', 54)];

const zara = new Shop(productList);

const me = new User('Marco');
