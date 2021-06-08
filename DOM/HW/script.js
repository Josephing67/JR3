function temperatureConverter(valNum) {
if (document.getElementById("fahrenheit").checked) {
  valNum = parseFloat(valNum);
  document.getElementById("outputCelcius").innerText = (valNum - 32) / 1.8;
} else if (document.getElementById("celsius").checked) {
  valNum = parseFloat(valNum);
  document.getElementById("outputCelcius").innerText = valNum * 1.8 + 32;
}
}

