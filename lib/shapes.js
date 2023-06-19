class Shape{
    constructor(){
        this.color = '',
        this.text = '',
        this.textColor = ''
    }
    setColor(color){
        this.color = color
    }
    setText(text){
        this.text = text
    }
    setTextColor(textColor){
        this.textColor = textColor
    }
}

class Circle extends Shape{
    render(){
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        
        <circle cx="150" cy="100" r="80" fill="${this.color}"/>
        <text x="50%" y="50%" text-anchor="middle" stroke="${this.textColor}">
        ${this.text}
        </text>
        
        </svg>`
    }
}

class Square extends Shape{
    render(){
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        
        <rect x="50" height="200" width="200" fill="${this.color}"/>
        <text x="50%" y="50%" text-anchor="middle" stroke="${this.textColor}">
        ${this.text}
        </text>
        
        </svg>`
    }
}

class Triangle extends Shape{
    render(){
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        
        <polygon height='200px' width='300px' points="150, 18 244, 182 56, 182" fill="${this.color}"/>
        <text x="50%" y="60%" text-anchor="middle" stroke="${this.textColor}">
        ${this.text}
        </text>
        
        </svg>`
    }
}

module.exports = {Circle, Square, Triangle}