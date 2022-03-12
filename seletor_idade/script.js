function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var ano_usuario = document.getElementById('textoano')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (ano_usuario.value.length == 0 || ano_usuario.value > ano) {
        window.alert("ERRO, VERIFIQUE OS DADOS E TENTE NOVAMENTE")
    }
    else {
        var sexo_usuario = document.getElementsByName('radsex')
        var idade = ano - Number(ano_usuario.value)

        if (sexo_usuario[0].checked) {
            verificarIdade('Masculino', '#128FC8', idade, img)
        }
        else {
            verificarIdade('Feminino', '#FF8FAB', idade, img)
        }
    }
}

function verificarIdade(sexo, corFundo, idade, imagem) {

    if (idade >= 0 && idade < 10) {
        sexo == 'Masculino' ? retornarIdade(sexo, corFundo, idade) : retornarIdade(sexo, corFundo, idade)
    }
    else if (idade < 21) {
        sexo == 'Masculino' ? retornarIdade(sexo, corFundo, idade) : retornarIdade(sexo, corFundo, idade)
    }
    else if (idade < 50) {
        sexo == 'Masculino' ? retornarIdade(sexo, corFundo, idade) : retornarIdade(sexo, corFundo, idade)
    }
    else if (idade < 150) {
        sexo == 'Masculino' ? retornarIdade(sexo, corFundo, idade) : retornarIdade(sexo, corFundo, idade)
    }
    else {
        sexo == 'Masculino' ? retornarIdade(sexo, corFundo, idade) : retornarIdade(sexo, corFundo, idade)
    }
}

function retornarIdade(sexo, corFundo, idade) {
    document.body.style.background = corFundo
    resultado.style.color = corFundo
    resultado.style.textAlign = 'center'
    resultado.innerHTML = `Sua idade é: ${idade} e é uma pessoa do sexo ${sexo}`
}