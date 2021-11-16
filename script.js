/*console.log(1);
console.log(2);

setTimeout(() => {
    console.log("yoohoo!");
}, 5000);

console.log(3);
console.log(4);
*/
/*
let seconds_since_wh = 0;
setInterval(() => {
    seconds_since_wh++;
    console.log("tick", seconds_since_wh);
}, 1000);

console.log("ticker started");
*/



// const now = new Date(); // get current timestamp when this line was executed

// console.log(now);

/*
console.log(now.getYear());
console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getMonth());
console.log(now.getMonth()+1);
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
*/



// trying to make a clock
/* 
const hourEl = document.querySelector('#hour');
const minEl = document.querySelector('#minute');
const secEl = document.querySelector('#second');

// let tick = 0;
// setInterval(() => {
//     tick++;
//     hourEl.innerText() += tick;
// }, 1000);

const now = new Date();
let tick = 0;
setInterval( () => {
    tick++;
    if ( tick < 10) {
        secEl.innerText = "0" + tick;
    } else {
        secEl.innerText = tick;
    }
    let mintick = 0;
    mintick++;
    if (tick > 59) {
        tick = 0;
        minEl.innerText = "0" + mintick;
    } else if (tick >= 60) {

    }
}, 1000);
*/



// genomgång av klockan
const hourEl = document.querySelector('#hour');
const minEl = document.querySelector('#minute');
const secEl =document.querySelector('#second');

const zeropad = num => {
    return (num<10)
    ? "0" + num : num;
}

const getAndUpdateClock = () => {
    const now = new Date();

    const hour = now.getHours();
    if (hour < 10) {
        hour = "0" + hour;
    }

    hourEl.innerText = zeropad(now.getHours());
    minEl.innerText = zeropad(now.getMinutes());
    secEl.innerText = zeropad(now.getSeconds());
}


setInterval( () => {    // do something every second
    getAndUpdateClock();
}, 1000);

// set initial time, för att den inte ska vara tom första sekunden
getAndUpdateClock();






const now = new Date();
console.log(now.toLocaleTimeString());