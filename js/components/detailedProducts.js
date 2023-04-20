const productContainer = document.querySelector("product_detail");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

console.log(queryString)

const id = params.get("id");

console.log(id);

const url = "http://simplygreatno.local/wp-json/wp/v2/categories/" + id;