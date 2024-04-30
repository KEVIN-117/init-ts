

export class Animal {
    private name: string;
    private age: string;
    private specie: string;
    private color: string;

    constructor(name: string, age: string, specie: string, color: string) {
        this.name = name;
        this.age = age;
        this.specie = specie;
        this.color = color;
    }


    public getName(): string {
        return this.name;
    }

    public getAge(): string {
        return this.age;
    }

    public getSpecie(): string {
        return this.specie;
    }

    public getColor(): string {
        return this.color;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setAge(age: string): void {
        this.age = age;
    }

    public setSpecie(specie: string): void {
        this.specie = specie;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public toString(): string {
        return `Name: ${this.name}, Age: ${this.age}, Specie: ${this.specie}, Color: ${this.color}`;
    }
}