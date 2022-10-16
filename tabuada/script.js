function gerar_tabuada() {
  var valor = document.getElementById("numero");
  var numero = Number(valor.value);
  var seletor = document.getElementById("lista");

  if (valor.value.length == 0) {
    window.alert("Valor inválido, insira um número na caixa de entrada");
  } else {
    seletor.innerHTML = "";

    for (var contador = 1; contador <= 10; contador++) {
      var multiplicacao = contador * numero;
      var tabuada = document.createElement("option");
      tabuada.innerHTML = `${contador} x ${numero} = ${multiplicacao}`;
      seletor.appendChild(tabuada);
    }

    resultado.innerHTML = "RESULTADO";
    resultado.appendChild(seletor);
  }
}
