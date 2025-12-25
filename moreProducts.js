const url = "https://fakestoreapi.com/products?limit=4";

const container = document.getElementsByClassName('container')[0];



async function get4Products(){


  try{

    const response = await fetch(url);
    console.log(response);
    if(response.ok){


      const data = await response.json();
      console.log(data);

     

      container.innerHTML = '';

      data.forEach(product =>{

        const productCard = document.createElement('div'); // dont forget to make it display grid !!!!!!!!!!!!!!!!!!!!!!!

        productCard.classList.add('productCardStyle');

        productCard.innerHTML = `
        
        <div class="productImageAndTitle"> 

         <div class="imgDiv">

        <img class="img" src=${product.image} alt=${product.title}>
        </div>

        <div class="title">

        <h2>${product.title}</h2> 
        
        </div>

        </div>


        <div class="productPrice"> 

        <div>

        <h3 class="price">${product.price} $</h3>
        
        <small class="count"> count: ${product.rating.count}</small>
        <small class="rate"> rate: ${product.rating.rate}<small>

        </div>

        <div>
          <button  class="addToCartBtn">Add To Cart</button> 

        </div>
        </div>
        
        `

        container.appendChild(productCard);

      })



    }else{
      console.log("status error: ", response.status);
    }

  }catch(error){
    console.log("error ocurred: ", error)
  }

}

get4Products();