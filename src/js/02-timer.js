import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
// import { Notify, Report, Confirm, Loading, Block } from 'notiflix';

 Notiflix.Notify.init({
   position: 'right-bottom',
   borderRadius: '22px',
   width: '480px',
   fontSize: '28px',
   distance: '15px',
   opacity: 0.5,
   success: {
     notiflixIconColor: 'rgba(0,0,0,0.983)',
     background: '#056923'
   },
   failure: {
     notiflixIconColor: 'rgba(0,0,0,0.983)',
     background: '#f91909',
   },
   info: {
     notiflixIconColor: 'rgba(0,0,0,0.983)',
     background: '#014c84'
   },
 });

// Notiflix.Notify.success('Success message text');
// Notiflix.Notify.failure('Failure message text');
// Notiflix.Notify.warning('Warning message text');
// Notiflix.Notify.info('Info message text');

//znajdowanie elementów za pomocą dowolnego selektora CSS
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const daysLeft = document.querySelector('span[data-days]');
const hoursLeft = document.querySelector('span[data-hours]');
const minutesLeft = document.querySelector('span[data-minutes]');
const secondsLeft = document.querySelector('span[data-seconds]');

//pomocne(?) zmienne
let timeNow = new Date().getTime(); // w milisekundach
let timeChosen = 0;
let timeDiff = 0;
let timeRemaining = 0;
let currentValue = '';


btnStart.disabled = true;
btnStop.disabled = true;


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
    console.log('onClose timeChosen[0] wybrano (string):', timeChosen[0]);
    console.log('onClose timeChosen wybrano (obiekt):', timeChosen);
    //zmodyfikowac tu
    timeDiff = timeChosen[0] - timeNow;
    console.log('onClose roznica w ms timeDiff:', timeDiff);
    console.log('onClose convertMs(timeDiff)', convertMs(timeDiff));
    // daysLeft.innerHTML = 5;
    checkChosenDate();
    
    // updateTimer(convertMs(timeDiff));
  },
};
// https://flatpickr.js.org/options/  o opcjach

// flatpickr - uruchomienie:
flatpickr('#date-selector', options);



function checkChosenDate() {
  if (timeDiff <= 0) {
    Notiflix.Notify.failure('Please choose a date in the future');
    // return;
    
    // console.log('checkChosenDate if timeChosen', timeChosen); // 0
    // console.log('timeChosen[0]', timeChosen[0]); //undefined
    // console.log('timeNow', timeNow);
    // console.log('timeDiff', timeDiff);
  } else {
    Notiflix.Notify.info('Now you can click "Start"');
    btnStart.disabled = false;
    
    // console.log('checkChosenDate else timeChosen', timeChosen); // 0
    // console.log('timeChosen[0]', timeChosen[0]); //undefined
    // console.log('timeNow', timeNow);
    // console.log('timeDiff', timeDiff);
  }
}

function updateTimer({ days, hours, minutes, seconds }) {
  daysLeft.innerHTML = days;
  // console.log('daysLeft', days);
  hoursLeft.innerHTML = hours;
  minutesLeft.innerHTML = minutes;
  secondsLeft.innerHTML = seconds;
}

function addLeadingZero(value) {
  return value.toString().padStart(2, "0");
}

const startCountdown = () => {
  // timerId = setInterval(changeBgColor, 1000);
  updateTimer(convertMs(timeDiff));
  console.log('btnStart.addEventListener timeChosen[0]', timeChosen[0]); // undefined
  btnStop.disabled = false;
  btnStart.disabled = true;
};

const stopCountdown = () => {
  // timerId = setInterval(changeBgColor, 1000);
  console.log('btnStop.addEventListener timeChosen[0]', timeChosen[0]); // undefined
  btnStart.disabled = false;
  btnStop.disabled = true;
};

btnStart.addEventListener('click', startCountdown);

btnStop.addEventListener('click', stopCountdown);

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
