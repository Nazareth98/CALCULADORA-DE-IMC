function calcular() {
    let altura = Number(document.getElementById("altura").value) * 100
    let peso = Number(document.getElementById("peso").value)
    let resultado = document.getElementById("resultado")
    let info = document.getElementById("info")
    let res

    if (altura == "" || peso == "") {
        alert("Todos os campos precisam estar preenchidos")
    } else {
        res = peso / (altura * altura)
        let imc = (res * 10000).toFixed(1)
        info.classList.add("hide")

        if (imc < 18.5) {
            resultado.innerHTML +=
                `<div id="resultado" class="container-info info">
            <div class="subtitle">
                <p>⚠️ Sinto muito, seu IMC atual é de <span>${imc}kg/m<sup>2</sup></span> e você precisa ganhar peso. </p>
            </div>
            <div class="linhaHorizontal"></div>

            <div>
                <p>Para ganhar peso de forma saudável e sem ganhar barriga, você deve continuar praticando atividade física, aumentar o volume das refeições e comer a cada 3 horas. Para isso, você deve aumentar o consumo de alimentos integrais e fontes de proteína, como carnes magras, peixes, ovos, arroz integral, feijão e aveia.</p>
            </div>
            </div>`

        } else if (imc >= 18.5 && imc < 24.9) {
            resultado.innerHTML +=
                `<div id="resultado" class="container-info info">
            <div class="subtitle">
                <p>💹 Parabéns, seu IMC atual é <span>${imc}kg/m<sup>2</sup></span> e você está dentro do peso adequado!</p>
            </div>
            <div class="linhaHorizontal"></div>

            <div>
                <p>Continue tendo cuidado com a alimentação e praticando atividade física regularmente para manter o peso e prevenir doenças.</p>
            </div>
            </div>`


        } else if (imc >= 24.9 && imc < 30) {
            resultado.innerHTML += `<div id="resultado" class="container-info info">
            <div class="subtitle">
                <p>⚠️ Sinto muito, seu IMC atual é <span>${imc}kg/m<sup>2</sup></span> por isso você está acima do peso.</p>
            </div>
            <div class="linhaHorizontal"></div>

            <div>
                <p>Para emagrecer com saúde é importante comer mais frutas e verduras além de praticar exercício físico entre 2 e 3 vezes por semana.<br> Você deve ainda falar com seu médico para fazer exames de sangue para saber se o seu colesterol e triglicerídeos estão bem. Um nutricionista também pode te ajudar a emagrecer comendo bem, mas além da dieta é também importante fazer exercícios físicos bem orientado por um preparador físico para emagrecer mais rápido.</p>
            </div>
            </div>`
        } else if (imc >= 30) {
            resultado.innerHTML += `<div id="resultado" class="container-info info">
            <div class="subtitle">
                <p>⚠️ Sinto muito, seu IMC atual é <span>${imc}kg/m<sup>2</sup></span> por isso você está acima do peso.</p>
            </div>

            <div class="linhaHorizontal"></div>

            <div>
                <p>Para emagrecer com saúde é importante comer mais frutas e verduras além de praticar exercício físico entre 2 e 3 vezes por semana.<br> Você deve ainda falar com seu médico para fazer exames de sangue para saber se o seu colesterol e triglicerídeos estão bem. Um nutricionista também pode te ajudar a emagrecer comendo bem, mas além da dieta é também importante fazer exercícios físicos bem orientado por um preparador físico para emagrecer mais rápido.</p>
            </div>
            </div>`
        }
        resultado.classList.remove("hide")
    }
}

function limpar() {
    document.getElementById("altura").value = ""
    document.getElementById("peso").value = ""
}
