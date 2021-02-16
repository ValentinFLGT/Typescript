import {Character} from "../abstractClass/Character";

export class Warrior extends Character {

    constructor(name: string, sex: string) {
        super(name, sex);
        this.hp += 50
    }

}