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

	// Construtor
	constructor(especie, tipo, statsBase, descricao) {
		this.numeroPokedex = ('000' + pokedex.length).slice(-3)
		this.especie = especie
		this.tipo = tipo
		this.sprites = [`pictures/${this.numeroPokedex}.png`,`pictures/${this.numeroPokedex}S.png`]
		this.descricao = descricao
		this.statsBase = statsBase
		this.VF = this.gerarVantagensEDesvantagens(tipo)
	}

	// Função referente à gerar as fraquezas, resistencias e imunidades genéricas de um pokémon
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
		let arrayTipos = [['Resistências: '], ['Fraquezas: '], ['Dano Normal: '], ['Imunidades: ']]

		for (let i = 0; i < matrizMultiplicadora.length; i++) {
			let multiplicacao
			indexTipoSecundario != -1 ? multiplicacao = (matrizMultiplicadora[indexTipoPrimario][i] * matrizMultiplicadora[indexTipoSecundario][i]) : multiplicacao = (matrizMultiplicadora[indexTipoPrimario][i] * 1)

			if (multiplicacao == 0) {
				arrayTipos[3].push(vetorTipos[i])
			}
			else if (multiplicacao == 1) {
				arrayTipos[2].push(vetorTipos[i])
			}
			else if (multiplicacao >= 2) {
				arrayTipos[1].push(vetorTipos[i])
			}
			else {
				arrayTipos[0].push(vetorTipos[i])
			}
		}

		return arrayTipos
	}
}

const pokedex = []

pokedex[0] = new DadosPokedex('Missigno', ['Normal'], [10, 10, 10, 10, 10, 10],
`
???n
`
)

pokedex[1] = new DadosPokedex('Bulbassaur', ['Grama', 'Venenoso'], [45, 49, 49, 65, 65, 45],
`
Há uma semente de planta em sua parte 
traseira desde o dia de seu nascimento. 
A semente cresce lentamente.
`
)

pokedex[2]= new DadosPokedex('Ivysaur', ['Grama', 'Venenoso'], [60, 62, 63, 80, 80, 60],
`
A luz solar fará a flor em suas costas 
crescer. Conforme Ivysaur for crescendo, 
essa flor irá desabrochar. Ela irá soltar 
um doce aroma quando florescer.
`
)

pokedex[3] = new DadosPokedex('Venusaur', ['Grama', 'Venenoso'], [80, 82, 83, 100, 100, 80],
`
Há uma grande flor nas costas do Venusaur. 
A flor tem cores vivas está sempre em 
abundância de nutrição e luz solar. 
O aroma da flor acalma as emoções das pessoas.
`
)

pokedex[4] = new DadosPokedex('Charmander', ['Fogo'], [39, 52, 43, 60, 50, 65],
`
Charmander, Pokémon Lagarto, desde de 
seu nascimento Charmander possui uma 
chama que queima na ponta de sua cauda. 
Essa chama simboliza sua alegria e saúde, 
se ela se apagar, Charmander morrerá.
`
)

pokedex[5] = new DadosPokedex('Charmeleon', ['Fogo'], [58, 64, 58, 80, 65, 80],
`
Charmeleon impiedosamente destrói seus
inimigos usando suas garras afiadas. Se
encontrar um inimigo forte, ele se torna 
agressivo. Nesse estado excitado, a chama 
na ponta de sua cauda brilha com uma cor 
branca azulada.
`
)

pokedex[6] = new DadosPokedex('Charizard', ['Fogo', 'Voador'], [78, 84, 78, 109, 85, 100],
`
Charizard voa pelo céu em busca de
oponentes poderosos. Ele respira um
calor tão grande que derrete qualquer
coisa. No entanto, nunca dá um sopro
ardente a qualquer oponente mais fraco
que ele.
`
)

pokedex[7] = new DadosPokedex('Squirtle', ['Água'], [44, 48, 65, 50, 64, 43],
`
A concha de Squirtle não é apenas usada
para proteção. A forma arredondada da
concha e as ranhuras na superfície ajudam 
a minimizar a resistência na água,permitindo 
que este Pokémon nade em alta velocidade
`
)

pokedex[8] =  new DadosPokedex('Wartortle', ['Água'], [59, 63, 80, 65, 80, 58],
`
Sua cauda é grande e coberta com um
pêlo rico e grosso. A cauda torna-se cada
vez mais profunda na cor à medida que
Wartortle envelhece. Os arranhões em
Sua concha são uma evidência da dureza
deste Pokémon como um lutador.
`
)

