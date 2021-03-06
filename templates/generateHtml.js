const stringifyManagers = (arr, cb) => {
    var team = [];
    var employees = arr.filter(function(obj) {
        return obj.officeNumber;
    });

    for (var i = 0; i < employees.length; i++) {
        team.push(cb(employees[i]))
    };

    return team.join('')
};

const stringifyEngineers = (arr, cb) => {
    var team = [];
    var employees = arr.filter(function(obj) {
        return obj.github;
    });

    for (var i = 0; i < employees.length; i++) {
        team.push(cb(employees[i]))
    };

    return team.join('')
};

const stringifyInterns = (arr, cb) => {
    var team = [];
    var employees = arr.filter(function(obj) {
        return obj.school;
    });

    for (var i = 0; i < employees.length; i++) {
        team.push(cb(employees[i]))
    };

    return team.join('')
};

const managerTemplate = (man) => {
    return `
    <div class="card bg-manager mb-3" style="width: 18rem;">
        <div class="card-header text-center">
            <h3>${man.name} <i class="fas fa-glasses"></i></h3>
        </div>
        <div class="card-body">
            <h4 class="card-title">Manager</h4>
            <p class="card-text"><strong>ID:</strong> ${man.id}</p>
            <p class="card-text"><strong>Email:</strong><a href="mailto:${man.email}"> ${man.email}</a></p>
            <p class="card-text"><strong>Office Number:</strong> ${man.officeNumber}</p>
        </div>
    </div>`
};

const engineerTemplate = (eng) => {
    return `
    <div class="card bg-engineer mb-3" style="width: 18rem;">
        <div class="card-header text-center">
            <h3>${eng.name} <i class="fas fa-mug-hot"></i></h3>
        </div>
        <div class="card-body">
            <h4 class="card-title">Engineer</h4>
            <p class="card-text"><strong>ID:</strong> ${eng.id}</p>
            <p class="card-text"><strong>Email:</strong><a href="mailto:${eng.email}"> ${eng.email}</a></p>
            <p class="card-text"><strong>Github:</strong><a href="https://github.com/${eng.github}"> ${eng.github}</a></p>
        </div>
    </div>`
};

const internTemplate = (int) => {
    return `
    <div class="card bg-intern mb-3" style="width: 18rem;">
        <div class="card-header text-center">
            <h3>${int.name} <i class="fas fa-graduation-cap"></i></h3>
        </div>
        <div class="card-body">
            <h4 class="card-title">Intern</h4>
            <p class="card-text"><strong>ID:</strong> ${int.id}</p>
            <p class="card-text"><strong>Email:</strong><a href="mailto:${int.email}"> ${int.email}</a></p>
            <p class="card-text"><strong>School:</strong> ${int.school}</p>
        </div>
    </div>`
};

const finalTemplate = (arr) => {

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <!-- fontawesome -->
            <script src="https://kit.fontawesome.com/e64f7431b8.js" crossorigin="anonymous"></script>

            <!-- bootstrap css -->
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            <!-- jquery -->
            <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>

            <!-- css toggle -->
            <link rel="stylesheet" href="toggle-switchy.css">

            <!-- my css -->
            <link rel="stylesheet" type="text/css" href="./style.css">

            <title>Team Builder</title>
        </head>
        <body>
            <div id="page-container">
                <main class="content-wrap">
                    <div class="jumbotron jumbo-day jumbotron-fluid mb-3">
                        <div class="container text-light">
                            <h1 class="display-4">Meet the Team!</h1>
                            <hr>
                        </div>
                    </div>

                    <div id="cards-container" class="container mb-5 ">
                        <div class="row flex-row justify-content-around mb-5">
                            ${stringifyManagers(arr, managerTemplate)}
                        </div>
                        <hr>
                        <div class="row flex-row justify-content-around mb-5">
                            ${stringifyEngineers(arr, engineerTemplate)}
                        </div>
                        <hr>
                        <div class="row flex-row justify-content-around mb-5">
                            ${stringifyInterns(arr, internTemplate)}
                        </div>
                    </div>

                    
                </main>
            
                <div id="footer" class="bg-secondary">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 text-center text-light">
                                <div>
                                    Patrick Dunn 2021
                                    <a href="https://github.com/knightmac19/TeamBuilder" rel="noopener noreferrer" target="_blank"class="btn btn-social-icon btn-github">
                                        <span class="fa fa-lg fa-github"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            

            <!-- bootstrap js -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
            <!-- my js -->
            <script src="./script.js"></script>
        </body>
        </html>
    `
};

module.exports = finalTemplate;