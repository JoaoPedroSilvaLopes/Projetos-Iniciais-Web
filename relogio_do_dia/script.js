
function carregar() {
    var mensagem = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()

    var hora = 8
    var hora = 15

    mensagem.innerHTML = `AGORA SÃO ${hora}:${minutos}:${segundos} HORAS`

    if (hora >= 0 && hora < 12) {
        imagem.src = 'fotomanha.png'
        document.body.style.background = '#80CEE1'
        mensagem.style.color = '#80CEE1'
    }
    else if (hora < 18) {
        imagem.src = 'fototarde.png'
        document.body.style.background = '#F67828'
        mensagem.style.color = '#F67828'
    }
    else {
        imagem.src = 'fotonoite.png'
        document.body.style.background = '#1A315F'
        mensagem.style.color = '#1A315F'
    }
}

