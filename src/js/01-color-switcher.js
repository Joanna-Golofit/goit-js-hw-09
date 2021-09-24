const body = document.querySelector('body');
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

btnStop.disabled = true;

let timerId = null;

btnStart.addEventListener('click', () => {
  timerId = setInterval(changeBgColor, 1000);
  btnStop.disabled = false;
  btnStart.disabled = true;
});

btnStop.addEventListener('click', () => {
  clearTimeout(timerId);
  btnStop.disabled = true;
  btnStart.disabled = false;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBgColor = () => {
  body.style.backgroundColor = getRandomHexColor();
};







//  -------------------------- zapiski ---------------------------

//*************tez dziala********
// btnStop.setAttribute("disabled", true);
// timerId = setInterval(body.style.backgroundColor = getRandomHexColor(), 1500);
//=========setTimeout===========================
// setTimeout(() => {
//   // Will run last, after 2000 milliseconds
//   console.log('Second log');
// }, 2000);

// Funkcja setTimeout() wykonuje się synchronicznie i rejestruje odroczone wywołanie przekazanej funkcji wywołania zwrotnego, która zostanie wywołana asynchronicznie po określonym przedziale czasu.
//============setTimeout========================
// const onClick = () => {
//   setTimeout(() => {
//     alert('I love async JS!');
//   }, 2000);
// };
//=============addEventListener===============================
// gallery.addEventListener("click", event => {
//   event.preventDefault();
// });
//=======================setInterval=====================
// const timerId = setInterval(callback, delay, arg1, arg2, ...);
//============================================

// **************skroty******************
// const qs = param => document.querySelector(param);