pokedex[9] =  new DadosPokedex('Blastoise', ['Água'], [79, 83, 100, 85, 105, 78],
`
Blastoise tem bicos de água que se
projetam de sua concha. Os bicos de
água são muito precisos. Eles podem
disparar balas de água com precisão
suficiente para atingir latas vazias 
a uma distância de mais de 60 metros.
`
)

pokedex[10] =  new DadosPokedex('Caterpie', ['Inseto'], [45, 30, 35, 20, 20, 45],
`
Caterpie tem um apetite voraz. Ele pode
devorar folhas maiores que seu corpo
diante dos seus olhos. De sua antena,
este Pokémon libera um odor terrivelmente 
forte.
`
)

pokedex[11] =  new DadosPokedex('Metapod', ['Inseto'], [50, 20, 55, 25, 25, 30],
`
A concha que cobre o corpo deste
Pokémon é tão dura quanto uma laje de
ferro. Metapod não se move muito. Ele
fica parado porque está preparando suas
entranhas suaves para a evolução dentro
da casca dura.
`
)

pokedex[12] =  new DadosPokedex('Butterfree', ['Inseto', 'Voador'], [60, 45, 50, 90, 80, 70],
`
Butterfree tem uma capacidade superior
para procurar mel delicioso de flores.
Pode até procurar, extrair e transportar
mel de flores que estão desabrochando a
mais de 10 quilômetros do ninho.
`
)

pokedex[13] =  new DadosPokedex('Weedle', ['Inseto', 'Venenoso'], [40, 35, 30, 20, 20, 50],
`
Weedle tem um olfato extremamente agudo. 
Ele é capaz de distinguir seus tipos 
favoritos de folhas daqueles de que não
gosta, apenas farejando com sua grande 
tromba vermelha (nariz).
`
)

pokedex[14] =  new DadosPokedex('Kakuna', ['Inseto', 'Venenoso'], [45, 25, 50, 25, 25, 35],
`
Kakuna permanece praticamente imóvel enquanto 
se agarra a uma árvore. No entanto, por dentro, 
é extremamenteocupado, enquanto se prepara para 
a sua evolução futura. Isso é evidente pelo quão 
quente a concha fica ao ser tocada.
`
)

pokedex[15] =  new DadosPokedex('Beedrill', ['Inseto', 'Venenoso'], [65, 90, 40, 45, 80, 75],
`
Beedrill é extremamente territorial. Ninguém 
deve se aproximar de seu ninho, isso é para 
sua própria segurança. Se irritados, eles 
atacarão em um enxame furioso.
`
)

pokedex[16] =  new DadosPokedex('Pidgey', ['Normal', 'Voador'], [40, 45, 40, 35, 35, 56],
`
Pidgey tem um senso de direção
extremamente nítido. Ela é capaz de
voltar para o seu ninho de forma infalível,
por mais longe que possa ser removida
de seu ambiente familiar.
`
)

pokedex[17] =  new DadosPokedex('Pidgeotto', ['Normal', 'Voador'], [63, 60, 55, 50, 50, 71],
`
Pidgeotto reivindica uma grande área
como seu próprio território. Este Pokémon
voa, patrulhando seu espaço de vida. Se
seu território é violado, não mostra
piedade de punir completamente o
inimigo com suas garras afiadas.

`
)

pokedex[18] =  new DadosPokedex('Pidgeot', ['Normal', 'Voador'], [83, 80, 75, 70, 70, 101],
`
Este Pokémon tem uma plumagem
deslumbrante de penas maravilhosamente
brilhantes. Muitos treinadores são
cativados pela impressionante beleza das
penas em sua cabeça, obrigando-os a
escolher Pidgeot como seu Pokémon.
`
)

pokedex[19] =  new DadosPokedex('Rattata', ['Normal'], [30, 56, 35, 25, 35, 72],
`
Seus dentes crescem continuamente ao
longo de sua vida. Se seus incisivos
ficarem muito longos, esse Pokémon se
torna incapaz de comer e morre de fome.
`
)

pokedex[20] =  new DadosPokedex('Raticate', ['Normal'], [55, 81, 60, 50, 70, 97],
`
As presas fortes de Raticate crescem
constantemente. Para mantê-los
triturados, roem pedras e troncos. Pode
até mastigar as paredes das casas. Seus
bigodes são essenciais para manter o seu
equilíbrio. Não importa o quão amigável
você seja, ele ficará com raiva e o
morderá se tocar em seus bigodes.
`
)

