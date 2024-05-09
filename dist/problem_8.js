"use strict";
{
    //
    class Car {
        constructor(brand, model, year) {
            this.brand = brand;
            this.model = model;
            this.year = year;
        }
        myBradCar() {
            console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
        }
    }
    // Test the class
    const myCar = new Car("Toyota", "Corolla", 2020);
    console.log(myCar);
    //
}
