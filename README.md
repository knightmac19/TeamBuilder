# TeamBuilder
    
### NodeJS application to build an html template through the CLI.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  

## <a name="languages"></a> Languages & Technologies
[Contents](#contents)  
<img alt="HTML5" src="https://img.shields.io/badge/html5-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>
                 <img alt="CSS3" src="https://img.shields.io/badge/css3-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>
                 <img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
                 <img alt="NodeJS" src="https://img.shields.io/badge/node.js-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
                 <img alt="Markdown" src="https://img.shields.io/badge/markdown-%23000000.svg?&style=for-the-badge&logo=markdown&logoColor=white"/>
                 <img alt="Bootstrap" src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white"/>
                 <img alt="Visual Studio Code" src="https://img.shields.io/badge/VisualStudioCode-0078d7.svg?&style=for-the-badge&logo=visual-studio-code&logoColor=white"/>
                 <img alt="Git" src="https://img.shields.io/badge/git-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white"/>
                 <img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/>
                 <img alt="Jest" src="https://img.shields.io/badge/-jest-%23C21325?&style=for-the-badge&logo=jest&logoColor=white"/>
                

## <a name="contents"></a>  Contents
- [Languages](#languages)
- [Description](#description)
- [Motivation](#motivation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Challenges](#challenges)
- [Contributors](#contributors)  
- [License](#license)


## <a name="description"></a> Description
[Contents](#contents)  
After opening the application users will be prompted for which types of employees they would like to add: `Manager`, `Engineer`, or `Intern`. The application uses JavaScript classes to define these employee object types. \n Users will be prompted several questions -- some general, some particular to an employee class. The application validates all inputs to ensure that users only enter valid emails for the email prompt, numeric characters for id's, etc. \n After each prompt cycle the application pushes the `new Engineer`, for example, to a `team` array. After finishing all the prompts the application filters the team array and generates a card for each employee in the array, styled according to their unique class. The application prints the generated file inside the `dist/` folder for export.

## <a name="motivation"></a> Motivation
[Contents](#contents)  
Many companies feature teams on their webpages to introduce them to prospective clients. This application proves the concept and provides a functional prototype to generate multiple team webpages with distinct and content yet uniform structure and styling. It can save a company's development team signficant time for this type of project or a similar one.

## <a name="usage"></a> Usage
[Contents](#contents)  
`git clone` --> `npm i` --> `npm start`

## <a name="screenshots"></a> Screenshots
[Contents](#contents)  

## <a name="challenges"></a> Challenges & Lessons Learned
[Contents](#contents)  
The application features unit tests run with the `jest` module. I had to learn how to write and run those tests. \n Another challenge required learning how to chain multiple inquirer prompt cycles together so that users can continually add members to a team. The application requires no minimum or maximum number of team members and the resulting webpage will be fully responsive no matter the size of the team.

## <a name="contributors"></a> Contributors
[Contents](#contents)  
- Patrick Dunn // [pmdunn78@gmail.com](mailto:pmdunn78@gmail.com) // [github.com/knightmac19](https://github.com/knightmac19)  

## <a name="questions"></a> Questions
[Contents](#contents)  
Please direct any questions to [pmdunn78@gmail.com](mailto:pmdunn78@gmail.com).

## <a name="license"></a> License
[Contents](#contents)  
Copyright 2021 Patrick Dunn

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
