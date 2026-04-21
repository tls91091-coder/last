document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let error = document.getElementById("error");

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

    if (name === "" || email === "") {
      error.textContent = "Please fill out all fields";
      error.style.color = "red";
      return;
    }

    if (!emailPattern.test(email)) {
      error.textContent = "Please enter a valid email";
      error.style.color = "red";
      return;
    }

    error.textContent = "Form submitted!";
    error.style.color = "lightgreen";

    document.getElementById("form").reset();
  });

});
