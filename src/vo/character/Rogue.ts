import {Character} from "../abstractClass/Character";

export class Rogue extends Character {

    constructor(name: string, sex: string) {
        super(name, sex);
        this.agility += 50
    }

}