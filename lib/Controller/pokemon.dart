import 'dart:math';
import 'types.dart';

void main() {
  Pokemon("Charizarda", "Charizard", "Tímido", 30, 255, [100, 100, 100, 100, 100, 100], ["Fantasma", "Dragão"]);
}

class Pokemon {

  String nome, especie, nature;
  int nivel, experiencia;
  var ivs = [];
  var status = [];
  var tipo = [];

  Pokemon (this.nome, this.especie, this.nature, this.nivel, this.experiencia, this.status, this.tipo) {

    //print("pokemon teste tipagem: " + tipo[0] + "/" + tipo[1]);

    Types(tipo[0], tipo[1]);
    gerarIVS();
    gerarNature();

    //print(ivs);
    //print(nature);
  }

  gerarIVS() {
    var rng = Random();
    ivs = List.generate(6, (_) => rng.nextInt(32));
  }

  gerarNature() {
    var vetorNatures = 
    [
      ["Hardy", status[0], status[0]], ["Docile", status[0], status[0]], ["Bashful", status[0], status[0]], ["Quirky", status[0], status[0]], ["Serious", status[0], status[0]],
      ["Adamant", status[1] * 1.10, status[3] * 0.90], ["Lonely", status[1] * 1.10, status[2] * 0.90], ["Naughty", status[1] * 1.10, status[4] * 0.90], ["Brave", status[1] * 1.10, status[5] * 0.90],
      ["Modest", status[3] * 1.10, status[1] * 0.90], ["Mild", status[3] * 1.10, status[2] * 0.90], ["Rash", status[3] * 1.10, status[4] * 0.90], ["Quiet", status[3] * 1.10, status[5] * 0.90],
      ["Bold", status[2] * 1.10, status[1] * 0.90], ["Impish", status[2] * 1.10, status[3] * 0.90], ["Lax", status[2] * 1.10, status[4] * 0.90], ["Relaxed", status[2] * 1.10, status[5] * 0.90],
      ["Calm", status[4] * 1.10, status[1] * 0.90], ["Careful", status[4] * 1.10, status[3] * 0.90], ["Gentle", status[4] * 1.10, status[2] * 0.90], ["Sassy", status[4] * 1.10, status[5] * 0.90],
      ["Timid", status[5] * 1.10, status[1] * 0.90], ["Jolly", status[5] * 1.10, status[3] * 0.90], ["Hasty", status[5] * 1.10, status[2] * 0.90], ["Naive", status[5] * 1.10, status[4] * 0.90]
    ];

    var rng = Random();
    int teste = rng.nextInt(25);

    nature = vetorNatures[teste][0];

    //print("Status: \nHP: " + status[0].toString() + "\nATK: " + status[1].toString() + "\nDEF: " + status[2].toString() + "\nSATK: " + status[3].toString() + "\nSDEF: " + status[4].toString() + "\nSPEED: " + status[5].toString());
    
  }


  batalhar() {}

  evoluir() {}

  curar() {}

  subirNivel() {}

}