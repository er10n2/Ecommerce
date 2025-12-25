const registerF = document.getElementById('registerF');

const email = document.getElementById('email');
const password = document.getElementById('password');

const errorEl = document.getElementById('errorEl');


const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];

registerF.addEventListener("submit", function(e){

    e.preventDefault();

    const emailValue = email.value;
    const passwordValue = password.value;

    if(emailValue === '' || passwordValue ===''){

        errorEl.textContent = 'email and password are required!';
        return;

    }



    let currentUser = users.find(function(user){

        return user.email === emailValue && user.password === passwordValue;
    })


    if(!currentUser){
      errorEl.textContent = 'incorrect email or password!';
        return;

    }


    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    window.location.href = 'index.html';

    console.log('current user : ', currentUser);


})