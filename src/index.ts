const prompts = require('prompts');
import Character from "./vo/Character";

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

    let character: Character = new Character(response.username, response.gender, 50);
    character.summary();

    console.log('Enemy\'s incoming!');

})();