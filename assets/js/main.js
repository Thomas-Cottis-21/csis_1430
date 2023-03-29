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
    'engine', 'brakes', 'transmission', 'suspension', 'exhaust', 'carburetor', 'alternator', 'starter', 'battery', 'radiator', 
  'fuelinjector', 'ignition', 'distributor', 'thermostat', 'waterpump', 'oilpump', 'crankshaft', 'camshaft', 'piston', 'connectingrod', 
  'valve', 'cylinderhead', 'cylinderblock', 'timingbelt', 'fanbelt', 'timingchain', 'fuelgauge', 'oilpressuregauge', 'temperaturegauge', 
  'speedometer', 'tachometer', 'odometer', 'horn', 'headlight', 'taillight', 'turnsignal', 'brakelight', 'backuplight', 
  'foglight', 'dome light', 'doorlock', 'windowregulator', 'windshield', 'windshieldwiper', 'windshieldwasher', 'rearviewmirror', 'seats', 
  'seatbelt', 'airbag', 'dashboard', 'steeringwheel', 'gearshift', 'parkingbrake', 'clutch', 'accelerator', 'brakepedal', 
  'cruisecontrol', 'glovecompartment', 'ashtray', 'cupholder', 'sunvisor', 'airconditioner', 'heater', 'defroster', 'radio', 
  'CDplayer', 'cassetteplayer', 'amplifier', 'speakers', 'antenna', 'subwoofer', 'tweeter', 'dashboardlights', 'cigarette lighter', 
  'ashtray', 'airfilter', 'oilfilter', 'fuelfilter', 'brakepads', 'brakeshoes', 'brakedrum', 'brakerotor', 'mastercylinder', 
  'caliper', 'wheelcylinder', 'shockabsorber', 'strut', 'balljoint', 'tie-rod', 'steeringrack', 'powersteeringpump', 'powersteeringfluid', 
  'wheel', 'tire', 'rim', 'lugnut', 'hubcap', 'spare tire', 'jack', 'lug wrench', 'center console',
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
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
    "Botswana",
    "Brazil",,
    "Brunei",
    "Bulgaria",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
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
    "Ecuador",
    "Egypt",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
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
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Samoa",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Somalia",
    "Spain",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
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
    let numGuesses = Math.floor(sessionStorage.getItem("active-word").length);
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


