const diviniciar = document.getElementById("diviniciar")
const diviareajogo = document.getElementById("areajogo")

const perguntas = [
    "Qual é o maior deserto do mundo?",
    "Qual é a capital do Brasil?",
    "Qual é a capital da Austrália?",
    "Qual é o país com maior população no mundo?",
    "Qual a linha imaginária que atravessa o Brasil?",
    "Qual o oceano que banha o Brasil?",
]

let indicedeperguntas = 0
let botaodepergunta = document.createElement("button")

function iniciarjogo(){
    fecharbotaoinicio()
    abrirareajogo()
}

function fecharbotaoinicio() {
    diviniciar.innerHTML = ""
}

function abrirareajogo(){
    diviareajogo.classList.add("active")

   botaodepergunta.textContent = perguntas[indicedeperguntas]
   botaodepergunta.classList.add("answer-btn")
   areaperguntas.appendChild(botaodepergunta)
}

function proximapergunta(){
    indicedeperguntas++
    if(indicedeperguntas < perguntas.length)
    abrirareajogo()
    else
    alert("não existe mais perguntas")
}