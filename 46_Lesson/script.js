'use strict'

// function showThis(a, b) {
//    function sum() {
//       return a + b;
//    }
//    console.log(sum());
// }
// showThis(4, 5);

// const obj = {
//    a: 20,
//    b: 15,
//    sum: function () {
//       function shout() {
//          console.log(this);
//       }
//       shout();
//    }
// };
// obj.sum();

// function User(name, id) {
//    this.name = name,
//       this.id = id,
//       this.human = true,
//       this.hello = function () {
//          console.log('Hello ' + this.name);
//       }
// }

// let ivan = new User('ivan', 28);
// ivan.hello();

// function sayName(surname) {
//    console.log(this);
//    console.log(this.name + surname);
// }

// const user = {
//    name: 'Jhon'
// }

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//    return this * num;
// }

// const double = count.bind(3);
// console.log(double(10));


//1) Обычная функция: this = window, use strict: this = undefined
//2) Контекст у мутодов объекта будет сам объект
//3) this - в конструкторах и классах - это новый экземпляр объекта
//4) Ручная привязка this: call, apply, bind

const btn = document.querySelector('button');

// btn.addEventListener('click', function () {
//    this.style.backgroundColor = 'red';
// });
btn.addEventListener('click', (e) => {
   e.target.style.backgroundColor = 'red';
});

const obj = {
   num: 5,
   sayNumber: function () {
      const say = () => {
         console.log(this);
      }
      say();
   }
};
obj.sayNumber();