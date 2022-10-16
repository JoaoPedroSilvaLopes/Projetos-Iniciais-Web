function contar() {
  var inicio = document.getElementById("inicio");
  var limite = document.getElementById("limite");
  var incremento = document.getElementById("incremento");

  var inicioC = Number(inicio.value);
  var limiteC = Number(limite.value);
  var incrementoC = Number(incremento.value);

  var texto = "";

  if (inicio.value.length == 0 || limite.value.length == 0) {
    return (texto_resultado.innerHTML = "Impossível contar");
  }

  if (incrementoC == 0 || incremento.value.length == 0) {
    window.alert(
      "Incremento recebeu valor 0 ou nulo, então o mesmo terá valor 1"
    );
    incremento.value = 1;
    incrementoC = 1;
  }

  if (inicioC > limiteC) {
    for (; inicioC >= limiteC; inicioC -= incrementoC) {
      texto = texto + `${inicioC}    `;
    }
    texto_resultado.innerHTML = texto;
  } else {
    for (; inicioC <= limiteC; inicioC += incrementoC) {
      texto = texto + `${inicioC}    `;
    }
    texto_resultado.innerHTML = texto;
  }
}
