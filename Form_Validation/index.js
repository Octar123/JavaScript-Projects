let formData = document.querySelector(".form");
let submitBtn = document.querySelector(".button");
let firstName, lastName, email, password;
let field;

formData.addEventListener("keyup", (event) => {
    event.preventDefault();
    // console.log(event.target.dataset.key);
    
    field = event.target.dataset.key;
    switch(field){
        case "firstName":
            firstName = event.target.value;
            break;
        case "lastName":
            lastName = event.target.value;
            break;
        case "email":
            email = event.target.value;
            break;
        case "password":
            password = event.target.value;
            break;
    }
})