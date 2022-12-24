// input id from html

let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");

// realtime show another temperature when user type

celsius.oninput = function() {

  // C -> F : [(C/5) * 9] + 32 ;
  // C -> K : C + 273 ;

  let tranF = parseFloat(((celsius.value / 5) * 9) + 32);
  fahrenheit.value = parseFloat(tranF.toFixed(2));

  let tranK = parseFloat(celsius.value) + 273.15;
  kelvin.value = parseFloat(tranK.toFixed(2));

}

fahrenheit.oninput = function() {

  // F -> C : [(F-32) / 9] * 5 ;
  // F -> K : [(((F-32) / 9) * 5) + 273.15] ;

  let tranC = parseFloat(((fahrenheit.value - 32) / 9) * 5);
  celsius.value = parseFloat(tranC.toFixed(2));

  let tranK = parseFloat(((((fahrenheit.value - 32) / 9) * 5) + 273.15));
  kelvin.value = parseFloat(tranK.toFixed(2));

}

kelvin.oninput = function() {

  // K -> C : K - 273.15 ;
  // K -> F : 1.8 * (K-273.15) + 32 ;

  let tranC = parseFloat(kelvin.value) - 273.15;
  celsius.value = parseFloat(tranC.toFixed(2));

  let tranF = parseFloat(1.8 * (kelvin.value - 273.15)) + 32;
  fahrenheit.value = parseFloat(tranF.toFixed(2));

}
