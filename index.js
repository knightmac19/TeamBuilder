var generate = require('./templates/generateHtml');
var Manager = require('./lib/Manager');
var Engineer = require('./lib/Engineer');
var Intern = require('./lib/Intern');
var fs = require('fs');
var inquirer = require('inquirer');

let team = [];

inquirer
  .prompt([
    {
        type:'list',
        name:'addEmployee',
        message:'Which type of employee would you like to add?',
        choices:['Manager', 'Engineer', 'Intern']
    }
  ])
  .then(answers => {
    console.info('answer: ', answers.addEmployee)
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });



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




