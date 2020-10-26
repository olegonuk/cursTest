// const btn = document.querySelector('button'),
//    overlay = document.querySelector('.overlay');

// // let i = 0;

const deleteElement = (e) => {
   console.log(e.target);
   console.log(e.type);
   // i++;
   // if (i == 1) {
   //    btn.removeEventListener('click', deleteElement);
   // }
}

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

// const link = document.querySelector('a');

// link.addEventListener('click', (event) => {
//    event.preventDefault();
//    console.log(event.target);
// });

const btns = document.querySelectorAll('button');

btns.forEach(btn => {
   btn.addEventListener('click', deleteElement);
})