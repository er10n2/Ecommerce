const registerF = document.getElementById('registerF');

const fullname = document.getElementById('fullname');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

const errorEl = document.getElementById('errorEl');


registerF.addEventListener("submit", function(e){

    e.preventDefault();

    const fullnameValue = fullname.value;
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;

    if(fullnameValue === '' || usernameValue === '' || emailValue === '' || passwordValue === '' ){

        errorEl.textContent= 'All fields are required';
        return;


    }

    if(fullnameValue.length < 2  || usernameValue.length < 2){

        errorEl.textContent = 'fullname and username must be at least 2 characters';
        return;


    }

    if(passwordValue.length < 6){

        errorEl.textContent = 'Password must be at least 6 characters'
        return;

    }

      const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

       for(let i =0; i<registeredUsers.length;i++){

        if(registeredUsers[i].email === emailValue){

            errorEl.textContent = 'Email already exists!';
            return;

        }



       }

    const user = {
        fullname: fullnameValue,
        username: usernameValue,
        email: emailValue,
        password: passwordValue,
    };


    registeredUsers.push(user);


    localStorage.setItem('registeredUsers',JSON.stringify(registeredUsers));

    alert('user registered successfully!');
    errorEl.textContent = '';

    registerF.reset();



  
     


})

