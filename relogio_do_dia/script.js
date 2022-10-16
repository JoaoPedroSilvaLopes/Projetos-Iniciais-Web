function carregar() {
  var mensagem = window.document.getElementById("msg");
  var imagem = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data
    .getHours()
    .toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
  var minutos = data
    .getMinutes()
    .toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
  var segundos = data
    .getSeconds()
    .toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });

  mensagem.innerHTML = `AGORA SÃO ${hora}:${minutos}:${segundos} HORAS`;

  if (hora >= 0 && hora < 12) {
    imagem.src = "./pictures/fotomanha.png";
    document.body.style.background = "#80CEE1";
    mensagem.style.color = "#80CEE1";
  } else if (hora < 18) {
    imagem.src = "./pictures/fototarde.png";
    document.body.style.background = "#F67828";
    mensagem.style.color = "#F67828";
  } else {
    imagem.src = "./pictures/fotonoite.png";
    document.body.style.background = "#1A315F";
    mensagem.style.color = "#1A315F";
  }
}

setInterval(carregar, 1000);
