import 'package:flutter/material.dart';
import 'package:projeto_pokemon/Model/elementos_tela.dart';
import 'package:projeto_pokemon/Model/modelo_tela.dart';
import 'package:projeto_pokemon/Controller/dados.dart';

class tela_menu extends StatefulWidget {
  const tela_menu({ Key? key }) : super(key: key);

  @override
  _tela_menuState createState() => _tela_menuState();
}

class _tela_menuState extends State<tela_menu> {

  telaSuperior() {
    return Container(
      width: double.infinity,
      color: Color(corPrimaria),
      child: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: <Widget>[
            caixaDeTexto('MENU', TextAlign.center, 50),
            pularLinha(30),
            caixaDePressionar(context, 'NOVO JOGO', 'temas', TextAlign.center),
            caixaDePressionar(context, '+', 'temas', TextAlign.center),
          ],
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color(0xff222222),
      body: modeloTela(context, telaSuperior(),),
    );
  }
}