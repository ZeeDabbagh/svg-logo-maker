const {Circle, Square, Triangle} = require("./shapes")

// Circle
describe('Circle', () => {
    test('renders circle', () => {
      const shape = new Circle();
      const color ='red'
      shape.setColor(color);
      expect(shape.render()).toEqual(`<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${color}"/>`)
    });
  });
  // Square
  describe('Square', () => {
      test('renders square', () => {
        const shape = new Square();
        const color = 'purple'
        shape.setColor(color);
        expect(shape.render()).toEqual(`<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="50" height="200" width="200" fill="${color}"/>`);
      });
    });
  // Triangle
  describe('Triangle', () => {
      test('renders triangle', () => {
        const shape = new Triangle();
        const color ='brown'
        shape.setColor(color);
        expect(shape.render()).toEqual(`<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon height='200px' width='300px' points="150, 18 244, 182 56, 182" fill="${color}"/>`);
      });
    });
    