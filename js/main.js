var op;

function calc() {
  let result;

  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);

  switch (op) {
    case "+":
      result = num1 + num2;
      document.getElementById("plus").style.color = "blue";
      break;
    case "-":
      result = num1 - num2;
      document.getElementById("minus").style.color = "brown";
      break;
    case "*":
      result = num1 * num2;
      document.getElementById("multi").style.color = "green";
      break;
    case "/":
      result = num1 / num2;
      document.getElementById("division").style.color = "red";
      break;
  }

  document.getElementById("result").innerHTML = result;
}
