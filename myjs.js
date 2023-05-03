document.getElementById("btn1").addEventListener("click",showtable1);
function showtable1() {
    document.getElementById("edu").style.display = "block";
    document.getElementById("work").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("p_course").style.display = "none";
    document.getElementById("project").style.display = "none";
    document.getElementById("management").style.display = "none";
    document.getElementById("Dependants").style.display = "none";
    
}

document.getElementById("btn2").addEventListener("click",showtable2);
function showtable2() {
    document.getElementById("edu").style.display = "none";
    document.getElementById("work").style.display = "block";
    document.getElementById("skills").style.display = "none";
    document.getElementById("p_course").style.display = "none";
    document.getElementById("project").style.display = "none";
    document.getElementById("management").style.display = "none";
    document.getElementById("Dependants").style.display = "none";
    
    
}

document.getElementById("btn3").addEventListener("click",showtable3);
function showtable3() {
    document.getElementById("edu").style.display = "none";
    document.getElementById("work").style.display = "none";
    document.getElementById("skills").style.display = "block";
    document.getElementById("p_course").style.display = "none";
    document.getElementById("project").style.display = "none";
    document.getElementById("management").style.display = "none";
    document.getElementById("Dependants").style.display = "none";
    
    
}
document.getElementById("btn4").addEventListener("click",showtable4);
function showtable4() {
    document.getElementById("edu").style.display = "none";
    document.getElementById("work").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("p_course").style.display = "block";
    document.getElementById("project").style.display = "none";
    document.getElementById("management").style.display = "none";
    document.getElementById("Dependants").style.display = "none";
    
    
}
document.getElementById("btn5").addEventListener("click",showtable5);
function showtable5() {
    document.getElementById("edu").style.display = "none";
    document.getElementById("work").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("p_course").style.display = "none";
    document.getElementById("project").style.display = "block";
    document.getElementById("management").style.display = "none";
    document.getElementById("Dependants").style.display = "none";
    
    
}
document.getElementById("btn6").addEventListener("click",showtable6);
function showtable6() {
    document.getElementById("edu").style.display = "none";
    document.getElementById("work").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("p_course").style.display = "none";
    document.getElementById("project").style.display = "none";
    document.getElementById("management").style.display = "block";
    document.getElementById("Dependants").style.display = "none";
    
    
}
document.getElementById("btn7").addEventListener("click",showtable7);
function showtable7() {
    document.getElementById("edu").style.display = "none";
    document.getElementById("work").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("p_course").style.display = "none";
    document.getElementById("project").style.display = "none";
    document.getElementById("management").style.display = "none";
    document.getElementById("Dependants").style.display = "block";
    
}
document.getElementById("closebtn").addEventListener("click",closetable);
function closetable() {
    document.getElementById("edu").style.display = "none";
    document.getElementById("work").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("p_course").style.display = "none";
    document.getElementById("project").style.display = "none";
    document.getElementById("management").style.display = "none";
    document.getElementById("Dependants").style.display = "none";
}




        const contactform = document.getElementById("contactform");
        const name = document.getElementById("#name");
        const email = document.getElementById("#email");
        const phone = document.getElementById("#phone");
        const comment = document.getElementById("#comment");
        const savebtn = document.getElementById("#savebtn");
        const contactinfo = document.getElementById("#contactinfo");
        
        let contactstorage = localStorage.getItem("contactinfo") ? JSON.parse(localStorage.getItem("contactinfo")) : [];
        
        contactform.addEventListener("submit", (e) => {
            e.preventDefault();
            contactstorage.push(name.value);
            contactstorage.push(email.value);
            contactstorage.push(phone.value);
            contactstorage.push(comment.value);
            localStorage.setItem("contactinfo", JSON.stringify(contactstorage));
            listBuilder(name.value);
            listBuilder(email.value);
            listBuilder(phone.value);
            listBuilder(comment.value);
            name.value = " ";
            email.value = " ";
            phone.value = " ";
            comment.value = " ";
        });
        
        const listBuilder = (text) => {
            const contact = document.getElement("li");
            contact.innerHTML = text + '<button onclick="deletecontact(this)">X</button>';
            contactinfo.appendChild(contact);
        };
        
        const getcontact = JSON.parse(localStorage.getItem("contactinfo"));
        getcontact.forEach((contact) => {
            listBuilder(contact);
        });
        
        const deletecontact = (btn) => {
            let el = btn.parentNode;
            const index = [...el.parentElement.children].indexOf(el);
            contactstorage.splice(index, 1);
            localStorage.setItem("contactinfo", JSON.stringify(contactstorage));
            el.remove();
        };
    