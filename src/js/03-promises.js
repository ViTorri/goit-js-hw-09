
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    delayInput: document.querySelector('input[name="delay"]'),
    stepInput: document.querySelector('input[name="step"]'),
    amountInput: document.querySelector('input[name="amount"]'),
    createBtn: document.querySelector('button[type = "submit"]'),
}
console.log(refs);

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   setTimeout(() => {
// if (shouldResolve) {
//   resolve('✅');
//   } else {
//   reject('❌');
//   }
//   })
// }

// createPromise(position, delay)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });