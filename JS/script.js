// VARIAVEIS GLOBAIS
let pontuacaojogador = 0;
let elementoSorteado;
let listaJogadores = []
let listaObjetos = []

// LISTA PRENDAS

let respostas = [
    '3 a 5 litros',
    'Rene Descartes',
    'Brasil',
    'Vaticano',
    'Russia',
    'Joao Goulart',
    'Dom Quixote',
    'Infinitas',
    '14',
    '7 de setembro',
    'Novembro',
    '20 de novembro',
    '8 minutos aproximadamente',
    'Argentino',
    'Caipora',
    'Pico da neblina(3.014 metros)',
    '300.000.000metros por segundo',
    'Nicolau Maquiavel',
    'Eu caibo',
    '9',
    'Elefante',
    'Eu tenho um sonho(I have a dream)',
    'Margaret Thatcher',
    'Neil Armstrong',
    '1969',
    'Alexander Fleming',
    'O(-)',
    'Cromossomo Y(masculino - XY)',
    'Uma loba',
    'Camberra'
]


let prendas = [
    'Normalmente,quantos litros de sangue uma pessoa tem?',

    'De quem  a famosa frase Penso,logo existo?',

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

    'As pessoas de qual tipo sanguneo são consideradas doadores universais?',

    'Quais so os cromossomos que determinam o sexo masculino?',

    'Quem amamentou os gmeos Rmulo e Remo?',

    'Qual a capital da Austrlia?'
]

function iniciar() {
    perguntarJogadores()
    criarObjeto()
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
                    <img src="/CSV/Logo_MATEUS.png">
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
    let jogadorSorteado = listaJogadores[Math.floor(Math.random() * listaJogadores.length)]
    let caixaJogador = document.querySelector(".caixa-jogador")
    caixaJogador.innerHTML = `<h1>É a vez de ${jogadorSorteado}</h1>`
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
        pontuacaojogador += 1
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
    preencherResposta.innerHTML = `<button onclick = "checar()">Checar</button><h1 class ="desativar">${elementoSorteado.answers}</h1>`
    console.log(elementoSorteado.answers)
    let prendasAtualizadas = listaObjetos.filter(tirarSorteada)
    listaObjetos = prendasAtualizadas
    if (listaObjetos.length === 0) {
        alert("Você finalizou as perguntas")
    }
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
    for (let contador = 0; contador < qtdJogadores; contador++) {
        let nome = prompt(`Nome do jogador ${contador + 1}`)
        listaJogadores.push(nome)
    }
    telaInicial()
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
}

// CHAMAR FUNÇOES
iniciar()
