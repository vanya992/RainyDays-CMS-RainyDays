

fetch('http://simplygreatno.local/wp-json/wc/store/products?featured=true')
  .then(response => response.json())
  .then(data => {
    const featuredProducts = data;
    const displayFeatured = document.querySelector(".featured_section");
    displayFeatured.classList.add("featured_section");
    
    featuredProducts.forEach(product => {
        displayFeatured.innerHTML += `<div class="featured">
      <h2>${product.name}</h2>
        <img src="${product.images[0].src}">
      <p>Price: ${product.price_html}</p></div>`;
    });

    const featuredSection = document.querySelector(".featured_section");
    
  })
    .catch(error => console.error(error));
  

