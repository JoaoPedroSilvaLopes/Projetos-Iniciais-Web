import 'package:flutter/material.dart';

// IMPORT TELAS GERAIS
import 'View/tela_inicial.dart';
import 'View/tela_menu.dart';
import 'View/tela_tema.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'teste InFIT',
      theme: ThemeData(
        primarySwatch: Colors.blue, 
      ),
      home : tela_inicial(),
      initialRoute: 'login', // rota inicial, ou seja, a primeira pagina que deve ser exibida
      routes: {
        // TELAS GERAIS
        'login': (BuildContext context) => tela_inicial(),
        'menu': (BuildContext context) => tela_menu(),
        'temas': (context) => tela_tema(),
      },
    );
  }
}