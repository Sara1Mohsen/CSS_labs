const mainbrach = document.getElementById('main-branch');
const branch = document.getElementById('branch');
const locationitem = document.querySelector('location-item');

document.addEventListener('click', (event) => {
    if (event.target === mainbrach) {
        locationitem.style.background = "red"; 
    } else if (event.target === branch) {
        locationitem.style.animation = "blue"; 
    }
});