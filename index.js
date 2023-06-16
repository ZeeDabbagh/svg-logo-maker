const fs = require("fs");
const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./lib/shapes");

inquirer.prompt([
  {
    type: "input",
    name: "text",
    message: "Enter the text to appear on your logo, up to 3 characters",
    validate: function (userInput) {
      if (userInput.length > 3) {
        return "logo text should be three characters or less";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter either the name or hex code for the text color",
  },
  {
    type: "list",
    name: "shape",
    message: "Choose a shape from the list below",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter either the name or the hex code for the shape color",
  },
]);

function generateSVG(data) {
  let shape;

  if (data.shape === "Circle") {
    shape = new Circle(data);
  } else if (data.shape === "Triangle") {
    shape = new Triangle(data);
  } else {
    shape = new Square(data);
  }

  return shape.render();
}

fs.writeFile("logo.svg", generateSVG(data), (err) =>
  err ? console.log(err) : console.log("SVG logo generated!")
);

function init() {
  inquirer
    .prompt(prompts)
    .then((data) => {
      const logo = generateSVG(data);
      writeToFile("logo.svg", logo);
    })
    .catch((err) => console.error(err));
}

init();

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
