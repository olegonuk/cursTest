'use strict'

class Rectangle {
   constructor(height, widht) {
      this.height = height;
      this.widht = widht;
   }

   calcArea() {
      return this.height * this.widht;
   }

}

class ColoredRectangleWithText extends Rectangle {
   constructor(height, widht, text, bgColor) {
      super(height, widht);
      this.text = text;
      this.bgColor = bgColor;
   }

   showMyProps() {
      console.log(`Текст: ${this.text}, Цвет: ${this.bgColor}`);
   }
}

const squer = new Rectangle(30, 50);
console.log(squer.calcArea());

const div = new ColoredRectangleWithText(10, 30, 'hello World', 'green');
div.showMyProps();
console.log(div.calcArea());
