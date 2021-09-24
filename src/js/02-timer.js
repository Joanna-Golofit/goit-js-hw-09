import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

Notiflix.Notify.success('Success message text');
Notiflix.Notify.failure('Failure message text');
Notiflix.Notify.warning('Warning message text');
Notiflix.Notify.info('Info message text');



// Drugim argumentem funkcji flatpickr(selector, options) można przekazać nieobowiązkowy obiekt parametrów. Przygotowaliśmy dla Ciebie obiekt, który jest niezbędny do wykonania zadania. Zorientuj się, za co odpowiada każda właściwość w dokumentacji «Options» i użyj jej w swoim kodzie.

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};


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

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}