const cep = document.querySelector("#cep");

const showData = (result) => {
    for (const campo in result){
        if(document.querySelector("#" + campo)){
            document.querySelector("#" + campo).value = result[campo];
        }
    }
};

cep.addEventListener("blur", async (e) => {
    let search = cep.value.replace("-", "");
    if (search < 8 || Number(search) === NaN){
        alert("CEP inválido");
        return;
    }
    
    const options = {
        method:"GET",
        mode: "cors",
        cache: "default",
    };

    const resultado = await fetch(`https://viacep.com.br/ws/${search}/json/`, options);
    const json = await resultado.json();
    showData(json);
});


//https://viacep.com.br/ws/01001000/json/

/*.then(response => {
    response.json()
    .catch(result => console.log(result));
})
.catch(e => console.log(e.message));*/