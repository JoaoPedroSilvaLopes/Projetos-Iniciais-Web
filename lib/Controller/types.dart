
void main() {
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

}