pokedex[21] =  new DadosPokedex('Spearow', ['Normal', 'Voador'], [40, 60, 30, 31, 31, 70],
`
Seu grito alto pode ser ouvido a mais de
800 metros de distância. Se seu grito alto e
agudo for ouvido ecoando por toda parte, é
um sinal de que eles estão alertando um ao
outro sobre o perigo.
`
)

pokedex[22] =  new DadosPokedex('Fearow', ['Normal', 'Voador'], [65, 90, 65, 61, 61, 100],
`
Não há nenhum problema em voar
continuamente por um dia inteiro
carregando uma carga pesada. O medo é
reconhecido pelo pescoço longo e pelo bico
alongado. Eles são convenientemente
modelados para capturar presas no solo ou
na água. Ele habilmente move seu bico
longo e magro para colher presas.
`
)

pokedex[23] =  new DadosPokedex('Ekans', ['Venenoso'], [35, 60, 44, 40, 54, 55],
`
Ekans se enrola em espiral enquanto
descansa. Assumindo essa posição, ele
pode responder rapidamente a uma ameaça
de qualquer direção com um brilho na
cabeça erguida. Quanto mais velho fica,
mais cresce. A noite, envolve seu corpo
comprido em volta dos galhos das árvores
para descansar.
`
)

pokedex[24] =  new DadosPokedex('Arbok', ['Venenoso'], [60, 95, 69, 65, 79, 80],
`
Este Pokémon é terrivelmente forte para
contrair as coisas com seu corpo. Pode até
achatar tambores de óleo de aço. Uma vez
que Arbok envolve seu corpo em torno de
seu inimigo, é impossível escapar do abraço
esmagador.
`
)

pokedex[25] =  new DadosPokedex('Pikachu', ['Elétrico'], [35, 55, 40, 50, 50, 90],
`
É de sua natureza armazenar eletricidade.
Ele se sente estressado de vez em quando
se não conseguir descarregar. Completamente 
sua eletricidade.
`
)

pokedex[26] =  new DadosPokedex('Raichu', ['Elétrico'], [60, 90, 55, 90, 80, 110],
`
A medida que a eletricidade se acumula
dentro de seu corpo, ela se torna mais
agressiva. Uma teoria é que o acúmulo de
eletricidade está realmente causando
estresse.

`
)

pokedex[27] =  new DadosPokedex('Sandshrew', ['Terrestre'], [50, 75, 85, 20, 30, 40],
`
Sandshrew tem uma pele muito seca que é
extremamente resistente. Ele pode rolar
virando uma bola que repele qualquer
ataque do inimigo. A noite, ele se enterra
na areia do deserto para dormir.
`
)

pokedex[28] =  new DadosPokedex('Sandslash', ['Terrestre'], [75, 100, 110, 45, 55, 65],
`
O corpo do Sandslash é coberto por pontas
duras, que são seções endurecidas de sua
pele. Uma vez por ano, os picos antigos
caem, para serem substituídos por novos
picos que crescem por baixo dos antigos.
Graças às suas garras grossas, é bom em
escalar árvores. Existem muitos Sandslash
que se estacionam nas árvores e vão
dormir.
`
)

pokedex[29] =  new DadosPokedex('Nidoran♀', ['Venenoso'], [55, 47, 52, 40, 40, 41],
`
Suas farpas altamente tóxicas se
desenvolveram como proteção para este
Pokémon de corpo pequeno. Quando
enfurecido, libera uma toxina horrível do
chifre.
`
)

pokedex[30] =  new DadosPokedex('Nidorina', ['Venenoso'], [70, 62, 67, 55, 55, 56],
`
Quando Nidorina está com seus amigos ou
famiíliares, eles mantêm suas farpas
afastadas para evitar se machucar. Este
Pokémon parece ficar nervoso se separado
dos outros. A fêmea tem um temperamento
Suave. Emite gritos ultrassônicos que têm o
poder de confundir os inimigos.
`
)

pokedex[31] =  new DadosPokedex('Nidoqueen', ['Venenoso', 'Terrestre'], [90, 92, 87, 75, 85, 76],
`
O corpo de Nidoqueen é envolvido em
escamas extremamente duras. É hábil em
enviar inimigos voando com agressões
severas. Este Pokémon é mais forte quando
defende seus filhotes. Se ficar excitada, as
agulhas se arrepiam para fora.
`
)

