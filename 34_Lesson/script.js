// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', () => {

   const box = document.querySelector('.box');

   box.addEventListener('touchstart', (e) => {
      console.log('Start');

      // console.log(e.touches);
      console.log(e.targetTouches);
      // console.log(e.changedTouches);

   });

   box.addEventListener('touchmove', (e) => {
      console.log(e.targetTouches[0].pageX);
   });

   box.addEventListener('touchend', (e) => {
      console.log('End');
   });
})

// touches
// targetTouches
// changedTouches