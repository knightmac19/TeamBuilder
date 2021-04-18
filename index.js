var generate = require('./templates/generateHtml');
var Manager = require('./lib/Manager');
var Engineer = require('./lib/Engineer');
var Intern = require('./lib/Intern');
var fs = require('fs');




const exampleArray = [];
var Natalia = new Manager('Natalia', 00, 'nat@appleseed.com', 001);
var Mike = new Manager('Mike', 0, 'mike@appleseed.com', 1);
var John = new Manager('John', 1, 'johnny@appleseed.com', 2);

var Simone = new Engineer('Simone', 2, 'simone@gmail.com', 'knightmac19');
var Maria = new Engineer('Maria', 3, 'maria@gmail.com', 'knightmac19');
var Jennifer = new Engineer('Jennifer', 4, 'jenn@gmail.com', 'knightmac19');
var Victoria = new Engineer('Victoria', 11, 'victoria@gmail.com', 'knightmac19');
var Patrick = new Engineer('Patrick', 10, 'patrick@gmail.com', 'knightmac19');
var Robert = new Engineer('Robert', 9, 'rob@gmail.com', 'knightmac19');


var Mark = new Intern('Mark', 5, 'mark@gmail.com', 'knightmac19');
var Chris = new Intern('Chris', 6, 'chris@gmail.com', 'knightmac19');

exampleArray.push(Victoria)
exampleArray.push(Patrick)
exampleArray.push(Robert)


exampleArray.push(Natalia)
exampleArray.push(Mike)
exampleArray.push(John)
exampleArray.push(Simone)
exampleArray.push(Maria)
exampleArray.push(Jennifer)
exampleArray.push(Mark)
exampleArray.push(Chris)

var engineers = exampleArray.filter(function(obj) {
    return obj.github;
});

var managers = exampleArray.filter(function(obj) {
    return obj.officeNumber;
});

var interns = exampleArray.filter(function(obj) {
    return obj.school;
});

// console.log(exampleArray)
// console.log(managers)



    fs.writeFile('./dist/index.html', generate(exampleArray), function(err) {
        if (err) {
            console.log(err);
        }
        console.log('please open dist/ folder')
    });


// buildFinalFile(exampleArray)