pokedex[32] =  new DadosPokedex('Nidoran♂', ['Venenoso'], [46, 57, 40, 40, 40, 50],
`

`
)

pokedex[33] =  new DadosPokedex('Nidorino', ['Venenoso'], [61, 72, 57, 55, 55, 65],
`

`
)

pokedex[34] =  new DadosPokedex('Nidoking', ['Venenoso', 'Terrestre'], [81, 102, 77, 85, 75, 85],
`

`
)

pokedex[35] =  new DadosPokedex('Clefairy', ['Fada'], [70, 45, 48, 60, 65, 35],
`

`
)

pokedex[36] =  new DadosPokedex('Clefable', ['Fada'], [95, 70, 73, 85, 90, 60],
`

`
)

pokedex[37] =  new DadosPokedex('Vulpix', ['Fogo'], [38, 41, 40, 50, 65, 65],
`

`
)

pokedex[38] =  new DadosPokedex('Ninetales', ['Fogo'], [73, 76, 75, 81, 100, 100],
`

`
)

pokedex[39] =  new DadosPokedex('Jigglypuff', ['Normal', 'Fada'], [115, 45, 20, 45, 25, 20],
`

`
)

pokedex[40] =  new DadosPokedex('Wigglytuff', ['Normal', 'Fada'], [140, 70, 45, 85, 50, 45],
`

`
)

pokedex[41] =  new DadosPokedex('Zubat', ['Venenoso', 'Voador'], [40, 45, 35, 30, 40, 55],
`

`
)

pokedex[42] =  new DadosPokedex('Golbat', ['Venenoso', 'Voador'], [75, 80, 70, 65, 75, 90],
`

`
)

pokedex[43] =  new DadosPokedex('Oddish', ['Grama', 'Venenoso'], [45, 50, 55, 75, 65, 30],
`

`
)

pokedex[44] =  new DadosPokedex('Gloom', ['Grama', 'Venenoso'], [60, 65, 70, 85, 75, 40],
`

`
)

pokedex[45] =  new DadosPokedex('Vileplume', ['Grama', 'Venenoso'], [75, 80, 85, 110, 90, 50],
`

`
)

pokedex[46] =  new DadosPokedex('Paras', ['Inseto', 'Grama'], [35, 70, 55, 45, 55, 25],
`

`
)

pokedex[47] =  new DadosPokedex('Parasect', ['Inseto', 'Grama'], [60, 95, 80, 60, 80, 30],
`

`
)

pokedex[48] =  new DadosPokedex('Venonat', ['Inseto', 'Venenoso'], [60, 55, 50, 40, 55, 45],
`

`
)

pokedex[49] =  new DadosPokedex('Venomoth', ['Inseto', 'Venenoso'], [70, 65, 60, 90, 75, 90],
`

`
)

pokedex[50] =  new DadosPokedex('Diglett', ['Terrestre'], [10, 55, 25, 35, 45, 95],
`

`
)

pokedex[51] =  new DadosPokedex('Dugtrio', ['Terrestre'], [35, 100, 50, 50, 70, 120],
`

`
)

pokedex[52] =  new DadosPokedex('Meowth', ['Normal'], [40, 45, 35, 40, 40, 90],
`

`
)

pokedex[53] =  new DadosPokedex('Persian', ['Normal'], [65, 70, 60, 65, 65, 115],
`

`
)

pokedex[54] =  new DadosPokedex('Psyduck', ['Água'], [50, 52, 48, 65, 50, 55],
`

`
)

pokedex[55] =  new DadosPokedex('Golduck', ['Água'], [80, 82, 78, 95, 80, 85],
`

`
)

pokedex[56] =  new DadosPokedex('Mankey', ['Lutador'], [40, 80, 35, 35, 45, 70],
`

`
)

pokedex[57] =  new DadosPokedex('Primeape', ['Lutador'], [65, 105, 60, 60, 70, 95],
`

`
)

pokedex[58] =  new DadosPokedex('Growlithe', ['Fogo'], [55, 70, 45, 70, 50, 60],
`

`
)

pokedex[59] =  new DadosPokedex('Arcanine', ['Fogo'], [90, 110, 80, 100, 80, 95],
`

`
)

pokedex[60] =  new DadosPokedex('Poliwag', ['Água'], [40, 50, 40, 40, 40, 90],
`

`
)

