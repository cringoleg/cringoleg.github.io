
const colorText = getComputedStyle(document.documentElement).getPropertyValue('--text-color');
const colorPink = getComputedStyle(document.documentElement).getPropertyValue('--pink-color');
const colorBlack = getComputedStyle(document.documentElement).getPropertyValue('--black-color');
const colorHackOrange = getComputedStyle(document.documentElement).getPropertyValue('--hack-color-o');
const colorHackBlue = getComputedStyle(document.documentElement).getPropertyValue('--hack-color-s');
const colorSky = getComputedStyle(document.documentElement).getPropertyValue('--sky-color');
const colorWhite = getComputedStyle(document.documentElement).getPropertyValue('--white-color');

var colors = [
    colorText,
    colorPink,
    colorBlack,
    colorHackOrange,
    colorHackBlue,
    colorSky,
    colorWhite,
];

// document.documentElement.style.setProperty('--my-variable-name', 'pink');


var random_color = colors[Math.floor(Math.random() * colors.length)];
// document.getElementById('title').style.color = random_color;


var about = document.querySelector('#about');
var contact = document.querySelector('#contact');
var aboutContent = document.querySelector('#about-content');
var contactContent = document.querySelector('#contact-content');

about.addEventListener('click', () => {
    const aboutBox = new WinBox({
        title: 'About Me',
        background: colorHackOrange,
        width: '400px',
        height: '400px',
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
        mount: aboutContent
    });
}
)


contact.addEventListener('click', () => {
    const contactBox = new WinBox({
        title: 'Contact Me',
        background: colorHackBlue,
        width: '400px',
        height: '400px',
        top: 150,
        right: 50,
        bottom: 50,
        left: 250,
        mount: contactContent
    });
}
)
