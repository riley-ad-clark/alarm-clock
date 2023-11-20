import {
    onEvent, 
    getElement, 
    select, 
    selectAll, 
    print
} from './utility.js';

const timeDisplay = select('.time-display');
const alarmSound = new Audio('./assets/audio/alarm.wav');

function updateTime() {
    const currentTime = new Date().toLocaleTimeString().substring(0, 4);
    timeDisplay.innerText = currentTime;
    playAlarm();
}

setInterval(updateTime, 1000);

setInterval(function () {
    updateTime();
}, 100);

setInterval(function () {
    isValid();
}, 100);

setInterval(function () {
    updateTime();
}, 100);

setInterval(function () {
    updateTime();
}, 100);

function isValid() {
    const hoursInput = select('.hours');
    const minutesInput = select('.minutes');

    const hours = parseInt(hoursInput.value, 10);
    const minutes = parseInt(minutesInput.value, 10);

    let isValidFlag = false;

    if (hours >= 0 && hours < 25) {
        isValidFlag = true;
        hoursInput.classList.remove('input-error');
        hoursInput.classList.add('input-success');
    } else {
        isValidFlag = false;
        hoursInput.classList.remove('input-success');
        hoursInput.classList.add('input-error');
    }

    if (minutes >= 0 && minutes < 60) {
        isValidFlag = true;
        minutesInput.classList.remove('input-error');
        minutesInput.classList.add('input-success');
    } else {
        isValidFlag = false;
        minutesInput.classList.remove('input-success');
        minutesInput.classList.add('input-error');
    }

    return isValidFlag;
}

function playAlarm() {
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');

    const alarmTime = select('.alarm-time').innerText;
    const [alarmHours, alarmMinutes] = alarmTime.split(':');

    if (hours === alarmHours && minutes === alarmMinutes) {
        alarmSound.play();
        timeDisplay.style.color = 'var(--col-main-light-blue)'
    } else {
        timeDisplay.style.color = '#fff'
    }
}

const alarmSet = select('.set-alarm');
const alarmTime = select('.alarm-time');

alarmSet.addEventListener('click', () => {
    if (isValid() === true) {
        const hours = select('.hours').value.padStart(2, '0');
        const minutes = select('.minutes').value.padStart(2, '0');
        alarmTime.innerText = `${hours}:${minutes}`;
    }
});