pokedex[61] =  new DadosPokedex('Poliwhirl', ['Água'], [65, 65, 65, 50, 50, 90],
`

`
)

pokedex[62] =  new DadosPokedex('Poliwrath', ['Água'], [90, 95, 95, 70, 90, 70],
`

`
)

pokedex[63] =  new DadosPokedex('Abra', ['Psiquico'], [25, 20, 15, 105, 55, 90],
`

`
)

pokedex[64] =  new DadosPokedex('Kadabra', ['Psiquico'], [40, 35, 30, 120, 70, 105],
`

`
)

pokedex[65] =  new DadosPokedex('Alakazam', ['Psiquico'], [55, 50, 45, 135, 95, 120],
`

`
)

pokedex[66] =  new DadosPokedex('Machop', ['Lutador'], [70, 80, 50, 35, 35, 35],
`

`
)

pokedex[67] =  new DadosPokedex('Machoke', ['Lutador'], [80, 100, 70, 50, 60, 45],
`

`
)

pokedex[68] =  new DadosPokedex('Machamp', ['Lutador'], [90, 130, 80, 65, 85, 55],
`

`
)

pokedex[69] =  new DadosPokedex('Bellsprout', ['Grama', 'Venenoso'], [50, 75, 35, 70, 30, 40],
`

`
)

pokedex[70] =  new DadosPokedex('Weepinbell', ['Grama', 'Venenoso'], [65, 90, 50, 85, 45, 55],
`

`
)

pokedex[71] =  new DadosPokedex('Victreebel', ['Grama', 'Venenoso'], [80, 105, 65, 100, 70, 70],
`

`
)

pokedex[72] =  new DadosPokedex('Tentacool', ['Água', 'Venenoso'], [40, 40, 35, 50, 100, 70],
`

`
)

pokedex[73] =  new DadosPokedex('Tentacruel',['Água', 'Venenoso'], [80, 70, 65, 80, 120, 100],
`

`
)

pokedex[74] =  new DadosPokedex('Geodude', ['Pedra', 'Terrestre'], [40, 80, 100, 30, 30, 20],
`

`
)

pokedex[75] =  new DadosPokedex('Graveler', ['Pedra', 'Terrestre'], [55, 95, 115, 45, 45, 35],
`

`
)

pokedex[76] =  new DadosPokedex('Golem', ['Pedra', 'Terrestre'], [80, 120, 130, 55, 65, 45],
`

`
)

pokedex[77] =  new DadosPokedex('Ponyta', ['Fogo'], [50, 85, 55, 65, 65, 90],
`

`
)

pokedex[78] =  new DadosPokedex('Rapidash', ['Fogo'], [65, 100, 70, 80, 80, 105],
`

`
)

pokedex[79] =  new DadosPokedex('Slowpoke', ['Água', 'Psiquico'], [90, 65, 65, 40, 40, 15],
`

`
)

pokedex[80] =  new DadosPokedex('Slowbro', ['Água', 'Psiquico'], [95, 75, 110, 100, 80, 30],
`

`
)

pokedex[81] =  new DadosPokedex('Magnemite', ['Elétrico', 'Aço'], [25, 35, 70, 95, 55, 45],
`

`
)

pokedex[82] =  new DadosPokedex('Magneton', ['Elétrico', 'Aço'], [50, 60, 95, 120, 70, 70],
`

`
)

pokedex[83] =  new DadosPokedex("Farfetch'd", ['Normal', 'Voador'], [52, 90, 55, 58, 62, 60],
`

`
)

pokedex[84] =  new DadosPokedex('Doduo', ['Normal', 'Voador'], [35, 85, 45, 35, 35, 75],
`

`
)

pokedex[85] =  new DadosPokedex('Dodrio', ['Normal', 'Voador'], [60, 110, 70, 60, 60, 110],
`

`
)

pokedex[86] =  new DadosPokedex('Seel', ['Água'], [65, 45, 55, 45, 70, 45],
`

`
)

pokedex[87] =  new DadosPokedex('Dewgong', ['Água', 'Gelo'], [90, 70, 80, 70, 95, 70],
`

`
)

pokedex[88] =  new DadosPokedex('Grimer', ['Venenoso'], [80, 80, 50, 40, 50, 25],
`

`
)

pokedex[89] =  new DadosPokedex('Muk', ['Venenoso'], [105, 105, 75, 65, 100, 50],
`

`
)

