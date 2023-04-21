const productContainer = document.querySelector(".product_detail");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

console.log(queryString);

const id = params.get("id");

console.log(id);

const url = "http://simplygreatno.local/wp-json/wc/store/products/" + id;

async function detailedProduct() {
    const response = await fetch(url);

    const results = await response.json();

    const jacket = results;

    console.log(jacket);


    productContainer.innerHTML += ` <div>
                                    <figure><img src="${jacket.images[0].src}" alt="Product Jacket bought"></figure>
                                    <h1>${jacket.name}</h1>
                                    <p class="price"><b>${jacket.price_html}</b></p>
                                    <p>${jacket.description}</p>
                                    <a href="checkout.html"> <input type="button" value="Add to Cart" class="cta_button"></a>
</div>`
}

detailedProduct()

