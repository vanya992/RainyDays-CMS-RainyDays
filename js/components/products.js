// const productsContainer = document.querySelector(".products");
// const displayContainer = document.querySelector(".products_display");

// let http = new XMLHttpRequest();

// http.open("get", "../data/products.json", true);

// http.send();

// http.onload = function (data) {
//     if (this.readyState === 4 && this.status === 200) {
//         let products = JSON.parse(this.responseText)
//         output = "";
        
//         console.log(products);

//         for (let item of products) {
//             output += `<div class="product_display">
//                         <a href="${item.name}.html" aria-label="jacket"><div class="product">
//                         <figure> <img src="${item.image}" alt="Product jacket" class="products_image">
//                         </figure>
//                         <div class="product_details">
//                         <h2>${item.name}</h2>
//                         <h3>${item.description}</h3>
//                         <p>${item.price}</p>
//                         <input type="button" value="View more" class="cta_button"></a>
//                         </div></div></div>`
//         }

//         displayContainer.innerHTML += output;
//     }
// };

const productContainer = document.querySelector(".products");
const displayContainer = document.querySelector(".products_display");

const url = "http://simplygreatno.local/wp-json/wc/store/products";

async function getProducts() {
        const response = await fetch(url);
        
        const results = await response.json();

        console.log(results);

        for (i = 0; i < results.length; i++) {
                displayContainer.innerHTML += `<div class="product_display">
                                       <a href="details.html?id=${results[i].id}" aria-label="jacket"><div class="product">
                                       <figure> <img src="${results[i].images[0].src}" alt="Product jacket" class="products_image">
                                       </figure>
                                        <div class="product_details">
                                    <h2>${results[i].name}</h2>
                                     <h3>${results[i].short_description}</h3>
                                        <p>${results[i].price_html}</p>
                                        <input type="button" value="View more" class="cta_button"></a>
                                    </div></div></div>`
        };
    
};

getProducts();

