class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.additives = [];
    }

    static SIZE_SMALL = {price: 50, calories: 20};
    static SIZE_LARGE = {price: 100, calories: 40};
    static STAFFING_CHEESE = {price: 10, calories: 20};
    static STAFFING_SALAD = {price: 20, calories: 5};
    static STAFFING_POTATO = {price: 15, calories: 10};
    static ADDITIVE_SEASONING = {price: 15, calories: 0};
    static ADDITIVE_MAYO = {price: 20, calories: 5};

    addAdditive(additive) {
        this.additives.push(additive);
    }

    calcPrice() {
        let totalPrice = this.size.price + this.stuffing.price;
        for (let additive of this.additives) {
            totalPrice += additive.price;
        }
        return totalPrice;
    }
    calcCalories() {
        let totalCalories = this.size.calories + this.stuffing.calories;
        for (let additive of this.additives) {
            totalCalories += additive.calories;
        }
        return totalCalories;
    }
}

let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STAFFING_CHEESE);
hamburger.addAdditive(Hamburger.ADDITIVE_MAYO);
console.log('Каллорий: ' + hamburger.calcCalories());
console.log('Цена: ' + hamburger.calcPrice());
hamburger.addAdditive(Hamburger.ADDITIVE_SEASONING);
console.log('Цена с добавками: ' + hamburger.calcPrice());

