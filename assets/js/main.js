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
        for (let i = 0; i < navBarElements.length; i++) {
            navBarElements[i].style.display = "none";
        }
        navBarMobileIcon.style.display = "inline";
        navBarMobileIcon.style.width = navBarDim + "px";
        navBarMobileIcon.style.height = navBarDim + "px";
    } else if (Math.floor(element) > 700) {
        navBarMobileIcon.style.display = "none";
        for (let i = 0; i < navBarElements.length; i++) {
            navBarElements[i].style.display = "initial";
        }
    }
}

window.onclick = function(event) {
    if (!event.target.matches("#nav-bar-mobile-icon")) {
        console.log("click outside dropdown");
        document.getElementById("nav-bar-mobile-dropdown").style.display = "none";
    } else {
        document.getElementById("nav-bar-mobile-dropdown").style.display = "flex";
    }
}

//Hangman Game

const words = [
    "Peru",
    "Work",
    "Computer",
    "Glasses",
    "File",
    "Trial",
    "Mountian",
    "Beauty",
    "Light",
    "Felicidad"
];

const wordContainer = document.getElementById("word-container");
const newWordButton = document.getElementById("new-word");
const errorContainer = document.getElementById("error-container");


const wordSelected = document.getElementsByClassName("letter");

const wordSelector = () => {
    const index = Math.floor(Math.random() * words.length);

    if (wordSelected.length == 0) {
        for (let i = 0; i < words[index].length; i++) {
            const letter = document.createElement("div");
            letter.classList.add("letter");
            letter.innerText = words[index][i];
            wordContainer.appendChild(letter);
        }
        sessionStorage.setItem("active-word", words[index]);
    } else {
        errorContainer.innerText = "Word already exists";
    }
    
}

const letterSelector = () => {
    const userInput = document.getElementById("guess").value;

    const activeWord = sessionStorage.getItem("active-word");
    
    if (activeWord.indexOf(userInput)) {
        console.log("Letter found!")
    } else {
        console.log("Letter not found!");
    }
    console.log(activeWord);
    console.log(userInput);
}

newWordButton.addEventListener("click", wordSelector);
document.addEventListener("keyup", letterSelector);

