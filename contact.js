let register = document.getElementById("register");
register.addEventListener("click", showForm);
function showForm(){
    let form = document.querySelector(".form");
    form.style.display='block';
}
function hideForm(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if(name!=="" && email!=="" && password!==""){
        let form = document.querySelector(".form");
    form.style.display='none';
    let successmsg = document.createElement("p");
    successmsg.style.color="green";
    successmsg.textContent="Account Created Successfully!"
    document.querySelector(".container").appendChild(successmsg);
    }
    else{
        alert("Please enter all details.")
    }
    
}
let create = document.querySelector("#create");
create.addEventListener("click", hideForm);
