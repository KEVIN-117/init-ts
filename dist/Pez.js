"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pez = void 0;
const Animal_1 = require("./Animal");
class Pez extends Animal_1.Animal {
    constructor(name, age, specie, color) {
        super(name, age, specie, color);
    }
    Comunicarse() {
        console.log('glu glu...!');
    }
}
exports.Pez = Pez;
