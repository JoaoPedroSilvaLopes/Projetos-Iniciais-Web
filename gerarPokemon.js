import { Pokedex } from "./dadosPokemon";

/*
Classe para gerar dados específicos e mutáveis das espécies 
dos pokémons como: nome, IVS, natures, nivel e experiencia.
*/

class GerarPokemon {

    constructor(idPokedex, nome, nivel, experiencia, nature, ivs) {
        this.idPokedex = idPokedex
        this.nome = nome
        this.nivel = nivel
        this.experiencia = experiencia
        this.nature = nature//this.gerarNature
        this.ivs = ivs//this.gerarIVS

        let dadosPokemon = Pokedex.find(function(dadosPokemon) {return idPokedex == Pokedex.numeroPokedex})

        console.log(
            `Nº Pokedex: ${dadosPokemon.numeroPokedex}
            Espécie: ${dadosPokemon.especie}
            Tipo: [${dadosPokemon.tipo[0]}][${dadosPokemon.tipo[1]}]
            Descrição: ${dadosPokemon.descrição}
            
            Nome: ${nome}
            Nivel: ${nivel}
            Experiência: ${experiencia}
            Nature: ${nature}
            IVS: ${ivs}
            `
        )
    }

    gerarIVS() {
        let rng = Math.random() * 32

        ivs = new Array(6)

        for (var posicoesIVS of ivs) {
            posicoesIVS = rng
            console.log(posicoesIVS)
        }

        console.log(ivs)
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


/*void main() {
    Types("Dragão", "Fantasma");
  }
  
  class Types {
  
    final vetorTipos = [
      "Normal", "Lutador", "Voador", "Venenoso", "Terrestre", "Pedra", "Inseto", "Fantasma", "Aço", 
      "Fogo", "Água", "Grama", "Elétrico", "Psiquico", "Gelo", "Dragão", "Noturno", "Fada"];
  
    final vetoresFraquezas = [
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
  
    String tipoPrimario, tipoSecundario;
  
    Types (this.tipoPrimario, this.tipoSecundario) {
      vantagensEdesvantagens(tipoPrimario, tipoSecundario);
    }
  
    vantagensEdesvantagens (String tipoPrimario, String tipoSecundario) {
  
      var vetorTipoPrimario = [];
      var vetorTipoSecundario = [];
  
      String imunidades = "";
      String resistencias = "";
      String danoNormal = "";
      String fraquezas = "";
  
      for (var i = 0; i < vetorTipos.length; i++) {
  
        if (tipoPrimario == vetorTipos[i]) {
          vetorTipoPrimario = vetoresFraquezas[i];
        }
  
        else if (tipoSecundario == vetorTipos[i]) {
          vetorTipoSecundario = vetoresFraquezas[i];
        }
  
      }
  
      for (var i = 0; i < vetorTipoPrimario.length; i++) {
  
        vetorTipoPrimario[i] = vetorTipoPrimario[i] * vetorTipoSecundario[i];
  
        if (vetorTipoPrimario[i] >= 2.0) {
          fraquezas = fraquezas + " | " + vetorTipos[i].toString() + " " + vetorTipoPrimario[i].toString() + "x";
        }
  
        else if (vetorTipoPrimario[i] == 1) {
          danoNormal = danoNormal + " | " + vetorTipos[i].toString() + " " + vetorTipoPrimario[i].toString() + "x";
        }
  
        else if (vetorTipoPrimario[i] == 0) {
          imunidades = imunidades + " | " + vetorTipos[i].toString() + " " + vetorTipoPrimario[i].toString() + "x";
        }
  
        else {
          resistencias = resistencias + " | " + vetorTipos[i].toString() + " " + vetorTipoPrimario[i].toString() + "x";
        }
  
      }
  
      //print("DANO NORMAL: " + danoNormal);
      //print("FRAQUEZAS: " + fraquezas);
      //print("IMUNIDADES: " + imunidades);
      //print("RESISTÊNCIAS: " + resistencias);
  
    }
  
  }*/