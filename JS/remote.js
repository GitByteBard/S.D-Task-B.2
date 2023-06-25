$.ajax({
  url: "https://example.com/data",
  method: "GET",
  dataType: "json",
  success: function (response) {
    // Обработка полученного ответа
  },
  error: function (xhr, status, error) {
    // Обработка ошибки
  },
});
