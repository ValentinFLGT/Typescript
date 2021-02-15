import Character from "./Character";

export default class Enemy {

    private _hp: number = 100;

    constructor() {
    }

    get hp(): number {
        return this._hp;
    }

    set hp(value: number) {
        this._hp = value;
    }

    public attackCharacter(character: Character) {

        let damage = Math.floor(Math.random() * (100 - 1) + 1) * 0.5;
        let characterHpLeft = character.hp - damage;
        console.log('The enemy fight back! He inflicts ' + damage + ' damage to your character ... You have ' + characterHpLeft + ' HP remaining!')

        return characterHpLeft;
    }
}