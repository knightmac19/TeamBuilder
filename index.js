var generate = require('./templates/generateHtml');
var Manager = require('./lib/Manager');
var Engineer = require('./lib/Engineer');
var Intern = require('./lib/Intern');
var fs = require('fs');
var inquirer = require('inquirer');

let team = [];

async function main() {
    const getEmployee = await inquirer.prompt({
        type:'list',
        name:'addEmployee',
        message:'Which type of employee would you like to add?',
        choices:['Manager', 'Engineer', 'Intern', 'Exit']
    }).then(a => {
        switch(a.addEmployee) {
            case 'Manager':
            console.log('they chose manager')
            break;
            case 'Engineer':
                console.log('they chose engineer')
            break;
            case 'Intern':
                console.log('they chose intern')
            break;
            case 'Exit':
                console.log('they chose exit')
                process.exit()
            
        }
    });

    const managerPrompts = await inquirer.prompt({
        type:'input',
        name:'name',
        message:'What is the manager\'s name?'
    })
    // const orderList = await getList()
    // const getOrder = await inquirer.prompt(genList(orderList))
    // const getConfirm = await inquirer.prompt(confirmUpdate(getOrder.orders))

    // if(getConfirm.toUpdate) {
    //     console.log('to update', getOrder.orders, 'for account', getAccount.account)
    // } else {
    //     console.log('NOT to update', getOrder.orders)
    // }
    getEmployee()
}
main()

const mainMenu = () => {
    inquirer
        .prompt([
            {
                type:'list',
                name:'addEmployee',
                message:'Which type of employee would you like to add?',
                choices:['Manager', 'Engineer', 'Intern', 'Exit']
            }
        ])
        .then(a => {
            switch(a.addEmployee) {
                case 'Manager':
                console.log('they chose manager')
                break;
                case 'Engineer':
                    console.log('they chose engineer')
                break;
                case 'Intern':
                    console.log('they chose intern')
                break;
            }


            // console.info('answer: ', answer.addEmployee)
        })
        .catch(error => {
            if(error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            } else {
            // Something else went wrong
            }
        });
}






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

// team = exampleBuild();
    
// buildFinalFile(team)




