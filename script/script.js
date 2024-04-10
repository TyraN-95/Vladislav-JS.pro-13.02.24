class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Человек: ${this.name}, Возраст: ${this.age}`);
    }
}

class Car {
    constructor(brand, model, year, licensePlate, owner) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.licensePlate = licensePlate;
        if (owner.age >= 18) {
            this.owner = owner;
        } else {
            console.log(`${owner.name} еще не достиг 18-летнего возраста.`);
        }
    }

    displayInfo() {
        console.log(`Автомобиль: ${this.brand} ${this.model}, Год: ${this.year}, Номерной знак: ${this.licensePlate}`);
        if (this.owner) {
            console.log(`Владелец: ${this.owner.name}, Возраст: ${this.owner.age}`);
        } else {
            console.log('Владелец не указан.');
        }
    }
}

let person1 = new Person('Дима', 16);
let person2 = new Person('Катя', 18);

let car1 = new Car('Toyota', 'Corolla', 2015, 'АХ123456ВИ', person1);
let car2 = new Car('Honda', 'Civic', 2018, 'АХ234567КМ', person2);

console.log('Информация об автомобилях:');
car1.displayInfo();
car2.displayInfo();
