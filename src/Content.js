import React from 'react';

const Content = () => {
    function handleNameChange() {
        const names = ['Earn', 'Grow', 'Give'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }
    function handleClick(namess) {
        alert("Button Clicked Thanks for " + namess);
    }
    function timer() {
        const time = new Date();
        const data = document.querySelector('.timer');
       let hour = time.getHours();
       let minute = time.getMinutes();
       let second = time.getSeconds();
       let varl = hour >= 12 ? "PM" : "AM";
       hour = hour % 12;
 
       minute = minute < 10 ? 0 + minute : minute;
       
       
       
       
        data.innerHTML = `${hour} : ${minute} : ${second} ${varl}`;
    }

setInterval(timer, 1000)
    return (
        <main>
            <p> Lets {handleNameChange()} Money</p>
            <button onDoubleClick={() => handleClick('mahan')}>mahan</button>
            <div className='date'><p className='timer'></p></div>
        </main>


    )
}

export default Content