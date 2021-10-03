const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions =[

    {
    type: 'input',
    name: 'projectTitle',
    message: 'What is the project title'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of the project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide a description of the installation instructions for the project'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide a description of the usage for the project'
    },
    {
        type: 'choice',
        name: 'license',
        message: ''
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide anyone who worked on the project'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Please provide any questions you had during the project'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide any tests you ran during the project'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github username'
    },
    {
        type: 'input',
        name: 'emailaddress',
        message:'Pleae enter your email address'
    }

]



// TODO: Create a function to write README file
function writeToFile(fileName, data){
fs.writeFile(fileName, data, function(err) {
    if (err){
        return console.log(err);
    }
    console.log("successfully created file");
});
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (answers){
        const fileName =
        answers.projectTitle
        .toLowerCase()
        .split(' ')
        .join('') + 'Readme.md';
        writeToFile(fileName, generateMarkdown(answers));
    });
}

// Function call to initialize app
init();
