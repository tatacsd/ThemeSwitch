const body = document.querySelector('body');
let theme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';
// Switcher
const switcher = document.getElementById('app');
switcher.className = "switcher";

// Label
const label = document.createElement('div');
label.className = "label";


// Moon
const moon = document.createElement('img');
moon.src = './public/images/moon.svg';
moon.className = "moon";
moon.addEventListener('click', () => {
    setThemeMode('dark');
}
);


// sun
const sun = document.createElement('img');
sun.src = './public/images/sun.svg';
sun.className = "sun";
sun.addEventListener('click', () => {  setThemeMode('light'); });


// circle
const circle = document.createElement('div');
circle.className = "circle";

// append 
switcher.appendChild(label);
label.appendChild(moon);
label.appendChild(sun);
switcher.appendChild(circle);


// Methods

const setThemeMode = (theme) => {
    if (theme === 'light') {
        circle.style.left = '7.25rem';
        body.style.backgroundColor = '#F1F1F1';
        localStorage.setItem('theme', 'light');
        console.log(localStorage.getItem('theme'));
    } else {
        circle.style.left = '0.25rem';
        body.style.backgroundColor = '#292C35';
        localStorage.setItem('theme', 'dark');
        console.log(localStorage.getItem('theme'));
    }
}



if (theme == 'light' || theme == null) {
    setThemeMode('light');
} else {
    setThemeMode('dark');
}
