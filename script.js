document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let error = document.getElementById("error");

  if (name === "" || email === "") {
    error.textContent = "Please fill out all fields";
    return;
  }

  error.textContent = "Form submitted!";
});
