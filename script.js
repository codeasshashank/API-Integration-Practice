function fetchApi() {
  const url = "https://fakestoreapi.com/products";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      createBox(data);
    });
}
const addingDiv = document.querySelector(".addingDiv");

fetchApi();
function createBox(data) {
  data.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("col", "border", "mt-3");

    const image = document.createElement("img");
    image.classList.add("image");
    image.src = `${product.image}`;

    const price = document.createElement("h6");
    price.innerHTML = `Price: $${product.price}`;
    const rating = document.createElement("h4");
    rating.innerHTML = `${product.category}`;
    const btn = document.createElement("button");
    btn.classList.add("btn", "btn-primary");
    btn.innerHTML = "Buy Now";

    div.appendChild(rating);
    div.appendChild(image);
    div.appendChild(price);
    div.appendChild(btn);
    addingDiv.appendChild(div);
  });
}
