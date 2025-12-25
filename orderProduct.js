const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

const productCard = document.getElementById('productCard');
const orderForm = document.getElementById('orderForm');
let fullname = document.getElementsByClassName('name')[0];
let email = document.getElementsByClassName('email')[0];
let phone = document.getElementsByClassName('phone')[0];

const errorEl = document.getElementsByClassName('errorEl')[0];

const userLoggedIn = JSON.parse(localStorage.getItem('currentUser'));

fullname.value = userLoggedIn.fullname;
email.value = userLoggedIn.email;


let productTitle;
let productPrice;
let productCategory;
let productID;







orderForm.addEventListener("submit", function(e){
    e.preventDefault();

    const nameValue = fullname.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();

    if(nameValue === '' || emailValue === '' ){

        errorEl.textContent = 'name and email are required!';
        return;

    }
    if(phoneValue.length !== 9){

     errorEl.textContent = 'Phone must be exactly 9 digits';
        return;

    }



    let ordersThatHaveBeenPlaced = JSON.parse(localStorage.getItem('ordersThatHaveBeenPlaced'))||[];


   
    const productThatWasOrdered = {


        productTitle : productTitle,
        productPrice : productPrice,
        productCategory : productCategory,
        productID: productID,
        costumerName: nameValue,
        costumerEmail : emailValue,
        costumerPhone : phoneValue,
    }


    ordersThatHaveBeenPlaced.push(productThatWasOrdered);


    localStorage.setItem('ordersThatHaveBeenPlaced', JSON.stringify(ordersThatHaveBeenPlaced));


   alert('Order placed succesfully!');

   errorEl.textContent = '';
   phone.value='';
  
})




async function getProductOrder(){

    try{

        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);

        if(response.ok){
        
            const data = await response.json();
            console.log(data);





            /* 
            these variables initializations have been added later to save infos of the ordered product in localStorage! 
            */
                productTitle = data.title; 
                productPrice = data.price;
                productCategory = data.category;
                productID = data.id;




            productCard.innerHTML= '';

            productCard.innerHTML = `
            
            <div class="imgDiv">

            <img class="img2" src="${data.image}" alt="${data.title}">

            </div> 

            <div class="textDiv">
            <h2> ${data.title}</h2>

            <small class="price"> Price: ${data.price}$</small>
             <small class="category">Category: ${data.category}</small>

            </div>

            <div class=textDiv2>

            <p>${data.description}</p>

           
            </div>
            
            `
            ;


        }else{
            console.log("response error: ", response.status);
        }
    }catch(error){
        console.log(error);
    }
}


getProductOrder();