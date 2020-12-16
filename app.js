const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./manager.test");

const render = require('render');

var responseM = [
    {
        type: 'input',
        message: 'What is your Managers name',
        name: 'name',

    },
    {
        type: 'input ',
        message: 'What is your email adress?',
        name: 'emailadress',
    },
    {
        type: 'input ',
        message: 'What is your employee id?',
        name: 'employeeId',
    },
    {
        type: 'number ',
        message: 'What is your office number',
        name: 'phoneNumber',
    },
    {
        type: 'confirm ',
        message: 'Which type of team member would you like to add in?',
        name: 'newMember',
    },
]

inquirer.prompt(responseM).then(function (answers) {
    // console.log(answers)
    fs.writeFile("index.html", generateMarkdown(answers), (err) => {
        if (err) throw err;
        console.log('This information has been saved');
    });
});

function generateMarkdown(data) {
    return `# ${data.title}
    
    ##Title 
    
    ${data.title}
    
    ##Description
    
    ${data.description}
    
    
    ##Table of Contents
    
    
    * [Installation Instructions](#Installation)
    * [Guidelines] (#guidelines)
    * [Test Instructions](#Tests)
    * [License](#License)
    * [Questions](#Questions)
    
    ##Installation
    
    ${data.Installations}
    
    ##Usage
    
    ${data.usage}
    
    ##Guidelines
    
    ${data.guidelines}
    
    ##Tests
    
    ${data.tests}
    
    ##Questions 
    [Github](https://github.com/chidibangzz/Node-readme/${data.github})
    
    Feel free to email with questions ${data.emailadress}
    
    
    
    
    `;
}


module.exports = generateMarkdown;


// //example of testing my function its saying if
// function Arithmetic(number = 0) {
//   this.number = number; //testing to see if this is a number 
// }

function askIntern() {
    inquire.prompt({

    }).then(internResponse) => {
        console.log(internResponse);
    
        team.push(newIntern("Chidi , Ut Austin"))
    }
}
