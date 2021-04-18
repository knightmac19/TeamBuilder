var generate = require('./templates/generateHtml');
var Manager = require('./lib/Manager');
var Engineer = require('./lib/Engineer');
var Intern = require('./lib/Intern');
var fs = require('fs');
var inquirer = require('inquirer');

let team = [];
let usedId = [];



const init = () => {

    const mainMenu = () => {
        inquirer.prompt([
            {
                type:'list',
                name: 'teamMember',
                message: 'What team member would you like to add?',
                choices: ['Manager', 'Engineer', 'Intern', 'Close & Build Page']
            }
        ]).then(a => {
            switch (a.teamMember) {
                case 'Manager':
                    managerPrompt();
                    break;
                case 'Engineer':
                    engineerPrompt();
                    break;
                case 'Intern':
                    internPrompt();
                    break;
                case 'Close & Build Page':
                    buildFinalFile(team);
            }
        })
    };

    const managerPrompt = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the manager\'s name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the manager\'s id?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the manager\'s email?',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the manager\'s office number?',
            }
        ]).then(a => {
            let manager = new Manager(a.name, a.id, a.email, a.officeNumber);
            team.push(manager);
            usedId.push(a.id);
            mainMenu();
        })
    };

    const engineerPrompt = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the engineer\'s name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the engineer\'s id?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the engineer\'s email?',
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is the engineer\'s github?',
            }
        ]).then(a => {
            let engineer = new Engineer(a.name, a.id, a.email, a.github);
            team.push(engineer);
            usedId.push(a.id);
            mainMenu();
        })
    };

    const internPrompt = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the intern\'s name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the intern\'s id?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the intern\'s email?',
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is the intern\'s school?',
            }
        ]).then(a => {
            let intern = new Intern(a.name, a.id, a.email, a.school);
            team.push(intern);
            usedId.push(a.id);
            mainMenu();
        })
    };



    const exampleBuild = () => {
        let exampleArray = [];
        var el_Lic = new Manager('Luis', 1, 'el_lic@mandamanda.com', 1)
    
        // var Simone = new Engineer('Simone', 2, 'simone@gmail.com', 'knightmac19');
        // var Maria = new Engineer('Maria', 3, 'maria@gmail.com', 'knightmac19');
        // var Jennifer = new Engineer('Jennifer', 4, 'jenn@gmail.com', 'knightmac19');
        var Victoria = new Engineer('Victoria', 11, 'victoria@gmail.com', 'knightmac19');
        var Patrick = new Engineer('Patrick', 10, 'patrick@gmail.com', 'knightmac19');
        var Robert = new Engineer('Robert', 9, 'rob@gmail.com', 'knightmac19');
    
        var Mark = new Intern('Mark', 5, 'mark@gmail.com', 'knightmac19');
        var Chris = new Intern('Chris', 6, 'chris@gmail.com', 'knightmac19');
    
        exampleArray.push(Victoria)
        exampleArray.push(Patrick)
        exampleArray.push(Robert)
    
        // exampleArray.push(Natalia)
        // exampleArray.push(Mike)
        // exampleArray.push(John)
        exampleArray.push(el_Lic)
        // exampleArray.push(Simone)
        // exampleArray.push(Maria)
        // exampleArray.push(Jennifer)
        exampleArray.push(Mark)
        exampleArray.push(Chris)
    
        return exampleArray;
    }
    
    const buildFinalFile = arr => {
        fs.writeFile('./dist/index.html', generate(arr), function(err) {
            if (err) {
                console.log(err);
            }
            console.log('please open dist/ folder')
        });
    }
    

    mainMenu();
}
init();



// team = exampleBuild();
    
// buildFinalFile(team)




