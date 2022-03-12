import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

pularLinha(double pular) {
  return SizedBox(height: pular,);
}

pularLado(double pular) {
  return SizedBox(width: pular,);
}

botaoNavegacao(context, Icon icone) {
  return CircleAvatar(
    radius: 30,
    backgroundColor: Color(0xFF444444),
    child: GestureDetector(
      child: icone,
      //onTap: () => Navigator.pushNamed(context, ''),
    ),
  );
}

caixaDeTexto(String texto, TextAlign alinharTexto, double tamanhoFonte) {
  return Text(
    texto, 
    textAlign: alinharTexto,
    style: TextStyle(
      shadows: <Shadow> [
        Shadow(
          color: Color(0xffd9d6d2),
          offset: Offset(2, 2),
        ),
      ],
      fontFamily: 'pokemon',
      color: Color(0xff636163),
      fontSize: tamanhoFonte,
    ),
  );
}

caixaDePressionar(context, String texto, String nomePagina, TextAlign alinharTexto) {
  return GestureDetector(
    child: Container(
      width: 300,
      height: 100,
      decoration: BoxDecoration(
        color: Color(0xfffffbff),
        border: Border(
          left: BorderSide(
            color: Color(0xff8988ca),
            width: 8,
          ),
          top: BorderSide(
            color: Color(0xff8988ca),
            width: 8,
          ),
          right: BorderSide(
            color: Color(0xff6f6681),
            width: 8,
          ),
          bottom: BorderSide(
            color: Color(0xff6f6681),
            width: 8,
          ),
        ),
      ),
      child: Align(
        alignment: Alignment.center,
        child: caixaDeTexto(texto, alinharTexto, 50),
      ),
    ),
    onTap: () => Navigator.pushNamed(context, nomePagina),
  );
}

botaoSemBordaSair(String texto, int corTexto, BuildContext context, String fontes) {
  return Container(
    child: TextButton(
      child: Text(
        texto, // texto que sera exibido
        style: TextStyle(
          fontFamily: 'pokemon',
          color: Color(0xff636163),
        ),
      ),
    onPressed: () => Navigator.pop(context), // OnPressed genérico
    ),
  );
}

caixaDeTextoNegrito(String texto, int corTexto, double tamanhoFonte, TextAlign ajustar, String fontes) {
  return Container(
    child: Text(
      texto, // texto que sera exibido
      textAlign: ajustar, // como ele será ajustado. ex: centro, direita, esquerda, topo direita, etc...
      style: TextStyle(
        fontFamily: 'pokemon',
        fontWeight: FontWeight.bold,
        color: Color(0xff636163),
      ),
    ),
  );
}

divisao(int corLinha, double alturaLinha, double grossuraLinha, double indentacaoLinha) {
  return Container(
    child: Divider(
      color: Color(corLinha), // cor da linha
      height: alturaLinha, // altura da linha
      thickness: grossuraLinha, // grossura da linha
      indent: indentacaoLinha, // identação no começo
      endIndent: indentacaoLinha, // identação no final
    ),
  );
}
