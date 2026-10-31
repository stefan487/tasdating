// Menu open close
let menuIcon = document.querySelector(".menu-icon");
let navLinks = document.querySelector(".nav-links");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("move");
  navLinks.classList.toggle("open-menu");
};

// Language
let languageIcon = document.querySelector(".language-icon");
let languageBox = document.querySelector(".language-box");

languageIcon.onclick = () => {
  languageBox.classList.toggle("open-language");
};

// Ityped implementacija sa i18next bibliotekom
function initITyped() {
    const itypedElement = document.querySelector(".ityped");

    // Učitaj prevode za iTyped
    const texts = i18next.t("ityped.texts", { returnObjects: true });

    // Pokreni iTyped sa prevodima
    window.ityped.init(itypedElement, {
        strings: texts,
        loop: true,
    });
}

// Azuriranje toast poruke bez i18next prevoda
const toastContainer = document.querySelector(".toast-container");
const closeBtn = document.querySelector(".toast-container .close");
const toastLink = document.querySelector(".toast-container a");

if (!localStorage.getItem("displayToast")) {
    // Prikazi toast nakon 1 sekunde
    setTimeout(() => {
        toastContainer.classList.add("active");
        toastContainer.querySelector(".toast-message").textContent = "If you want to find the ideal partner of your criteria!? ðŸ¥°";
    }, 1000);
}

const stopDisplayingToast = () => {
    localStorage.setItem("displayToast", "true");
    toastContainer.classList.add("exit");

    setTimeout(() => {
        toastContainer.classList.remove("active", "exit");
    }, 500);  // 500 ms je vreme animacije izlaska
};
closeBtn.addEventListener("click", stopDisplayingToast);
toastLink.addEventListener("click", stopDisplayingToast);
