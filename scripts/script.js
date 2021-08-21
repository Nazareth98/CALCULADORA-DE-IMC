// inserir altura
// inserir peso
// botão para calcular

// apresentar dados sobre o IMC
// após calcular, mostrar "diagnóstico"



function calcular() {
    let height = Number(document.getElementById("height").value)*100
    let weight = Number(document.getElementById("weight").value)
    let resultado = document.getElementById("resultado")
    let info = document.getElementById("info")
    let res 
    
    if (height == "" || weight == "") {
        alert("Todos os campos precisam estar preenchidos")
    } else {
        res = weight / (height * height)
        let imc = (res*10000).toFixed(1)
        info.classList.add("hide")
        
        if (imc < 18.5) {
            resultado.innerHTML += `<p class="info normal">Sinto muito, seu IMC atual é de <strong>${imc}kg/m<sup>2</sup></strong> e você precisa ganhar peso. <br>
            De acordo com a sua altura e idade, o seu peso deveria ser no mínimo 53 kg. Assim, para ganhar peso de forma saudável e sem ganhar barriga, você deve continuar praticando atividade física, aumentar o volume das refeições e comer a cada 3 horas. Para isso, você deve ingerir cerca de 2536 kcal por dia e aumentar o consumo de alimentos integrais e fontes de proteína, como carnes magras, peixes, ovos, arroz integral, feijão e aveia.</p>`
        } else if (imc >= 18.5 && imc < 24.9) {
            resultado.innerHTML += `<p class="info normal">Parabéns, seu IMC atual é <strong>${imc}kg/m<sup>2</sup></strong> e você está dentro do peso adequado!<br>
            De acordo com a sua altura e idade, o seu peso pode variar entre 56 kg e 75 kg, por isso continue tendo cuidado com a alimentação e praticando atividade física regularmente para manter o peso e prevenir doenças.</p>`        
        } else if (imc >= 24.9 && imc < 30) {
            resultado.innerHTML += `<p class="info normal">Sinto muito, seu IMC atual é <strong>${imc}kg/m<sup>2</sup></strong> por isso você está acima do peso.<br>
            O seu peso ideal pode variar entre 53 kg e 72 kg por isso para emagrecer com saúde é importante comer mais frutas e verduras além de praticar exercício físico entre 2 e 3 vezes por semana.<br> Você deve ainda falar com seu médico para fazer exames de sangue para saber se o seu colesterol e triglicerídeos estão bem. Um nutricionista também pode te ajudar a emagrecer comendo bem, mas além da dieta é também importante fazer exercícios físicos bem orientado por um preparador físico para emagrecer mais rápido.</p>`
        } else if (imc >= 30){
            resultado.innerHTML += `<div id="resultado" class="container-info info">
            <div class="subtitle">
                <p>Sinto muito, seu IMC atual é ${imc}kg/m<sup>2</sup> por isso você está acima do peso.</p>
            </div>

            <div class="linhaHorizontal"></div>

            <div>
                <p>O seu peso ideal pode variar entre 53 kg e 72 kg por isso para emagrecer com saúde é importante comer mais frutas e verduras além de praticar exercício físico entre 2 e 3 vezes por semana.<br> Você deve ainda falar com seu médico para fazer exames de sangue para saber se o seu colesterol e triglicerídeos estão bem. Um nutricionista também pode te ajudar a emagrecer comendo bem, mas além da dieta é também importante fazer exercícios físicos bem orientado por um preparador físico para emagrecer mais rápido.</p>
            </div>
            </div>`
        }


        
        resultado.classList.remove("hide")
    }
}


