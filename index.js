const fs = require('fs')
const inquirer = require('inquirer')
const {Circle, Square, Triangle} = require('./lib/shapes') 

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter the text to appear on your logo, up to 3 characters'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter either the name or hex code for the text color'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape from the list below',
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter either the name or the hex code for the shape color'
        }
    ])

    fs.writeFile('logo.svg', (err) => 
    err ? console.log(err) : console.log('SVG logo generated!'))




    userTextInput = '';

    const confirmUserInput = async (input) => {
        if (input.text.length === 0 || input.text.length < 4) {
            userTextInput = input.text
        } else {
            console.log('Invalid input, please enter 1-3 characters')
            return
        }
    }