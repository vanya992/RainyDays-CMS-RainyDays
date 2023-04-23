

fetch('https://simplygreat.no/wp-json/wc/store/products?consumer_key=ck_eb01f640c8f1377d2440e0559f6d5f1e6cf00468&consumer_secret=cs_fbed2a8a585459aef9a9d66ffa32042b80da39e8&featured=true')
  .then(response => response.json())
  .then(data => {
    const featuredProducts = data;
    const displayFeatured = document.querySelector(".featured_section");
    displayFeatured.classList.add("featured_section");
    
    featuredProducts.forEach(product => {
        displayFeatured.innerHTML += `<a href="details.html?id=${product.id}"><div class="featured">
                                        <h2>${product.name}</h2>
                                        <img src="${product.images[0].src}">
                                        <p class="price_tag">${product.price_html}</p></div></a>`;
    });

    const featuredSection = document.querySelector(".featured_section");
    
  })
    .catch(error => console.error(error));
  

