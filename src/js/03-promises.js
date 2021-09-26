import Notiflix from 'notiflix';

// to dostalismy:

//  to jest wnetrze:
// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

// a to przykladowe wywolanie:(?)
// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

// i moje przeksztalcanie:

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }



// probu pętli

// Napisz skrypt, który po wysłaniu formularza wywoła funkcję createPromise(position, delay) tyle razy, ile wprowadzono w pole amount

// for (let i = 0; i <= amount; i++) {
//   createPromise(position, delay);
// }








  // *************** gromadzenie danych ***********************

  // const promise = new Promise((resolve, reject) => {
  //   // Asynchronous operation
  // });

// -
// let isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Success! Value passed to resolve function');
//     } else {
//       reject('Error! Error passed to reject function');
//     }
//   }, 2000);
// });

// console.log(promise);
// -
// promise.then(onResolve, onReject);

// onResolve(value) - zostanie wywołana po pomyślnym wykonaniu obietnicy i otrzyma jej wynik jako argument.
// onReject(error) - zostanie wywołany, po wykonaniu obietnicy z błędem i otrzyma ją jako argument.
// -

// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// console.log("Before promise.then()");

// promise.then(
//   value => {
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   error => {
//     console.log(error); // "Error! Error passed to reject function"
//   }
// );

// console.log("After promise.then()");

// console.log(promise);
// -
// ****************************ta wersje stosowac, a nie ta poprzednia
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Success! Value passed to resolve function');
//     } else {
//       reject('Error! Error passed to reject function');
//     }
//   }, 2000);
// });

// promise
//   .then(value => {
//     console.log(value);
//   })
//   .catch(error => {
//     console.log(error);
//   });
// console.log(promise);
// -
  
//   const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// promise
//   .then(value => console.log(value)) // "Success! Value passed to resolve function"
//   .catch(error => console.log(error)) // "Error! Error passed to reject function"
//   .finally(() => console.log("Promise settled")); // "Promise settled"
// console.log(promise);
// -

// tu promise nie ma rejecta wiec i ify nie sa potrzebne
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });

// promise
//   .then(value => {
//     console.log(value); // 5
//     return value * 2;
//   })
//   .then(value => {
//     console.log(value); // 10
//     return value * 3;
//   })
//   .then(value => {
//     console.log(value); // 30
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('Final task');
//   });
