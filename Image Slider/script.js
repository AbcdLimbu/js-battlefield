const images = [];
let i;

for(i=1; i<10; i++){
    images.push(`${i}.jpg`);
}

const imageElement = document.getElementById("slider-image")

let currentIndex = 0;

document.getElementById("prev").addEventListener("click", ()=>{
    currentIndex = (currentIndex - 1 + images.length)%images.length;
    updateImage();
})

document.getElementById("next").addEventListener("click", ()=> {
    currentIndex = (currentIndex + 1)%images.length;
    updateImage();
})

function updateImage(){
    imageElement.src = `./Images/${currentIndex}.jpg`
}