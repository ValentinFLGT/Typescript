const prompts = require('prompts');

import Character from "./vo/Character";
import Enemy from "./vo/Enemy";

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
            type: 'number',
            name: 'age',
            message: 'How old is your character?'
        }
    ];

    const response = await prompts(questions);

    let character: Character = new Character(response.username, response.gender, 100);
    character.summary();

    console.log('Enemy\'s incoming!');

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

    const fightChoice = await prompts(fightOrRetreat);

    if (fightChoice.choice === true) {

        let enemy: Enemy = new Enemy();

        while (enemy.hp > 0) {
            if (character.hp > 0) {
                enemy.hp = character.attackEnemy(enemy);
                if (enemy.hp > 0) {
                    character.hp = enemy.attackCharacter(character);
                }
                if (character.hp <= 0) {
                    return console.log("The opponent killed you, RIP " + response.username)
                }
                await prompts(fightOrRetreat);
                console.log("You killed the opponent, you can continue your journey!");
            }
        }
    }

})();