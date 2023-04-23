


const displayContainer = document.querySelector(".products_display");

const productsUrl = "https://simplygreat.no/wp-json/wc/store/products";

async function getProducts() {
        const response = await fetch(productsUrl);
        
        const results = await response.json();

        console.log(results);

        return results;

};


function renderSingleProductHTML(product) {
        const { id, name, description, price_html, images } = product;
        const wrapper = document.createElement("a");
        const image = document.createElement("img");
        const heading = document.createElement("h2");
        const body = document.createElement("p");
        const price = document.createElement("h3");
        const button = document.createElement("button")
        wrapper.href = `details.html?id=${id}`;
        image.src = images[0].src;
        heading.innerText = name;
        body.innerHTML = description;
        price.innerHTML = price_html;
        button.innerText = "View more";
        wrapper.classList.add("display");
        button.classList.add("cta_button");
        price.classList.add("price_tag")
        wrapper.append( heading, image, price, button );
        return wrapper;  
}



async function renderProducts() {
        const products = await getProducts();
        console.log(products);
        products.forEach(product => {
                const productHTML = renderSingleProductHTML(product);
                displayContainer.appendChild(productHTML);
            });
}

renderProducts();

export {
        renderSingleProductHTML,
        renderProducts
}