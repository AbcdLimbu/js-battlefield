
window.addEventListener("scroll", ()=> {
    const scrollTop = window.scrollY; // this keep changing as it scrolls
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop/docHeight)*100;

    document.getElementById("progress-bar").style.width = `${scrollPercent}%`;
})

/*
const scrollTop = window.scrollY;
- window.scrollY gives you the number of pixels the page has been scrolled vertically.
- So if you're at the very top of the page → scrollY = 0
- Scroll down 100px → scrollY = 100
- This tracks your scroll position


document.documentElement.scrollHeight → the full height of your document (including off-screen part)

window.innerHeight → the visible height of your screen (viewport)

So the subtraction gives you:
Total amount you can scroll (the range)

Example:
Full page = 2000px tall
Your screen = 800px tall (we don't need to scroll this cuz this is the view when user open the page thats y subtract it from the full scroll portion)

So scrollHeight - innerHeight = 1200px = scrollable space
*/