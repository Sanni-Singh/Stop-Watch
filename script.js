const reset = document.querySelector('.Reset')
const container = document.querySelector('.container')
const pause = document.querySelector('.Pause')
const start = document.querySelector('.Start')
const hour = document.querySelector('.hours')
const minute = document.querySelector('.minutes')
const second = document.querySelector('.seconds')
const pNumber = document.querySelector('.pNumber')
const timer = document.querySelector('.timer')
const history = document.querySelector('#history')
const his = document.querySelector('.history')
const close = document.querySelector('.close')
const clear = document.querySelector('.clear1')
const text = document.querySelector('.text')
const line = document.querySelector('.line')
let flag = true;
let arr = [];
let interval;

function updateHistory(){
    timer.innerText = ""
    pNumber.innerText = ""
    if(arr.length > 0) {
        line.style.display="flex";
        text.style.display="none";
    }
    arr.forEach((ele,index) => {
        let p1 = document.createElement('p');
        p1.innerText = index + 1;
        p1.className = "p1";
        pNumber.appendChild(p1);

        let p2 = document.createElement('p');
        p2.innerText = ele
        timer.appendChild(p2);
    });
}
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
history.addEventListener('click',()=>{
    updateHistory();
    container.style.display = "none"
    his.style.display="block";
})
close.addEventListener('click',()=>{
    container.style.display = "flex"
    his.style.display="none";
    console.log("abcd");
    
})

clear.addEventListener('click',()=>{
    arr.splice(0,arr.length)
    console.log("hello");
    if(arr.length < 1){
        line.style.display="none";
        text.style.display="flex";
    }
    updateHistory()
})
