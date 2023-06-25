// Получение элементов формы
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const saveButton = document.getElementById("saveButton");

// Загрузка данных из локального хранилища, если они уже сохранены
firstNameInput.value = localStorage.getItem("firstName");
lastNameInput.value = localStorage.getItem("lastName");
emailInput.value = localStorage.getItem("email");

// Обработчик клика по кнопке "Сохранить"
saveButton.addEventListener("click", function () {
  // Получение значений из полей ввода
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const email = emailInput.value;

  // Сохранение данных в локальное хранилище
  localStorage.setItem("firstName", firstName);
  localStorage.setItem("lastName", lastName);
  localStorage.setItem("email", email);

  alert("Данные сохранены!");
});
