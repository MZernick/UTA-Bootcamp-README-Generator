// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input

function getBadge(){
    if (license === 'MIT license')
    var licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    else if (license=== 'Apache License 2.0')
    var licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    else if (license === 'The Unlicense')
    var licenseBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    else if (license === 'ISC')
    var licenseBadge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
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
      message: 'How do you install this applicaiton?',
      name: 'install',
    },
    {
        type: 'input',
        message: 'How do you test this applicaiton?',
        name: 'test',
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
const writeToFile = ({title, description, install, usage, license, contribution, test, github, email}) =>
    `# ${title}

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
        fs.writeFile('README.md', readmePageContent, (err) =>
          err ? console.log(err) : console.log('Successfully created README.md!')
        );
      });
}

// Function call to initialize app
init();