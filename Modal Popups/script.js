const openBtn = document.getElementById("open-modal");
const closeBtn = document.getElementById("close-modal");
const overlay = document.getElementById("modal-overlay");

openBtn.addEventListener('click', () => {
    overlay.classList.remove('hidden');
})

closeBtn.addEventListener('click', ()=> {
    overlay.classList.add('hidden');
})

overlay.addEventListener('click', (e) => {
    if (e.target === overlay){
        overlay.classList.add('hidden');
    }
})