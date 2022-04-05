import pokedex from './dadosPokemon.js'

/*
Classe para gerar dados específicos e mutáveis das espécies 
dos pokémons como: nome, IVS, natures, nivel e experiencia.
===================================================================
HP:
- Deve ser verde quando: HP-ATUAL > HP/2
- Deve ser amarelo quando: HP/5 <= HP-ATUAL <= HP/2
- Deve ser vermelho quando: HP-ATUAL < HP/5 (Ativar som de alarme)

Formula de calcular o HP: 
- (((2 x HP-BASE + IV + (EV/4)) x Nivel) / 100) + Nivel + 10

Formula de calcular os demais status
- ((((2 x HP-BASE + IV + (EV/4)) x Nivel) / 100) + 5) x Nature
*/

export default class GerarPokemon {

	// construtor
	constructor(idPokedex, nome, nivel, experiencia) {
		let dadosPokemon = this.verificar(idPokedex)
		const ivs = this.gerarIVS()
		const nature = this.gerarNature()
		const sexo = this.gerarSexoPokemon()
		const sprite = this.gerarSprite(dadosPokemon.sprites)
		let stats = this.gerarStats(dadosPokemon.statsBase, ivs, nature, nivel)

		this.idPokedex = idPokedex
		this.nome = nome
		this.nivel = nivel
		this.experiencia = experiencia
		this.sexo = sexo
		this.nature = nature[0]
		this.stats = stats
		this.dadosPokemon = dadosPokemon
		this.sprite = sprite
	}

	// Função referente à escolha do sprite para determinar se o pokémon será shiny ou não
	gerarSprite(sprites) {
    	let randomizador = Math.floor(Math.random() * 10)
		let sprite
    	randomizador > 5 ? sprite = sprites[0] : sprite = sprites[1]
		return sprite
	}

	// Função referente à encontrar os dados genéricos de tal pokémon
	verificar(idPokedex) {
		for (let i = 0; i <= pokedex.length; i++) {
			if (idPokedex == pokedex[i].numeroPokedex) {
				return pokedex[i]
			}
		}
	}

	// Função referente à gerar o sexo do pokémon (requer melhorias)
	gerarSexoPokemon() {
		const randomizador = Math.random() * 10
		return randomizador > 5 ? "Macho" : "Fêmea"
	}

	// Função referente à gerar os ivs do pokémon de forma aleatória
  	gerarIVS() {
      	const ivs = [Math.floor(Math.random() * 32), Math.floor(Math.random() * 32), Math.floor(Math.random() * 32), 
                  	Math.floor(Math.random() * 32), Math.floor(Math.random() * 32), Math.floor(Math.random() * 32)]

    	return ivs
  	}

	// Função referente à gerar a nature do pokémon de forma aleatória
	gerarNature() {
		const vetorNatures = 
		[
			["Hardy", "Lonely", "Adamant", "Naughty", "Brave"],
			["Bold", "Docile", "Impish", "Lax", "Relaxed"],
			["Modest", "Mild", "Bashful", "Rash", "Quiet"],
			["Calm", "Gentle", "Careful", "Quirky", "Sassy"],
			["Timid", "Hasty", "Jolly", "Naive", "Serious"]
		];

		const i = Math.floor(Math.random() * 5)
		const j = Math.floor(Math.random() * 5)
		const nature = vetorNatures[i][j]

		return [nature, i + 1, j + 1]
	}

	// Função referente à gerar os stats unicos do pokemon com base nos ivs e nature
	gerarStats(statsBase, ivs, nature, nivel) {
		var stats = new Array(6)
		stats[0] = Math.floor(Math.abs(((2 * statsBase[0] + ivs[0] + Math.floor(Math.abs(0 / 4))) * nivel) / 100)) + nivel + 10

		if (nature[1] == nature[2]) {
			for (let i = 1; i < stats.length; i++) {
				stats[i] = Math.floor(Math.abs((Math.floor(Math.abs(((2 * statsBase[i] + ivs[i] + Math.floor(Math.abs(0 / 4))) * nivel) / 100)) + 5) * 1))
			}
		}
		else {
			for (let i = 1; i < stats.length; i++) {
				if (nature[1] == i){
					stats[i] = Math.floor(Math.abs((Math.floor(Math.abs(((2 * statsBase[i] + ivs[i] + Math.floor(Math.abs(0 / 4))) * nivel) / 100)) + 5) * 1.10))
				}
				else if (nature[2] == i){
					stats[i] = Math.floor(Math.abs((Math.floor(Math.abs(((2 * statsBase[i] + ivs[i] + Math.floor(Math.abs(0 / 4))) * nivel) / 100)) + 5) * 0.90))
				}
				else {
					stats[i] = Math.floor(Math.abs((Math.floor(Math.abs(((2 * statsBase[i] + ivs[i] + Math.floor(Math.abs(0 / 4))) * nivel) / 100)) + 5) * 1))
				}
			}
		}

		return stats
	}

	/*batalhar() {}

	evoluir() {}

	curar() {}

	subirNivel() {}*/
}