pokedex[90] =  new DadosPokedex('Shellder', ['Água'], [30, 65, 100, 45, 25, 40],
`

`
)

pokedex[91] =  new DadosPokedex('Cloyster', ['Água', 'Gelo'], [50, 95, 180, 85, 45, 70],
`

`
)

pokedex[92] =  new DadosPokedex('Gastly', ['Fantasma', 'Venenoso'], [30, 35, 30, 100, 35, 80],
`

`
)

pokedex[93] =  new DadosPokedex('Haunter', ['Fantasma', 'Venenoso'], [45, 50, 45, 115, 55, 95],
`

`
)

pokedex[94] =  new DadosPokedex('Gengar', ['Fantasma', 'Venenoso'], [60, 65, 60, 130, 75, 110],
`

`
)

pokedex[95] =  new DadosPokedex('Onix', ['Pedra', 'Terrestre'], [35, 45, 160, 30, 45, 70],
`

`
)

pokedex[96] =  new DadosPokedex('Drowzee', ['Psiquico'], [60, 48, 45, 43, 90, 42],
`

`
)

pokedex[97] =  new DadosPokedex('Hypno', ['Psiquico'], [85, 73, 70, 73, 115, 67],
`

`
)

pokedex[98] =  new DadosPokedex('Krabby', ['Água'], [30, 105, 90, 25, 25, 50],
`

`
)

pokedex[99] =  new DadosPokedex('Kingler', ['Água'], [55, 130, 115, 50, 50, 75],
`

`
)

pokedex[100] =  new DadosPokedex('Voltorb', ['Elétrico'], [40, 30, 50, 55, 55, 100],
`

`
)

pokedex[101] =  new DadosPokedex('Electrode', ['Elétrico'], [60, 50, 70, 80, 80, 150],
`

`
)

pokedex[102] =  new DadosPokedex('Exeggcute', ['Grama', 'Psiquico'], [60, 40, 80, 60, 45, 40],
`

`
)

pokedex[103] =  new DadosPokedex('Exeggutor', ['Grama', 'Psiquico'], [95, 95, 85, 125, 75, 55],
`

`
)

pokedex[104] =  new DadosPokedex('Cubone', ['Terrestre'], [50, 50, 95, 40, 50, 35],
`

`
)

pokedex[105] =  new DadosPokedex('Marowak', ['Terrestre'], [60, 80, 110, 50, 80, 45],
`

`
)

pokedex[106] =  new DadosPokedex('Hitmonchan', ['Lutador'], [50, 120, 53, 35, 110, 87],
`

`
)

pokedex[107] =  new DadosPokedex('Hitmonlee', ['Lutador'], [50, 105, 79, 35, 110, 76],
`

`
)

pokedex[108] =  new DadosPokedex('Lickitung', ['Normal'], [90, 55, 75, 60, 75, 30],
`

`
)

pokedex[109] =  new DadosPokedex('Koffing', ['Venenoso'], [40, 65, 95, 60, 45, 35],
`

`
)

pokedex[110] =  new DadosPokedex('Weezing', ['Venenoso'], [65, 90, 120, 85, 70, 60],
`

`
)

pokedex[111] =  new DadosPokedex('Rhyhorn', ['Terrestre', 'Pedra'], [80, 85, 90, 30, 30, 25],
`

`
)

pokedex[112] =  new DadosPokedex('Rhydon', ['Terrestre', 'Pedra'], [105, 130, 120, 45, 45, 40],
`

`
)

pokedex[113] =  new DadosPokedex('Chansey', ['Normal'], [250, 5, 5, 35, 105, 50],
`

`
)

pokedex[114] =  new DadosPokedex('Tangela', ['Grama'], [65, 55, 115, 100, 40, 60],
`

`
)

pokedex[115] =  new DadosPokedex('Kangaskhan', ['Normal'], [105, 95, 80, 40, 80, 90],
`

`
)

pokedex[116] =  new DadosPokedex('Horsea', ['Água'], [30, 40, 70, 70, 25, 60],
`

`
)

pokedex[117] =  new DadosPokedex('Seadra', ['Água'], [55, 65, 95, 95, 45, 85],
`

`
)

pokedex[118] =  new DadosPokedex('Goldeen', ['Água'], [45, 67, 60, 35, 50, 63],
`

`
)

pokedex[119] =  new DadosPokedex('Seaking', ['Água'], [80, 92, 65, 65, 80, 68],
`

`
)

