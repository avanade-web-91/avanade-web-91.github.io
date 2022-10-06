console.log(nome, "chamando a variável usando o var");

var nome = "Avanade";

function mudaTitulo(novoTitulo){
    document.querySelector("h1").innerHTML = novoTitulo;
}

mudaTitulo("Hello World");

const mudaTitulo2 = function (target, novoTitulo){
    document.querySelector(target).innerHTML = novoTitulo;
};

mudaTitulo2("h2", "Trocando subtitulo");

const relogio = () => {
    const date = new Date();
    mudaTitulo2("h2", date.toLocaleTimeString());
};

setInterval(relogio, 1000);

//-------------------------------------
const frases = ["Um banco para 20 milhões de pessoas", "C6 Bank o seu banco", "Cartão de crédito sem anuidade"];

// function mudaFrase(novaFrase){
//     document.querySelector("h1").innerHTML = novaFrase;
// }

const mudaFrase = (target, frases, tempo) => {
    let total = 0;
    setInterval(() => {
        document.querySelector(target).innerHTML = frases[total >= frases.length - 1? (total = 0) : (total +=1)];
    }, tempo * 1000);
};

mudaFrase("h1", frases, 4);