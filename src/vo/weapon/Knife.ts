import {Weapon} from "../abstractClass/Weapon";

export class Knife extends Weapon {

    constructor(name: string) {
        super(name);
        this.damage += 9999999
    }
}