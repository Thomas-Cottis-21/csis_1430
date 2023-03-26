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
    "apple",
    "banana",
    "car",
    "dog",
    "elephant",
    "fan",
    "grape",
    "house",
    "internet",
    "jacket",
    "kite",
    "lemon",
    "money",
    "notebook",
    "orange",
    "phone",
    "queen",
    "rain",
    "shoes",
    "table",
    "umbrella",
    "vase",
    "water",
    "xylophone",
    "yarn",
    "zebra"
  ];
  

const activeWordContainer = document.getElementById("word-container");
const newWordButton = document.getElementById("new-word-button");
const wordBuild = new Array();
const usedLettersContainer = document.getElementById("used-letters");
const usedLetters = new Array();
const guessContainer = document.getElementById("num-guess");

sessionStorage.setItem("active-word", "");
sessionStorage.setItem("guess-count", "");

const getWord = () => {
    wordIndex = Math.floor(Math.random() * words.length);
    sessionStorage.setItem("active-word", words[wordIndex].toUpperCase());
    document.getElementById("guess").style.display = "initial";

    document.getElementById("guess").value = "";
    document.getElementById("guess").disabled = false;
}


const clearWord = () => {
    activeWordContainer.innerHTML = "";
    wordBuild.splice(0, wordBuild.length);
    usedLettersContainer.innerHTML = "";
    document.getElementById("lose-container").innerText = "";
    document.getElementById("win-container").innerText = "";
}

const replaceWord = () => {
    let activeWord = sessionStorage.getItem("active-word");
    const userInput = document.getElementById("guess").value.toUpperCase();
    if (activeWord.includes(userInput)) {
        for (i = 0; i < activeWord.length; i++) {
            if (userInput == activeWord[i]) {
                wordBuild.splice(i, 1, activeWord[i]);
            } else {
                continue;
            }
        }
    } else {
        if (!usedLetters.includes(userInput)) {
            usedLetters.push(userInput);
            let usedLetter = document.createElement("div");
            usedLetter.classList.add('letter');
            usedLetter.innerText = userInput
            usedLettersContainer.appendChild(usedLetter);

            guessHandler();
        } else {
            return;
        }
    }
    activeWordContainer.innerHTML = "";
    console.log(wordBuild);
    for (i = 0; i < wordBuild.length; i++) {
        let letter = document.createElement("div");
        letter.classList.add("letter");
        letter.innerText = wordBuild[i];
        activeWordContainer.appendChild(letter);
    }
}

const viewWord = () => {
    let activeWord = sessionStorage.getItem("active-word");

    for (i = 0; i < activeWord.length; i++) {
            let letter = document.createElement("div");
            letter.classList.add("letter");
            letter.innerText = "-";
            activeWordContainer.appendChild(letter);

            wordBuild.push('-');
    }
}

const guessInitiate = () => {
    let numGuesses = Math.floor(sessionStorage.getItem("active-word").length * 2);
    sessionStorage.setItem("guess-count", numGuesses);
    guessContainer.innerText = numGuesses;
}

const guessHandler = () => {
    sessionStorage.setItem("guess-count", sessionStorage.getItem("guess-count")-1);
    guessCount = sessionStorage.getItem('guess-count');

    guessContainer.innerText = sessionStorage.getItem("guess-count");

    if (guessCount == 0) {
        document.getElementById("lose-container").innerText = "You Lost! The word was " + sessionStorage.getItem("active-word");
        document.getElementById("guess").disabled = true;
        document.getElementById("guess").value = "";
    }
}

const winner = () => {
    if (!wordBuild.some(item => item.includes("-"))) {
        document.getElementById("win-container").innerText = "You Won!";
        document.getElementById("guess").disabled = true;
        document.getElementById("guess").value = "";
    } else {
        return;
    }
}


newWordButton.addEventListener("click", function() {
    clearWord();
    getWord();
    guessInitiate();
    viewWord();
});

document.addEventListener("input", function() {
    replaceWord();
    winner();
});


