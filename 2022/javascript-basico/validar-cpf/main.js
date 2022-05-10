window.onload = () => console.log("Carregou!");

function CPFValidate(cpf) {
  if (cpf.length !== 11) {
    return false;
  } else {
    let numbers = cpf.substring(0, 9);
    let digits = cpf.substring(9);

    let sum = 0;

    for (let i = 10; i > 1; i--) {
      sum += numbers.charAt(10 - i) * i;
    }

    let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

    if (result != digits.charAt(0)) {
      return false;
    }

    sum = 0;

    numbers = cpf.substring(0, 10);

    for (let k = 11; k > 1; k--) {
      sum += numbers.charAt(11 - k) * k;
    }

    result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

    if (result != digits.charAt(1)) {
      return false;
    }

    return true;
  }
}

function validate() {
  document.getElementById("success").style.display = "none";
  document.getElementById("error").style.display = "none";

  const cpf = document.getElementById("cpf").value;
  const result = CPFValidate(cpf);

  if (result) {
    document.getElementById("success").style.display = "block";
  } else {
    document.getElementById("error").style.display = "block";
  }
}
