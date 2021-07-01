//convert Celsius to Fahrenheit
function convertCelsiusToFahrenheit(value) {
  if (typeof value !== 'number') {
    return 'Não é um valor válido';
  }

  let result = (value * 1.8) + 32;

  return `${result} °F`;
}

//convert Fahrenheit to Celsius
function convertFahrenheitToCelcius(value) {
  if (typeof value !== 'number') {
    return 'Não é um valor válido';
  }

  let result = (value - 32) / 1.8;
  return `${result.toFixed()} °C`;
}

console.log(convertCelsiusToFahrenheit(1)) //33.8
console.log(convertFahrenheitToCelcius(33.8))//1