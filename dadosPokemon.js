/* 
Classe para dados genéricos e imutáveis das espécies 
dos pokémons como: numero da pokedex, tipo, sprites e 
descrição da pokedex.
*/

/*
HP:
- Deve ser verde quando: HP-ATUAL > HP/2
- Deve ser amarelo quando: HP/5 <= HP-ATUAL <= HP/2
- Deve ser vermelho quando: HP-ATUAL < HP/5 (Ativar som de alarme)

Formula de calcular o HP: 
- (((2 x HP-BASE + IV + (EV/4)) x Nivel) / 100) + Nivel + 10

Formula de calcular os demais status
- ((((2 x HP-BASE + IV + (EV/4)) x Nivel) / 100) + 5) x Nature
*/



class DadosPokedex {

	constructor(numeroPokedex, especie, tipo, sprites, statsBase, descricao) {
		this.numeroPokedex = numeroPokedex
		this.especie = especie
		this.tipo = tipo
		this.sprites = sprites
		this.descricao = descricao
		this.statsBase = statsBase
	}
}

let N001 = new DadosPokedex('001', 'Bulbassauro', ['Planta', 'Venenoso'], ['pictures/001.png', 'pictures/001S.png'], [45, 49, 49, 65, 65, 45],
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

const pokedex = [N001, N004, N007]

class GerarPokemon {

	constructor(idPokedex, nome, nivel, experiencia) {
		this.idPokedex = idPokedex
		this.nome = nome
		this.nivel = nivel
		this.experiencia = experiencia

		let dadosPokemon = this.verificar(idPokedex)

		const ivs = this.gerarIVS()
		const nature = this.gerarNature()
		const sexo = this.gerarSexoPokemon()

		let stats = this.gerarStats(dadosPokemon.statsBase, ivs, nature, nivel)

		console.log(
			`
			Nº Pokedex: ${dadosPokemon.numeroPokedex}
			EXP: ${experiencia}
			Lv${nivel} ${nome}(${dadosPokemon.especie}) ${sexo}
			Type: ${dadosPokemon.tipo[0]} | ${dadosPokemon.tipo[1]}
			Nature: ${nature[0]}

			STATS:                IVS:
			HP:    ${stats[0]}    		  ${ivs[0]}
			ATK    ${stats[1]}    		  ${ivs[1]}
			DEF:   ${stats[2]}    		  ${ivs[2]}
			SATK:  ${stats[3]}    		  ${ivs[3]}
			SDEF:  ${stats[4]}    		  ${ivs[4]}
			SPD:   ${stats[5]}    		  ${ivs[5]}

			Descrição: 
			${dadosPokemon.descricao}
			`
		)
	}

	verificar(idPokedex) {
		for (let i = 0; i <= pokedex.length; i++) {
			if (idPokedex == pokedex[i].numeroPokedex) {
				return pokedex[i]
			}
		}
	}

	gerarSexoPokemon() {
		const randomizador = Math.random() * 10
		return randomizador > 5 ? "Macho" : "Fêmea"
	}

  	gerarIVS() {
      	const ivs = [Math.floor(Math.random() * 32), Math.floor(Math.random() * 32), Math.floor(Math.random() * 32), 
                  	Math.floor(Math.random() * 32), Math.floor(Math.random() * 32), Math.floor(Math.random() * 32)]

    	return ivs
  	}

	gerarNature() {
		const vetorNatures = 
		[
			["Hardy", 0, 0], ["Lonely", 1, 2], ["Adamant", 1, 3], ["Naughty", 1, 4], ["Brave", 1, 5],
			["Bold", 2, 1], ["Docile", 0, 0], ["Impish", 2, 3], ["Lax", 2, 4], ["Relaxed", 2, 5],
			["Modest", 3, 1], ["Mild", 3, 2], ["Bashful", 0, 0], ["Rash", 3, 4], ["Quiet", 3, 5],
			["Calm", 4, 1], ["Gentle", 4, 2], ["Careful", 4, 3], ["Quirky", 0, 0], ["Sassy", 4, 5],
			["Timid", 5, 1], ["Hasty", 5, 2], ["Jolly", 5, 3], ["Naive", 5, 4], ["Serious", 0, 0]
		];

		const nature = vetorNatures[Math.floor(Math.random() * 25)]

		return nature
	}

	gerarStats(statsBase, ivs, nature, nivel) {
		var stats = new Array(6)

		for (let i = 0; i < stats.length; i++) {
			if (i == 0) {
				stats[i] = Math.floor(Math.abs(((2 * statsBase[0] + ivs[0] + Math.floor(Math.abs(0 / 4))) * nivel) / 100)) + nivel + 10
			}
			else if (nature[1] == i){
				stats[i] = Math.floor(Math.abs((Math.floor(Math.abs(((2 * statsBase[i] + ivs[i] + Math.floor(Math.abs(0 / 4))) * nivel) / 100)) + 5) * 1.10))
			}
			else if (nature[2] == i){
				stats[i] = Math.floor(Math.abs((Math.floor(Math.abs(((2 * statsBase[i] + ivs[i] + Math.floor(Math.abs(0 / 4))) * nivel) / 100)) + 5) * 0.90))
			}
			else {
				stats[i] = Math.floor(Math.abs((Math.floor(Math.abs(((2 * statsBase[i] + ivs[i] + Math.floor(Math.abs(0 / 4))) * nivel) / 100)) + 5) * 1))
			}
		}

		return stats
	}

	/*batalhar() {}

	evoluir() {}

	curar() {}

	subirNivel() {}*/
}

let teste1 = new GerarPokemon('001', 'bulbamon', 5, 0)
let teste4 = new GerarPokemon('004', 'charmanda', 5, 0)
let teste7 = new GerarPokemon('007', 'squirtu', 5, 0)