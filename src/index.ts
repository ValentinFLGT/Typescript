import {Warrior} from "./vo/character/Warrior";

const prompts = require('prompts');

import Enemy from "./vo/character/Enemy";
import {Wizard} from "./vo/character/Wizard";
import {Rogue} from "./vo/character/Rogue";
import {Knife} from "./vo/weapon/Knife";
import {Wand} from "./vo/weapon/Wand";
import {Hammer} from "./vo/weapon/Hammer";
import {Sword} from "./vo/weapon/Sword";
import {Character} from "./vo/abstractClass/Character";
import {Weapon} from "./vo/abstractClass/Weapon";

(async () => {

    const questions = [
        {
            type: 'text',
            name: 'username',
            message: 'What\'s your character\'s name?'
        },
        {
            type: 'text',
            name: 'gender',
            message: 'What\'s your character\'s gender?'
        },
        {
            type: 'select',
            name: 'classType',
            message: 'Choose your class!',
            choices: [
                {title: 'Warrior', value: Warrior},
                {title: 'Wizard', value: Wizard},
                {title: 'Rogue', value: Rogue},
            ]
        },
        {
            type: 'select',
            name: 'weaponType',
            message: 'Choose your weapon!',
            choices: [
                {title: 'Sword', value: Sword},
                {title: 'Hammer', value: Hammer},
                {title: 'Wand', value: Wand},
                {title: 'Knife', value: Knife},
            ]
        },
    ];

    const fightOrRetreat = [
        {
            type: 'select',
            name: 'choice',
            message: 'Are you going to fight or retreat?',
            choices: [
                {name: 'fight', title: 'Fight!', value: true},
                {name: 'retreat', title: 'Retreat!', value: false}
            ]
        }
    ]

    const response = await prompts(questions);

    let character: Character = new response.classType(response.username, response.gender);
    let weapon: Weapon = new response.weaponType
    character.summary();

    console.log('Enemy\'s incoming!');

    let enemy: Enemy = new Enemy();

    async function fight() {
        const fightChoice = await prompts(fightOrRetreat);

        if (fightChoice.choice === true) {
            if (enemy.hp > 0) {
                enemy.hp = character.attack(enemy, weapon);
            }
            if (character.hp > 0) {
                character.hp = enemy.attack(character, weapon);
            }
            if (character.hp <= 0) {
                return console.log("The opponent killed you, RIP " + response.username)
            }
            if (enemy.hp <= 0) {
                console.log("You killed the opponent, you can continue your journey!");
            }
            if (enemy.hp > 0 && character.hp > 0) {
                await fight();
            }
        }
    }

    return await fight();

})();