// script.js
document.getElementById('convertButton').addEventListener('click', function () {
  const binaryInput = document.getElementById('binaryInput').value;
  const resultElement = document.querySelector('#result span');

  // Validar si el input es un número binario
  if (/^[01]+$/.test(binaryInput)) {
    // Convertir binario a decimal
    const decimal = parseInt(binaryInput, 2);
    resultElement.textContent = decimal;
  } else {
    // Mostrar error si el input no es válido
    resultElement.textContent = 'Error: Introduce un número binario válido';
  }
});
