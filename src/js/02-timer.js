import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import refs from "./refs/objectsrefs"
import { Notify } from 'notiflix/build/notiflix-notify-aio';

console.log(refs);

const {dateTimePicker, startBtn, daysInput, hoursInput, minutesInput, secInput} = refs;
console.log(daysInput);

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      if (selectedDates[0] < new Date()) {
          Notify.warning('Please choose a date in the future');
      }
      console.log(startBtn.disabled);

      if (selectedDates[0] >= new Date() && startBtn.disabled) {
          startBtn.disabled = false;
          selectedDate = selectedDates[0];
      }
  },
};

flatpickr(dateTimePicker, options);

startBtn.addEventListener('click', startTimer);

// let timerId;

function startTimer() {
    startBtn.disabled = true;
    timerId = setInterval(() => {
        const timeDiffer = selectedDate - new Date();
        if (timeDiffer <= 0) {
            clearInterval(timerId);
            Notify.success('You r cool pal');
            return;
        }
        viewTime(convertMs(timeDiffer));
    }, 1000);
};

// остановить таймер как дата дойдет до selectedate


function addLeadingZero(value) {
    return String(value).padStart(2, "0"); 
}

// 00: 00: 00: 00
//  xx:xx:xx:xx.

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
    
    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function viewTime({ days, hours, minutes, seconds }) {
    console.log(days, hours, minutes, seconds);
    daysInput.textContent = days;
    hoursInput.textContent = hours;
    minutesInput.textContent = minutes;
    secInput.textContent = seconds;
};

// Для отображения уведомлений пользователю вместо window.alert() используй библиотеку notiflix.
// Сделай оформление таймера

