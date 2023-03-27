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
    "zebra",
    "allegory",
    "belligerent",
    "cacophony",
    "deprecate",
    "ephemeral",
    "facetious",
    "gregarious",
    "hierarchy",
    "imminent",
    "juxtapose",
    "kaleidoscope",
    "luminous",
    "magnanimous",
    "nefarious",
    "obsequious",
    "paradigm",
    "quintessential",
    "recalcitrant",
    "salubrious",
    "taciturn",
    "ubiquitous",
    "venerable",
    "winsome",
    "xylophone",
    "yielding",
    "zealot",
    "alternator",
    "brake",
    "carburetor",
    "drive shaft",
    "engine",
    "fuel pump",
    "gasket",
    "headlight",
    "ignition",
    "jumper cable",
    "knock sensor",
    "lubricant",
    "muffler",
    "nut",
    "oil filter",
    "piston",
    "radiator",
    "shock absorber",
    "timing belt",
    "universal joint",
    "valve",
    "wheel bearing",
    "xenon headlight",
    "yoke",
    "zip tie",
    "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Caribbean Netherlands",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Channel Islands",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands",
  "Colombia",
  "Comoros",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Curaçao",
  "Cyprus",
  "Czechia",
  "DR Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar (Burma)",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia (Macedonia)",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste (East Timor)",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City (Holy See)",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe"
  ];
  

const activeWordContainer = document.getElementById("word-container");
const newWordButton = document.getElementById("new-word-button");
wordBuild = new Array();
const usedLettersContainer = document.getElementById("used-letters");
usedLetters = new Array();
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
    usedLetters = new Array();
}

const replaceWord = () => {
    let activeWord = sessionStorage.getItem("active-word");
    const userInput = document.getElementById("guess").value.toUpperCase();
    if (activeWord.includes(userInput)) {
        for (let i = 0; i < activeWord.length; i++) {
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
        }
    }
    activeWordContainer.innerHTML = "";
    console.log(wordBuild);
    for (let i = 0; i < wordBuild.length; i++) {
        let letter = document.createElement("div");
        letter.classList.add("letter");
        letter.innerText = wordBuild[i];
        activeWordContainer.appendChild(letter);
    }
    document.getElementById("guess").value = "";
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


