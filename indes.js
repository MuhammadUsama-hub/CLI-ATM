import inquirer from 'inquirer';
const answers = await inquirer.prompt([{
        message: 'Enter Your 4-digit Pin :', type: 'number', name: 'pin'
    }, {
        message: 'Account Type :', type: 'list', name: 'account', choices: ['Current', 'Saving']
    },
    {
        message: 'Welcome!', type: 'list', mane: 'options', choices: ['Cash Withdraw', 'Balance Inquiry']
    }]);
console.log(answers);
