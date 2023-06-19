const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');


inquirer.prompt ([

    {
    type: 'input',
    name: 'text',
    message: 'Enter the text to appear on your logo, up to 3 characters',
    validate: (text) => {
      if (text.length > 0 && text.length < 4) {
          return true
      } else {
          return 'Invalid input, please enter 1-3 characters'
          
      }

    }
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter either the name or hex code for the text color',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape from the list below',
    choices: ['Circle', 'Triangle', 'Square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter either the name or the hex code for the shape color',
  },

])

.then((input) => {
     let userTextInput

        if (input.text.length > 0 && input.text.length < 4) {
            userTextInput = input.text
        } else {
            console.log('Invalid input, please enter 1-3 characters')
            return
        }

    let shape;

    if (input.shape === 'Circle') {
        shape = new Circle()
    }
    else if (input.shape === 'Square') {
        shape = new Square()
    }
    else if (input.shape === 'Triangle') {
        shape = new Triangle()
    }

    shape.setColor(input.shapeColor);
    shape.setText(input.text);
    shape.setTextColor(input.textColor);

   fs.writeFile('logo.svg', shape.render(), (err) =>
    err ? console.log(err) : console.log('SVG logo generated!'))
})










      




// function generateSVG(data) {
    
//     let userTextInput
//     let shape

//     if (input.text.length > 0 && input.text.length < 4) {
//         userTextInput = input.text
//     } else {
//         console.log('Invalid input, please enter 1-3 characters')
//         return
//     }

//     if (input.shape === 'Circle') {
//         shape = new Circle()
//     }
//     else if (input.shape === 'Square') {
//         shape = new Square()
//     }
//     else if (input.shape === 'Triangle') {
//         shape = new Triangle()
//     }

//     shape.setColor(input.shapeColor);
//     shape.setText(input.text);
//     shape.setTextColor(input.textColor);

// }
  
//   function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, (err) =>
//       err ? console.error(err) : console.log('SVG logo generated!')
//     );
//   }

// function init() {
//   inquirer
//     .prompt(prompts)
//     .then((data) => {
//       const logo = generateSVG(data);
//       writeToFile('logo.svg', logo);
//     })
//     .catch((err) => console.error(err));
// }

// init();

// .then((input) => {
//      var userTextInput = '';

//         if (input.text.length > 0 && input.text.length < 4) {
//             userTextInput = input.text
//         } else {
//             console.log('Invalid input, please enter 1-3 characters')
//             return
//         }

//     var shape;

//     if (input.shape === 'Circle') {
//         shape = new Circle()
//     }
//     else if (input.shape === 'Square') {
//         shape = new Square()
//     }
//     else if (input.shape === 'Triangle') {
//         shape = new Triangle()
//     }

//     shape.setColor(input.shapeColor);
//     shape.setText(input.text);
//     shape.setTextColor(input.textColor);

//    fs.writeFile('logo.svg', shape.render(), (err) =>
//     err ? console.log(err) : console.log('SVG logo generated!'))
// })
