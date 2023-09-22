const header = document.querySelector('header');
let counteris = 0;
const kount = document.getElementById('counteris')
const title = header.innerHTML
const logo = document.querySelector('#logo')
const menuButton = document.getElementById("menuButton");
const contentButton = document.getElementById("contentButton");
const menu = document.querySelector(".menu");
const divai = document.querySelectorAll('.sachmatai > div')
const sachmatai = document.querySelector('.sachmatai')

header.addEventListener('click', function(){
    console.log('You clicked the Header!');
    counteris++;
    kount.innerHTML = 'Paspaudimai: ' + counteris;
})

menuButton.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

contentButton.addEventListener("click", () => {
    sachmatai.classList.toggle("hidden");
});

divai.forEach(function (divas) {
    // Add a mouseover event listener
    divas.addEventListener('mouseover', () => {
        console.log('Mouse entered the div.');
        logo.style.transform = 'scaleX(-1)';
        // You can add your custom code here for hover in
    });

    // Add a mouseout event listener
    divas.addEventListener('mouseout', () => {
        console.log('Mouse left the div.');
        logo.style.transform = 'scaleX(1)';
        // You can add your custom code here for hover out
    });
});

// JavaScript to update the resolution display
const resolutionDisplay = document.getElementById('resolution-display');

function updateResolution() {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    resolutionDisplay.textContent = `Resolution: ${screenWidth}x${screenHeight}`;
}

// Initial update
updateResolution();

// Update when the window is resized
window.addEventListener('resize', updateResolution);



