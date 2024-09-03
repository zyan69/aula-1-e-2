const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a principal característica do boto cor de rosa de acordo com o folclore brasileiro?",
        alternativas: [
            {
                texto: "Ele é conhecido por transformar-se em um homem encantador para seduzir mulheres.",
                afirmacao: "No folclore, o boto cor de rosa é frequentemente descrito como um ser que se transforma em um homem atraente para seduzir mulheres, especialmente em festas à noite."
            },
            {
                texto: "Ele é famoso por ser um protetor das crianças que brincam perto da água.",
                afirmacao: "Embora o boto seja uma figura importante no folclore, a ideia de proteger crianças não é uma característica central associada a ele."
            }
        ]
    },
    {
        enunciado: "Qual é a principal consequência de um encontro com o boto cor de rosa, segundo a tradição?",
        alternativas: [
            {
                texto: "A mulher que encontra o boto pode engravidar e ter um filho com ele.",
                afirmacao: "Segundo a lenda, uma mulher que tem um encontro com o boto pode engravidar e, às vezes, o boto desaparece depois do evento, deixando a mulher com um filho."
            },
            {
                texto: "A pessoa que encontra o boto ganha um desejo concedido.",
                afirmacao: "No folclore, o boto não é conhecido por conceder desejos; seu papel é mais associado a encontros românticos e suas consequências."
            }
        ]
    },
    {
        enunciado: "Qual é a origem das lendas sobre o boto cor de rosa na cultura amazônica?",
        alternativas: [
            {
                texto: "Elas surgiram como uma explicação para desaparecimentos e eventos misteriosos na comunidade ribeirinha.",
                afirmacao: "As lendas do boto muitas vezes surgem como explicações para eventos misteriosos ou desaparecimentos inexplicáveis nas comunidades ribeirinhas da Amazônia."
            },
            {
                texto: "Elas foram criadas para ensinar crianças sobre os perigos de nadar em águas profundas.",
                afirmacao: "Embora a lenda possa ter algum valor educativo, o foco principal das histórias do boto não é especificamente ensinar sobre os perigos de nadar, mas sim sobre encontros românticos e consequências sociais."
            }
        ]
    },
];
    
;


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();   
