const products = document.querySelector("id");


const options = {
    method:"GET",
    mode: "cors",
    cache: "default",
};


fetch('https://dummyjson.com/products?offset=1&limit=10')
  .then((response) => response.json())
  .then((data) => console.log(data));

