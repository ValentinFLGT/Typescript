import {Weapon} from "../abstractClass/Weapon";

export interface Fighter {

    hp: number
    attack: (fighter: Fighter, weapon: Weapon) => number
    takeDamage: (damage: number) => number

}