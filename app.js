fetch("data.json") //step 1 fetch data api calling
  .then((response) => response.json()) // convert json
  .then((data) => renderProducts(data)) // call function
  .catch((error) => {
    console.error("Error loading the products:", error);
    document.getElementById("product-list").innerHTML =
      "<p>Failed to load products.</p>";
  });

function renderProducts(data) {
  const productListContainer = document.querySelector("#product-list"); // step 1 select from html with id
  for (let i = 0; i < data.length; i++) {
    const productCard = document.createElement("div"); // inject div to html
    productCard.classList.add("card"); // add class to div
    productCard.innerHTML = `
    <img src="${data[i].image}">
    <h3>${data[i].title}</h3>
    <p>price : ${data[i].price} yen</p>
     <button type="button" class="btn btn-primary" data-bs-toggle="modal"
          data-bs-target="#exampleModal${data[i].id}">
         Detail
        </button>

    <div class="modal fade" id="exampleModal${data[i].id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img class="img-thumbnail" style="width:200px;height:270px" src="${data[i].image}">
              <h3>${data[i].title}</h3>
              <p>price : ${data[i].price} yen</p>
              <p>Category : ${data[i].category}</p>
              <p>Description : ${data[i].description}</p>
            </div>
        </div>
      </div>
    </div>  
    `;
    productListContainer.appendChild(productCard);
  }
}
let num=1;
