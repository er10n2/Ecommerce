async function getNavbar(){


    const navabarContainer = document.getElementById('navbar');

       const response = await fetch('navBar.html');

    const html = await response.text();

    navabarContainer.innerHTML=html;



    const  loginbtn = document.getElementById('login-btn');
    const  registerBtn = document.getElementById('register-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const loginMessage = document.querySelector('.login-message');
    
    const userLoggedIn = JSON.parse(localStorage.getItem('currentUser'));

    if(userLoggedIn){
    
        loginbtn.style.display = 'none';
        registerBtn.style.display = 'none';

           
        logoutBtn.style.display = 'block';

        loginMessage.style.display = 'none';


    }

    logoutBtn.addEventListener("click",function(e){

        e.preventDefault();

        localStorage.removeItem('currentUser');

            logoutBtn.style.display = 'none';

             
    })
   
}

getNavbar();