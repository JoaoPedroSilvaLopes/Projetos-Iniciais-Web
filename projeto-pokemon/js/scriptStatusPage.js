import pokedex from "./dadosPokemon.js";

export default function main() {
  let pokemons = pokedex;
  let paginaPokedex = document.getElementById("main");

  for (let elemento of pokemons) {
    let corpoPokedex = gerarPagina(elemento);
    paginaPokedex.innerHTML += corpoPokedex;
  }
}

function gerarPagina({
  numeroPokedex,
  especie,
  simbolos,
  sprites,
  tipo,
  descricao,
}) {
  window.paginaSobre = function (id) {
    const index = id.slice(id.length - 3);
    const conteudoInterno = document.getElementById(`conteudoInterno${index}`);
    const numeroPokedex = pokedex[index * 1].numeroPokedex;
    const descricao = pokedex[index * 1].descricao;
    const simbolos = pokedex[index * 1].simbolos;
    const tipo = pokedex[index * 1].tipo;

    conteudoInterno.innerHTML = `<p class='descricaopokedex' id='descricaopokedex${numeroPokedex}' style="background-color: ${gerarCores(
      tipo[0]
    )}">${descricao}</p>
        <div class='divtipos' id='divtipos${numeroPokedex}'>
            <div class='textotipos' id='textotipos' style="background-color: ${gerarCores(
              tipo[0]
            )}">
                <img ${simbolos[0]} width='20%' height='auto'></img>
                <strong>${gerarStringTipo(tipo[0])}</strong>
            </div>
            <div class='textotipos' id='textotipos' style="background-color: ${gerarCores(
              tipo[1]
            )}">
                <img ${simbolos[1]} width='20%' height='auto'></img>
                <strong>${gerarStringTipo(tipo[1])}</strong>
            </div>
        </div>
        <p class="paragrafoDadosPokedex" style="color: ${gerarCores(
          tipo[0]
        )}">Dados Pokédex</p>
        <div class="dadosPokedex" id="dadosPokedex${numeroPokedex}">
            <p class="dadoTexto">Altura</p>
            <p style="color: ${gerarCores(tipo[0])}">XXX m</p>
        </div>
        <div class="dadosPokedex" id="dadosPokedex${numeroPokedex}">
            <p class="dadoTexto">Peso</p>
            <p style="color: ${gerarCores(tipo[0])}">XXX kg</p>
        </div>
        <div class="dadosPokedex" id="dadosPokedex${numeroPokedex}">
            <p class="dadoTexto">Habilidade</p>
            <p style="color: ${gerarCores(tipo[0])}">XXX</p>
        </div>
        <div class="dadosPokedex" id="dadosPokedex${numeroPokedex}">
            <p class="dadoTexto">Habilidade Secreta</p>
            <p style="color: ${gerarCores(tipo[0])}">XXX</p>
        </div>`;
  };

  window.paginaStats = function (id) {
    const index = id.slice(id.length - 3);
    const conteudoInterno = document.getElementById(`conteudoInterno${index}`);
    const statsBase = pokedex[index * 1].statsBase;
    const tipo = pokedex[index * 1].tipo;

    conteudoInterno.innerHTML = `<p class='paragrafotitulostats' id='paragrafotitulostats' style="color: ${gerarCores(
      tipo[0]
    )}">Base stats</p>
        <div class='conteudostats'>
            <p class='paragrafostats'>HP -------- ${statsBase[0]}</p>
            <p class='paragrafostats'>Attack ---- ${statsBase[1]}</p>
            <p class='paragrafostats'>Defense --- ${statsBase[2]}</p>
            <p class='paragrafostats'>Sp. Atk --- ${statsBase[3]}</p>
            <p class='paragrafostats'>Sp. Def --- ${statsBase[4]}</p>
            <p class='paragrafostats'>Speed ----- ${statsBase[5]}</p>
        </div>`;
  };

  window.paginaEvolucao = function (id) {
    const index = id.slice(id.length - 3);
    const conteudoInterno = document.getElementById(`conteudoInterno${index}`);
    const evolucoes = pokedex[index * 1].evolucao;
    const simbolos = pokedex[index * 1].simbolos;
    const tipo = pokedex[index * 1].tipo;

    if (evolucoes === undefined) {
      conteudoInterno.innerHTML = `<p class='paragrafotitulostats' id='paragrafotitulostats' style="color: ${gerarCores(
        tipo[0]
      )}">Evoluções</p>
            <div class='evolucao'>
                <div class="evolucoes">
                    <div class="dadosEvolucao">
                        <img src=${
                          pokedex[index * 1].sprites[0]
                        } width='30%' height='auto'/>
                        <p class="descricaoEvolucao" style="color: ${gerarCores(
                          tipo[0]
                        )}">Não possui evolução</p>
                    </div>  
                </div>
            </div>`;
    } else if (evolucoes[0].length === 4) {
      conteudoInterno.innerHTML = `<p class='paragrafotitulostats' id='paragrafotitulostats' style="color: ${gerarCores(
        tipo[0]
      )}">Evoluções</p>
            <div class='evolucao'>
                <div class="evolucoes">
                    <img src=${
                      pokedex[evolucoes[0][0]].sprites[0]
                    } width='30%' height='auto'/>
                    <div class="dadosEvolucao">
                        <img src=${[
                          evolucoes[2][0],
                        ]} width='30%' height='auto'/>
                        <p class="descricaoEvolucao" style="color: ${gerarCores(
                          tipo[0]
                        )}">${evolucoes[1][0]}</p>
                    </div>
                    <img src=${
                      pokedex[evolucoes[0][1]].sprites[0]
                    } width='30%' height='auto'/>
                </div>
                <div class="evolucoes">
                    <img src=${
                      pokedex[evolucoes[0][0]].sprites[0]
                    } width='30%' height='auto'/>
                    <div class="dadosEvolucao">
                        <img src=${[
                          evolucoes[2][1],
                        ]} width='30%' height='auto'/>
                        <p class="descricaoEvolucao" style="color: ${gerarCores(
                          tipo[0]
                        )}">${evolucoes[1][1]}</p>
                    </div>
                    <img src=${
                      pokedex[evolucoes[0][2]].sprites[0]
                    } width='30%' height='auto'/>
                </div>
                <div class="evolucoes">
                    <img src=${
                      pokedex[evolucoes[0][0]].sprites[0]
                    } width='30%' height='auto'/>
                    <div class="dadosEvolucao">
                        <img src=${[
                          evolucoes[2][2],
                        ]} width='30%' height='auto'/>
                        <p class="descricaoEvolucao" style="color: ${gerarCores(
                          tipo[0]
                        )}">${evolucoes[1][2]}</p>
                    </div>
                    <img src=${
                      pokedex[evolucoes[0][3]].sprites[0]
                    } width='30%' height='auto'/>
                </div>
            </div>`;
    } else if (evolucoes[0][2] === undefined) {
      conteudoInterno.innerHTML = `<p class='paragrafotitulostats' id='paragrafotitulostats' style="color: ${gerarCores(
        tipo[0]
      )}">Evoluções</p>
            <div class='evolucao'>
                <div class="evolucoes">
                    <img src=${
                      pokedex[evolucoes[0][0]].sprites[0]
                    } width='30%' height='auto'/>
                    <div class="dadosEvolucao">
                        <img src=${[
                          evolucoes[2][0],
                        ]} width='30%' height='auto'/>
                        <p class="descricaoEvolucao" style="color: ${gerarCores(
                          tipo[0]
                        )}">${evolucoes[1][0]}</p>
                    </div>
                    <img src=${
                      pokedex[evolucoes[0][1]].sprites[0]
                    } width='30%' height='auto'/>
                </div>
            </div>`;
    } else {
      conteudoInterno.innerHTML = `<p class='paragrafotitulostats' id='paragrafotitulostats' style="color: ${gerarCores(
        tipo[0]
      )}">Evoluções</p>
            <div class='evolucao'>
                <div class="evolucoes">
                    <img src=${
                      pokedex[evolucoes[0][0]].sprites[0]
                    } width='30%' height='auto'/>
                    <div class="dadosEvolucao">
                        <img src=${[
                          evolucoes[2][0],
                        ]} width='30%' height='auto'/>
                        <p class="descricaoEvolucao" style="color: ${gerarCores(
                          tipo[0]
                        )}">${evolucoes[1][0]}</p>
                    </div>
                    <img src=${
                      pokedex[evolucoes[0][1]].sprites[0]
                    } width='30%' height='auto'/>
                </div>
                <div class="evolucoes">
                    <img src=${
                      pokedex[evolucoes[0][1]].sprites[0]
                    } width='30%' height='auto'/>
                    <div class="dadosEvolucao">
                        <img src=${[
                          evolucoes[2][1],
                        ]} width='30%' height='auto'/>
                        <p class="descricaoEvolucao" style="color: ${gerarCores(
                          tipo[0]
                        )}">${evolucoes[1][1]}</p>
                    </div>
                    <img src=${
                      pokedex[evolucoes[0][2]].sprites[0]
                    } width='30%' height='auto'/>
                </div>
            </div>`;
    }
  };

  window.mudarCor = function (id, chave, indexBotao) {
    if (chave === 0) {
      const index = id.slice(id.length - 3);
      const botao = document.getElementById(
        `botaonavegacao${indexBotao}${index}`
      );
      botao.style.color = `#A2A4A4`;
    } else {
      const index = id.slice(id.length - 3);
      const botao = document.getElementById(
        `botaonavegacao${indexBotao}${index}`
      );
      const cor = document.getElementById(`fotopokemon${index}`);
      const color = cor.style.backgroundColor;
      botao.style.color = color;
      botao.style.boxShadow = color;
    }
  };

  if (numeroPokedex === "000") {
    return ``;
  }

  return `<div class='paginaPokedex' id='paginaPokedex${numeroPokedex}'>
        <div class='fotopokemon' id='fotopokemon${numeroPokedex}' style="background-color: ${gerarCores(
    tipo[0]
  )}">
            <header class='cabecalhointerno' id='cabecalhointerno${numeroPokedex}'>
                <p class='titulopokemon' id='titulopokemon${numeroPokedex}'>#${numeroPokedex}</p>
                <p class='subtitulopokemon' id='subtitulopokemon${numeroPokedex}'><strong>${especie}</strong></p>
                <img ${simbolos[0]} width='10%' height='auto'></img>
                <img ${simbolos[1]} width='10%' height='auto'></img>
            </header>
            <img src=${sprites[0]} width='40%' height='auto'/>
        </div>
        <div class='conteudo' id='conteudo${numeroPokedex}'>
            <div class='botoesnavegacao' id='botoesnavegacao${numeroPokedex}'>
                <button class="botaonavegacao" id='botaonavegacao1${numeroPokedex}' onClick="paginaSobre(this.id)" onmouseover="mudarCor(this.id, 1, 1)" onmouseout="mudarCor(this.id, 0, 1)">Sobre</button>
                <button class="botaonavegacao" id='botaonavegacao2${numeroPokedex}' onClick="paginaStats(this.id)" onmouseover="mudarCor(this.id, 1, 2)" onmouseout="mudarCor(this.id, 0, 2)">Stats</button>
                <button class="botaonavegacao" id='botaonavegacao3${numeroPokedex}' onClick="paginaEvolucao(this.id)" onmouseover="mudarCor(this.id, 1, 3)" onmouseout="mudarCor(this.id, 0, 3)">Evolução</button>
            </div>
            <div class='conteudoInterno' id='conteudoInterno${numeroPokedex}'>
                <p class='descricaopokedex' id='descricaopokedex${numeroPokedex}' style="background-color: ${gerarCores(
    tipo[0]
  )}">${descricao}</p>
                <div class='divtipos' id='divtipos${numeroPokedex}'>
                    <div class='textotipos' id='textotipos' style="background-color: ${gerarCores(
                      tipo[0]
                    )}">
                        <img ${simbolos[0]} width='20%' height='auto'></img>
                        <strong>${gerarStringTipo(tipo[0])}</strong>
                    </div>
                    <div class='textotipos' id='textotipos' style="background-color: ${gerarCores(
                      tipo[1]
                    )}">
                        <img ${simbolos[1]} width='20%' height='auto'></img>
                        <strong>${gerarStringTipo(tipo[1])}</strong>
                    </div>
                </div>
                <p class="paragrafoDadosPokedex" style="color: ${gerarCores(
                  tipo[0]
                )}">Dados Pokédex</p>
                <div class="dadosPokedex" id="dadosPokedex${numeroPokedex}">
                    <p class="dadoTexto">Altura</p>
                    <p style="color: ${gerarCores(tipo[0])}">XXX m</p>
                </div>
                <div class="dadosPokedex" id="dadosPokedex${numeroPokedex}">
                    <p class="dadoTexto">Peso</p>
                    <p style="color: ${gerarCores(tipo[0])}">XXX kg</p>
                </div>
                <div class="dadosPokedex" id="dadosPokedex${numeroPokedex}">
                    <p class="dadoTexto">Habilidade</p>
                    <p style="color: ${gerarCores(tipo[0])}">XXX</p>
                </div>
                <div class="dadosPokedex" id="dadosPokedex${numeroPokedex}">
                    <p class="dadoTexto">Habilidade Secreta</p>
                    <p style="color: ${gerarCores(tipo[0])}">XXX</p>
                </div>
            </div>
        </div>
    </div>`;
}

function gerarStringTipo(tipo) {
  if (tipo === undefined) {
    return "";
  }

  return tipo.toUpperCase();
}

function gerarCores(tipo) {
  if (tipo === undefined) {
    return "#FFFFFF";
  }

  const tipos = [
    "Normal",
    "Lutador",
    "Voador",
    "Venenoso",
    "Terrestre",
    "Pedra",
    "Inseto",
    "Fantasma",
    "Aço",
    "Fogo",
    "Água",
    "Grama",
    "Elétrico",
    "Psiquico",
    "Gelo",
    "Dragão",
    "Noturno",
    "Fada",
  ];

  const coresTipos = [
    "#A8A878",
    "#C03028",
    "#A890F0",
    "#A040A0",
    "#E0C068",
    "#B8A038",
    "#A8B820",
    "#705898",
    "#B8B8D0",
    "#F08030",
    "#6890F0",
    "#A1C9A8",
    "#FAE078",
    "#F85888",
    "#98D8D8",
    "#7038F8",
    "#705848",
    "#EE99AC",
  ];

  const indice = tipos.indexOf(tipo, 0);
  return coresTipos[indice];
}
