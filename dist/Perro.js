"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Perro = void 0;
const Animal_1 = require("./Animal");
class Perro extends Animal_1.Animal {
    constructor(name, age, specie, color) {
        super(name, age, specie, color);
    }
    Comunicarse() {
        console.log('Guau Guau...!');
    }
}
exports.Perro = Perro;
