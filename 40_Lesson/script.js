

const now = new Date();

console.log(now);
console.log(now.setHours(23));
console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getTime());
console.log(now.getTimezoneOffset());

let start = new Date();

for (let i = 0; i < 100000; i++) {
   let some = i ** 3;
}

let end = new Date();
alert(`Цыкл выполнился за ${end - start} милисекунд`);