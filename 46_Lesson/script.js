'use strict'

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
   console.log(this);
});


const obj = {
   num: 5,
   sayNamber: function () {
      const say = () => {
         console.log(this);
      }
      say();
   }
};

obj.sayNamber();

const duble = (a) => a * 2;
console.log(duble(10));

const user = {
   name: 'Jack',
   age: 28
}


obj.sayNamber.call(user);

function count(num) {
   return this * num;
}

const mult = count.bind(10);
console.log(mult(4));