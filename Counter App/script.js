const count = document.getElementById("count");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const decrease = document.getElementById("decrease");

let val = count.textContent;

increase.addEventListener("click", () => {
    val++;
    count.textContent = val;
    return;
} )
decrease.addEventListener("click", () => {
    val--;
    count.textContent = val;
    return;
});
reset.addEventListener("click", ()=>{
    val = 0;
    count.textContent = val;
});
