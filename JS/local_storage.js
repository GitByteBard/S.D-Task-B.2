const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const saveButton = document.getElementById("saveButton");

firstNameInput.value = localStorage.getItem("firstName");
lastNameInput.value = localStorage.getItem("lastName");
emailInput.value = localStorage.getItem("email");

saveButton.addEventListener("click", function () {
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const email = emailInput.value;

  localStorage.setItem("firstName", firstName);
  localStorage.setItem("lastName", lastName);
  localStorage.setItem("email", email);

  alert("The data is saved!");
});
