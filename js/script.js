import pokedex from './dadosPokemon.js'

pokedex.shift()

export default function main() {
    let pokemons = pokedex
    const paginaPokedex = document.getElementById("main")

    const handleLeftClick = (e) => {
        e.preventDefault()
        paginaPokedex.current.scrollLeft -= paginaPokedex.current.offsetWidth
    }

    const handleRightClick = (e) => {
        e.preventDefault()
        paginaPokedex.current.scrollLeft += paginaPokedex.current.offsetWidth
    }

    pokemons.forEach(element => {
        let corpoPokedex1 = gerarPagina(element)
        paginaPokedex.innerHTML += corpoPokedex1
    });
}

function gerarPagina( {numeroPokedex, especie, simbolos, sprites, tipo, descricao} ) {

    return `<div class='paginaPokedex' key=${numeroPokedex}>
        <div class='fotopokemon' id='fotopokemon' style="background-color: ${gerarCores(tipo[0])}">
            <header class='cabecalhointerno' id='cabecalhointerno'>
                <p class="titulopokemon">#${numeroPokedex}</p>
                <p class="subtitulopokemon"><strong>${especie}</strong></p>
                <img src=${simbolos[0]} width='10%' height='auto'></img>
                <img src=${simbolos[1]} width='10%' height='auto'></img>
            </header>
            <img src=${sprites[0]} width='50%' height='auto'/>
        </div>
        <div class='conteudo' id='conteudo'>
            <div class='botoesnavegacao'>
                <button class="botaonavegacao" onClick="">Sobre</button>
                <button class="botaonavegacao" onClick="">Stats</button>
                <button class="botaonavegacao" onClick="">Evolução</button>
            </div>
            <div class='divtipos'>
                <div class='textotipos' style="background-color: ${gerarCores(tipo[0])}">
                    <img src=${simbolos[0]} width='15%' height='auto'></img>
                    <strong>${gerarStringTipo(tipo[0])}</strong>
                </div>
                <div class='textotipos' style="background-color: ${gerarCores(tipo[1])}">
                    <img src=${simbolos[1]} width='15%' height='auto'></img>
                    <strong>${gerarStringTipo(tipo[1])}</strong>
                </div>
            </div>
            ${paginaSobre(descricao)}
        </div>
    </div>`
}

function gerarStringTipo(tipo) {
    if (tipo === undefined) {
        return ''
    }

    return tipo.toUpperCase()
}

function gerarCores(tipo) {
    if (tipo === undefined) {
        return '#FFFFFF'
    }

    const tipos = ["Normal", "Lutador", "Voador", "Venenoso", "Terrestre", "Pedra", "Inseto", "Fantasma", 
    "Aço", "Fogo", "Água", "Grama", "Elétrico", "Psiquico", "Gelo", "Dragão", "Noturno", "Fada"]

    const coresTipos = ['#A8A878', '#C03028', '#A890F0', '#A040A0', '#E0C068', '#B8A038', '#A8B820', '#705898',
    '#B8B8D0', '#F08030', '#6890F0', '#A1C9A8', '#FAE078', '#F85888', '#98D8D8', '#7038F8', '#705848', '#EE99AC']

    const indice = tipos.indexOf(tipo, 0)
    return coresTipos[indice]
}

function paginaSobre(descricao) {
    return `<div class='conteudomutavel'>
        <div class='descricaopokedex'>
            <p class='paragrafodescricao' id='paragrafodescricao'>${descricao}</p>
        </div>
        <div class='divtipos'></div>
    </div>`
}