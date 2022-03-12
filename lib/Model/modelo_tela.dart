import 'package:flutter/material.dart';
import 'elementos_tela.dart';

modeloTela(context, teste) {
  return SafeArea(
    child: Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Expanded(
          flex: 2,
          child: teste,
        ),
        Expanded(
          child: Container(
            constraints: BoxConstraints(
              maxHeight: double.infinity,
            ),
            color: Color(0xff222222),
            width: double.infinity,
            child: Padding(
              padding: const EdgeInsets.all(20),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  Column(
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                      botaoNavegacao(context, Icon(Icons.keyboard_arrow_up, color: Color(0xff222222)),),
                      botaoNavegacao(context, Icon(Icons.keyboard_arrow_down, color: Color(0xff222222)),),
                    ],
                  ),
                  Column(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: [ 
                      botaoNavegacao(context, Icon(Icons.keyboard_arrow_up, color: Color(0xff222222)),),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                        children: [
                          botaoNavegacao(context, Icon(Icons.keyboard_arrow_left, color: Color(0xff222222)),),
                          pularLado(60),
                          botaoNavegacao(context, Icon(Icons.keyboard_arrow_right, color: Color(0xff222222)),),
                        ],
                      ),
                      botaoNavegacao(context, Icon(Icons.keyboard_arrow_down, color: Color(0xff222222)),),
                    ]
                  ),
                ],
              ),
            )
          )
        ),
      ],
    ),
  );
}