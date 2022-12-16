const API = "https://dummyjson.com/products/category/smartphones"; 
async function getReply() {
    const reply = await fetch(API);
    const content = await reply.json();
    const list = document.querySelector('.products');
    let key;
    const products = content.products;
    for (key in products) {
        list.innerHTML += `
        <div class="product" id="${products[key].id}">
            <img class="product-img" src="${products[key].thumbnail}">
            <div class="product-info">
                <p class="product-name">${products[key].title}</p>
                <div class="buy">
                    <p class="product-price">$${products[key].price}</p>
                    <img data-product class="product-basket-img" src="./img/basket.png">
                </div>
            </div>
        </div> `
    }  
}
getReply()
