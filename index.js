const allProductsUrl = "https://fakestoreapi.com/products"
const productsDiv = document.getElementById('productsDiv');

async function getAllProducts(){

try{

    
    const response = await fetch(allProductsUrl);
    if(response.ok){

    console.log(response);

    const data = await response.json();
    console.log(data);


    productsDiv.innerHTML = '';

 

    data.forEach(product =>{

           const productCard = document.createElement('div');
           productCard.classList.add('productStyle');

        productCard.innerHTML = `
         
        <h3>${product.title}</h3>
        <img src=${product.image} alt=${product.title}>
        <p>${product.description}</p>
        <small>Price: ${product.price}$</small>
        <p>Category: ${product.category}</p>

<button class="orderbtn" onclick="orderProduct(${product.id})">Order Now</button>



        `

        productsDiv.appendChild(productCard);
         
    })


    }else{
        console.log('api error: ', response.status);
    }
}catch(error){
    console.log(error);
}

    

}
getAllProducts();


function orderProduct(productId){
    if(!productId){
        console.log('no product id provided');
        return;
    }
    window.location.href = `orderProduct.html?id=${productId}`;
}
