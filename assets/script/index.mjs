
import {
    onEvent, 
    getElement, 
    select, 
    selectAll, 
    print
} from './utility.js'

const timeDisplay = select('.time-display')

function updateTime() {
    const currentTime = new Date().toLocaleTimeString().substring(0, 4);
    timeDisplay.innerText = currentTime;
}

setInterval(updateTime, 1000);