function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var ano_usuario = document.getElementById("textoano");

  if (ano_usuario.value <= 0 || ano_usuario.value > ano) {
    window.alert("ERRO, VERIFIQUE OS DADOS E TENTE NOVAMENTE");
  } else {
    var sexo_usuario = document.getElementsByName("radsex");
    var idade = ano - Number(ano_usuario.value);

    if (sexo_usuario[0].checked) {
      verificarIdade("masculino", "#128FC8", idade);
    } else {
      verificarIdade("feminino", "#FF8FAB", idade);
    }
  }
}

function verificarIdade(sexo, corFundo, idade) {
  if (idade >= 0 && idade < 10) {
    categoria = "criança";
    sexo == "masculino"
      ? retornarIdade(sexo, corFundo, idade, categoria, "pictures/menino.png")
      : retornarIdade(sexo, corFundo, idade, categoria, "pictures/menina.png");
  } else if (idade < 21) {
    categoria = "jovem";
    sexo == "masculino"
      ? retornarIdade(
          sexo,
          corFundo,
          idade,
          categoria,
          "pictures/homem_jovem.png"
        )
      : retornarIdade(
          sexo,
          corFundo,
          idade,
          categoria,
          "pictures/mulher_jovem.png"
        );
  } else if (idade < 50) {
    categoria = "adulta";
    sexo == "masculino"
      ? retornarIdade(
          sexo,
          corFundo,
          idade,
          categoria,
          "pictures/homem_adulto.png"
        )
      : retornarIdade(
          sexo,
          corFundo,
          idade,
          categoria,
          "pictures/mulher_adulta.png"
        );
  } else if (idade < 150) {
    categoria = "idosa";
    sexo == "masculino"
      ? retornarIdade(
          sexo,
          corFundo,
          idade,
          categoria,
          "pictures/homem_idoso.png"
        )
      : retornarIdade(
          sexo,
          corFundo,
          idade,
          categoria,
          "pictures/mulher_idosa.png"
        );
  } else {
    categoria == "já falecida";
    sexo == "masculino"
      ? retornarIdade(
          sexo,
          "#2A2A2A",
          idade,
          categoria,
          "pictures/fuleco_morto.png"
        )
      : retornarIdade(
          sexo,
          "#2A2A2A",
          idade,
          categoria,
          "pictures/fuleco_morto.png"
        );
  }
}

function retornarIdade(sexo, corFundo, idade, categoria, foto) {
  var imagem = document.createElement("img");
  imagem.setAttribute("src", foto);

  document.body.style.background = corFundo;
  resultado.style.color = corFundo;
  resultado.style.textAlign = "center";
  resultado.innerHTML = `Pessoa ${categoria} do sexo ${sexo} e tem ${idade} anos`;
  resultado.appendChild(imagem);
}