pokedex[120] =  new DadosPokedex('Staryu', ['Água'], [30, 45, 55, 70, 55, 85],
`

`
)

pokedex[121] =  new DadosPokedex('Starmie', ['Água', 'Psiquico'], [60, 75, 85, 100, 85, 115],
`

`
)

pokedex[122] =  new DadosPokedex('Mr. Mime', ['Psiquico', 'Fada'], [40, 45, 65, 100, 120, 90],
`

`
)

pokedex[123] =  new DadosPokedex('Scyther', ['Inseto', 'Voador'], [70, 110, 80, 55, 80, 105],
`

`
)

pokedex[124] =  new DadosPokedex('Jynx', ['Gelo', 'Psiquico'], [65, 50, 35, 115, 95, 95],
`

`
)

pokedex[125] =  new DadosPokedex('Electabuzz', ['Elétrico'], [65, 83, 57, 95, 85, 105],
`

`
)

pokedex[126] =  new DadosPokedex('Magmar', ['Fogo'], [65, 95, 57, 100, 85, 93],
`

`
)

pokedex[127] =  new DadosPokedex('Pinsir', ['Inseto', 'Voador'], [65, 125, 100, 55, 70, 85],
`

`
)

pokedex[128] =  new DadosPokedex('Tauros', ['Normal'], [75, 100, 95, 40, 70, 110],
`

`
)

pokedex[129] =  new DadosPokedex('Magikarp', ['Água'], [20, 10, 55, 15, 20, 80],
`

`
)

pokedex[130] =  new DadosPokedex('Gyarados', ['Água', 'Voador'], [95, 125, 79, 60, 100, 81],
`

`
)

pokedex[131] =  new DadosPokedex('Lapras', ['Água', 'Gelo'], [130, 85, 80, 85, 95, 60],
`

`
)

pokedex[132] =  new DadosPokedex('Ditto', ['Normal'], [48, 48, 48, 48, 48, 48],
`

`
)

pokedex[133] =  new DadosPokedex('Eevee', ['Normal'], [55, 55, 50, 45, 65, 55],
`

`
)

pokedex[134] =  new DadosPokedex('Vaporeon', ['Água'], [130, 65, 60, 110, 95, 65],
`

`
)

pokedex[135] =  new DadosPokedex('Jolteon', ['Elétrico'], [65, 65, 60, 110, 95, 130],
`

`
)

pokedex[136] =  new DadosPokedex('Flareon', ['Fogo'], [65, 130, 60, 95, 110, 65],
`

`
)

pokedex[137] =  new DadosPokedex('Porygon', ['Normal'], [65, 60, 70, 85, 75, 40],
`

`
)

pokedex[138] =  new DadosPokedex('Omanyte', ['Pedra', 'Água'], [35, 40, 100, 90, 55, 35],
`

`
)

pokedex[139] =  new DadosPokedex('Omastar', ['Pedra', 'Água'], [70, 60, 125, 115, 70, 55],
`

`
)

pokedex[140] =  new DadosPokedex('Kabuto', ['Pedra', 'Água'], [30, 80, 90, 55, 45, 55],
`
Kabuto é um Pokémon que foi regenerado
a partir de um fóssil. No entanto, em
casos extremamente raros, exemplos
vivos foram descobertos. O Pokémon não
mudou em nada por 300 milhões de anos.
Este Pokémon foi extinto em praticamente
todos os lugares, exceto em algumas áreas 
específicas. Ele se protege com sua casca dura.
`
)

pokedex[141] =  new DadosPokedex('Kabutops', ['Pedra', 'Água'], [60, 115, 105, 65, 70, 80],
`
Os Kabutops nadavam debaixo d'água
para caçar suas presas nos tempos
antigos. Aparentemente, o Pokémon
estava evoluindo de morador de água
para morar em terra, como é evidente
desde o início da mudança em suas
brânquias e pernas. Na água, ele enfia os
membros para se tornar mais compacto,
depois balança a concha para nadar
rápido.
`
)

pokedex[142] =  new DadosPokedex('Aerodactyl', ['Pedra', 'Voador'], [80, 105, 65, 60, 75, 130],
`
Aerodactyl é um Pokémon da era dos
dinossauros. Foi regenerado a partir de
material genético extraído de âmbar
Imagina-se que tenha sido o rei dos céus
nos tempos antigos. Usou suas presas de
serra para rasgar suas presas antes de
comê-las. Voa com gritos agudos.
`
)

