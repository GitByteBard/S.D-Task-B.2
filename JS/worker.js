self.onmessage = function (event) {
  var num1 = event.data.num1;
  var num2 = event.data.num2;
  var operator = event.data.operator;
  var result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = "Invalid operator";
  }

  self.postMessage(result);
};
