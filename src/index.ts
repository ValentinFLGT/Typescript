const prompts = require('prompts');

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

(async () => {
    const response = await prompts(questions);
    console.log(response);
    console.log('Enemy\'s incoming!');
})();