export interface Fighter {

    hp: number
    attack: (fighter: Fighter) => number
    takeDamage: (damage: number) => number

}