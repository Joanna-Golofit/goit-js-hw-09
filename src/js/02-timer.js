import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
// import { Notify, Report, Confirm, Loading, Block } from 'notiflix';

Notiflix.Notify.success('Success message text');
Notiflix.Notify.failure('Failure message text');
Notiflix.Notify.warning('Warning message text');
Notiflix.Notify.info('Info message text');

//znajdowanie elementów za pomocą dowolnego selektora CSS
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const daysLeft = document.querySelector('span[data-days]');
const hoursLeft = document.querySelector('span[data-hours]');
const minutesLeft = document.querySelector('span[data-minutes]');
const secondsLeft = document.querySelector('span[data-seconds]');

//pomocne(?) zmienne 
let timeNow = new Date().getTime();
let timeChosen = 0; 
let timeRemaining = 0;
let currentValue = '';

// btnStart.disabled = true;
btnStop.disabled = true;


btnStart.addEventListener('click', () => {
  // timerId = setInterval(changeBgColor, 1000);
  btnStop.disabled = false;
  btnStart.disabled = true;
});

btnStop.addEventListener('click', () => {
  // timerId = setInterval(changeBgColor, 1000);
  btnStart.disabled = false;
  btnStop.disabled = true;
  console.log('calendars[0]', calendars[0]); // flatpickr
});



// Drugim argumentem funkcji flatpickr(selector, options) 
// można przekazać nieobowiązkowy obiekt parametrów.Przygotowaliśmy 
// dla Ciebie obiekt, który jest niezbędny do wykonania zadania.
// Zorientuj się, za co odpowiada każda właściwość w dokumentacji 
// «Options» i użyj jej w swoim kodzie.



function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  
  // Remaining days etc
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
  return { days, hours, minutes, seconds };
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  weekNumbers: true,
  onClose(timeChosen) {
    console.log('wybrano:', timeChosen[0]);
    //zmodyfikowac tu
    let timeDiff = timeChosen[0] - timeNow;
    console.log('roznica w ms:', timeDiff);
    console.log('convertMs', convertMs(timeDiff));
    // daysLeft.innerHTML = 5;
    updateTimer(convertMs(timeDiff));
  },
};
// https://flatpickr.js.org/options/

// flatpickr - uruchomienie:
flatpickr('#date-selector', options);

function updateTimer({ days, hours, minutes, seconds }) {
  daysLeft.innerHTML = days;
    console.log('daysLeft', days);

  hoursLeft.innerHTML = hours;
  minutesLeft.innerHTML = minutes;
  secondsLeft.innerHTML = seconds;
}

// =====================juz zbedne logi przykladowe================
// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

// =============================jak uruchomic flatpickr==========================
// flatpickr(selector, options);
// flatpickr(element, {});

// const myInput = document.querySelector(".myInput");
// const fp = flatpickr(myInput, {});  // flatpickr

// const calendars = flatpickr(".calendar", {});
// console.log("calendars[0]", calendars[0]); // flatpickr

// destroy()
// Destroys the flatpickr instance, cleans up - removes event listeners, restores inputs, etc.

// parseDate(dateStr, dateFormat)
// Parses a date string or a timestamp, and returns a Date.
// flatpickr.parseDate(dateStr, dateFormat)

// onClose
// onClose gets triggered when the calendar is closed.
// {
//     onChange: function(timeChosen, dateStr, instance) {
//         //...
//     },
//     onOpen: [
//         function(timeChosen, dateStr, instance){
//             //...
//         },
//         function(timeChosen, dateStr, instance){
//             //...
//         }
//     ],
//     onClose: function(timeChosen, dateStr, instance){
//        // ...
//     }
// }
// =============================jak uruchomic flatpickr end==========================

