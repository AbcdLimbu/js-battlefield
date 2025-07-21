const clock = document.getElementById("clock");


function updateClock(){
   const date = new Date;

   let hours = date.getHours();
   let minutes = date.getMinutes();
   let seconds = date.getSeconds();

   let ampm = (hours < 12)?'AM':'PM';
   hours = hours % 12;
   hours = (hours == 0)? 12: hours; // hours 0 means 12 o'clock

   // formating clock;
   const formattedTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)} ${ampm}`;

    clock.textContent = formattedTime;
}

function formatTime(time){
    return (time < 10)? '0' + time: time;
}

setInterval(updateClock, 1000)
