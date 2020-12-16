# Tests-code
first step is to get inquirir to just get questions get prompts working
second step get classes working
third create one manager see if can load on page
fourth then look in recursion for building the entire team


get prompts
const inquirer = require('inquirer');

function askIntern () {
    inquire.prompt({

    }).then(internResponse) => {
        name,school, etc

        team.push(newIntern("Chidi , Ut Austin));
    })
}



What is manager's email? chidibeast
What is manager's id? 2242
What is managers's office number? 100

We must have 1 manager
0 to many Engineers
0 to many interns


//this team array will be passed inside my render method
//very last part that i should work on 
team = [
    new manager(),
    new Engineer(),
    new Engineer(), //if i decide to create one
    new Intern(),
]



Do 3 prompt, with seperate questions
start with manager and have 3 different functions


ex: make sure you add in what type of team member would you like to add in managers section

//very first part that i should work on getting manager to display and get prompts working


prompt Manager ( {
    "Whats your managers name etc
    What type of team member would you like to add
}).then(managerChoice => {

    if user selects engineers
        ask engineer questions // add a nested inquirer//

        
    else user selects intern
        ask intern questions //another nested inquirer

    else 
        render html

});
//render is how you pass in team array

prompt Engineer ({
[

]
}).then(engineerResponse=> {

    if user selects engineers
        ask engineer questions => promptEnginer()

        
    else user selects intern
        ask intern questions = promptIntern()

    else 
        render html





prompt Intern({
[

]
}).then(engineerResponse=> {

    if user selects engineers
        ask engineer questions => promptEnginer()

        
    else user selects intern
        ask intern questions = promptIntern()

    else 
        render html



















chart.js to display in different style chart