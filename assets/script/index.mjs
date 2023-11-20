import {
    onEvent, 
    getElement, 
    select, 
    selectAll, 
    print
} from './utility.js';

const timeDisplay = select('.time-display');

function updateTime() {
    const currentTime = new Date().toLocaleTimeString().substring(0, 4);
    timeDisplay.innerText = currentTime;
}

setInterval(function () {
    isValid();
}, 100);

setInterval(function () {
    updateTime();
}, 100);

function isValid() {
    const hoursInput = select('.hours');
    const minutesInput = select('.minutes');

    const hours = hoursInput.value.padStart(2, '0');
    const minutes = minutesInput.value.padStart(2, '0');

    let isValidFlag = true;

    if (!(hours >= '00' && hours <= '24')) {
        isValidFlag = false;
        hoursInput.classList.remove('input-success');
        hoursInput.classList.add('input-error');
    } else {
        hoursInput.classList.remove('input-error');
        hoursInput.classList.add('input-success');
    }

    if (!(minutes >= '00' && minutes <= '59')) {
        isValidFlag = false;
        minutesInput.classList.remove('input-success');
        minutesInput.classList.add('input-error');
    } else {
        minutesInput.classList.remove('input-error');
        minutesInput.classList.add('input-success');
    }

    return isValidFlag;
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
