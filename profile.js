const username = document.getElementById("username");
const email = document.getElementById("email");


const textUsername = document.getElementsByClassName("userName")[0];
const textEmail = document.getElementsByClassName("userEmail")[0];

const profileForm = document.getElementsByClassName('profileForm')[0];

const userLoggedIn = JSON.parse(localStorage.getItem("currentUser"));
const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

const ordersThatHaveBeenPlaced = JSON.parse(localStorage.getItem("ordersThatHaveBeenPlaced"));

const nrOfOrders = document.getElementsByClassName("nrOfOrders")[0];


const profileFormDiv = document.getElementsByClassName('profileFormDiv')[0];
const myOrders = document.getElementsByClassName('myOrders-btn')[0];
const profileOrderDiv = document.getElementsByClassName('profileOrderDiv')[0];
const orderCard = document.getElementsByClassName('orderCard')[0];
const myOrdersBtn = document.getElementsByClassName("myOrders-btn")[0];
const editBtn = document.getElementsByClassName("edit-btn")[0];


editBtn.addEventListener("click",function(){

    profileFormDiv.style.display = 'flex';
    profileOrderDiv.style.display = 'none';
})

myOrdersBtn.addEventListener("click", function(){
    
    profileOrderDiv.style.display = "flex";
    
    profileFormDiv.style.display = "none";
})






username.addEventListener("input", function(){
 
    textUsername.textContent = username.value;
    

});

email.addEventListener("input", function(){

    textEmail.textContent = email.value;
})



function showUserInfo(){




username.value = userLoggedIn.username;
email.value= userLoggedIn.email;


textUsername.textContent=username.value;
textEmail.textContent = email.value;


}

showUserInfo();


profileForm.addEventListener("submit",function(event){
    event.preventDefault();

const userToUpdate = JSON.parse(localStorage.getItem("currentUser"));


const userEmailFound = registeredUsers.find(function(user){

    if(userToUpdate.email === user.email){
        return user;
    }else{
        console.log("you are not registered???");
    }


});
    console.log("User returned: ",userEmailFound);


    userEmailFound.email = email.value;
    userEmailFound.username = username.value;




    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
    localStorage.setItem("currentUser", JSON.stringify(userEmailFound));


})



function getNumberOfOrders(){

    if(ordersThatHaveBeenPlaced <=0){
        nrOfOrders.textContent += "0";
    }else{
        nrOfOrders.textContent += ordersThatHaveBeenPlaced.length;
    }

}
getNumberOfOrders();





function getOrders(){


    const orders = JSON.parse(localStorage.getItem("ordersThatHaveBeenPlaced"));
  orderCard.innerHTML = '';

    orders.forEach(product =>{

        const card = document.createElement('div');

        card.classList.add("cardStyle");

    

        card.innerHTML = `
        <h2>Product name: ${product.productTitle}</h2>
        <p>Category: ${product.productCategory}</p>
        <h4>Price: ${product.productPrice}</h4>
        <small>productID: ${product.productID}</small>
        
        `

        orderCard.appendChild(card);
    })

}

getOrders();