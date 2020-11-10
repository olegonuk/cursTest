'use strict'

class Rectangle {
   constructor(heigth, width) {
      this.heigth = heigth;
      this.width = width;
   }

   calcArea() {
      return this.heigth * this.width;
   }
}

class ColoredRectangleWithText extends Rectangle {
   constructor(heigth, width, text, bgColor) {
      super(heigth, width);
      this.text = text;
      this.bgColor = bgColor;
   }

   shoMyprops() {
      console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
   }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');
div.shoMyprops();
console.log(div.calcArea());


// const square = new Rectangle(10, 10);
// const long = new Rectangle(50, 40);
// console.log(square);
// console.log(square.calcArea());
// console.log(long);
// console.log(long.calcArea());

