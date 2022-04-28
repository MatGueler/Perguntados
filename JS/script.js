// VARIAVEIS GLOBAIS
let pontuacaojogadores = [];
let jogadorSorteado;
let elementoSorteado;
let listaJogadores = []
let jogadoresAtualizados = listaJogadores
let listaObjetos = []
let limiteJogadas;

// LISTA PRENDAS

let respostas = ["3 a 5 litros",
"Rene Descartes",
"Brasil",
"Vaticano",
"Russia",
"Joao Goulart",
"Dom Quixote",
"Infinitas",
"14",
"7 de setembro",
"Novembro",
"20 de novembro",
"8 minutos aproximadamente",
"Argentino",
"Caipora",
"Pico da neblina(3.014 metros)",
"300.000.000metros por segundo",
"Nicolau Maquiavel",
"Eu caibo",
"9",
"Elefante",
"Eu tenho um sonho(I have a dream)",
"Margaret Thatcher",
"Neil Armstrong",
"1969",
"Alexander Fleming",
"O(-)",
"Cromossomo Y(masculino - XY)",
"Uma loba",
"Camberra",
"Ancara",
"Museu do Louvre",
"Arterias",
"Mercurio",
"5",
"Pisa, Italia",
"Kryptonita",
"Avestruz",
"Bambu",
"206 ossos",
"Jupter",
"24 horas",
"Thomas Edison",
"Roma",
"Republica Dominicana",
"Peru",
"Gregos",
"Edvard Munch",
"Leonardo Da Vinci",
"Michelangelo",
"Matusalem, 969 anos",
"Au",
"Gas Carbonico(CO2)",
"Arquipelago Malaio",
"Quito",
"Madri",
"Alcateia",
"1,68 metros",
"Arabe",
"Asia",
"5",
"1989",
"Austriaco",
"Frances",
"Tiradentes",
"Otawa",
"Nilo",
"Australia",
"7 cores",
"1997",
"Liverpool",
"Toy Story",
"A branca de neve",
"26 e o Distrito Federal",
"Boa vista",
"Porto Velho",
"Rio Branco",
"Maceio",
"Aracaju"
]


let prendas = ['Normalmente, quantos litros de sangue uma pessoa tem?',
'De quem  a famosa frase Penso, logo existo?',
'De onde  a inveno do chuveiro eltrico?',
'Qual o menor pas do mundo?',
'Qual o maior pas do mundo?',
'Qual o nome do presidente do Brasil que ficou conhecido como Jango?',
'Qual o livro mais vendido no mundo a seguir  Bblia?',
'Quantas casas decimais tem o nmero pi?',
'Qual o nmero mnimo de jogadores em campo numa partida de futebol?',
'Em que ms  comemorada a independncia do Brasil?',
'Em que ms  comemorada a proclamao da repblica?',
'Qual  a data em que se comemora o dia nacional da conscincia negra?',
'Quanto tempo a luz do Sol demora para chegar  Terra?',
'Qual a nacionalidade de Che Guevara?',
'Qual personagem do folclore costuma ser agradado pelos caadores com a oferta de fumo?',
'Qual a montanha mais alta do Brasil?',
'Qual a velocidade da luz?',
'Quem  o autor de O Prncipe?',
'Como  a conjugao do verbo caber na 1. pessoa do singular do presente do indicativo?',
'Quantos planetas tem o sistema solar?',
'Qual o maior animal terrestre?',
'Qual o nome do famoso discurso de Martin Luther King?',
'Que lder mundial ficou conhecida como Dama de Ferro?',
'Quem foi o primeiro homem a pisar na Lua? ',
'Em que ano o homem pisou na Lua?',
'Quem descobriu a penicilina?',
'As pessoas de qual tipo sanguneo so consideradas doadores universais?',
'Quais so os cromossomos que determinam o sexo masculino?',
'Quem amamentou os gmeos Rmulo e Remo?',
'Qual a capital da Austrlia?',
'Qual a capital da Turquia?',
'No exterior de que famoso edifcio francs foi construda uma enorme pirmide de vidro em 1989?',
'Como se chamam os vasos que transportam sangue do corao para a periferia do corpo?',
'Qual o planeta mais prximo do Sol?',
'Quantos continentes existem?',
'Onde fica a torre de Pisa?',
'Qual a fraqueza do super-homem?',
'Que animal pe o maior ovo?',
'O que os pandas comem?',
'Quantos ossos temos no nosso corpo?',
'Qual o maior planeta do sistema solar?',
'Quanto tempo a Terra demora para dar uma volta completa em torno dela mesma?',
'Quem inventou a lmpada?',
'Qual a capital do pas que tem o formato de uma bota?',
'Onde se localiza Punta Cana?',
'Onde se localiza Machu Picchu?',
'Que povo se beneficiou do cavalo de Tria?',
'Quem pintou o grito?',
'Quem pintou a Mona Lisa?',
'Quem pintou o teto da capela sistina?',
'De acordo com a bblia quem foi a pessoa que viveu mais tempo?',
'Qual o smbolo qumico do ouro?',
'Que substncia  absorvida pelas plantas e expirada por todos os seres vivos?',
'Qual  o maior arquiplago da Terra?',
'Qual a capital do Equador?',
'Qual a capital da Espanha?',
'O que um grupo de Lobos ?',
'Qual a altura de Napoleo Bonaparte',
'Qual  o idioma oficial do Egito?',
'Qual  o maior continente em extenso?',
'Quantas vogais h na palavra pesqueiro?',
'Em que ano foi destrudo o Muro de Berlim?',
'Qual a nacionalidade de Adolf Hitler?',
'Qual a nacionalidade de Napoleo Bonaparte?',
'O que comemora no feriado do dia 21 de abril no Brasil?',
'Qual a capital do Canad?',
'Qual  o rio mais longo do mundo?',
'Qual  o pas do Coala?',
'Quantas cores tem o arco-ris?',
'Quando a Netflix foi fundada?',
'De qual cidade vieram os Beatles?',
'Qual o nome do primeiro filme da Pixar?',
'Qual o nome do primeiro filme da Disney?',
'Quantos estados o Brasil tem?',
'Qual a capital de Roraima?',
'Qual a capital de Rondonia',
'Qual a capital do Acre?',
'Qual a capital de Alagoas?',
'Qual a capital do Sergipe?'
]




