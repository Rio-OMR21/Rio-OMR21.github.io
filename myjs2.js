document.addEventListener('DOMContentLoaded',function(){
    const submit_button = document.querySelector("#savebtn");

submit_button.onclick = ()=> {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const comment = document.getElementById("comment").value;


    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
    localStorage.setItem('phone',phone);
    localStorage.setItem('comment',comment);

    if(name == "") {
        alert("Please fill in your contacts first.");
    }
    else{
        if(comment == ""){
            alert("Write your message please!");
        }
        else{
            if(email ==""){
                alert("Email is required!");
            }
            else{
                if(phone == ""){
                    alert("Phone number is required");
                }
                else{
                    alert("Successfuly sent.");
                }
            }  
        }
    }

}


});


