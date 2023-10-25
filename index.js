const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');
const yearEL = document.querySelector('.year');

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const monthsOfYear = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];



toggle.addEventListener('click', (e) => {
  const html = document.querySelector('html');
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    e.target.innerHTML = 'Dark Mode';
  } else {
    html.classList.add('dark');
    e.target.innerHTML = 'Light Mode';
  }
});


function setTime() {
  const currentDate = new Date();

  // Accessing various date and time properties
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0 for January, 1 for February, and so on.
  const day = currentDate.getDay(); // 0 for Sunday, 1 for Monday, and so on.
  const hours = currentDate.getHours();
  const date = currentDate.getDate();
  const hoursForClock = hours % 12
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  // const ampm = hours >= 12 ? 'PM' : 'AM'
  //const milliseconds = currentDate.getMilliseconds();
  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`; 
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`; 

  timeEl.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`
  dateEl.innerHTML = `${daysOfWeek[day]}, ${monthsOfYear[month]} <span class="class">${date}</span>`
  yearEL.innerHTML = `${year}`
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}


setTime()

setInterval(setTime, 1000);