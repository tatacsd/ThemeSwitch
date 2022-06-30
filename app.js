const body = document.querySelector('body');
let theme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';


// Switcher
const switcher = document.getElementById('app');
switcher.style.width = '14rem';
switcher.style.height = '6.5rem';
switcher.style.position = 'absolute';
switcher.style.left = '50%';
switcher.style.top = '50%';
switcher.style.transform = 'translate(-50%, -50%)';

// Label
const label = document.createElement('div');
label.style.position = 'absolute';
label.style.width = '13rem';
label.style.height = '6rem';
label.style.top = '0.25rem';
label.style.left = '0.25rem';
label.style.backgroundColor = '#000000';
label.style.borderRadius = '3.6875rem';

switcher.appendChild(label);

// Moon
const moon = document.createElement('img');
moon.style.width = '6.5rem';
moon.style.height = '6rem';
moon.src = './public/images/moon.svg';


// sun
const sun = document.createElement('img');
sun.style.width = '6.5rem';
sun.style.height = '6rem';
sun.src = './public/images/sun.svg';

// circle
const circle = document.createElement('div');
circle.style.position = 'absolute';
circle.style.width = '5.5rem';
circle.style.height = '5.5rem';
circle.style.top = '0.5rem';
circle.style.borderRadius = '50%';
circle.style.backgroundColor = '#F1F1F1';

console.log("before -> " +localStorage.getItem('theme'));

if (theme === 'light' || theme === null) {
    circle.style.left = '7.5rem';
    body.style.backgroundColor = '#F1F1F1';
    console.log(localStorage.getItem('theme'));
} else {
    circle.style.left = '0.5rem';
    body.style.backgroundColor = '#292C35';
    console.log(localStorage.getItem('theme'));
}


// add the sun and moon to the label div
label.appendChild(moon);
label.appendChild(sun);
switcher.appendChild(circle);


sun.onclick = () => {
    circle.style.left = '7.5rem';
    body.style.backgroundColor = '#F1F1F1';
    localStorage.setItem('theme', 'light');
    console.log(localStorage.getItem('theme'));
}
moon.onclick = () => {
    circle.style.left = '0.5rem';
    body.style.backgroundColor = '#292C35';
    localStorage.setItem('theme', 'dark');
    console.log(localStorage.getItem('theme'));
}


