const message = document.getElementById("message");
const counter = document.getElementById("counter");

const MAX_LENGTH = 200;

message.addEventListener("input", ()=> {
    const length = message.value.length;
    counter.textContent = `${length}/${MAX_LENGTH}`;

    if (length > MAX_LENGTH){
        counter.classList.add('over-limit');
    } else{
        counter.classList.remove('over-limit');
    }
});