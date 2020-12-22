const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { create } = require("domain");
const { returnStatement, createTypeAnnotationBasedOnTypeof } = require("@babel/types");

const buildTeam = [];



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)


 



    createManager()
    
    
function createManager() {

    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is your manager's name?",
        },
        {
            type: "input",
            name: "managersId",
            message: "What is your manager's Id",
        },
        {
            type: "input",
            name: "managersEmail",
            message: "What is your manager's email",
        },
        {
            type: "input",
            name: "managersOfficeN",
            message: "What is your Managers office number?",
        },
        {
            type: "list",
            name: "managersList",
            message: "Would you like like to add a team member?",
            choices: [
                "Engineer",
                "Intern",
                "Manager",
                "I do not want to add any team members"
            ]
        },

    ]).then(answers => {
        const { managerName, managersId, managersEmail, managersOfficeN, managersList } = answers
        const manager = new Manager(managerName, managersId, managersEmail, managersOfficeN)
        buildTeam.push(manager)

      

        switch (managersList) {
            case "Engineer":
                createEngineer();
                break;
            case "Intern":
                createIntern();
                break;
            case "Manager":
                createManager()
                break;
            default:
                createTeam()
                

        }
    });
    // createTeam()
}



function createIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "Whats your Intern's name?",
        },
        {
            type: "input",
            name: "internId",
            message: "what is your Intern's Id",
        },
        {
            type: "input",
            name: "internsEmail",
            message: "what is your Interns email",
        },
        {
            type: "input",
            name: "internSchool",
            message: "What school did your intern go to?",
        },
        {
            type: "list",
            name: "internList",
            message: "Would you like to add a team member?",
            choices: [
                "Engineer",
                "Manager",
                "Intern",
                "I do not want to add a team members",
                
            ]
        },
    ]).then(internChoices => {
        const { internName, internId, internsEmail, internSchool, internList } = internChoices
        const intern = new Intern(internName, internId, internsEmail, internSchool)
        buildTeam.push(intern);

      

        switch (internList) {
            case "Engineer":
                createEngineer();
                break;
            case "Intern":
                createIntern();
                break;
            case "Manager":
                createManager();
                break;
            default:
                createTeam()
                "I do not want to add a team members"
                
        }
    });
}



function createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "what is your Engineers name?",

        },
        {
            type: "input",
            name: "engineersId",
            message: "what is your Engineers id",
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is your engineers Email",
        },
        {
            type: "input",
            name: "engineersGithub",
            message: "What is your engineers Github?",
        },
        {
            type: "list",
            name: "engineerList",
            message: "Would you like to add any team members",
            choices: [
                "Intern",
                "Engineer",
                "Manager",
                "I do not want to add any team members?",
            ]
        },
    ]).then(answersE => {
        const { engineerName, engineersId, engineerEmail, engineersGithub, engineerList } = answersE;
        const engineer = new Engineer(engineerName, engineersId, engineerEmail, engineersGithub)
        buildTeam.push(engineer);

        

        switch (engineerList) {
            case "Engineer":
                createEngineer();
                break;
            case "Intern":
                createIntern();
                break;
            case "Manager":
                createManager();
                break;
            default:
                createTeam()
              "I do not want to add a team members"
        }
    });
}

function createTeam() {
    let data = render(buildTeam)
    fs.writeFileSync(outputPath,data,'utf-8')
    console.log("file created");
}
// .then((answers) => writeFileSync('./lib/htmlRenderer', buildTeam(answers)))
// .then(() => console.log('Congratulations on completing your html page'))

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
