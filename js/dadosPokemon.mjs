/* 
Classe para dados genéricos e imutáveis das espécies 
dos pokémons como: numero da pokedex, tipo, sprites e 
descrição da pokedex.

# Gerar relação de vantagem e desvantagem:
- Resistencia
- Fraqueza
- Imunidade
- Dano normal
*/

class DadosPokedex {

	constructor(numeroPokedex, especie, tipo, sprites, statsBase, descricao) {
		this.numeroPokedex = numeroPokedex
		this.especie = especie
		this.tipo = tipo
		this.sprites = sprites
		this.descricao = descricao
		this.statsBase = statsBase
		this.VF = this.gerarVantagensEDesvantagens(tipo)
	}

	gerarVantagensEDesvantagens(tipo) {
		const tipoPrimario = tipo[0]
		const tipoSecundario = tipo[1]

		const vetorTipos = ["Normal", "Lutador", "Voador", "Venenoso", "Terrestre", "Pedra", "Inseto", "Fantasma", 
		"Aço", "Fogo", "Água", "Grama", "Elétrico", "Psiquico", "Gelo", "Dragão", "Noturno", "Fada"];

		const matrizMultiplicadora = [
			[1.0, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
			[1.0, 1.0, 2.0, 1.0, 1.0, 0.5, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 0.5, 2.0],
			[1.0, 0.5, 1.0, 1.0, 0.0, 2.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 2.0, 1.0, 2.0, 1.0, 1.0, 1.0],
			[1.0, 0.5, 1.0, 0.5, 2.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 2.0, 1.0, 1.0, 1.0, 0.5],
			[1.0, 1.0, 1.0, 0.5, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 2.0, 2.0, 0.0, 1.0, 2.0, 1.0, 1.0, 1.0],
			[0.5, 2.0, 0.5, 0.5, 2.0, 1.0, 1.0, 1.0, 2.0, 0.5, 2.0, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
			[1.0, 0.5, 2.0, 1.0, 0.5, 2.0, 1.0, 1.0, 1.0, 2.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
			[0.0, 0.0, 1.0, 0.5, 1.0, 1.0, 0.5, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0],
			[0.5, 2.0, 0.5, 0.0, 2.0, 0.5, 0.5, 1.0, 0.5, 2.0, 1.0, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5],
			[1.0, 1.0, 1.0, 1.0, 2.0, 2.0, 0.5, 1.0, 0.5, 0.5, 2.0, 0.5, 1.0, 1.0, 0.5, 1.0, 1.0, 0.5],
			[1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 2.0, 2.0, 1.0, 0.5, 1.0, 1.0, 1.0],
			[1.0, 1.0, 2.0, 2.0, 0.5, 1.0, 2.0, 1.0, 1.0, 2.0, 0.5, 0.5, 0.5, 1.0, 2.0, 1.0, 1.0, 1.0],
			[1.0, 1.0, 0.5, 1.0, 2.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0],
			[1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 2.0, 1.0],
			[1.0, 2.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 2.0, 2.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0],
			[1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 0.5, 1.0, 2.0, 2.0, 1.0, 2.0],
			[1.0, 2.0, 1.0, 1.0, 1.0, 1.0, 2.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.5, 2.0],
			[1.0, 0.5, 1.0, 2.0, 1.0, 1.0, 0.5, 1.0, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.5, 1.0]
		];

		const indexTipoPrimario = vetorTipos.findIndex(function(vetorTipos) {return vetorTipos == tipoPrimario})
		const indexTipoSecundario = vetorTipos.findIndex(function(vetorTipos) {return vetorTipos == tipoSecundario})
		let ArrayTipos = [['Resistências: '], ['Fraquezas: '], ['Dano Normal: '], ['Imunidades: ']]

		for (let i = 0; i < matrizMultiplicadora.length; i++) {
			let multiplicacao
			indexTipoSecundario != -1 ? multiplicacao = (matrizMultiplicadora[indexTipoPrimario][i] * matrizMultiplicadora[indexTipoSecundario][i]) : multiplicacao = (matrizMultiplicadora[indexTipoPrimario][i] * 1)

			if (multiplicacao == 0) {
				ArrayTipos[3].push(vetorTipos[i])
			}
			else if (multiplicacao == 1) {
				ArrayTipos[2].push(vetorTipos[i])
			}
			else if (multiplicacao >= 2) {
				ArrayTipos[1].push(vetorTipos[i])
			}
			else {
				ArrayTipos[0].push(vetorTipos[i])
			}
		}

		return ArrayTipos
	}
}

let N001 = new DadosPokedex('001', 'Bulbassauro', ['Grama', 'Venenoso'], ['pictures/001.png', 'pictures/001S.png'], [45, 49, 49, 65, 65, 45],
`
Há uma semente de planta em sua parte 
traseira desde o dia de seu nascimento. 
A semente cresce lentamente.
`
)

let N004 = new DadosPokedex('004', 'Charmander', ['Fogo'], ['pictures/004.png', 'pictures/004S.png'], [39, 52, 43, 60, 50, 65],
`
Charmander, Pokémon Lagarto, desde de 
seu nascimento Charmander possui uma 
chama que queima na ponta de sua cauda. 
Essa chama simboliza sua alegria e saúde, 
se ela se apagar, Charmander morrerá.
`
)

let N007 = new DadosPokedex('007', 'Squirtle', ['Água'], ['pictures/007.png', 'pictures/007S.png'], [44, 48, 65, 50, 64, 43],
`
Há uma semente de planta em sua parte 
traseira desde o dia de seu nascimento. 
A semente cresce lentamente.
`
)

export const pokedex = [N001, N004, N007]