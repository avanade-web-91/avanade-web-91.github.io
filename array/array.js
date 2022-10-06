const carros = document.querySelector("#carros");

const carrosArray = ["Chevrolet", "Fiat", "Ford", "Honda", "Hyundai", "Kia", "Mazda", "Mercedes-Benz", "Nissan", "Peugeot", "Renault", "Toyota", "Volkswagen"];

carrosArray.forEach((value, key) => {
carros.innerHTML += `<option value="${key}">${value}</option>`;
});

carrosArray.forEach((value) => console.log(value));

const importados = [
    ["BMW", "320i", "M3", "M4", "X5", "X6", "z4 m40i"],
    ["Audi", "a4", "s4", "s4 avanti", "Q7", "RS7", "e-Tron"],
    ["Mercedes", "gtr", "e63", "s63", "brabus gle", "AMG G63"],
  ];

  importados.forEach((marcas) =>{
    const select = document.createElement("select");
    select.setAttribute("id", marcas[0]);
    marcas.forEach((carros, key) => {
        select.innerHTML += `<option value="${carros}">${carros}</option>`;
    });
    document.querySelector("body").appendChild(select);
  });

  const aereas = [
    "Latam",
    "Gol",
    "Azul",
    "Delta",
    "American Airlines",
    "Emirates",
    "Qatar",
  ];
  
  const comboAereas = document.createElement("select");
  comboAereas.setAttribute("id", "aereas");
  
  aereas.forEach((aerea, key) => {
    comboAereas.innerHTML += `<option value="${key}">${aerea}</option>`;
  });
  //adicione este combo como um filho no body, no final de todas as tags.
  document.querySelector("body").appendChild(comboAereas);
  const menu = [
    "Todos",
    "Venda na Amazon",
    "Ofertas do Dia",
    "Prime",
    "Eletrônicos",
    "Ideias para Presente",
    "Brinquedos e Jogos",
    "Computadores",
    "eBooks Kindle",
    "Games",
    "Ferramentas e Construção",
    "Livros",
  ];
  
  const ulMenu = document.createElement("ul");
  ulMenu.setAttribute("id", "menu");
  ulMenu.setAttribute("class", "menu-site");
  
  menu.forEach((value, index) => {
    ulMenu.innerHTML += `<li>${value}</li>`;
  });
  
  document.querySelector("nav").appendChild(ulMenu);

//-----------------------------------------------------

const newCarros = ["Corsa", "Uno", "Gol", "Palio", "Kombi", "208"];

//adiciona um elemento no FINAL do array. PUSH
newCarros.push("Celta", "Monza");
//adiciona um elemento no COMEÇO do array. UNSHIFT
newCarros.unshift("Fusca");

//remove um elemento do FINAL do array. POP
const ultimo = newCarros.pop();
const primeiro = newCarros.shift(); //retorna o elemento removido

const removeTres = newCarros.splice(0, 3);
console.log(removeTres, "Remove três itens a partir do índice");
//console.log(newCarros, "NewCarros");
//-----------------------------

const nomeCompleto = "Rebeca Valenzuela de Oliveira Lima Bezerra";
//split pega um texto e transforma em array
const nomeArray = nomeCompleto.split(" ");
//join pega um array e transforma em texto
const americanName = [nomeArray.at(-1), nomeArray[0]].join(" , ");
//console.log(americanName, "Formato americano");//

//splice remove do array original, pega intervalos

//array de idades
//1-fazer função com Map
//2-só adultos filter
//3-achar idoso finder

const ages = [12, 4, 50, 26, 32, 1, 70, 91, 60, 78, 2];

const agesFilter = ages.filter((age) => age >= 18 && age <= 60);
console.log(agesFilter, "adulto");

const agesMap = ages.map((age) => {
  if(age >= 0 && age <= 2){
    return "bebê";
  } else if(age >= 3 && age <= 11){
    return "criança";
  } else if(age >= 12 && age <= 17){
    return "adolescente";
  } else if(age >= 18 && age <= 60){
    return "adulto";
  } else {
    return "idoso";
  }
});
console.log(agesMap, "agesMap");

const agesFind = ages.find((age) => age > 60);
console.log(agesFind, "idoso");