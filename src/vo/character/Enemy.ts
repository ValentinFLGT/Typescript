import {Fighter} from "../interface/Fighter";
import {Weapon} from "../abstractClass/Weapon";

export default class Enemy implements Fighter{

    private _hp: number = 100

    constructor() {
    }

    get hp(): number {
        return this._hp;
    }

    set hp(value: number) {
        this._hp = value;
    }

    public attack(character: Fighter) {

        let damage = Math.floor(Math.random() * (100 - 1) + 1) * 0.5;
        let characterHpLeft = character.hp - this.takeDamage(damage);
        console.log('The enemy fight back! He inflicts ' + damage + ' damage to your character ... You have ' + characterHpLeft + ' HP remaining!')

        return characterHpLeft;
    }

    takeDamage(damage: number): number {
        return damage / 2;
    }

}