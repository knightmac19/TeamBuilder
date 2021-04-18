const generate = require('./templates/generateHtml');
var fs = require('fs');


fs.writeFile('./dist/index.html', generate, function(err) {
    if (err) {
        console.log(err);
    }
    console.log('please open dist/ folder')
});


