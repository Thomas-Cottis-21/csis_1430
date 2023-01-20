/* navbar */
const navBar = document.getElementById("navbar");
const navBarElements = document.getElementsByClassName("navbar-element");

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
    console.log(navBar.scrollHeight + 15);
}

document.addEventListener("scroll", navBarScroll);