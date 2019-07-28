import ShoppingCart from "./shoppingCart";
import Discount from "./discount";

const sausage = 300;
const milk = 100;
const cookie = 60;

let discount = new Discount();

let cart = new ShoppingCart();
cart.addProduct(cookie); // берем одну печенюшку

console.log(discount.calc(cart.products));

cart.addProduct(cookie); // еще одну печенюшку
cart.addProduct(sausage); // колбаску
cart.addProduct(milk); // и молоко

console.log(discount.calc(cart.products));
