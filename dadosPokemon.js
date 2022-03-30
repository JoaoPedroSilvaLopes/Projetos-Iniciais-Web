/* 
Classe para dados genéricos e imutáveis das espécies 
dos pokémons como: numero da pokedex, tipo, sprites e 
descrição da pokedex.
*/

class DadosPokedex {

  constructor(numeroPokedex, especie, tipo, sprites, descrição) {
    this.numeroPokedex = numeroPokedex
    this.especie = especie
    this.tipo = tipo
    this.sprites = sprites
    this.descrição = descrição

    console.log(
      `Nº Pokedex: ${numeroPokedex}
      Espécie: ${especie}
      Tipo: [${tipo[0]}][${tipo[1]}]
      Descrição: ${descrição}`
    )
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

export const Pokedex = [N001, N004, N007]
