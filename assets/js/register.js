document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("registerForm");

  registerForm.addEventListener("submit", function (e) {
    console.log("registerForm submitted");
    e.preventDefault();

    // Extract form data
    const userData = {
      name: document.getElementById("name").value,
      surname: document.getElementById("surname").value,
      email: document.getElementById("email").value,
      phoneNumber:
        document.getElementById("phone-number").value +
        document.getElementById("phone-number-end").value,
      birthDate: document.getElementById("date").value,
      nationality: document.getElementById("nationality").value,
      idType: document.getElementById("id-type").value,
      idNumber: document.getElementById("id-number").value,
      idPin: document.getElementById("id-pin").value,
      city: document.getElementById("city").value,
      branch: document.getElementById("branch").value,
      address: document.getElementById("address").value,
      password: document.getElementById("password").value,
      confirmPassword: document.getElementById("confirmPassword").value,
    };

    // Simple validation
    if (userData.password !== userData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Check if user already exists
    if (localStorage.getItem(userData.email) !== null) {
      alert("User already registered with this email.");
      return;
    }

    // Store user data, excluding confirmPassword
    delete userData.confirmPassword;
    localStorage.setItem(userData.email, JSON.stringify(userData));

    alert("Registration successful!");

    // Redirect to login page or clear form
    // window.location.href = 'login.html'; // Redirect to login page
    registerForm.reset(); // Or simply clear the form
  });
});
