import Enemy from "./Enemy";

export default class Character {

    private _name: string
    private _sex: string
    private _hp: number

    constructor(name: string, sex: string, hp: number) {
        this._name = name
        this._sex = sex
        this._hp = hp
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

    public summary(): void {

        console.log(`
        Hero name: ${this.name} 
        Hero gender: ${this.sex}
        `)

    }

    public attackEnemy(enemy: Enemy) {

        let damage = Math.floor(Math.random() * (100 - 1) + 1);
        let enemyHpLeft = enemy.hp - damage;
        console.log(this.name + ' inflicts ' + damage + ' damage to your enemy! He has ' + enemyHpLeft + ' HP remaining!')

        return enemyHpLeft;
    }

}