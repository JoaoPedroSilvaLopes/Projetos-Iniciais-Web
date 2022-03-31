/* 
Classe para dados genéricos e imutáveis das espécies 
dos pokémons como: numero da pokedex, tipo, sprites e 
descrição da pokedex.
*/

class DadosPokedex {

  constructor(numeroPokedex, especie, tipo, sprites, descrição, statusBase) {
    this.numeroPokedex = numeroPokedex
    this.especie = especie
    this.tipo = tipo
    this.sprites = sprites
    this.descrição = descrição
    this.statusBase = statusBase

    /*console.log(
      `Nº Pokedex: ${numeroPokedex}
      Espécie: ${especie}
      Tipo: [${tipo[0]}][${tipo[1]}]
      Descrição: ${descrição}`
    )*/
  }
}

let N001 = new DadosPokedex('001', 'Bulbassauro', ['Planta', 'Venenoso'], ['pictures/001.png', 'pictures/001S.png'],
`
Há uma semente de planta em sua parte 
traseira desde o dia de seu nascimento. 
A semente cresce lentamente.
`
)

let N004 = new DadosPokedex('004', 'Charmander', ['Fogo'], ['pictures/004.png', 'pictures/004S.png'],
`
Charmander, Pokémon Lagarto, desde de 
seu nascimento Charmander possui uma 
chama que queima na ponta de sua cauda. 
Essa chama simboliza sua alegria e saúde, 
se ela se apagar, Charmander morrerá.
`
)

let N007 = new DadosPokedex('007', 'Squirtle', ['Água'], ['pictures/007.png', 'pictures/007S.png'],
`
Há uma semente de planta em sua parte 
traseira desde o dia de seu nascimento. 
A semente cresce lentamente.
`
)

const pokedex = [N001, N004, N007]

class GerarPokemon {

  constructor(idPokedex, nome, nivel, experiencia) {
      this.idPokedex = idPokedex
      this.nome = nome
      this.nivel = nivel
      this.experiencia = experiencia
      //this.nature = this.gerarNature()

      let dadosPokemon = function verificar() {
        for (let i = 0; i <= pokedex.length; i++) {
          if (idPokedex == pokedex.numeroPokedex[i]) {
            return pokedex[i]
          }
        }
      }

      console.log(dadosPokemon)

      console.log(
          `
          Nome: ${nome}
          Nivel: ${nivel}
          Experiência: ${experiencia}
          IVS: ${this.gerarIVS()}
          `

          /*
          Nature: ${nature}
          
          
          Nº Pokedex: ${dadosPokemon.numeroPokedex}
          Espécie: ${dadosPokemon.especie}
          Tipo: [${dadosPokemon.tipo[0]}][${dadosPokemon.tipo[1]}]
          Descrição: ${dadosPokemon.descrição}*/
      )
  }

  gerarIVS() {

      const ivs = [Math.floor(Math.random() * 32), Math.floor(Math.random() * 32), Math.floor(Math.random() * 32), Math.floor(Math.random() * 32), Math.floor(Math.random() * 32), Math.floor(Math.random() * 32)]

      /*for (let posicoesIVS of ivs) {
          posicoesIVS = Math.floor(Math.random() * 32)
      }*/

      console.log(ivs)

      return ivs
  }

  gerarNature() {
      const vetorNatures = 
      [
        ["Hardy", status[0], status[0]], ["Docile", status[0], status[0]], ["Bashful", status[0], status[0]], ["Quirky", status[0], status[0]], ["Serious", status[0], status[0]],
        ["Adamant", status[1] * 1.10, status[3] * 0.90], ["Lonely", status[1] * 1.10, status[2] * 0.90], ["Naughty", status[1] * 1.10, status[4] * 0.90], ["Brave", status[1] * 1.10, status[5] * 0.90],
        ["Modest", status[3] * 1.10, status[1] * 0.90], ["Mild", status[3] * 1.10, status[2] * 0.90], ["Rash", status[3] * 1.10, status[4] * 0.90], ["Quiet", status[3] * 1.10, status[5] * 0.90],
        ["Bold", status[2] * 1.10, status[1] * 0.90], ["Impish", status[2] * 1.10, status[3] * 0.90], ["Lax", status[2] * 1.10, status[4] * 0.90], ["Relaxed", status[2] * 1.10, status[5] * 0.90],
        ["Calm", status[4] * 1.10, status[1] * 0.90], ["Careful", status[4] * 1.10, status[3] * 0.90], ["Gentle", status[4] * 1.10, status[2] * 0.90], ["Sassy", status[4] * 1.10, status[5] * 0.90],
        ["Timid", status[5] * 1.10, status[1] * 0.90], ["Jolly", status[5] * 1.10, status[3] * 0.90], ["Hasty", status[5] * 1.10, status[2] * 0.90], ["Naive", status[5] * 1.10, status[4] * 0.90]
      ];

      return vetorNatures[teste][Math.random() * 25]
  }

  /*batalhar() {}

  evoluir() {}

  curar() {}

  subirNivel() {}*/
}

let teste = new GerarPokemon('001', 'bulbamon', 5, 0, "", "")