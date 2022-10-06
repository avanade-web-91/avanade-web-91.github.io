const aereasNacional = ['Latam', 'Gol', 'Azul'];

const airCompanies = [...aereasNacional, 'Delta', 'United Airlines', 'Emirates'];

console.log(airCompanies);

const user = {
    name: "Rebeca Valenzuela",
    email: "rebeca.val@outlook.com",
    password: "123456"
}

const { password, ...data} = user;

console.log("Oh meu Deus", data);