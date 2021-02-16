export abstract class Weapon {

    private _name: string
    private _damage: number = 20

    protected constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get damage(): number {
        return this._damage;
    }

    set damage(value: number) {
        this._damage = value;
    }

}