function iniciar() {
    let querJogar = document.querySelector("body")
    querJogar.innerHTML =
        `
    <main class = "pergunta-comecar">
        <div class = "caixa-iniciar">
        <h1>Quer começar?</h1>
        <button class = "botao-jogar" onclick = "perguntarJogadores()">Vamos lá</button>
        </div>
    </main>
    `
}

function telaInicial() {
    let abrirTelaInicial = document.querySelector("body")
    abrirTelaInicial.innerHTML = `
    <main>
        <div class="caixa-jogador">
        </div>
        <div class="container">
            <div class="caixa-carta" onclick="girarCarta()">
                <div class="frente face">
                    <!-- <h1>Frente</h1> -->
                    <img src="./Logo_MATEUS.png">
                </div>
                <div class="verso face">
                    <h1></h1>
                </div>
            </div>
            <div class="botoes-feito desativar">
                <button class="feito" onclick="responder(1)">Acertou</button>
                <button class="bebeu" onclick="responder(0)">Errou</button>
            </div>
        </div>
        <div class="resposta desativar"></div>
    </main>
    `
    sortearJogador()
}

function sortearJogador() {
    if (listaObjetos.length <= (prendas.length - limiteJogadas)) {
        mostrarRanking()
        alert("Você finalizou as perguntas")
    }
    else{
        if (jogadoresAtualizados.length === 0) {
            jogadoresAtualizados = listaJogadores
        }
        jogadorSorteado = jogadoresAtualizados[Math.floor(Math.random() * jogadoresAtualizados.length)]
        let caixaJogador = document.querySelector(".caixa-jogador")
        caixaJogador.innerHTML = `<h1>É a vez de ${jogadorSorteado}</h1>`
        let jogadoresRetirados = jogadoresAtualizados.filter(retirarJogador)
        jogadoresAtualizados = jogadoresRetirados
        console.log(jogadoresAtualizados)
    }
}

function retirarJogador(elemento) {
    if (elemento !== jogadorSorteado) {
        return true
    }
}

function girarCarta() {
    let cartaSelecionada = document.querySelector(".caixa-carta")
    let botaoRespostas = document.querySelector(".botoes-feito").classList.remove("desativar")
    if (!cartaSelecionada.classList.contains("selecionada")) {
        let girarVerso = document.querySelector(".caixa-carta > .verso").classList.toggle("girar-verso")
        let girarFrente = document.querySelector(".caixa-carta > .frente").classList.toggle("girar-frente")
        cartaSelecionada.classList.add("selecionada")
        sortear()
    }
}

