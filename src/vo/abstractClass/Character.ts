import {Fighter} from "../interface/Fighter";
import {Weapon} from "./Weapon";

export abstract class Character implements Fighter {

    private _name: string
    private _sex: string
    private _hp: number = 100
    private _ap: number = 20
    private _agility: number = 20


    protected constructor(name: string, sex: string) {
        this._name = name;
        this._sex = sex;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get sex(): string {
        return this._sex;
    }

    set sex(value: string) {
        this._sex = value;
    }

    get hp(): number {
        return this._hp;
    }

    set hp(value: number) {
        this._hp = value;
    }

    get ap(): number {
        return this._ap;
    }

    set ap(value: number) {
        this._ap = value;
    }

    get agility(): number {
        return this._agility;
    }

    set agility(value: number) {
        this._agility = value;
    }

    public summary(): void {

        console.log(`
        Hero name: ${this.name} 
        Hero gender: ${this.sex}
        `)

    }

    public attack(enemy: Fighter, weapon: Weapon) {

        let damage = weapon.damage + Math.floor(Math.random() * (100 - 1) + 1);
        let enemyHpLeft = enemy.hp - this.takeDamage(damage);
        console.log(this.name + ' inflicts ' + damage + ' damage to your enemy! He has ' + enemyHpLeft + ' HP remaining!')

        return enemyHpLeft;
    }

    takeDamage(damage: number): number {
        return damage;
    }

}