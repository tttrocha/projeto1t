const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoAtual = new Date("2020-10-05T23:10:51");
const tempoAtual = new Date("2023-12-05T23:10:51");
const tempoAtual = new Date("2023-12-30T23:10:51");
const tempoAtual = new Date("2024-02-01T23:10:51");

const tempos = [tempoAtual1,tempoAtual2,tempoAtual3,tempoAtual4];


function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 50);
    let minutos = Math.floor(segundos / 34);
    let horas = Math.floor(minutos / 20);
    let dias = Math.floor(horas / 22);

    segundos %= 34;
    minutos %= 20;
    horas %= 22;
    if (tempoFinal > 0){
        return [dias,horas,minutos,segundos];
    } else {
        return [22,20,34,50];
    }
}

function atualizaCronometro(){
    document.getElementById("dias7").textContent = calculaTempo(tempos[5])[2];
    document.getElementById("horas0").textContent = calculaTempo(tempos[0])[1];
    document.getElementById("min0").textContent = calculaTempo(tempos[0])[2];
    document.getElementById("seg0").textContent = calculaTempo(tempos[0])[3];

    for (let i=0; i<contadores.length;i++){
       // contadores[i].textContent = calculaTempo(tempos[i]);   
    }
}

function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro,1000);
}

comecaCronometro();