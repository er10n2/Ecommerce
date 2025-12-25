const orderCards = document.getElementsByClassName('orderCards')[0];



 function getMyOrders(){

const myOrders = JSON.parse(localStorage.getItem('ordersThatHaveBeenPlaced'))||[];

    orderCards.innerHTML ='';

    myOrders.forEach(order =>{

        const card = document.createElement('div');
        card.classList.add('cardStyle');


        card.innerHTML = `
        <h2>Product name: ${order.productTitle}</h2>
        <p>Category: ${order.productCategory}</p>
        <h4>Price: ${order.productPrice}</h4>
        <small>productID: ${order.productID}</small>


        
        
        <div class="divBtn">
        <div class="viewTrackBtn">

        <button class="bluebtn"> View Details </button>

        

        </div>

        <div class="cancelBtn">

        <button class="cancel" onClick="cancelOrder(${order.productID})">Cancel Order</button>
        </div>

        </div>

        <div class="detailsDiv">

        <p>Costumer Name: ${order.costumerName}</p>
        <p>Costumer Email : ${order.costumerEmail}</p>
        </div>
        `

        orderCards.appendChild(card);
        const details = card.querySelector('.detailsDiv');
const bluebtn = card.querySelector('.bluebtn');


       bluebtn.addEventListener('click', function() {
    if(details.style.display === 'none') {
        details.style.display = 'block';
        bluebtn.textContent = 'Hide Details';
    } else {
        details.style.display = 'none';
        bluebtn.textContent = 'View Details';
    }
});

    })


}

getMyOrders();



function cancelOrder(productId){



    const confirmToCancel = confirm("Are you sure you want to cancel this order?");

    if(!confirmToCancel){
        return;
    }

    let myOrders = JSON.parse(localStorage.getItem('ordersThatHaveBeenPlaced')) || [];

  
    const removeOrder = productId;

    const orderToCancel = myOrders.filter(function(order){

        return  order.productID !== removeOrder;
        

    })

    localStorage.setItem("ordersThatHaveBeenPlaced", JSON.stringify(orderToCancel));

    getMyOrders();
}





  

