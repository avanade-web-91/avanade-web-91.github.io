const resultado = document.querySelector("resultado");

let fun

let user = {
    name: "Rebeca Valenzuela",
    usandoArrow: () => {
        console.log(`Meu nome é ${this.name}, com Arrow Function.`);
    },
    usandoNominal(){
        console.log(`Meu nome é ${this.name}, com Nominal Function.`);
    },
};

user.usandoArrow();
user.usandoNominal();


let soma = (a, b) => {
    console.log(a + b);
};

let soma2 = function (a, b) {
    console.log(a + b);
};

new soma2(50, 20);

