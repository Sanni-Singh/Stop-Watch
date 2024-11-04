const reset = document.querySelector('.Reset')
const pause = document.querySelector('.Pause')
const start = document.querySelector('.Start')
const hour = document.querySelector('.hours')
const minute = document.querySelector('.minutes')
const second = document.querySelector('.seconds')
let flag = true;
let arr = [];
let interval;
function activateNumber(){
     if(flag){
        interval = setInterval(()=>{
            second.innerText = Number(second.innerText) + 1;
            
            if(Number(second.innerText) === 60) {
                minute.innerText = Number(minute.innerText) + 1;
                second.innerText = 0
            }
            if(Number(minute.innerText) === 60) {
                hour.innerText = Number(hour.innerText) + 1;
                second.innerText = 0
                minute.innerText = 0
            }
        },1000)
        flag=false
    }
}

function stopInterval() {
    clearInterval(interval)
    flag=true
}
function resetTheInterval(){
    clearInterval(interval);
    arr.push(`${hour.innerText}-${minute.innerText}-${second.innerText}`)
    hour.innerText = "00";
    minute.innerText = "00";
    second.innerText = "00";
    flag = true;
    
    console.log(arr);
}
start.addEventListener('click',activateNumber)
reset.addEventListener('click',()=>{
    flag = false;
    resetTheInterval();
})
pause.addEventListener('click',stopInterval);


