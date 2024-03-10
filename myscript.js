const timer = document.querySelector(".timer");
const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
const stop = document.querySelector(".stop");
const getTime = document.querySelector(".gettime");
const clearTime = document.querySelector(".cleartime");
const container = document.querySelector(".container");

let count = 0;
let intervalId;

// count function 
const countFunc = () =>{
    count++;
    timer.innerText = count < 10 ? `0${count}`: count;
} 

// start func 
const repeat = () =>{
    intervalId = setInterval(() => { 
        countFunc();
    }, 999);
}

// reset func 
const resetTimer = () =>{
    clearInterval(intervalId);
    count=0;
    timer.innerText = `00`;   
}

// pause function 
const stopTimer = () =>{
    clearInterval(intervalId);
}

// get time function 
const gettimeData= () =>{
    let addItem = document.createElement("p");
    addItem.classList.add("paratags");
    addItem.innerText = `The Time Is ${timer.innerText}`;
    container.append(addItem);
}

// cleartime function 
const removeItem = () => {
    const ex = document.querySelector(".paratags");
    ex.remove();
};

// eventListeners 

start.addEventListener("click", repeat);
reset.addEventListener("click", resetTimer);
stop.addEventListener("click", stopTimer);
getTime.addEventListener("click", gettimeData);
clearTime.addEventListener("click", removeItem);