pokedex[143] =  new DadosPokedex('Snorlax', ['Normal'], [160, 110, 65, 65, 110, 30],
`
O dia típico de Snorlax consiste em nada
mais do que comer e dormir. E um
Pokémon tão dócil que há crianças que
usam sua barriga expansiva como um
lugar para brincar. Come quase 900 quilos
de comida todos os dias. Começa a
cochilar enquanto come e continua a
comer mesmo enquanto dorme. Até o
veneno de Muk não passa de uma pitada
de tempero na língua de Snorlax.
`
)

pokedex[144] =  new DadosPokedex('Articuno', ['Gelo', 'Voador'], [90, 85, 100, 95, 125, 85],
`
Articuno é um Pokémon pássaro lendário
que pode controlar o gelo. O bater de
Suas asas esfria totalmente o ar. Como
resultado, diz-se que quando este
Pokémon voa, a neve cai. Com sua cauda
longa de trás, sua forma voadora é
magnífica. Congela a água que está
contida no ar do inverno e faz nevar.
`
)

pokedex[145] =  new DadosPokedex('Zapdos', ['Elétrico', 'Voador'], [90, 90, 85, 125, 90, 100],
`
Zapdos é um Pokémon lendário de
pássaros que tem a capacidade de
controlar a eletricidade. Geralmente vive
em nuvens de trovoada. O Pokémon ganha 
poder se for atingido por raios. Diz-se 
que este Pokémon lendário pássaro aparece 
quando o céu fica escuro e os raios caem.
`
)

pokedex[146] =  new DadosPokedex('Moltres', ['Fogo', 'Voador'], [90, 100, 90, 125, 85, 90],
`
Moltres é um Pokémon pássaro lendário
que tem a capacidade de controlar o
fogo. Se este Pokémon for ferido, é dito
que ele mergulha seu corpo no magma
derretido de um vulcão para queimar e
curar a si próprio. Diz-se que este
lendário Pokémon traz o início da
primavera para as terras invernais que o
visita. Moltres espalha brasas a cada
batida de suas asas. E uma visão
emocionante de se ver!
`
)

pokedex[147] =  new DadosPokedex('Dratini', ['Dragão'], [41, 64, 45, 50, 50, 50],
`
Dratini muda constantemente e descama
sua pele velha. Faz isso porque a energia
da vida dentro de seu corpo aumenta
constantemente para atingir níveis
incontroláveis. Após uma luta de 10
horas, um pescador foi capaz de puxá-lo
e confirmar sua existência no mundo
Pokémon.
`
)

pokedex[148] =  new DadosPokedex('Dragonair', ['Dragão'], [61, 84, 65, 70, 70, 70],
`
Dragonair armazena uma enorme
quantidade de energia dentro de seu
corpo. Diz-se que altera as condições
climáticas nas proximidades,
descarregando energia dos cristais no
pescoço e na cauda. Diz-se que vive em
mares e lagos. Mesmo que não tenha
asas, foi visto voando ocasionalmente.
`
)

pokedex[149] =  new DadosPokedex('Dragonite', ['Dragão', 'Voador'], [91, 134, 95, 100, 100, 80],
`
Dragonite é capaz de circular o globo em
apenas 16 horas. E um Pokémon de bom
coração que leva navios perdidos e
afundando em uma tempestade à
segurança da terra. Diz-se que sua
inteligência corresponde à dos humanos.
`
)

pokedex[150] =  new DadosPokedex('Mewtwo', ['Psiquico'], [106, 110, 90, 154, 90, 130],
`
Mewtwo é um Pokémon que foi criado por
manipulação genética. No entanto,
embora o poder científico dos humanos
tenha criado o corpo desse Pokémon, eles
não conseguiram dotar Mewtwo de um
coração compassivo. Como suas
habilidades de batalha foram elevadas ao
nível máximo, ele pensa apenas em
derrotar seus inimigos, independente de
quem seja.
`
)

pokedex[151] =  new DadosPokedex('Mew', ['Psiquico'], [100, 100, 100, 100, 100, 100],
`
Diz-se que Mew possui a composição
genética de todos os Pokémon. Ele é
capaz de se tornar invisível à vontade, por
isso evita a percepção, mesmo que se
aproxime das pessoas. Quando é visto
detalhadamente através de um microscópio, 
os cabelos curtos, finos e delicados 
deste Pokémon mítico podem ser vistos.
`
)

export default pokedex