const prompts = require('prompts');

(async () => {
    const response = await prompts({
        type: 'text',
        name: 'data',
        message: 'What\'s your name?'
    });

    console.log(response);
})();