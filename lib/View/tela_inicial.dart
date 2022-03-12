import 'package:flutter/material.dart';
import 'package:projeto_pokemon/Model/elementos_tela.dart';
import 'package:projeto_pokemon/Model/modelo_tela.dart';

// ignore: must_be_immutable
class tela_inicial extends StatefulWidget {


  @override
  _tela_inicialState createState() => _tela_inicialState();
}

class _tela_inicialState extends State<tela_inicial> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color(0xff222222),
      body: GestureDetector(
        child: modeloTela(context, telaSuperior()),
        onTap: () => Navigator.pushNamed(context, 'menu'),
      ),
    );
  }
}

telaSuperior() {
  return Container(
    width: double.infinity,
    decoration: BoxDecoration(
      image: DecorationImage(
        image: AssetImage('assets/imagens/pokemonBackground.png'),
        fit: BoxFit.fill,
      ),
    ),
    child: Padding(
      padding: const EdgeInsets.all(20),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          caixaDeTexto('POKéMON\nSIMULADOR DE BATALHA', TextAlign.center, 50),
          caixaDeTexto('PRESSIONE PARA INICIAR', TextAlign.center, 40),
        ],
      ),
    ),
  );
}
