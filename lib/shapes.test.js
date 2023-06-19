const { Circle, Square, Triangle } = require("./shapes");

// Circle
describe("Circle", () => {
  test("renders circle", () => {
    const shape = new Circle();
    const color = "purple";
    const text = "ZEE";
    const textColor = "white";
    shape.setColor(color);
    shape.setText(text);
    shape.setTextColor(textColor);
    expect(shape.render())
      .toEqual(`<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${color}"/><text x="50%" y="50%" text-anchor="middle" stroke="${textColor}">${text}</text></svg>`);
  });
});

// Square
describe("Square", () => {
  test("renders square", () => {
    const shape = new Square();
    const color = "purple";
    const text = "ZEE";
    const textColor = "white";
    shape.setColor(color);
    shape.setText(text);
    shape.setTextColor(textColor);
    expect(shape.render())
      .toEqual(`<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        
        <rect x="50" height="200" width="200" fill="${color}"/>
        <text x="50%" y="50%" text-anchor="middle" stroke="${textColor}">
        ${text}
        </text>
        
        </svg>`);
  });
});

// Triangle
describe("Triangle", () => {
  test("renders triangle", () => {
    const shape = new Triangle();
    const color = "purple";
    const text = "ZEE";
    const textColor = "white";
    shape.setColor(color);
    shape.setText(text);
    shape.setTextColor(textColor);
    expect(shape.render())
      .toEqual(`<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        
        <polygon height='200px' width='300px' points="150, 18 244, 182 56, 182" fill="${color}"/>
        <text x="50%" y="60%" text-anchor="middle" stroke="${textColor}">
        ${text}
        </text>
        
        </svg>`);
  });
});
