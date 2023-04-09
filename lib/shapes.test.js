const {Circle, Square, Triangle} = require("./shapes")
// Imports the Circle, Square, and Triangle shape classes from the 'shapes.js' module and defines a test suite for the shape class.  
// The test case checks whether "Cricle, Square, and Triangle" object can be rendered correctly by calling the render method and comparing the result to an expected SVG string.

// Circle Shape
describe('Circle', () => {
    test('renders circle', () => {
      const shape = new Circle();
      const color =('red')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill=${color} />`)
    });
  });
  // Square Shape
  describe('Square', () => {
      test('renders square', () => {
        const shape = new Square();
        const color =('purple')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}">`);
      });
    });
  // Triangle Shape
  describe('Triangle', () => {
      test('renders triangle', () => {
        const shape = new Triangle();
        const color =('brown')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height='200px' width='300px' points="150, 18 244, 182 56, 182" fill="${color}">`);
      });
    });
    