

// fetch('http://simplygreatno.local/wp-json/wc/store/products?featured=true')
//   .then(response => response.json())
//   .then(data => {
//     const featuredProducts = data;
//     const displayFeatured = document.createElement("div");
//     displayFeatured.classList.add("featuredSection");
    
//     featuredProducts.forEach(product => {
//       displayFeatured.innerHTML += `<h3>${product.name}</h3>
//       <p>${product.description}</p>
//       <img src="${product.image}">
//       <p>Price: ${product.price_html}</p>`;
//     });

//     const featuredSection = document.querySelector(".featured_section");
//     featuredSection.appendChild(displayFeatured);
//   })
//     .catch(error => console.error(error));
  

import { renderSingleProductHTML } from "./products.js";
import { detailedProduct } from "./detailedProducts.js";

const product = renderSingleProductHTML()