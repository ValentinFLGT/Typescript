import {Character} from "../abstractClass/Character";

export class Wizard extends Character {

    constructor(name: string, sex: string) {
        super(name, sex);
        this.ap += 50
    }

}