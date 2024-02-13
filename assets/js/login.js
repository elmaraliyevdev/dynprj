document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("Email");
  const passwordInput = document.getElementById("Password");
  const rememberMeCheckbox = document.getElementById("Remember");
  const emailError = emailInput.nextElementSibling;
  const passwordError = passwordInput.nextElementSibling;

  // Function to update header based on login status
  function updateHeader() {
    const userEmailSpan = document.getElementById("userEmail");
    const logoutButton = document.getElementById("logoutButton");
    const loginLink = document.getElementById("loginLink");

    const rememberedUser = localStorage.getItem("rememberMe");
    const currentUser = sessionStorage.getItem("currentUser");
    const userEmail = rememberedUser || currentUser;

    if (userEmail) {
      userEmailSpan.textContent = userEmail; // Display the user's email
      userEmailSpan.style.display = "inline";
      logoutButton.style.display = "inline";
      loginLink.style.display = "none";
    } else {
      userEmailSpan.style.display = "none";
      logoutButton.style.display = "none";
      loginLink.style.display = "inline";
    }
  }

  // Call updateHeader on page load
  updateHeader();

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    // Simple input validation
    let validationPassed = true;
    if (!email) {
      emailError.style.display = "inline";
      validationPassed = false;
    } else {
      emailError.style.display = "none";
    }

    if (!password) {
      passwordError.style.display = "inline";
      validationPassed = false;
    } else {
      passwordError.style.display = "none";
    }

    if (!validationPassed) return;

    // Retrieve user data from localStorage
    const userDataString = localStorage.getItem(email);
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      if (userData.password === password) {
        alert("Login successful!");

        // Manage session persistence
        if (rememberMeCheckbox.checked) {
          localStorage.setItem("rememberMe", email);
        } else {
          sessionStorage.setItem("currentUser", email);
        }

        // Update header to reflect logged-in status
        updateHeader();

        // Optionally redirect to a different page or update UI
        // window.location.href = 'home.html'; // Example redirect
      } else {
        alert("Incorrect password.");
      }
    } else {
      alert("No user found with that email address.");
    }
  });

  // Logout Functionality
  const logoutButton = document.getElementById("logoutButton");
  if (logoutButton) {
    // Check if logoutButton exists to avoid null reference errors
    logoutButton.addEventListener("click", function () {
      localStorage.removeItem("rememberMe");
      sessionStorage.removeItem("currentUser");
      updateHeader(); // Update header to reflect logged-out status
      alert("You have been logged out.");
    });
  }

  // Auto-fill email if 'Remember me' was checked
  const rememberedEmail = localStorage.getItem("rememberMe");
  if (rememberedEmail) {
    emailInput.value = rememberedEmail;
    rememberMeCheckbox.checked = true;
  }
});
