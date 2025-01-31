// let count = 0;

// const result = document.createElement('h1');
// document.body.appendChild(result);

// setInterval(() => {
//     result.textContent = count++;
//     console.log(count);
// }, 1000);


let soat = document.querySelector("#hours")
let daqiqa = document.querySelector("#minutes")
let second = document.querySelector("#seconds")

// const oclock = new Date();

function time (){
    let now = new Date();

    soat.textContent = String(now.getHours()).padStart(2, "0");
    daqiqa.textContent = String(now.getMinutes()).padStart(2, "0");
    second.textContent = String(now.getSeconds()).padStart(2, "0");
}
setInterval(time, 1000);

// console.log(oclock.Hours());
// console.log(oclock.Minutes());
// console.log(oclock.Seconds());