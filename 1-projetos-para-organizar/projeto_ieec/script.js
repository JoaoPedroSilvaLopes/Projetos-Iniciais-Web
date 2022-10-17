let resultado = document.getElementById("resposta")

function acharTensao(modoResolucao) {
    const corrente = document.getElementById("correnteT").value.replace(",", ".")
    const resistenciasArray = document.getElementById("resistenciaT").value

    if (corrente === "" || resistenciasArray === "") {
        return window.alert("Insira a corrente e a(s) resistencia(s)")
    }

    const [resistenciaTotal, resistenciasParciais] = calculaResistencias(modoResolucao, resistenciasArray)
    const tensao = (corrente * resistenciaTotal).toFixed(2)

    resultado.innerHTML = `
    VALORES TOTAIS <br>
    Tensao: ${tensao} V <br>
    Resistencia Total: ${resistenciaTotal} Ω <br>
    Corrente: ${corrente} A <br>
    ===================================== <br>
    VALORES PARCIAIS <br>

    `

    gerarValoresParciais(modoResolucao, tensao, corrente, resistenciasParciais)
}

function acharCorrente(modoResolucao) {
    const tensao = document.getElementById("tensaoC").value.replace(",", ".")
    const resistenciasArray = document.getElementById("resistenciaC").value

    if (tensao === "" || resistenciasArray === "") {
        return window.alert("Insira a tensao e a(s) resistencia(s)")
    }

    const [resistenciaTotal, resistenciasParciais] = calculaResistencias(modoResolucao, resistenciasArray)
    const corrente = (tensao / resistenciaTotal).toFixed(2)

    resultado.innerHTML = `
    VALORES TOTAIS <br>
    Tensao: ${tensao} V <br>
    Resistencia Total: ${resistenciaTotal} Ω <br>
    Corrente: ${corrente} A <br>
    ===================================== <br>
    VALORES PARCIAIS <br>

    `

    gerarValoresParciais(modoResolucao, tensao, corrente, resistenciasParciais)
}

function acharResistencia() {
    const corrente = document.getElementById("correnteR").value.replace(",", ".")
    const tensao = document.getElementById("tensaoR").value.replace(",", ".")

    if (tensao === "" || corrente === "") {
        return window.alert("Insira a tensao e a corrente")
    }

    const resistenciaTotal = (tensao / corrente).toFixed(2)

    resultado.innerHTML = `
    VALORES TOTAIS <br>
    Tensao: ${tensao} V <br>
    Resistencia Total: ${resistenciaTotal} Ω <br>
    Corrente: ${corrente} A <br>

    `
}

function calculaResistencias(modoResolucao, listaResistencias) {
    let resistenciaTotal = 0
    let resistenciasArray = listaResistencias.split(",")

    if (modoResolucao == 1) {
        for (let i of resistenciasArray) {
            resistenciaTotal = Number(i) + resistenciaTotal
        }
        return [resistenciaTotal.toFixed(2), resistenciasArray]
    }
    else {
        for (let i of resistenciasArray) {
            resistenciaTotal = (1 / Number(i)) + resistenciaTotal
        }
        return [(1 / resistenciaTotal).toFixed(2), resistenciasArray]
    }
}

function gerarValoresParciais(modoResolucao, tensao, corrente, resistenciasParciais) {
    if (modoResolucao == 1) {
        for (let i = 0; i < resistenciasParciais.length; i++) {
            let tensaoParcial = (corrente * resistenciasParciais[i]).toFixed(2)
            resultado.innerHTML = resultado.innerHTML + `Resistência R${i + 1}: ${resistenciasParciais[i]} Ω || Corrente I${i + 1}: ${corrente} A  || Tensão E${i + 1}: ${tensaoParcial} V<br>`
        }
    }
    else {
        for (let i = 0; i < resistenciasParciais.length; i++) {
            let correnteParcial = (tensao / resistenciasParciais[i]).toFixed(2)
            resultado.innerHTML = resultado.innerHTML + `Resistência R${i + 1}: ${resistenciasParciais[i]} Ω || Corrente I${i + 1}: ${correnteParcial} A  || Tensão E${i + 1}: ${tensao} V<br>`
        }
    }
}