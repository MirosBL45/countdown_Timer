const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minsElement = document.getElementById('mins');
const secondsElement = document.getElementById('seconds');

const newYear = '1 Jan 2024';

function countdownToNY() {
    const dateOfNewYear = new Date(newYear);
    const currentDate = new Date();

    const allSeconds = (dateOfNewYear - currentDate) / 1000;

    const days = Math.floor(allSeconds / 60 / 60 / 24);
    const hours = Math.floor(allSeconds / 60 / 60) % 24;
    const mins = Math.floor(allSeconds / 60) % 60;
    const seconds = Math.floor(allSeconds) % 60;

    daysElement.innerHTML = formatTime(days);
    hoursElement.innerHTML = formatTime(hours);
    minsElement.innerHTML = formatTime(mins);
    secondsElement.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time
}

// initial call
countdownToNY();
setInterval(countdownToNY, 1000)