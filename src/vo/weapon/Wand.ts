import {Weapon} from "../abstractClass/Weapon";

export class Wand extends Weapon {

    constructor(name: string) {
        super(name);
        this.damage += 10
    }
}