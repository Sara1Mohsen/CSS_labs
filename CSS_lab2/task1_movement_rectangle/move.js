const buttonstart = document.getElementById('start');
const buttonstop = document.getElementById('stop');
const buttonpause = document.getElementById('pause');
const rectangle = document.getElementById('rectangle');

document.addEventListener('click', (event) => {
    if (event.target === buttonstart) {
        rectangle.style.animation = "clockwise 5s linear infinite"; 
    } else if (event.target === buttonstop) {
        rectangle.style.animation = "none"; 
    } else if (event.target === buttonpause) {
        rectangle.style.animationPlayState = "paused"; 
    }
});
