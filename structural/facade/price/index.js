import ShopPattern from "./facade";

let shop = new ShopPattern();

let price = 100;
console.log('Исходная цена', price);
console.log('Финальная стоимость', shop.calc(price));

let price2 = 500;
console.log('Исходная цена', price2);
console.log('Финальная стоимость', shop.calc(price2));
