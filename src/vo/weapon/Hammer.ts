import {Weapon} from "../abstractClass/Weapon";

export class Hammer extends Weapon {

    constructor(name: string) {
        super(name);
        this.damage += 15
    }
}