import {Weapon} from "../abstractClass/Weapon";

export class Sword extends Weapon {

    constructor(name: string) {
        super(name);
        this.damage += 5
    }
}