var data = fetch("https://url");

fetch("data.json") //step 1 fetch data api calling
  .then((response) => response.json()) // convert json
  .then((data) => renderProducts(data)) // call function
  .catch((error) => {
    console.error("Error loading the products:", error);
    document.getElementById("product-list").innerHTML =
      "<p>Failed to load products.</p>";
  });

function renderProducts(data) {
  const productListContainer = document.querySelector("#product-list"); //select from html with id
  for (let i = 0; i < data.length; i++) {
    const productCard = document.createElement("div");
    productCard.classList.add("card");
    productCard.innerHTML = `
    <img scr="${data[i].image}">
    <h3>${data[i].title}</h3>
    <p>price : ${data[i].price} yen</p>

    `;
    productListContainer.appendChild(productCard);
  }
}

// const productListContainer = document.getElementById("product-list");
// productListContainer.innerHTML = "";
// for (let i = 0; i < products.length; i++) {
//   const productCard = document.createElement("div");
//   productCard.classList.add("card");
//   productCard.innerHTML = `
//           <img src="${products[i].image}" alt="${products[i].title}" />
//           <h3>${products[i].title}</h3>
//           <p>${products[i].description}...</p>
//           <p class="price">$${products[i].price.toFixed(2)}</p>
//       `;
//   productListContainer.appendChild(productCard);
// }

// products.forEach((product) => {
//   const productCard = document.createElement("div");
//   productCard.classList.add("card");
//   productCard.innerHTML = `
//           <img src="${product.image}" alt="${product.title}" />
//           <h3>${product.title}</h3>
//           <p>${product.description.substring(0, 100)}...</p>
//           <p class="price">$${product.price.toFixed(2)}</p>
//       `;
//   productListContainer.appendChild(productCard);
// });
