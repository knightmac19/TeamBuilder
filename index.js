var generate = require('./templates/generateHtml');
var Manager = require('./lib/Manager');
var Engineer = require('./lib/Engineer');
var Intern = require('./lib/Intern');
var fs = require('fs');
var inquirer = require('inquirer');


let team = [];
let usedId = [];
let officeNums = [];
let emails = [];
let githubs = [];

console.log(team)
console.log(usedId)

const checkName = str => {
    let pass = str.match(/[A-Z][A-Za-z]/);

    if (pass) {
        return true;
    }
    return 'Must start with capital letter, & only contain alphabetic characters'
};

const checkNumeric = (num, arr) => {
    let pass = num.match(/^[1-9]\d*$/);

    if (pass) {
        if (arr.includes(num)) {
            return 'This ID is already assigned. Please choose another one';
        } else if (num.length > 6) {
            return 'ID\'s cannot be greater than 6 characters';
        } else {
            return true;
        }
    }
    return 'ID must be a positive number greater than zero';
}

const checkGithub = (str, arr) => {

}



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
                validate: a => checkName(a)
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the manager\'s id?',
                validate: a => checkNumeric(a, usedId)
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
                validate: a => checkNumeric(a, officeNums)
            }
        ]).then(a => {
            let manager = new Manager(a.name, a.id, a.email, a.officeNumber);
            team.push(manager);
            usedId.push(a.id);
            officeNums.push(a.officeNumber);
            emails.push(a.email);
            mainMenu();
        })
    };

    const engineerPrompt = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the engineer\'s name?',
                validate: a => checkName(a)
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the engineer\'s id?',
                validate: a => checkNumeric(a, usedId)
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
            emails.push(a.email);
            githubs.push(a.github)
            mainMenu();
        })
    };

    const internPrompt = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the intern\'s name?',
                validate: a => checkName(a)
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the intern\'s id?',
                validate: a => checkNumeric(a, usedId)
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
            emails.push(a.email);
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




