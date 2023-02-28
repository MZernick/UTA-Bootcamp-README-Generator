// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input

function getBadge(license){
    if (license !== "None") {
    return `<img src="https://img.shields.io/badge/license-${license}-blue.svg" alt="GitHub License">`;
  }
  return " ";
};

const questions = [
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Write a short paragraph describing your project',
      name: 'description',
    },
    {
        type: 'input',
        message: 'What is the intended use for this application?',
        name: 'usage',
    },
    {
      type: 'input',
      message: 'How do you install this application?',
      name: 'install',
    },
    {
        type: 'input',
        message: 'How do you test this applicaiton?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'Please name any contributors?',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contribution',
    },
    {
        type: 'checkbox',
        message: 'What license does it have?',
        name: 'license',
        choices: ['MIT License', 'Apache License 2.0', 'The Unlicnse', 'ISC']
    },
    {
        type:'input',
        message: 'Please enter your Github username',
        name: 'github',
    },
    {
        type:'input',
        message: 'Please enter your email',
        name: 'email',
    },
]


// TODO: Create a function to write README file
const writeToFile = ({title, description, install, usage, license, contributors, contribution, test, github, email}) =>
    `# ${title} ${getBadge(license)}

## Description
    ${description}
    
## Table of Contents
    
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#how-to-contribute)
- [Test](#test)
- [Questions](#questions)
    
## Installation
    ${install}
    
## Usage
    ${usage}

## License
    ${license}

## Contributors
    ${contributors}

## How to Contribute
    ${contribution}

## Test 
    ${test}

## Questions
    Please address all questions through https://github.com/${github} or directly through email at ${email}`;

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const readmePageContent = writeToFile(answers);
        // console.log(readmePageContent);
        fs.writeFile('READMESample.md', readmePageContent, (err) =>
          err ? console.log(err) : console.log('Successfully created README.md!')
        );
      });
}

// Function call to initialize app
init();