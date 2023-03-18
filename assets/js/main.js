/* navbar */
const navBar = document.getElementById("navbar");
const navBarElements = document.getElementsByClassName("navbar-element");

const navBarFrame = document.getElementById("nav-bar-frame");
const navBarMobileIcon = document.getElementById("nav-bar-mobile-icon");

const navBarDim = navBar.clientHeight;

/* RGBA variable */
let R = "93";
let G = "109";
let B = "126";
let A = ".5";

const navBarScroll = () => {
    if (Math.floor(window.scrollY) < window.innerHeight) {
        navBar.style.backgroundColor = 'rgb(' + R + ',' + G + ',' + B + ',' + A + ')';
        for (i = 0; i < navBarElements.length; i++) {
            navBarElements[i].style.padding = "10px";
        }
    } else {
        navBar.style.backgroundColor = '#5D6D7E';
        for (i = 0; i < navBarElements.length; i++) {
            navBarElements[i].style.padding = "15px 10px 15px 10px";
        }
    }
    /* console.log(Math.floor(window.scrollY) + "/" + window.innerHeight); */
    /* console.log(navBar.scrollHeight + 15); */
}

document.addEventListener("scroll", navBarScroll);

/* mobile nav menu */

/* Plan on using session storage in order to run the mobile nav bar event handlers. Rewriting this logic would be necessary, but it would be less complicated */

window.addEventListener("resize", (event) => {
    const width = window.innerWidth;
    console.log(width);
    navBarMobile(width);
})
window.addEventListener("load", (event) => {
    const width = window.innerWidth;
    console.log(width);
    navBarMobile(width);
})


const navBarMobile = (element) => {
    if (Math.floor(element) <= 700) {
        navBarMobileIcon.style.display = "inline";
        navBarMobileIcon.style.width = navBarDim + "px";
        navBarMobileIcon.style.height = navBarDim + "px";
        for (let i = 0; i < navBarElements.length; i++) {
            navBarElements[i].style.display = "none";
        }
    } else if (Math.floor(element) > 700) {
        navBarMobileIcon.style.display = "none";
        for (let i = 0; i < navBarElements.length; i++) {
            navBarElements[i].style.display = "initial";
        }
    }
}