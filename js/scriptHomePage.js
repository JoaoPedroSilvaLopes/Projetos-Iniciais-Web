var tecla

function escolher(ID) {

    limpar()

    var imagem = document.createElement('img')
    imagem.style.width = '25%';
    imagem.style.height = 'auto';

    if (ID == 1) {
        imagens.style.background = '#A9E884'
        imagem.setAttribute('src', `../pictures/pokemonSprites/${gerarPokemon(1)}.png`)
    }
    else if (ID == 2) {
        imagens.style.background = '#f09537'
        imagem.setAttribute('src', `../pictures/pokemonSprites/${gerarPokemon(4)}.png`)
    }
    else if (ID == 3) {
        imagens.style.background = '#4DB1E3'
        imagem.setAttribute('src', `../pictures/pokemonSprites/${gerarPokemon(7)}.png`)
    }
    else {
        imagem.setAttribute('src', `../pictures/pokemonSprites/${gerarPokemon(25)}.png`)
    }

    imagens.appendChild(imagem)
    caixadialogo.innerHTML = "Deseja escolher esse pokémon? (Y/N)"
    document.addEventListener("keydown", pressionarTecla)

    if (pressionarTecla == 'y') {
        window.alert('escolheu o pokemon')
    }

    else if (pressionarTecla == 'n') {
        window.alert('nao escolheu o pokemon')
    }
}

function limpar() {
    imagens.innerHTML = ""
}

function gerarPokemon(numeroPokemon) {

    var codigo = ('000' + numeroPokemon).slice(-3)
    var randomizador = Math.random() * 10
    randomizador > 5 ? codigo = codigo : codigo = String(codigo) + 'S'

    return codigo
}

function pressionarTecla(event) {

    var tecla = event.key

    if (tecla == 'y') {
        window.alert("escolhido")
        return 'y'
    }
    else if (tecla== 'n') {
        window.alert("nao escolhido")
        return 'n'
    }
} 