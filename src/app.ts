import { Animal } from "./Animal";
import { Gato } from "./Gato"
import { Perro } from "./Perro";
import { Pez } from "./Pez";

const animals: any[] = []


const gato = new Gato("Tom", "2", "Felino", "grisF");
const perro = new Perro("Firulais", "3", "Canino", "Cafe");
const pez = new Pez("Nemo", "1", "Pez", "Naranja");

animals.push(gato);
animals.push(perro);
animals.push(pez);

console.log(animals);
