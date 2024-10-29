// Fancy Intro Effect.. Home page

const texts = ["_front-end developer..", "_tech enthusiast.."];
let currentText = 0;
let currentChar = 0;
let isDeleting = false;

function type() {
  const dynamicText = document.getElementById("dynamic-text");
  const text = texts[currentText];

  if (isDeleting) {
    dynamicText.innerHTML = `<span class="highlight">${text.substring(0, currentChar--)}</span>`;
    if (currentChar < 0) {
      isDeleting = false;
      currentText = (currentText + 1) % texts.length;
      setTimeout(type, 500);
      return;
    }
  } else {
    dynamicText.innerHTML = `<span class="highlight">${text.substring(0, currentChar++)}</span>`;
    if (currentChar === text.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  }
  setTimeout(type, isDeleting ? 100 : 100);
}

document.addEventListener("DOMContentLoaded", type);

// End Fancy Intro Effect Home page..



// Function for about page..
const aboutText = "about_me";
let currentAboutChar = 0;

function typeAndHoldAbout() {
  const dynamicText = document.getElementById("dynamic-about-text");

  // Typ elke letter één voor één totdat het hele woord is weergegeven
  dynamicText.innerHTML = `<span class="about-highlight">${aboutText.substring(0, currentAboutChar++)}</span>`;

  if (currentAboutChar <= aboutText.length) {
    setTimeout(typeAndHoldAbout, 100); // Pauzeer voor elke letter
  }
}

// Start de typeAndHoldAbout functie alleen op de about-pagina
if (window.location.pathname.includes("about.html")) {
  document.addEventListener("DOMContentLoaded", typeAndHoldAbout);
}
// End Function for about page..



// Function for home page
const homeText = "_not yet";
let currentHomeChars = [0, 0, 0]; // Houd de huidige positie bij voor elk <h1> element

function typeAndHoldHome(index) {
  const dynamicText = document.getElementsByClassName("dynamic-home-text")[index];

  // Voeg de juiste highlight klasse toe op basis van de index
  const highlightClass = `home-highlight-${index + 1}`;

  // Typ elke letter één voor één totdat het hele woord is weergegeven
  dynamicText.innerHTML = `<span class="${highlightClass}">${homeText.substring(0, currentHomeChars[index]++)}</span>`;

  if (currentHomeChars[index] <= homeText.length) {
    setTimeout(() => typeAndHoldHome(index), 100); // Pauzeer voor elke letter
  } else {
    // Reset de variabele en start opnieuw na een pauze
    setTimeout(() => {
      currentHomeChars[index] = 0;
      typeAndHoldHome(index);
    }, 2000); // Pauzeer 1 seconde voordat het opnieuw begint
  }
}
// Start de typeAndHoldHome functie voor elk <h1> met de juiste class op de home-pagina
if (window.location.pathname.includes("index.html")) {
  document.addEventListener("DOMContentLoaded", () => {
    const dynamicTextElements = document.getElementsByClassName("dynamic-home-text");
    for (let i = 0; i < dynamicTextElements.length; i++) {
      typeAndHoldHome(i); // Start het effect voor elk element
    }
  });
}
// End Function for home page


// Function for portfolio page
const portfolioText = "_portfolio";
let currentPortfolioChar = 0;

function typeAndHoldPort() {
  const dynamicText = document.getElementById("dynamic-portfolio-text");

  // Typ elke letter één voor één totdat het hele woord is weergegeven
  dynamicText.innerHTML = `<span class="portfolio-highlight">${portfolioText.substring(0, currentPortfolioChar++)}</span>`;

  if (currentPortfolioChar <= portfolioText.length) {
    setTimeout(typeAndHoldPort, 100); // Pauzeer voor elke letter
  }
}

// Start de typeAndHoldPort functie alleen op de portfolio-pagina
if (window.location.pathname.includes("portfolio.html")) {
  document.addEventListener("DOMContentLoaded", typeAndHoldPort);
}
// End Function for portfolio page



// Function for contact page
const contactText = "_contact";
let currentContactChar = 0;

function typeAndHoldContact() {
  const dynamicText = document.getElementById("dynamic-contact-text");

  // Typ elke letter één voor één totdat het hele woord is weergegeven
  dynamicText.innerHTML = `<span class="contact-highlight">${contactText.substring(0, currentContactChar++)}</span>`;

  if (currentContactChar <= contactText.length) {
    setTimeout(typeAndHoldContact, 100); // Pauzeer voor elke letter
  }
}

// Start de typeAndHoldContact functie alleen op de contact-pagina
if (window.location.pathname.includes("contact.html")) {
  document.addEventListener("DOMContentLoaded", typeAndHoldContact);
}
// End Function for contact page


// Function for skills page
const skillsText = "_skills";
let currentSkillsChar = 0;

function typeAndHoldSkills() {
  const dynamicText = document.getElementById("dynamic-skills-text");

  // Typ elke letter één voor één totdat het hele woord is weergegeven
  dynamicText.innerHTML = `<span class="skills-highlight">${skillsText.substring(0, currentSkillsChar++)}</span>`;

  if (currentSkillsChar <= skillsText.length) {
    setTimeout(typeAndHoldSkills, 100); // Pauzeer voor elke letter
  }
}

// Start de typeAndHoldSkills functie alleen op de skills-pagina
if (window.location.pathname.includes("skills.html")) {
  document.addEventListener("DOMContentLoaded", typeAndHoldSkills);
}
// The END!!