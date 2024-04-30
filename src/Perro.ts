import { Animal } from "./Animal";
import { IAnimal } from "./interfaces";

export class Perro extends Animal implements IAnimal {
    constructor(name: string, age: string, specie: string, color: string) {
        super(name, age, specie, color);
    }

    public Comunicarse(): void {
        console.log('Guau Guau...!');
    }
}