import { DiscountCard } from "./discountCard";
import { guestStrategy, regularStrategy, premiumStrategy } from "./discountStrategies";

let amount = 1000;

let guestCard = new DiscountCard(guestStrategy);
guestCard.setAmount(amount);
console.log('С гостевой скидкой', guestCard.checkout());

let regularCard = new DiscountCard(regularStrategy);
regularCard.setAmount(amount);
console.log('С обычной скидкой', regularCard.checkout());

let premiumCard = new DiscountCard(premiumStrategy);
premiumCard.setAmount(amount);
console.log('С премиум-скидкой', premiumCard.checkout());

