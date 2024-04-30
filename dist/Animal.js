"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(name, age, specie, color) {
        this.name = name;
        this.age = age;
        this.specie = specie;
        this.color = color;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getSpecie() {
        return this.specie;
    }
    getColor() {
        return this.color;
    }
    setName(name) {
        this.name = name;
    }
    setAge(age) {
        this.age = age;
    }
    setSpecie(specie) {
        this.specie = specie;
    }
    setColor(color) {
        this.color = color;
    }
    toString() {
        return `Name: ${this.name}, Age: ${this.age}, Specie: ${this.specie}, Color: ${this.color}`;
    }
}
exports.Animal = Animal;