function responder(resposta) {
    let cartaSelecionada = document.querySelector(".caixa-carta")
    if (resposta === 1) {
        pontuacaojogadores = listaJogadores.map(function (elemento, indice) {
            if (elemento === jogadorSorteado) {
                return (pontuacaojogadores[indice] + 1)
            } else { return pontuacaojogadores[indice] }
        })
    }
    let botaoRespostas = document.querySelector(".botoes-feito").classList.add("desativar")
    let girarVerso = document.querySelector(".caixa-carta > .verso").classList.toggle("girar-verso")
    let girarFrente = document.querySelector(".caixa-carta > .frente").classList.toggle("girar-frente")
    cartaSelecionada.classList.remove("selecionada")
    let preencherResposta = document.querySelector("main > .resposta").classList.add("desativar")
    checar()
    sortearJogador()
}

function comparador() {
    return Math.random() - 0.5;
}

function sortear() {
    // Sorteia um valor dentro da lista de objetos
    let embaralhado = prendas.sort(comparador)
    elementoSorteado = listaObjetos[Math.floor(Math.random() * listaObjetos.length)]

    // Preenche com a pergunta e a resposta
    let preencherVerso = document.querySelector(".caixa-carta > .verso")
    let preencherResposta = document.querySelector("main > .resposta")
    preencherResposta.classList.remove("desativar")
    preencherVerso.innerHTML = `<h1>${elementoSorteado.question}</h1>`
    preencherResposta.innerHTML = `<button onclick = "checar()">Checar</button><h1 class =" respostaCorreta desativar">${elementoSorteado.answers}</h1>`
    console.log(elementoSorteado.answers)
    let prendasAtualizadas = listaObjetos.filter(tirarSorteada)
    listaObjetos = prendasAtualizadas
}

// HABILITA A RESPOSTA E ESCONDE O BOTÃO
function checar() {
    let botaoChecar = document.querySelector(".resposta > button").classList.toggle("desativar")
    let respostaChecar = document.querySelector(".resposta > h1").classList.toggle("desativar")
}

function tirarSorteada(elemento) {
    if (elemento.question !== elementoSorteado.question) {
        return true
    }
}

function perguntarJogadores() {
    let qtdJogadores = prompt("Quantos vão jogar?")
    while (isNaN(qtdJogadores)) {
        console.log(isNaN(qtdJogadores))
        qtdJogadores = prompt("Quantos vão jogar?")
    }
    limiteJogadas = Math.floor(prendas.length/qtdJogadores)*qtdJogadores
    console.log(limiteJogadas)
    for (let contador = 0; contador < qtdJogadores; contador++) {
        let nome = prompt(`Nome do jogador ${contador + 1}`)
        listaJogadores.push(nome)
        pontuacaojogadores.push(0)
    }
    carregando()
    setTimeout(function () {
        criarObjeto()
    }, 3000)
}

// CRIAR OBJETO PERGUNTA E RESPOSTA
function criarObjeto() {
    for (let contador = 0; contador < respostas.length; contador++) {
        let objeto = {
            question: prendas[contador],
            answers: respostas[contador]
        }
        listaObjetos.push(objeto)

    }
    telaInicial()
}

// RANKING



function mostrarRanking() {
    let corpoRanking = document.querySelector("body")
    corpoRanking.innerHTML =
        `
    <main class = "pergunta-comecar">
        <div class = "caixa-iniciar-ranking">
        <div class = "ranking">
        <h1>Jogador</h1><h1>Acertos</h1>
        </div>
        </div>
    </main>
    `
    let ranking = document.querySelector(".caixa-iniciar-ranking")
    for (let contador = 0; contador < listaJogadores.length; contador++) {
        ranking.innerHTML +=
            `
        <div class = "ranking">
        <h1>${listaJogadores[contador]}</h1><h1>${pontuacaojogadores[contador]}</h1>
        </div>
        `
    }
}

// CARREGANDO
function carregando() {
    let querJogar = document.querySelector("body")
    querJogar.innerHTML =
        `
    <main class = "pergunta-comecar">
        <img src="./Ellipsis-1s-200px.gif">
    </main>
    `
}

// CARREGOU
function carregou() {

}

// CHAMAR FUNÇOES
iniciar()
