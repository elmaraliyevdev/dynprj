document.addEventListener("DOMContentLoaded", function () {
  const languageSelect = document.getElementById("languageSelect");

  function loadLanguage(language) {
    fetch(`/languages/${language}.json`)
      .then((response) => response.json())
      .then((data) => {
        document.querySelectorAll("[data-translate]").forEach((el) => {
          const key = el.getAttribute("data-translate");
          el.textContent = data[key];
        });
      });
    localStorage.setItem("preferredLanguage", language);
  }

  // Set the event listener for changing languages
  languageSelect.addEventListener("change", function () {
    loadLanguage(this.value);
  });

  // Load the saved or default language
  const preferredLanguage =
    localStorage.getItem("preferredLanguage") || navigator.language.slice(0, 2);
  languageSelect.value = preferredLanguage;
  loadLanguage(preferredLanguage);
});

// Use Case:

// <select id="languageSelect">
//     <option value="en">English</option>
//     <option value="fr">Français</option>
// </select>

// <h1 data-translate="welcome_message">Welcome to our website!</h1>
// <a href="contact.html" data-translate="contact">Contact Us</a>
