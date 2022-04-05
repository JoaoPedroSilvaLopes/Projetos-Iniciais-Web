import GerarPokemon from "./gerarPokemon.js"

let tecla

function escolher(ID) {

    limpar()

    let imagem = document.createElement('img')
    imagem.style.width = '25%';
    imagem.style.height = 'auto';

    if (ID == 1) {
        imagens.style.background = '#A9E884'
        imagem.setAttribute('src', `pictures/${gerarPokemon(1)}.png`)
    }
    else if (ID == 2) {
        imagens.style.background = '#f09537'
        imagem.setAttribute('src', `pictures/${gerarPokemon(4)}.png`)
    }
    else if (ID == 3) {
        imagens.style.background = '#4DB1E3'
        imagem.setAttribute('src', `pictures/${gerarPokemon(7)}.png`)
    }
    else {
        imagem.setAttribute('src', `pictures/${gerarPokemon(25)}.png`)
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

    let codigo = ('000' + numeroPokemon).slice(-3)
    let randomizador = Math.random() * 10
    randomizador > 5 ? codigo = codigo : codigo = String(codigo) + 'S'
    console.log(randomizador)

    return codigo
}

function pressionarTecla(event) {

    let tecla = event.key

    if (tecla == 'y') {
        window.alert("escolhido")
        return 'y'
    }
    else if (tecla== 'n') {
        window.alert("nao escolhido")
        return 'n'
    }
}

export default function gerarPagina() {
    let teste94 = new GerarPokemon('151', 'Quengar', 50, 0)
	paragrafoteste.innerHTML = `${teste94.dadosPokemon.descricao}`

    let imagem = document.createElement('img')
    imagem.style.width = '90%';
    imagem.style.height = 'auto';

    imagem.setAttribute('src', `${teste94.sprite}`)
    conteudo.appendChild(imagem)
}